const posts = (state = [{title: 'default title' ,body: 'default post'}], action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return action.posts;
    case 'ADD_POST':
    return [action.post, ...state];
      return state;
    default:
      return state;
  }
}
export default posts;
