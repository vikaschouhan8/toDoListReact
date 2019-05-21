import React, { Component } from 'react'
import Note from './Note'

export default class NoteList extends Component {
  render() {
    return (
    <div>
    {
        this.props.notes.map((val, i)=>{
        return <Note key={i} text={val} onClick={this.props.onClick}/>
        })
    }
    </div>

    )
  }
}
