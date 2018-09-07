function reducer (data = {
                            add: false,
                            errors: {
                                email: false,
                                password: false,
                                checkbox: false
                            },
                            systemError: null
                                }, action) {
    switch (action.type){
        case "SUCCESS_ADD":
            return {
                ...data,
                add: action.add,
                users: action.users
            };
        case "ADD_USER":
            return {
                errors: {
                    email: false,
                    password: false,
                    checkbox: false
                },
                systemError: null
            };
        case "INVALID":
            return {
                ...data,
                add: false,
                errors: action.errors
            };
        case "EMAIL_EXIST":
            return {
                add: false,
                errors: {
                    email: false,
                    password: false,
                    checkbox: false
                },
                systemError: action.systemError
            };
        default:
            return data;
    }
}

export default reducer;