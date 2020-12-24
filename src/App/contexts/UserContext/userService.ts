import * as FileSystem from 'expo-file-system'

const FILE_URI = {
  favoriteRoutines: `${FileSystem.documentDirectory}favoriteRoutines.json`,
  lastSeenRoutines: `${FileSystem.documentDirectory}favoriteRoutines.json`
}

export async function setFavoriteRoutines(
  favoriteRoutines: string[]
): Promise<void> {
  FileSystem.writeAsStringAsync(
    FILE_URI.favoriteRoutines,
    JSON.stringify(favoriteRoutines)
  )
}

export async function getFavoritesRoutines(): Promise<string[]> {
  try {
    const favoritesJson = await FileSystem.readAsStringAsync(
      FILE_URI.favoriteRoutines
    )
    return JSON.parse(favoritesJson) as string[]
  } catch (error) {
    return []
  }
}

export function setLastSeenRoutines(lastSeenRoutines: string[]): void {
  FileSystem.writeAsStringAsync(
    FILE_URI.lastSeenRoutines,
    JSON.stringify(lastSeenRoutines)
  )
}

export async function getLastSeenRoutines(): Promise<string[]> {
  try {
    const lastSeenRoutines = await FileSystem.readAsStringAsync(
      FILE_URI.lastSeenRoutines
    )
    return JSON.parse(lastSeenRoutines) as string[]
  } catch (error) {
    return []
  }
}
