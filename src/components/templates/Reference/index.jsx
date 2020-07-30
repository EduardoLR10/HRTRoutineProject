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
    let authors = this.props.authors ? `${this.props.authors};` : ""
    let title = this.props.title ? `${this.props.title};` : ""
    let document = this.props.document ? `${this.props.document};` : ""
    let publisher = this.props.publisher ? `${this.props.publisher};` : ""
    let local = this.props.local ? `${this.props.local};` : ""
    let year = this.props.year ? `${this.props.year};` : ""
    let link = this.props.link ? `Disponível em: ${this.props.link}` : ""
    return (
      <P>{`${this.props.idx}. ${authors} ${title} ${document} ${publisher} ${year} ${link}`}</P>
    )
  }
}