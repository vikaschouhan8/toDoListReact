import React, {Component} from 'react';
import NoteList from './components/NoteList'
import './App.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      noteText:'',
      notes: []
    }
  }

  updateNoteText(noteText){
    this.setState({
      noteText:noteText.target.value
    })
  }

  addNote(){
    console.log(this.state)
    if(this.state.noteText === '') {
      return false 
    }
    let notesArr = this.state.notes
    
    notesArr.push(this.state.noteText)
    this.setState({notes:notesArr})
    this.setState({noteText:''})
    
  }

  deleteNote(index){
    let notesArr = this.state.notes;
    notesArr.splice(index)
    this.setState({
      notes:notesArr
    })
    console.log(index)
  }

  render(){


    return (
      <>
        <div className="container-fuild">
          <div className="header">React todo app</div>
          <NoteList notes={this.state.notes} onClick={(e)=>this.deleteNote(e)} />
          <div className="btn" onClick={this.addNote.bind(this)}>+</div>
          <input type="text"
                className="textInput"
                value={this.state.noteText}
                onChange={noteText=>this.updateNoteText(noteText)} 
          />
        </div>
      </>
    )
  }
};

export default App; 