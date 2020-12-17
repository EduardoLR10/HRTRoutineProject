import React from 'react'
// import ImageModal from 'react-native-image-modal'
import { Dimensions, ImageURISource, View, Image, Modal } from 'react-native'
// import ImageViewer from 'react-native-image-zoom-viewer'
import { Subtitle1 } from '../../../shared/typography'
import ImageZoom from 'react-native-image-pan-zoom'
import { black } from 'react-native-paper/lib/typescript/src/styles/colors'

export interface FigureProps {
  source: ImageURISource
  size: [number, number]
  title?: string
  caption?: string
}

export default function Figure({
  source,
  size,
  title,
  caption
}: FigureProps): JSX.Element {
  return (
    <Modal visible style={{ backgroundColor: 'black' }}>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={300}
        imageHeight={200}
        style={{ aspectRatio: 200 / 300 }}
        enableSwipeDown
      >
        <Image source={source} />
      </ImageZoom>
    </Modal>
  )
  // return (
  //   <View>
  //     {title && <Subtitle1>{title}</Subtitle1>}
  //     <Image
  //       source={source}
  //       style={{
  //         height: undefined,
  //         aspectRatio: size && size[0] / size[1]
  //       }}
  //     />
  //   </View>
  // )
}
