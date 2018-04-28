import React, { Component } from 'react';
import ModuleSidebar from './moduleSidebar'
import ChapterNavbar from './chapterNavbar'
import WidgetPage from './widgetPage'
import { Button, Checkbox, Form, Menu, Segment, Input , Advertisement, Dropdown,
Container, Header, Embed, Grid, Message, Table, Icon, Image} from 'semantic-ui-react'

import styles from './courseDetails.css';
class CourseDetails extends Component {

  render() {
    return (
      <Grid>
    <ModuleSidebar>
    <ChapterNavbar />
    <WidgetPage />
    </ModuleSidebar>
    </Grid>);
  }
}


export default CourseDetails;
