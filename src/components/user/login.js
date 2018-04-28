import React, { Component } from 'react';
import { Route, Router, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown, Image,
Container, Header, Embed, Grid, Message, Table, Icon} from 'semantic-ui-react'
import {userLogin} from "../../actions/userAction"
import { connect } from 'react-redux';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {username:"",password:""}
  }

  submit(){
    if(!this.checkProperties(this.state,2)){
        alert("Enter All 2 Fields")
    }else{
      this.props.userLogin(this.state.username,this.state.password)
    }
  }
  checkProperties(obj,len) {
    if (Object.keys(obj).length <len)
      return false
      for (var key in obj) {
          if (obj[key] == null || obj[key] == "")
              return false;
      }
      return true;
  }
  handleInputChange(e,prop) {
      let change = {}
      change[prop.name] =prop.value
      this.setState(change)
    }

    render() {
        return (
                    <Grid padded  >
                     <Grid.Row centered>
                      <Segment padded='very' raised >
                    <Header as='h2' color='teal' textAlign='center'>
                      Login to your Account
                    </Header>
                    <Form size='large'>
                        <Form.Input
                          fluid
                          icon='user'
                          iconPosition='left'
                          placeholder='User Name'
                          name="username"
                          onChange={this.handleInputChange.bind(this)}
                          value={this.state.username}
                        />
                        <Form.Input
                          fluid
                          icon='lock'
                          iconPosition='left'
                          placeholder='Password'
                          type='password'
                          placeholder='password'
                          name="password"
                          onChange={this.handleInputChange.bind(this)}
                          value={this.state.password}
                        />
                      <Button primary fluid
                        onClick={this.submit.bind(this)}>Login</Button>
                    </Form>

              </ Segment>
             </Grid.Row>
             </Grid>


         )
    }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {userLogin})(Login);
