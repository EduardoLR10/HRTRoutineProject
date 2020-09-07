import collorPallete from '../../assets/collorPallete'

export const screenOptions = {
  cardStyle: {
    backgroundColor: collorPallete.white,
  },
  headerTitleAlign: 'center',
  headerTintColor: collorPallete.red,
}

export const tabBarOptions = {
  activeTintColor: collorPallete.red,
  inactiveTintColor: collorPallete.black,
  pressColor: collorPallete.redHalfPastel,
  indicatorStyle: { backgroundColor: collorPallete.red },
  labelStyle: {
    textTransform: 'none', fontFamily: 'Roboto', fontSize: 16,
  }
}