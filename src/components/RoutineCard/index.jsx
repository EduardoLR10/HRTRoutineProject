import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather'
import styles, { iconStyles } from './styles'

export default class RoutineCard extends React.Component {

  navigate = () => this.props.navigation.navigate(this.props.Routine.title)

  render = () =>
    <TouchableOpacity style={styles.container} onPress={this.navigate}>
      <Text style={styles.title}>{this.props.Routine.title}</Text>
      <Text style={styles.info}>
        <SimpleLineIcon name="people" {...iconStyles} /> {this.props.Routine.authors}
      </Text>
      <Text style={styles.info}>
        <SimpleLineIcon name="tag" {...iconStyles} /> {this.props.Routine.category}
      </Text>
      <Text style={styles.info}>
        {this.props.Routine.tags && this.props.Routine.tags.map(tag =>
          <> <Feather name="hash" {...iconStyles} /><Text style={{color: 'red', fontSize: 10}}>{ tag }</Text> </>
        )}
      </Text>
    </TouchableOpacity>
}