const dateReducer = (state = "2020-11-01", action) => {
    switch(action.type) {
        case 'SET_DATE':
            return action.payload
        default:
            return state
    }
}

export default dateReducer;