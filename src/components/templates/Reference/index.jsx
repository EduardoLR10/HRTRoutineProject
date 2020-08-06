import React from 'react';
import P from '../Paragraph'

/**
 *  @property {number} idx
 *  @property {?string} authors
 *  @property {?string} title
 *  @property {?string} document
 *  @property {?string} publisher
 *  @property {?string} local
 *  @property {?string} year
 *  @property {?string} link
 */
export default class Reference extends React.Component {

  render = () => {
    let body = this.props.body ? `${this.props.body};` : ""
    return (
      <P>{`${this.props.idx}. ${body}`}</P>
    )
  }
}