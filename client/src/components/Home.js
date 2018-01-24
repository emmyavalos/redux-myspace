import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Segment } from 'semantic-ui-react';
import { getPosts } from '../actions/posts';
import PostForm from './PostForm';
import PostList from './PostList';

class Home extends Component {
  state = { posts: [] }

  componentDidMount() {
    this.props.dispatch(getPosts());
}

 render() {
    return (
      <Segment style={{backgroundColor: '#3DFAFF'}}>
        <Header as='h1' textAlign='center'>MySpace</Header>
        <PostForm />
        <PostList />
      </Segment>
    );
  }
}


export default connect()(Home);
