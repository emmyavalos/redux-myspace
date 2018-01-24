import React from 'react'
import { Container, Form, Button} from 'semantic-ui-react';
import { connect } from 'react-redux'
import { addPost } from '../actions/posts';

class PostForm extends React.Component {

  state = {title: '', body: ''}

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {title, body}= this.state
    const blog = {title, body}
    this.setState({title: '', body: ''})
    this.props.dispatch(addPost(blog))
  }

  render () {
    const {title, body} = this.state
    return(
      <Container>
        <Form onSubmit={this.handleSubmit}>
         <Form.Group>
           <Form.Input
             name="title"
             value={title}
             label='Name'
             placeholder='Title'
             width={6}
             autoFocus={true}
             required
             onChange={this.handleChange}
            />

            <Form.TextArea
              name="body"
              value={body}
              label='Post to Myspace'
              placeholder='Body of post'
              width={6}
              required
              onChange={this.handleChange}
            />
         </Form.Group>
         <Button primary type="submit">Add</Button>
        </Form>
      </Container>
    )
  }
}

export default connect()(PostForm);
