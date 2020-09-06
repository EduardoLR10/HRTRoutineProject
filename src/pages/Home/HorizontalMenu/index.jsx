import React from 'react'
import { ScrollView, Text } from 'react-native'
import { horizontalMenuStyle, optionContainerStyle, optionTextStyle } from './styles'
import { TouchableRipple } from 'react-native-paper';
/**
 * @property {{label: string, value: any}[]} props.options
 * @property {value: any}
 * @property {(value: any) => void} props.onChange
 */
export default class HorizontalMenu extends React.Component {

  state = {
    value: this.props.value || 0
  }

  onChange = this.props.onChange || (value => this.setState({ value }))

  isSelected = value => value === (this.props.value || this.state.value)

  render = () =>
    <ScrollView horizontal {...horizontalMenuStyle}>
      {this.props.options.map(({ value, label }) =>
        <TouchableRipple key={value}
          onPress={() => this.onChange(value)}
          {...optionContainerStyle(this.isSelected(value))}
        >
          <Text {...optionTextStyle(this.isSelected(value))}>
            {label || value}
          </Text>
        </TouchableRipple>
      )}
    </ScrollView>
}