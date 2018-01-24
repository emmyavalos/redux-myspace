import React, { Component } from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';



class Show extends Component {
  state = { post: {} }

  componentDidMount(){
    debugger
    const id = this.props.match.params.id
    axios.get(`/api/posts/${id}`)
      .then( res => {
        this.setState({ post: res.data })}
    )}
  render(){
    return (
      <Segment>
          <h1> { this.state.post.title} </h1>
          <h3> { this.state.post.body } </h3>
      </Segment>
    )
  }
}

export default Show;
