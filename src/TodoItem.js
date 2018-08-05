import React from "react";

class TodoItem extends React.Component {

  // 子组件如果想和父组件通信，要调用父组件传递过来的方法

  handleDelete() {
    this.props.delete(this.props.index); // 这里是调用父组件的 handleDelete 方法
  }

  render() {
    return (
      <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
    );
  }
}

export default TodoItem;
