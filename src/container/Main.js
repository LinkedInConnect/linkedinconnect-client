import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
            title: ''
          };
        }

    

      async fetchUserData() {
        try {
          let response = await fetch('http://localhost:8080/api/users');
          let responseJson = await response.json();
          
          alert("Received Successful response from server!");
         
        console.log(responseJson);
          //    this.setState({
            
      //      title: responseJson.title
     //     })
        } catch (err) {
          console.log(err);
        }
    
      }

      

      render() {
        return (
          <div className="Main">
            
            <p className="App-intro">
              <div>
                <button onClick={this.fetchUserData}>Get User Data!</button>
             
              </div>
            </p>
            
        <p>title: {this.state.title}</p>
          </div>
        );
      }
  

}

export default Main;