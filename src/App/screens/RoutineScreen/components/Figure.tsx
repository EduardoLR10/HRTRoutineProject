import React from 'react'
// import ImageModal from 'react-native-image-modal'
import {
  Dimensions,
  ImageURISource,
  View,
  Image,
  Modal,
  TouchableOpacity
} from 'react-native'
// import ImageViewer from 'react-native-image-zoom-viewer'
import ImageZoom from 'react-native-image-pan-zoom'
import { Caption, Subtitle2 } from '../../../shared/typography'
import Icon from '../../../shared/Icon'

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
  const [isModalOpen, setIsModalOpened] = React.useState(false)

  return (
    <View style={{ marginTop: 8, marginBottom: 16 }}>
      {title && (
        <Subtitle2 style={{ textAlign: 'center', marginBottom: 4 }}>
          {title}
        </Subtitle2>
      )}
      <TouchableOpacity
        style={{ marginBottom: 8 }}
        onPress={() => setIsModalOpened(!isModalOpen)}
      >
        <Image
          source={source}
          style={{
            width: undefined,
            height: undefined,
            aspectRatio: size[0] / size[1],
            borderRadius: 8
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 4,
            right: 4,
            left: 'auto',
            bottom: 'auto',
            padding: 8,
            borderRadius: 8,
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }}
        >
          <Icon name="zoom" color="white" size={24} />
        </View>
      </TouchableOpacity>
      {caption && <Caption>{caption}</Caption>}

      <Modal
        transparent
        animationType="slide"
        visible={isModalOpen}
        style={{ backgroundColor: '#000c' }}
        onRequestClose={() => setIsModalOpened(false)}
      >
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
          <TouchableOpacity
            style={{ padding: 8, alignItems: 'flex-end' }}
            onPress={() => setIsModalOpened(false)}
          >
            <Icon name="unzoom" size={24} color="white" />
          </TouchableOpacity>
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={size[0]}
            imageHeight={size[1]}
            enableSwipeDown
            onSwipeDown={() => setIsModalOpened(false)}
          >
            <Image
              source={source}
              style={{
                width: undefined,
                height: undefined,
                aspectRatio: size[0] / size[1],
                borderRadius: 8
              }}
            />
          </ImageZoom>
        </View>
      </Modal>
    </View>
  )
}
