import React, { Component } from 'react';
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Responsive} from 'semantic-ui-react'

class WidgetPage extends Component {
  render() {
    const options = [
      { key: 'HEADER', text: 'Header', value: 'Header' },
      { key: 'YOUTUBE', text: 'YOUTUBE', value: 'YOUTUBE' },
      { key: 'IMAGE', text: 'IMAGE', value: 'IMAGE' },
      { key: 'TEXT', text: 'TEXT', value: 'TEXT' }
    ]
    return (
 <Segment padded="very" raised color="blue">

  <Header as='h1'>Content 1</Header>


  </Segment>

);
}
}

export default WidgetPage;
