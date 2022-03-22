import React from "react";
import styles from "../components/TodoItem.module.css";

class TodosItem extends React.Component {
  state = {
    editing: false,
  };

  componentWillUnmount() {
    console.log("Cleaning up...")
  }
  
  handleEditing = () => {
    this.setState({
      editing: true,
    });
    console.log("edit mode activated");
  };
  handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      this.setState({ editing: false });
    }
    console.log(event.key);
  };

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    const { completed, id, title } = this.props.todo;
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
      editMode.display = "block";
    } else {
      editMode.display = "none";
      viewMode.display = "block";
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodosItem;
