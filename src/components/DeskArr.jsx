import React, { Component }  from 'react';

import DeskOptions from './DeskOptions';

export default class DeskArr extends Component {
    state = {
        itemSelectedId: null
    }

    toggleOptions = itemId => {
        const itemSelectedId = this.state.itemSelectedId === itemId ? null : itemId;
        this.setState({itemSelectedId})
    }

    render() {
        const deskOptions = this.state.itemSelectedId && <DeskOptions itemSelectedId={this.state.itemSelectedId}/>
        return (
            <ul className='boards'>
                {this.props.items.map(item => (
                    <li key={item.id} className='boards__item'>
                        <span className='boards__name'>{item.text}</span>
                        <button  className='boards__options' onClick={()=>this.toggleOptions(item.id)}></button>
                        <div className='boards__item_menu' id={item.id}>{deskOptions}</div>
                    </li>
                ))}
            </ul>
        );
    }
}