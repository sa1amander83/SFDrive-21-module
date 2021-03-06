import React, {Component} from "react";

import "./styles/form.scss";

class EntryForm extends Component {

render () {
    return (
<div className="modal__form is-animated">
    <div className="modal__form-wrapper is-animated">
        <form className="modal__form-form" action="#">
            <div className="modal__form-close icon-close"></div>
            <img src="img/sign_in.svg" alt="" className="sign__in__img"/>
                   <h3 className="autorize">Авторизация</h3>
            <input type="email" placeholder="Электронная почта" autoComplete="username" required />
               <input  className="passform" type="password" placeholder="Пароль" autoComplete="current-password"  required/>
                    <a href="#"  className="forgot__password">Забыли?</a>
              <button className="modal__form-send">Войти</button>
            <div className="modal__form_rectangle"></div>
            <a className="register-link" href="#">Зарегистрироваться</a>
        </form>
    </div>
    </div>
    );
}

}

export default EntryForm;