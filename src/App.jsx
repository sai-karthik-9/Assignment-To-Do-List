import { Component } from "react";
import Display from "./Display.jsx";
import "./App.css";

export default class App extends Component {
  state = {
    totalTasks: [],
    Note: {
      key: '',
      description: '',
    },
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange = (e) => {
    const noteDescription = e.target.value;
    this.setState({
      Note: {
        key: Date.now(),
        description: noteDescription,
      },
    });
  };

  handleDelete = (key) => {
    const updatedTasks = this.state.totalTasks.filter(item => item.key !== key);
    this.setState({ totalTasks: updatedTasks });
  };

  handleUpdate = (newDescription, key) => {
    const updatedTasks = this.state.totalTasks.map(item => 
      item.key === key ? { ...item, description: newDescription } : item
    );
    this.setState({ totalTasks: updatedTasks });
  };

  handleSubmit = () => {
    const newTask = this.state.Note;
    if (newTask.description.trim() !== "") {
      this.setState(prevState => ({
        totalTasks: prevState.totalTasks.concat(newTask),
        Note: { key: '', description: '' },
      }));
    }
  };

  render() {
    return (
      <div className="container">
        <div>
          <input
            className="inputBox"
            type="text"
            placeholder="Add your Note"
            value={this.state.Note.description}
            onChange={this.handleChange}
          />
          <button
            className="addbtn"
            type="button"
            onClick={this.handleSubmit}
          >
            Add Note
          </button>
        </div>
        <p>{this.state.Note.description}</p>
        <Display
          totalTasks={this.state.totalTasks}
          deleteTask={this.handleDelete}
          updateTask={this.handleUpdate}
        />
      </div>
    );
  }
}