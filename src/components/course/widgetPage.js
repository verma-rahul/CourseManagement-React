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
  constructor(props){
    super(props)
    this.populateSelectedWidget.bind(this)
  }
  populateSelectedWidget(){
    const updateShow=!(Object.keys(this.props.selected).length === 0)
    if (!updateShow)
    return {name:"",desc:""}
    const TYPE=this.props.selected.type
    switch(TYPE) {
     case "HTML" :
     return {name:this.props.selected.name,desc:this.props.selected.content,type:TYPE}
     break;
     case "VIDEO" :
     return {name:this.props.selected.name,desc:this.props.selected.url,type:TYPE}
     break;
     case "IMAGE" :
     return {name:this.props.selected.name,desc:this.props.selected.url,type:TYPE}
     break;
     case "TEXT":
     return {name:this.props.selected.name,desc:this.props.selected.content,type:TYPE}
     break;
     }
  }
  makeWidgetObject(refs){
    console.log(refs)
    const NAME=refs.newName.inputRef.value,
          DESC=refs.newDesc.inputRef.value,
          TYPE=refs.newType.value
    switch(TYPE) {
     case "HTML" :
      return {name:NAME,content:DESC,type:TYPE}
      break;
     case "VIDEO" :
      return {name:NAME,url:DESC,type:TYPE}
      break;
     case "IMAGE" :
      return {name:NAME,url:DESC,type:TYPE}
      break;
     case "TEXT":
      return {name:NAME,content:DESC,type:TYPE}
      break;
     }
  }

  render() {
    console.log(this.props)
    const updateShow= !(Object.keys(this.props.selected).length === 0)
    const selectedWidget=this.populateSelectedWidget()

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
            <Button fluid color="green" onClick={()=>this.props.addWidget(this.makeWidgetObject(this.refs))}>
              Add
            </Button>
          </Segment>
const cancelButton= <Segment basic textAlign="center">
                      <Button fluid color="red" onClick={this.props.closeForm}>
                        cancel
                      </Button>
                    </Segment>
  const updateButton= <Segment basic textAlign="center">
            <Button fluid color="teal" onClick={()=>this.props.updateWidget(this.props.selected.id,this.makeWidgetObject(this.refs))}>
              update widget
            </Button>
              </Segment>
 const WidgetsItemList = this.props.widgetsList.map((widget) =>(
  <Grid.Row key={widget.id}>
   <Grid.Column width={14}>
     <Header as='h4'>{widget.name}</Header>
    {(widget.type=="VIDEO") &&
      <iframe src={widget.url.replace("watch?v=", "embed/")} > </iframe>}
    {(widget.type=="IMAGE") && <Image  src={widget.url} size='medium' rounded />}
    {(widget.type=="TEXT") && <p>{widget.content}</p>}
    {(widget.type=="HTML") &&
      <div dangerouslySetInnerHTML={{ __html: widget.content }} />}
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

var formElementNew=<Form>
    <Form.Group widths='equal' >
          <Form.Field required>
          <label> Type </label>
          <select ref="newType">
         <option value='HTML' >HTML</option><option value='VIDEO' >VIDEO</option>
         <option value='TEXT' >TEXT</option><option value='IMAGE' >IMAGE</option>
         </select>
        </Form.Field>
          <Form.Field  required >
          <label>Name of Widget</label>
          <Input placeholder='Name of Widget' ref="newName" />
          </Form.Field>
          <Form.Field required >
          <label>Content/URL</label>
          <Input placeholder='Content/URL'  ref="newDesc" />
          </Form.Field>
    </Form.Group>
  </Form>
  var formElementUpdate=<Form>
      <Form.Group widths='equal' >
          <Form.Field  placeholder='Widget Type' disabled>
          <label> Type </label>
          <select ref="newType" selected="Widget Type">
          <option value={selectedWidget.type} ref="newType">{selectedWidget.type}</option>
          </select>
          </Form.Field>

          <Form.Field key={selectedWidget.name||"newName"}  required >
          <label>Name of Widget</label>
          <Input placeholder='Name of Widget' defaultValue={selectedWidget.name} ref="newName" />
          </Form.Field>
          <Form.Field key={selectedWidget.desc||"newdesc"} required >
          <label>Content/URL</label>
          <Input placeholder='Content/URL' defaultValue={selectedWidget.desc} ref="newDesc" />
          </Form.Field>

      </Form.Group>
    </Form>

    return (
 <Segment padded raised color="blue" >

   { (this.props.moduleId!=null) && (this.props.chapterId!=null)
     &&!this.props.loading && !this.props.failed &&
        this.props.showForm&&!updateShow && formElementNew}

  { (this.props.moduleId!=null) && (this.props.chapterId!=null)
          &&!this.props.loading && !this.props.failed &&
          !this.props.showForm && showButton}

  { (this.props.moduleId!=null) && (this.props.chapterId!=null)
  &&!this.props.loading && !this.props.failed &&this.props.showForm &&
   !updateShow && addButton }

  { (this.props.moduleId!=null) && (this.props.chapterId!=null)
    &&!this.props.loading && !this.props.failed && updateShow && formElementUpdate}

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
 </Segment>);
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
