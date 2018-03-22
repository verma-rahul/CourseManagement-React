import React, { Component } from 'react';
import './App.css';
import SideMenu from './sidebar'
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon} from 'semantic-ui-react'
class App extends Component {
  state = { activeItem: 'Assignment 1' }

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

const options = [
  { key: 'HEADER', text: 'Header', value: 'Header' },
  { key: 'YOUTUBE', text: 'YOUTUBE', value: 'YOUTUBE' },
  { key: 'IMAGE', text: 'IMAGE', value: 'IMAGE' },
  { key: 'TEXT', text: 'TEXT', value: 'TEXT' }
]

    return (
      <SideMenu>
        <div>
        <Menu pointing secondary>
          <Menu.Item name='Assignment 1' active={activeItem === 'Assignment 1'} onClick={this.handleItemClick} />
          <Menu.Item name='Assignment 2' active={activeItem === 'Assignment 2'} onClick={this.handleItemClick} />
          <Menu.Item name='Assignment 3' active={activeItem === 'Assignment 3'} onClick={this.handleItemClick} />
          <Menu.Item>
                 <Input icon={{ name: 'add', circular: true, link: true }}
                    placeholder='Add Assignmnent...' />
            </Menu.Item>
        </Menu>
        <Grid padded>
            <Grid.Row centered>
                <Dropdown placeholder='Add Widget' multiple fluid selection options={options} />
                 </Grid.Row>
        <Grid.Row centered>
       <Grid.Column>
         <Message>
           <Header as='h1'>Content 1</Header>
           <p>
             This is a template for a simple marketing or informational website. It includes a large callout called a
             jumbotron and three supporting pieces of content. Use it as a starting point to create something more
             unique.
           </p>
           <Button color='blue'>Learn more &raquo;</Button>
         </Message>
       </Grid.Column>
     </Grid.Row>

     <Grid.Row centered>
       <Grid.Column width={16}>
          <Table celled structured>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
                <Table.HeaderCell rowSpan='2'>Type</Table.HeaderCell>
                <Table.HeaderCell rowSpan='2'>Files</Table.HeaderCell>
                <Table.HeaderCell colSpan='3'>Languages</Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Ruby</Table.HeaderCell>
                <Table.HeaderCell>JavaScript</Table.HeaderCell>
                <Table.HeaderCell>Python</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Alpha Team</Table.Cell>
                <Table.Cell>Project 1</Table.Cell>
                <Table.Cell textAlign='right'>2</Table.Cell>
                <Table.Cell textAlign='center'>
                  <Icon color='green' name='checkmark' size='large' />
                </Table.Cell>
                <Table.Cell />
                <Table.Cell />
              </Table.Row>
              <Table.Row>
                <Table.Cell rowSpan='3'>Beta Team</Table.Cell>
                <Table.Cell>Project 1</Table.Cell>
                <Table.Cell textAlign='right'>52</Table.Cell>
                <Table.Cell textAlign='center'>
                  <Icon color='green' name='checkmark' size='large' />
                </Table.Cell>
                <Table.Cell />
                <Table.Cell />
              </Table.Row>
              <Table.Row>
                <Table.Cell>Project 2</Table.Cell>
                <Table.Cell textAlign='right'>12</Table.Cell>
                <Table.Cell />
                <Table.Cell textAlign='center'>
                  <Icon color='green' name='checkmark' size='large' />
                </Table.Cell>
                <Table.Cell />
              </Table.Row>
              <Table.Row>
                <Table.Cell>Project 3</Table.Cell>
                <Table.Cell textAlign='right'>21</Table.Cell>
                <Table.Cell textAlign='center'>
                  <Icon color='green' name='checkmark' size='large' />
                </Table.Cell>
                <Table.Cell />
                <Table.Cell />
              </Table.Row>
            </Table.Body>
          </Table>
    </Grid.Column>
    </Grid.Row>
</Grid>
      </div>
      </SideMenu>
    );
  }
}

export default App;
