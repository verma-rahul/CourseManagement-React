import React, { Component } from 'react';
import ModuleSidebar from './moduleSidebar'
import ChapterNavbar from './chapterNavbar'
import WidgetPage from './widgetPage'
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Image} from 'semantic-ui-react'
import {loadCourseDetails} from "../../actions/courseAction";
import { connect } from 'react-redux';

class CourseDetails extends Component {

  componentWillMount(){
    this.props.loadCourseDetails()
  }
  loadCourseDetails(){
    console.log("In loadCourseDetails")
  }
  render() {
    const CoursePageLoading =  (
      <Grid padded >
            <Grid.Row >
                <Segment loading>
        <Image src='../../assets/images/loadingCoursePage.png' />
      </Segment>
    </Grid.Row>
  </Grid>
    )
  const CoursePageLoaded= (
<ModuleSidebar>
<Grid padded >
      <Grid.Row >
 <Segment padded='very' basic>
  <ChapterNavbar />
  <WidgetPage />
</Segment>
 </Grid.Row>
</Grid>
</ModuleSidebar>)

    return (
  <ModuleSidebar>
  <Grid padded >
        <Grid.Row >
   <Segment padded='very' basic>
    <ChapterNavbar />
    <WidgetPage />
  </Segment>
   </Grid.Row>
  </Grid>
  </ModuleSidebar>);
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {loadCourseDetails})(CourseDetails);
