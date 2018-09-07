import { put, takeLatest } from 'redux-saga/effects';
import { fork } from 'redux-saga/effects';
import {all} from 'redux-saga/effects';
const URL = "http://localhost:3000/api";

function validate (user) {
    let errors = {};
    let re = {
        email: new RegExp('[^@]+@[^@]+\\.[^@]+'),
        password: new RegExp('^\\w+$')
    };
    if(!re.email.test(user.email) || !user.email.length > 4) {
        errors.email = "Некорректный email"
    }
    if(!re.password.test(user.password) || !user.password.length > 4) {
        errors.password = "Неккоректный пароль";
    }
    if(!user.checkbox) {
        errors.checkbox = "Пожалуйста примите соглашение об оказании услуг";
    }
    return errors;
}
function* sendNewUser (user) {
    const val = validate(user);
    if(val.email || val.password || val.checkbox) {
        return {
            status: "invalid",
            errors: val
        }
    }
    const response = yield fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password,
            currency: user.currency
        }),
    });
   if(response.status === 209) {
       return {
           status: 209,
           systemError: "Учётная запись с указанным e-mail уже существует"
       }
   }
    return yield (response.status === 201);//true or false
}

function* addUser(action) {
    try {
        const result = yield sendNewUser(action.user);
         if (result.status === "invalid"){
            yield  put ({ type: "INVALID", errors: result.errors })
        }
        else if(result.status === 209) {
            yield  put ({ type: "EMAIL_EXIST", systemError: result.systemError, add: false })
        } else {
             yield  put ({ type: "SUCCESS_ADD", add: true })
         }
    } catch (error) {
        //do nothing
    }
}

function* newUser() {
    yield takeLatest("ADD_USER", addUser);
}

export default function* rootSaga() {
    yield all([
        fork(newUser),
    ]);
}