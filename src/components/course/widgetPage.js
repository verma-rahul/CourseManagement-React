import React, { Component } from 'react';
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Image,Tab } from 'semantic-ui-react'

class WidgetPage extends Component {
  render() {
    const options = [
      { key: 'HEADER', text: 'Header', value: 'Header' },
      { key: 'YOUTUBE', text: 'YOUTUBE', value: 'YOUTUBE' },
      { key: 'IMAGE', text: 'IMAGE', value: 'IMAGE' },
      { key: 'TEXT', text: 'TEXT', value: 'TEXT' }
    ]
    return (
 <Segment padded raised color="blue">
   <Segment basic textAlign="center">
      <Header as='h1'>Example Loding</Header>
     <Icon loading name='spinner'size='huge' />
   </Segment>
   <Segment basic textAlign="center">
      <Header as='h1'>Example Select Chapter First..</Header>
     <Icon name='chevron up'size='huge' color="yellow"/>
   </Segment>


   <Segment basic textAlign="center">
        <Header as='h1' >Example Failed</Header>
     <Icon.Group size='huge'>
      <Icon loading name='spinner' />
      <Icon color="red"  name='warning'  />
    </Icon.Group>
   </Segment>
<Segment basic >
      <Header as='h1'>Example Image</Header>
<Image centered  src='http://cdn.newsapi.com.au/image/v1/eb2c300a22b064cb3843313360341728' size='medium' rounded />
</Segment>
<Segment basic size="mini" >
 <Header as='h1'>Example Video</Header>
   <Embed
      id='O6Xo21L0ybE'
      source='youtube'
      aspectRatio="21:9"
    />
 </Segment>


 </Segment>
);
}
}

export default WidgetPage;
