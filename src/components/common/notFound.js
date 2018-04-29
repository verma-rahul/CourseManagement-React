import React, { Component } from 'react';
import axios from "axios";
import {
  Button, Checkbox, Form, Menu, Segment, Input, Advertisement, Dropdown, Image,
  Container, Header, Embed, Grid, Message, Table, Icon, Modal, Accordion } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {setActivePage} from "../../actions/commonAction";
import { connect } from 'react-redux';
class NotFound extends Component {

  render() {
    return (  <Grid padded  >
         <Grid.Row centered>
         <Segment padded='very' raised >
         <Header as='h1'>Page not Found Or Not Login or Access Denied</Header>
         <Button.Group>
          <Button primary size='massive' as={Link} to='/'
            onClick={()=>{this.props.setActivePage("")}}> Go to Home</Button>
         </Button.Group>
          </ Segment>
        </Grid.Row>
             </Grid>);
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {setActivePage})(NotFound);
