import React, { Component } from 'react'


export default class BaseLayout extends Component {
  render () {
    return (
      <div className='base-layput'>

        {this.props.children}

      </div>
    )
  }
}
