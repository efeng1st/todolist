import React, { Component } from "react";

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        'Learn React',
        'Learn English',
        'Learn Vue',
        'Learn Git'
      ]
    }
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, 'Hello World']
    })
  }

  render() {
    return (
      <div>
        <div>
          <input />
          <button onClick={this.handleBtnClick.bind(this)}>Add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
