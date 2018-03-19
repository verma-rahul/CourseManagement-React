/**
 * @version 0.0.1
 * @author [Rahul Verma](https://github.com/Verma92)
*/
import  React, { Component } from 'react';
import * as B from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: null,
      fetching: true
    };
  }
    componentDidMount() {
    this.fetchMessage()
    }
    fetchMessage()
    {
      fetch('/api')
        .then(response => {
          if (!response.ok) {
            throw new Error(`status ${response.status}`);
          }
          return response.json();
        })
        .then(json => {
          this.setState({
            message: json.message,
            fetching: false
          });
        }).catch(e => {
          this.setState({
            message: `API call failed: ${e}`,
            fetching: false
          });
        })
    }

  render(){
  return(

    <B.Jumbotron>
       <h2>Welcome to Course Management Project Home</h2>
       <p>
         {this.state.fetching
           ? 'Fetching message from API'
           : this.state.message}
       </p>
      </B.Jumbotron>
  );
  }
}

export default Home;
