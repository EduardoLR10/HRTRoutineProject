/*
 * This script is used to update the version of the package.json, and app.json
 * files. It is used by release workflows.
 */

import fs from "fs";

function main() {
  const args = process.argv.slice(2);
  const version = args[0];
  if (!version) {
    console.error("No version provided");
    process.exit(1);
  }
  setPackageJsonVersion(version);
  setAppJsonVersion(version);
}
main();

function setPackageJsonVersion(version) {
  const packageJson = readJsonFile("./package.json");
  packageJson.version = version;
  writeJsonFile("./package.json", packageJson);
}

function setAppJsonVersion(version) {
  const appJson = readJsonFile("./app.json");
  appJson.version = version;
  appJson.android.versionCode = parseInt(appJson.android.versionCode) + 1;
  appJson.ios.buildNumber = version;
  writeJsonFile("./app.json", appJson);
}

function readJsonFile(filename) {
  const fileContent = fs.readFileSync(filename);
  return JSON.parse(fileContent);
}

function writeJsonFile(filename, obj) {
  fs.writeFileSync(filename, JSON.stringify(obj, null, 2) + "\n");
}
