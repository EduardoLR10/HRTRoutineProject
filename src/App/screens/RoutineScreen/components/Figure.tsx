import React, { useCallback, useState } from 'react'
import {
  ImageURISource,
  View,
  Image,
  TouchableOpacity,
  BackHandler
} from 'react-native'
import Icon from '../../../shared/Icon'
import { BlackPortal } from 'react-native-portal'
import styled from 'styled-components/native'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'
import { Caption, Subtitle2 } from '../../../shared/typography'
import { useFocusEffect } from '@react-navigation/native'

export interface FigureProps {
  source: ImageURISource
  size: [number, number]
  title?: string
  caption?: string
}

export default function Figure({
  source,
  size: [width, height],
  title,
  caption
}: FigureProps): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false)
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (isModalVisible) {
          setIsModalVisible(false)
          return true
        } else {
          return false
        }
      }
      BackHandler.addEventListener('hardwareBackPress', onBackPress)
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [isModalVisible])
  )

  return (
    <View style={{ marginTop: 8, marginBottom: 16 }}>
      {title && (
        <Subtitle2 style={{ textAlign: 'center', marginBottom: 4 }}>
          {title}
        </Subtitle2>
      )}
      <TouchableOpacity
        style={{ marginBottom: 8 }}
        onPress={() => setIsModalVisible(!isModalVisible)}
      >
        <Image
          source={source}
          style={{
            width: undefined,
            height: undefined,
            aspectRatio: width / height,
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

      <FigureModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        source={source}
        size={[width, height]}
      />
    </View>
  )
}

const ClearButtonContainer = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  right: 16px;
`

const Backdrop = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  elevation: 5;

  background-color: #000c;
`

const ImageContainer = styled.View`
  flex: 1;
`
interface FigureModalProps {
  size: [number, number]
  onClose: () => void
  source: ImageURISource
  isVisible: boolean
}

function FigureModal({
  source,
  size: [width, heigth],
  isVisible,
  onClose
}: FigureModalProps): JSX.Element {
  return (
    <>
      {isVisible && (
        <BlackPortal name="figureModal">
          <Backdrop>
            <ImageContainer>
              <ReactNativeZoomableView
                bindToBorders={true}
                initialZoom={1}
                minZoom={0.1}
                movementSensibility={1}
                zoomStep={0.3}
                maxZoom={2}
              >
                <Image
                  source={source}
                  style={{
                    width: undefined,
                    height: undefined,
                    aspectRatio: width / heigth
                  }}
                />
              </ReactNativeZoomableView>
            </ImageContainer>
            <ClearButtonContainer onPress={onClose}>
              <Icon name="clear" size={48} color={'#fff'} />
            </ClearButtonContainer>
          </Backdrop>
        </BlackPortal>
      )}
    </>
  )
}
