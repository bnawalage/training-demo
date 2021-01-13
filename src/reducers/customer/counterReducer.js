export default   (state =[], action) => {
    switch (action.type) {
        case 'login':
          return { ...state, loggedin: action.payload }
        case 'logout':
          return { ...state, loggedin: action.payload }
        default:
          // If the reducer doesn't care about this action type,
          // return the existing state unchanged
          return state
      }
};