import collorPallete from "../../../assets/collorPallete"


export const horizontalMenuStyle = {
  marginVertical: 4,
  showsHorizontalScrollIndicator: false,
  style: { flexShrink: 0, flexGrow: 0 },
  contentContainerStyle: {
    paddingHorizontal: 8,
  }
}

export const optionContainerStyle = (selected) => ({
  rippleColor: collorPallete.redHalfPastel,
  style: {
    marginHorizontal: 2,
    minWidth: 90, maxWidth: 200,
    borderRadius: 4,
    padding: 4,
    backgroundColor: selected ? collorPallete.redPastel : 'transparent',
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'
  }
})

export const optionTextStyle = (selected) => ({
  style: {
    textAlign: 'center',
    color: selected ? collorPallete.red : collorPallete.black
  }
})