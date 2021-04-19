const groupsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GROUPS':
            return action.payload;
        default:
            return state;
    }
};

export default groupsReducer;
