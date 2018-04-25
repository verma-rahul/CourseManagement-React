import React, { Component } from 'react';
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Image,Tab } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {} from "../../actions/widgetAction"
class WidgetPage extends Component {
  render() {
    console.log(this.props)
    const demoWidgetText=
     <Segment basic textAlign="center">
          <Header as='h1'>Widgets Loaded for Module Id = {this.props.moduleId}</Header>
          <Header as='h1'>Widgets Loaded for Chapter Id = {this.props.chapterId}</Header>
       </Segment>

    const  loadingItem= <Segment basic textAlign="center">
         <Icon loading name='spinner'size='huge' />
       </Segment>

    const  noModuleSelectedItem=   <Segment disabled basic textAlign="center">
          <Header as='h1'>  <Icon name='chevron left'size='small' color="yellow"/> Select Module
          </Header>
        </Segment>

    const  noChapterSelectedItem=
    <Segment disabled basic textAlign="center">
    <Header as='h1'>
           Select Chapter
            <Icon name='chevron up'size='small' color="yellow"/></Header>
       </Segment>


    const  failedItem=   <Segment  basic textAlign="center">
         <Icon.Group size='huge'>
          <Icon loading name='spinner' />
          <Icon color="red"  name='warning'  />
        </Icon.Group>
       </Segment>

    return (
 <Segment padded raised color="blue">
   { (this.props.moduleId!=null) && (this.props.chapterId!=null)
     &&!this.props.loading && !this.props.failed &&  demoWidgetText }
   { (this.props.chapterId!=null) && this.props.loading && loadingItem }
   { (this.props.chapterId!=null) && this.props.failed && failedItem}
   { (this.props.moduleId==null) && noModuleSelectedItem}
    { (this.props.chapterId==null) && noChapterSelectedItem}

 </Segment>
/*{see help.js on how to use widgets}
*/
);
}
}

const mapStateToProps = (state) => ({
  loading: state.widget.loading,
  widgetsList: state.widget.widgetsList,
  failed:state.widget.failed,
  selected:state.widget.selected,
  chapterId:state.chapter.active,
  moduleId:state.module.active
});

// Another way to Map actions to props
// const mapDispatchToProps = (dispatch) => ({
//     onRollDice: () => dispatch(rollDice())
// });

export default connect(mapStateToProps, {})(WidgetPage);
