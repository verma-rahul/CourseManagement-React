import React, { Component } from 'react';
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Rail} from 'semantic-ui-react'

class WidgetPage extends Component {
  render() {
    const options = [
      { key: 'HEADER', text: 'Header', value: 'Header' },
      { key: 'YOUTUBE', text: 'YOUTUBE', value: 'YOUTUBE' },
      { key: 'IMAGE', text: 'IMAGE', value: 'IMAGE' },
      { key: 'TEXT', text: 'TEXT', value: 'TEXT' }
    ]
    return (
      <div>

  <Dropdown placeholder='Add Widget' multiple fluid selection options={options} />
<Message>
<Header as='h1'>Content 1</Header>
<p>
This is a template for a simple marketing or informational website. It includes a large callout called a
jumbotron and three supporting pieces of content. Use it as a starting point to create something more
unique.
</p>
<Button color='blue'>Learn more &raquo;</Button>
</Message>
  </div>
);
}
}

export default WidgetPage;
