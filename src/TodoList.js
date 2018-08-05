import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    };
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

<<<<<<< HEAD
  handleItemClick(index){
    const list = [...this.state.list];
    list.splice(index, 1);
    
    this.setState({list})
  }

=======
  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({ list });
  }

  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过procs接收父组件传递过来的参数

>>>>>>> React 中组件的拆分
  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>Add</button>
        </div>
        <ul>
<<<<<<< HEAD
          {
            this.state.list.map((item, index) => {
              return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
            })
          }
=======
          {this.state.list.map((item, index) => {
            return <TodoItem content={item} key={index}/>;
            //return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
          })}
>>>>>>> React 中组件的拆分
        </ul>
      </div>
    );
  }
}

export default TodoList;
