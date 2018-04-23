import React, { Component } from 'react';
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Rail} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {toggleSidebar} from "../../actions/commonAction";
import styles from './chapterNavbar.css';

class ChapterNavbar extends Component {

  handaddClick(){
     console.log("item ")
  }
  render() {
    return (
        <Menu pointing secondary fluid >
        <Menu.Item onClick={this.props.toggleSidebar}>
          <Icon  name="sidebar" />Modules
        </Menu.Item>
          <Menu.Item name='Assignment 1' active={this.props.activeChapter == 'Assignment 1'}/>
          <Menu.Item name='Assignment 2' active={this.props.activeChapter == 'Assignment 2'}/>
          <Menu.Item name='Assignment 3' active={this.props.activeChapter == 'Assignment 3'}/>
            <Input  size="mini"
               icon={<Icon name='add' inverted circular link onClick={this.handaddClick}/>}
               placeholder='Add chapter..' />
        </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
    activeChapter: state.activeChapter,
    showSidebar:state.app.showSidebar
});

export default connect(mapStateToProps, {toggleSidebar})(ChapterNavbar);


// Another way to Map actions to props
// const mapDispatchToProps = (dispatch) => ({
//     onRollDice: () => dispatch(rollDice())
// });
