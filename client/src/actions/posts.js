import axios from 'axios';

export const getPosts = () => {
  return (dispatch) => {
    axios.get('/api/posts')
      .then( res => {
        dispatch({ type: 'GET_POSTS', posts: res.data, headers: res.headers })
      })
  }
}

export const addPost = (post) => {
  return (dispatch) => {
    axios.post('/api/posts', { post } )
     .then( res => dispatch({ type: 'ADD_POST', post: res.data, headers: res.headers }) )
  }
}

export const updatepost = (post) => {
  return (dispatch) => {
    axios.put(`/api/posts/${post.id}`, { post } )
      .then( res => dispatch({ type: 'UPDATE_POST', post: res.data }) )
  }
}

export const deletepost = (id) => {
  return (dispatch) => {
    axios.delete(`/api/posts/${id}`)
      .then( () => dispatch({ type: 'DELETE_POST', id }) )
  }
}
