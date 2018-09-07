function addUser (user) {
    return {
        type: "ADD_USER",
        user: user,
    }
}

function emailExist(systemError) {
    return {
        type: "EMAIL_EXIST",
        systemError
    }
}
function validate (errors){
    return {
        type: "INVALID",
        errors
    }
}

const actions = {
    addUser,
    emailExist,
    validate
};


export default actions;