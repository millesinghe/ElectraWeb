
export const actionSelectedProject = (project) => {
    return {
        type : 'SELECT_PROJECT',
        objProject : project
    }
}

export const actionLoginUser = () => {
    return {
        type : 'SIGN_IN'
    }
}