import React, { Component } from 'react';
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Rail} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {toggleSidebar, switchTab} from "../../actions/commonAction";

class ChapterNavbar extends Component {


  render() {
    return (

        <Menu pointing secondary>
        <Menu.Item onClick={this.props.toggleSidebar}>
          <Icon  name="sidebar" />Modules
        </Menu.Item>
          <Menu.Item name='Assignment 1' active={this.props.chapter == 'Assignment 1'}/>
          <Menu.Item name='Assignment 2' active={this.props.chapter == 'Assignment 2'}/>
          <Menu.Item name='Assignment 3' active={this.props.chapter == 'Assignment 3'}/>
          <Menu.Item>
                 <Input icon={{ name: 'add', circular: true, link: true }}
                    placeholder='Add Assignmnent...' />
            </Menu.Item>
        </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
    chapter: state.chapter,
    showSidebar:state.showSidebar
});

export default connect(mapStateToProps, {toggleSidebar, switchTab})(ChapterNavbar);


// Another way to Map actions to props
// const mapDispatchToProps = (dispatch) => ({
//     onRollDice: () => dispatch(rollDice())
// });
