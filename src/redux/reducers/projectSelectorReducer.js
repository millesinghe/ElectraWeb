const projectReducer = (state = false, action) => {
    switch (action.type) {
        case 'SELECT_PROJECT_STATUS': {
            return action.isStatus;
        }
        default : {
            return state;
        }
    }
};

export default projectReducer;