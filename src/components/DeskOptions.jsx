import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

export default class DeskOptions extends Component {

    render() {
        return ReactDOM.createPortal(
            <div>
                <div>добавить метку</div>
                <div>клонировать</div>
                <div>добавить в избранноеы</div>
                <div className='swlist__item_delete'>удалить</div>
                {this.props.children}
            </div>,
            document.getElementById(this.props.itemSelectedId)
        );
    }
}