import React, { Component }  from 'react';

import DeskArr from './DeskArr';

export default class Desk extends Component {
    state = { 
        items: [], 
        text: '' 
    };
  
    render() {
        return (
            <div>
                <DeskArr items = {this.state.items} />
                <form className='boards__form' onSubmit={this.handleSubmit}>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                        autoComplete='off'
                        placeholder='введите название'
                    />
                    <button>создать доску</button>
                </form>
            </div>
        );
    }
  
    handleChange = e => {
        this.setState({ text: e.target.value });
    }
  
    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}