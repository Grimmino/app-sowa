import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
        return (
            <div className = 'sw-content__item todo'>

                <TodoList items = {this.state.items} />

                <form className = 'todo__add' onSubmit={this.handleSubmit}>
                    <input
                        autocomplete = 'off'
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text} />
                    <button>
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
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
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li className = 'todo__item'>
                <div className = 'todo__item__text' key={item.id}>{item.text}</div>
                <div className = 'todo__item__close'>удалить</div>
            </li>
          ))}
        </ul>
      );
    }
  }
  
class OtherApp extends React.Component {
  render() {
    return (
        <div className = 'sw-content__item'></div>
    );
  }
}

  let mountNode = document.getElementById('content');

  ReactDOM.render(
    <div className = 'sw-content'>
      <TodoApp />
      <OtherApp />
    </div>
    , mountNode);
  