import React, { Component } from 'react';
import ModuleSidebar from './moduleSidebar'
import ChapterNavbar from './chapterNavbar'
import WidgetPage from './widgetPage'
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Image} from 'semantic-ui-react'
import {loadCourseDetails} from "../../actions/courseAction";
import { connect } from 'react-redux';
import styles from './courseDetails.css';
class CourseDetails extends Component {

  componentWillMount(){
    // this.props.loadCourseDetails()
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
    <Grid padded >
          <Grid.Row >
     <Segment padded='very' basic>
<ModuleSidebar>
  <ChapterNavbar />
  <WidgetPage />
</ModuleSidebar>
</Segment>
 </Grid.Row>
</Grid>
  )

    return (
      <Grid>
    <ModuleSidebar>
    <ChapterNavbar />
    <WidgetPage />
    </ModuleSidebar>
    </Grid>);
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {loadCourseDetails})(CourseDetails);
