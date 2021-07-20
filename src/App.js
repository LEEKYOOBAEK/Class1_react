import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject.js';
import './App.css';


//Component 는 정리정돈~ 
//class <> extends Component {render() { return ()}}

class App extends Component {
  //초기화를 담당
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World wide web!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is Hypertext...'},
        {id:2, title:'Css', desc:'Css us fir design'},
        {id:3, title:'JavaScript', desc:'Javascript is for interactive'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
