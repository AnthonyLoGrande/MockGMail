//I have started this over twice due to getting lost, but found it hard to implement the things I learned because I was struggling with api calls... will re-attempt

import logo from './logo.svg';
import './App.css';
import {Component} from "react";
const url = `localhost:3001/emails`

class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
}
  async componentDidMount(){
    let res = await fetch(url);
    let json = await res.json();
    this.setState({})
  }