import React, { Component }  from 'react';

export default class ProfileMini extends Component {
    state = {
        isOpen: false
    }

    render() {
        const login = this.state.isOpen &&  <Login />
        return (
            <div className='top-nav__miniprofile'>
                <div className='top-nav__miniprofile__avatar'></div>
                <div className='top-nav__miniprofile__login' onClick = {this.handleClick}>войти</div>
                <div>{login}</div>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

const LoginStyle = {
};
const LoginTitle = {
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 30,
};

function Login({ onSubmit }) {

    return(
        <form className = 'popup popup__login' onSubmit={onSubmit} style={LoginStyle}>
            <div style={LoginTitle}><span>app-SOWA</span></div>
            <input type="text" name="firstname" placeholder="Имя" autoComplete="off"/>
            <input type="password" name="password" placeholder="Пароль"/>
            <button type="submit" className="btn">Регистрация</button>
        </form>
    );
}