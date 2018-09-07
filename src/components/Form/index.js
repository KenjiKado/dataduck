import React, {Component} from "react";
import Field from "../Field";
import Button from "../Button";
import ErrorBlock from "../ErrorBlock";
import "./Form.css";

import { connect } from 'react-redux';
import actions from "../../actions";


class Form extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getRadioVal(form, name) {
        let val;
        let radios = form.elements[name];

        for (let i=0, len=radios.length; i<len; i++) {
            if ( radios[i].checked ) {
                val = radios[i].value;
                break;
            }
        }
        return val;
    }
    handleSubmit(event) {
        event.preventDefault();
        let data = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            currency: this.getRadioVal(document.getElementById("form"), 'currency'),
            checkbox: document.getElementById("checkbox").checked
        };
        this.props.addUser(data);
    }
    render() {
        if(this.props.add){
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("checkbox").checked = false;
            document.getElementById("rub").checked = true;

        }
        return (
            <div className="form-block">
                {(this.props.add)? <p>Вы успешно зарегистрировались в системе, на ваш email было отправлено письмо для подтверждения регистрации</p> : ""}
                <form id="form" method="POST" onSubmit={e => this.handleSubmit(e)}>
                <div className="form-control">
                    <Field type="email" id="email" name="email" placeholder=" " errors={this.props.errors.email}>
                        <label htmlFor="email">Your e-mail</label>
                    </Field>
                </div>
                <div className="form-control">
                    <Field type="password" id="password" name="password" placeholder=" " errors={this.props.errors.password}>
                        <label htmlFor="password">Придумайте пароль</label>
                    </Field>
                </div>
                <div className="form-control">
                    <p>Валюта для ввода и вывода средств</p>
                    <div id="currency" className="currency">
                        <label>
                            <Field type="radio" id="rub" name="currency" value="rub" checked="true">
                                <span>Р</span>
                            </Field>
                        </label>
                        <label>
                            <Field type="radio" id="dollar" name="currency" value="dollar">
                                <span>$</span>
                            </Field>
                        </label>
                        <label>
                            <Field type="radio" id="euro" name="currency" value="euro">
                                <span>E</span>
                            </Field>
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <Field type="checkbox" id="checkbox" name="checkbox">
                        <label htmlFor="checkbox"></label>
                    </Field>
                    <p>Я совершеннолетний, ознакомился и принимаю соглашение об оказании услуг.</p>
                </div>
                {(this.props.errors.checkbox)?
                    <ErrorBlock>{this.props.errors.checkbox}</ErrorBlock> : ""}
                {(this.props.systemError)?
                    <ErrorBlock>{this.props.systemError}</ErrorBlock> : ""}
                <div className="form-control">
                    <Button component="button" name="submit" type="submit">Зарегистрироваться</Button>
                </div>

            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        systemError: state.systemError,
        add: state.add
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(actions.fetchUsers()),
        addUser: (user) => dispatch(actions.addUser(user))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);