import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

export default class DeskOptions extends Component {

    render() {
        return ReactDOM.createPortal(
            <div className='list-item__options__active'>
                <div>добавить метку</div>
                <div>клонировать</div>
                <div>добавить в избранноеы</div>
                <div className='list-item__options__item'>удалить</div>
                {this.props.children}
            </div>,
            document.getElementById(this.props.itemSelectedId)
        );
    }
}