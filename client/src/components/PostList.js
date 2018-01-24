import React from 'react';
import { connect } from 'react-redux';
import { Header, Segment } from 'semantic-ui-react';
import { getPosts } from '../actions/posts';
import PostForm from './PostForm';
import {Link} from 'react-router-dom'


class PostList extends React.Component {

componentDidMount(){
  this.props.dispatch(getPosts())
}

render() {
  const {posts} =this.props
  return posts.map( post => {
    return(
      <Segment key={post.id}>
          <Segment>{post.title}</Segment>
          <Segment>{post.body}</Segment>
          <Link to={`/post/${post.id}`}>Post Info</Link>
      </Segment>
    )
  })
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(PostList);
