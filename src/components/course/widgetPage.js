import React, { Component } from 'react';
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Image,Tab ,Modal} from 'semantic-ui-react'
import { connect } from 'react-redux';
import {} from "../../actions/widgetAction"
import {WIDGET_OPTIONS} from "../../constants/common"
import {openForm,closeForm,
        selectWidget,deleteWidget,
        updateWidget,addWidget} from "../../actions/widgetAction"
class WidgetPage extends Component {
  render() {
    this.showForm=false
    console.log(this.props)
    const updateShow= !(Object.keys(this.props.selected).length === 0)
    const selectedWidget=( !updateShow)?{name:"",desc:""}:this.props.selected
    console.log(updateShow,selectedWidget)
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

  const showButton= <Segment basic textAlign="center">
        <Button fluid color="green" onClick={this.props.openForm}>
          New widget
        </Button>
      </Segment>
const addButton= <Segment basic textAlign="center">
            <Button fluid color="green" onClick={()=>this.props.addWidget(this.refs.form)}>
              Add
            </Button>
          </Segment>
const cancelButton= <Segment basic textAlign="center">
                      <Button fluid color="red" onClick={this.props.closeForm}>
                        cancel
                      </Button>
                    </Segment>
  const updateButton= <Segment basic textAlign="center">
            <Button fluid color="teal" onClick={()=>this.props.updateWidget(this.props.selected.id,this.props.selected)}>
              update widget
            </Button>
              </Segment>
 const WidgetsItemList = this.props.widgetsList.map((widget) =>(
  <Grid.Row key={widget.id}>
   <Grid.Column width={14}>
     <Header as='h2'>{widget.name}</Header>
     <Image  src='http://cdn.newsapi.com.au/image/v1/eb2c300a22b064cb3843313360341728' size='medium' rounded />
   </Grid.Column>
   <Grid.Column width={2}>
     <Icon name='pencil' color="yellow" inverted circular link
         size="small"
         onClick={() =>{
           this.props.selectWidget(widget)
           this.props.openForm()
         }}/>
     <Icon name='close' color="red" inverted circular link
           size="small"
           onClick={() =>
             this.props.deleteWidget(widget.id)}/>
   </Grid.Column>
 </Grid.Row>))

var formElement=<Form>
    <Form.Group widths='equal' >
      <Form.Select required fluid label='Type' options={WIDGET_OPTIONS} placeholder='Widget Type' />
      <Form.Input key={selectedWidget.name||"new"}
          defaultValue={selectedWidget.name}
          required fluid label='Name' placeholder='Name of Widget' />
        <Form.Input key={selectedWidget.desc||"new"}
          defaultValue={selectedWidget.desc}
          required fluid label='Content/URL' placeholder='Content/URL' />
    </Form.Group>
  </Form>

    return (
 <Segment padded raised color="blue" >


   { (this.props.moduleId!=null) && (this.props.chapterId!=null)
     &&!this.props.loading && !this.props.failed &&
        this.props.showForm && formElement}

  { (this.props.moduleId!=null) && (this.props.chapterId!=null)
          &&!this.props.loading && !this.props.failed &&
          !this.props.showForm && showButton}

  { (this.props.moduleId!=null) && (this.props.chapterId!=null)
  &&!this.props.loading && !this.props.failed &&this.props.showForm &&
   !updateShow && addButton }

  { (this.props.moduleId!=null) && (this.props.chapterId!=null)
      &&!this.props.loading && !this.props.failed && updateShow && updateButton}

  { (this.props.moduleId!=null) && (this.props.chapterId!=null)
  &&!this.props.loading && !this.props.failed &&this.props.showForm &&
   cancelButton}


   { (this.props.moduleId!=null) && (this.props.chapterId!=null)
     &&!this.props.loading && !this.props.failed && !this.props.showForm &&
     <Grid  divided>
    {WidgetsItemList}
     </Grid>   }

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
  moduleId:state.module.active,
  showForm:state.widget.showForm
});

export default connect(mapStateToProps, {openForm,closeForm,
                                         selectWidget,deleteWidget,
                                         updateWidget,addWidget})(WidgetPage);
// Another way to Map actions to props
// const mapDispatchToProps = (dispatch) => ({
//     onRollDice: () => dispatch(rollDice())
// });

  //
