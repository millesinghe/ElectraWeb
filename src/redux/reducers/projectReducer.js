const projectReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_PROJECT': {
            return action.objProject;
        }
        default : {
            return state;
        }
    }
};

export default projectReducer;