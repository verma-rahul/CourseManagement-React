import React, { Component } from 'react';
import axios from "axios";
import {
  Button, Checkbox, Form, Menu, Segment, Input, Advertisement, Dropdown, Image,
  Container, Header, Embed, Grid, Message, Table, Icon, Modal, Accordion,
Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import COURSEIMAGE from "../../assests/images/DETAILS.PNG"
class CourseList extends Component {
handleCardClick(e){
  console.log('CARD')
}
handleButtonClick(e,prop){
  console.log('BUTTON')
}
  render() {
  const courseElement =(<Card link onClick={(e) =>
        ((e.target.nodeName=="DIV")?this.handleCardClick():null)}>
          <Image src={COURSEIMAGE} />

    <Card.Content>
{true &&  <Card.Header>Daniel</Card.Header>}
        {false &&       <Input fluid
                 placeholder="Enter new Course ...">
             <input />
                 <Icon name='checkmark' color="teal"
                 inverted circular link />
             </Input> }
        </Card.Content>
 <Card.Content extra>
   <Button.Group fluid>
   <Button color='yellow' icon='pencil'  onClick={(e) => this.handleButtonClick(e,)}></Button>
   <Button color='red' icon='close'></Button>
 </Button.Group>
   </Card.Content>
      </Card>)
    return (
      <Segment padded basic>
          <Card.Group>
             <Card fluid color='blue'>
                <Card.Content>
               <Input fluid
                      placeholder="Enter Course ...">
                  <input />
                      <Icon name='add' color="green"
                        inverted circular link />
                  </Input>
                </Card.Content>

             </Card>
  {courseElement}

    </Card.Group>
    </ Segment>
 );
  }
}

export default CourseList;



// <Form>
// <Form.Group widths='equal'>
// <Form.Input fluid label='First name' placeholder='First name' />
// <Form.Input fluid label='Last name' placeholder='Last name' />
//
// </Form.Group>
// </Form>

// <Grid padded  >
//      <Grid.Row centered>
//      <Segment padded='very' raised >
//      <Header as='h1'>PlaceHolder For Course List</Header>
//
//       </ Segment>
//     </Grid.Row>
//          </Grid>


// <Form.Group inline>
//   <Form.Input placeholder='First Name' type='text'
//      name="firstName"/>
//    <Form.Button>
     // <Icon name='checkmark' color="teal"
     // inverted circular link />
   // <Icon name='add' color="green"
   //   inverted circular link />
//    </Form.Button>
// </Form.Group>



// <Card.Group>
//    <Card>
//      <Card.Content>
//        <Image floated='right' size='mini' src='../' />
//        <Card.Header>
//          Steve Sanders
//        </Card.Header>
//        <Card.Meta>
//          Friends of Elliot
//        </Card.Meta>
//        <Card.Description>
//          Steve wants to add you to the group <strong>best friends</strong>
//        </Card.Description>
//      </Card.Content>
//      <Card.Content extra>
//        <div className='ui two buttons'>
//          <Button basic color='green'>Approve</Button>
//          <Button basic color='red'>Decline</Button>
//        </div>
//      </Card.Content>
//    </Card>
//    <Card>
//      <Card.Content>
//        <Image floated='right' size='mini' src='/assets/images/avatar/large/molly.png' />
//        <Card.Header>
//          Molly Thomas
//        </Card.Header>
//        <Card.Meta>
//          New User
//        </Card.Meta>
//        <Card.Description>
//          Molly wants to add you to the group <strong>musicians</strong>
//        </Card.Description>
//      </Card.Content>
//      <Card.Content extra>
//        <div className='ui two buttons'>
//          <Button basic color='green'>Approve</Button>
//          <Button basic color='red'>Decline</Button>
//        </div>
//      </Card.Content>
//    </Card>
//    <Card>
//      <Card.Content>
//        <Image floated='right' size='mini' src='/assets/images/avatar/large/jenny.jpg' />
//        <Card.Header>
//          Jenny Lawrence
//        </Card.Header>
//        <Card.Meta>
//          New User
//        </Card.Meta>
//        <Card.Description>
//          Jenny requested permission to view your contact details
//        </Card.Description>
//      </Card.Content>
//      <Card.Content extra>
//        <div className='ui two buttons'>
//          <Button basic color='green'>Approve</Button>
//          <Button basic color='red'>Decline</Button>
//        </div>
//      </Card.Content>
//    </Card>
//  </Card.Group>
