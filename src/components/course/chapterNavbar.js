import React, { Component } from 'react';
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Rail, Loader} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {toggleSidebar} from "../../actions/commonAction";
import {makeActiveChapter
  ,updateChapter,addChapter,selectChapter,deleteChapter}
  from "../../actions/chapterAction"
import styles from './chapterNavbar.css';

class ChapterNavbar extends Component {

  render() {
    console.log(this.props)

    const addShow= (Object.keys(this.props.selected).length === 0)

    const selectedChapterName=( addShow)?"":this.props.selected.name

    const chaptersMenuItems= this.props.chaptersList.map((chapter) =>
    (<Menu.Item name={chapter.name} active={this.props.active == chapter.id}
     key={chapter.id}
     onClick={(e) =>
      ((e.target.nodeName=="A")?this.props.makeActiveChapter(chapter.id):null)}>
       {chapter.name}

     <Segment basic>
     <Icon name='pencil' color="yellow" inverted circular link
         size="small"
         onClick={() =>
           this.props.selectChapter(chapter)}/>
     <Icon name='close' color="red" inverted circular link
           size="small"
           onClick={() =>
             this.props.deleteChapter(chapter.id)}/></Segment>
    </Menu.Item>));


const lodingMenuItem= <Menu.Item ><Loader active inline='centered' />
                      </Menu.Item>

const failedMenuItem=<Menu.Item  name="failed" >
                      <Icon color="red" size="big" name='warning' />
                      Failed Loding
                      </Menu.Item>

const noModuleSelectedItem=<Menu.Item disabled name="notSelected">
                          <Icon size="big" color="yellow" name='chevron left'/>
                          select Module
                        </Menu.Item>

var inputMenuItem= <Menu.Item>
                    <Input
                    ref="inputChapter"
                    key={selectedChapterName||"new"}
                    defaultValue={selectedChapterName}
                    size="small" placeholder='Add Chapter..' >
                    <input />
                    { (!addShow)
                     && <Icon name='checkmark' color="teal"
                    inverted circular link
                    onClick={() =>
                    this.props.updateChapter(this.props.selected.id,
                     {...this.props.selected,name:this.refs.inputChapter
                       .inputRef.value})}/>}
                    { addShow
                     && <Icon name='add' color="green"
                    inverted circular link
                    onClick={() =>{this.props.addChapter({name:this.refs.inputChapter.inputRef.value})
                      this.refs.inputChapter.inputRef.value=""}}  />}
                       </Input>
                      </Menu.Item>
    return (
        <Menu pointing secondary fluid size="mini" stackable >
        <Menu.Item onClick={this.props.toggleSidebar} className='header'>
               <Icon size="big" name='chevron left'/>Modules
        </Menu.Item  >

        { (this.props.moduleId!=null)
          &&!this.props.loading && !this.props.failed && chaptersMenuItems  }
        { (this.props.moduleId!=null) &&
          !this.props.loading && !this.props.failed && inputMenuItem}
        { (this.props.moduleId!=null) && this.props.loading && lodingMenuItem }
        { (this.props.moduleId!=null) && this.props.failed && failedMenuItem}
        { (this.props.moduleId==null) && noModuleSelectedItem}


       </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.chapter.loading,
  active: state.chapter.active,
  chaptersList: state.chapter.chaptersList,
  showSidebar: state.course.showSidebar,
  failed:state.chapter.failed,
  selected:state.chapter.selected,
  moduleId:state.module.active
});

// Another way to Map actions to props
// const mapDispatchToProps = (dispatch) => ({
//     onRollDice: () => dispatch(rollDice())
// });

export default connect(mapStateToProps,
  {toggleSidebar,makeActiveChapter
    ,updateChapter,addChapter,selectChapter,deleteChapter})(ChapterNavbar);
