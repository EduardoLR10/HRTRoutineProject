import React from 'react';
import P from '../Paragraph'

export default class Reference extends React.Component {

  render = () => {
    let body = this.props.body ? `${this.props.body};` : ""
    return (
      <P>{`${this.props.idx}. ${body}`}</P>
    )
  }
}