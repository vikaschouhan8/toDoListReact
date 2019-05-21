import React, { Component } from 'react'

export default class Note extends Component {
  render() {
    return (
        <div className="note">
            {this.props.text}
            <button style={{float:"right"}} onClick={this.props.onClick}>Delete</button>
        </div>
    )
  }
}
