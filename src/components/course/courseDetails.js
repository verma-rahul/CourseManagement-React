import React, { Component } from 'react';
import ModuleSidebar from './moduleSidebar'
import ChapterNavbar from './chapterNavbar'
import WidgetPage from './widgetPage'
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Rail} from 'semantic-ui-react'
import {loadCourseDetails} from "../../actions/commonAction";
import { connect } from 'react-redux';

class CourseDetails extends Component {

  componentWillMount(){
    this.props.loadCourseDetails()
  }
  loadCourseDetails(){
    console.log("In loadCourseDetails")
  }
  render() {

    return (
       <ModuleSidebar>
   <Grid padded >
         <Grid.Row >
    <Segment padded='very'  >
     <ChapterNavbar />
     <WidgetPage />
  </Segment>
    </Grid.Row>
  </Grid>
  </ModuleSidebar>

    );
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {loadCourseDetails})(CourseDetails);
