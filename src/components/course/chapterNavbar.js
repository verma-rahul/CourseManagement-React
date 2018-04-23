import React, { Component } from 'react';
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Rail} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {toggleSidebar} from "../../actions/commonAction";
import styles from './chapterNavbar.css';

class ChapterNavbar extends Component {

  handaddClick(){
     console.log("item ",)
  }
  render() {
    return (
        <Menu pointing secondary fluid size="mini" text stackable >
        <Menu.Item onClick={this.props.toggleSidebar} className='header'>
          <Icon  name="sidebar" />Modules
        </Menu.Item>
          <Menu.Item name='Assignment 1' active={this.props.activeChapter == 'Assignment 1'}>
              Assignment 1
             <Icon name='pencil' color="yellow" inverted circular link
               onClick={() => this.handaddClick()} size="small"/>
             <Icon name='close' color="red" inverted circular link
                     onClick={() => this.handaddClick()} size="small"/>

          </Menu.Item>

          <Menu.Item name='Assignment 1' active={this.props.activeChapter == 'Assignment 1'}>
              Assignment 1
             <Icon name='pencil' color="yellow" inverted circular link
               onClick={() => this.handaddClick()} size="small"/>
             <Icon name='close' color="red" inverted circular link
                     onClick={() => this.handaddClick()} size="small"/>

          </Menu.Item>

          <Menu.Item name='Assignment 1' active={this.props.activeChapter == 'Assignment 1'}>
              Assignment 1
             <Icon name='pencil' color="yellow" inverted circular link
               onClick={() => this.handaddClick()} size="small"/>
             <Icon name='close' color="red" inverted circular link
                     onClick={() => this.handaddClick()} size="small"/>

          </Menu.Item>

          <Menu.Item>
            <Input size="small" placeholder='Add Chapter..' >
                <input />
                  <Icon name='checkmark' color="teal" inverted circular link onClick={this.handaddClick}/>
               <Icon name='add' color="green" inverted circular link onClick={this.handaddClick}/>
           </Input>

       </Menu.Item>

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

// <Input  size="mini"
//    icon={<Icon name='add' inverted circular link onClick={this.handaddClick}/>}
//    placeholder='Add chapter..' />
