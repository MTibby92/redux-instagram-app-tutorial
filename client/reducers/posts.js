// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state=[], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            console.log('Incrementing likes!')
            const i = action.index
            return [
                ...state.splice(0,i), // everything before the one we're updating
                {...state[i], likes: state[i].likes + 1},
                ...state.splice(i+1) // everything after the one we're updating
            ]
        default:
            return state
    }
}

export default posts
