import React from "react";

class TodoItem extends React.Component {
  // 子组件如果想和父组件通信，要调用父组件传递过来的方法
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { doDelete, index } = this.props;
    doDelete(index); // 这里是调用父组件的 handleDelete 方法
  }

  render() {
    const { content } = this.props;
    return <div onClick={this.handleDelete}>{content}</div>;
  }
}

export default TodoItem;
