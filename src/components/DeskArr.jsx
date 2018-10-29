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
            <div>
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.id} className='list-item'>
                            <span className='list-item__name'>{item.text}</span>
                            <button  className='list-item__options' onClick={()=>this.toggleOptions(item.id)}></button>
                            <div id={item.id}>{deskOptions}</div>
                        </li>
                    ))}
                </ul>
          </div>
        );
    }
}