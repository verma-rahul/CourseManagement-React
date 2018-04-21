import React, { Component } from 'react';
import { Route, Router, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown, Image,
Container, Header, Embed, Grid, Message, Table, Icon} from 'semantic-ui-react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
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
                          placeholder='E-mail address'
                        />
                        <Form.Input
                          fluid
                          icon='lock'
                          iconPosition='left'
                          placeholder='Password'
                          type='password'
                        />
                      <Button primary fluid>Login</Button>
                    </Form>

              </ Segment>
             </Grid.Row>
             </Grid>


         )
    }
}

export default Login;
