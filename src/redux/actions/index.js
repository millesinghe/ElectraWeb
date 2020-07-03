
export const actionSelectedProject = (project) => {
    return {
        type : 'SELECT_PROJECT',
        objProject : project
    }
}

export const actionIsProjectSelect = (selected) => {
    return {
        type : 'SELECT_PROJECT_STATUS',
        isStatus : selected
    }
}

export const actionLoginUser = () => {
    return {
        type : 'SIGN_IN'
    }
}