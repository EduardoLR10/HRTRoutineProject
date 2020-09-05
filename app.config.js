export default {
  version: "0.0.1",
  name: "Rotinas Pediatria HRT",
  description: "Rotinas hospitalares de pediatria na palma de sua mão.",
  slug: "rotinas-pediatria-hrt",
  icon: "./src/assets/images/logo.png",
  splash: {
    image: "./src/assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#FFFFFF",
  },
  platforms: [
    "android",
    "ios"
  ],
  ios: {
    bundleIdentifier: "com.luigiminardim.hrtrotinas"
  },
  android: {
    package: "com.luigiminardim.hrtrotinas",
    adaptiveIcon: {
      foregroundImage: "./src/assets/images/logo.png",
      backgroundColor: "#FFFFFF"
    }
  }
};
