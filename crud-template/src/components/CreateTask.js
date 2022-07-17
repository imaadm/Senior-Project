import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class CreateTask extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      category:'',
      priority:0,
      assignedDate:'',
      dueDate:'',
      
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      category: this.state.category,
      priority: this.state.priority,
      assignedDate: this.state.assignedDate,
      dueDate: this.state.dueDate,
    };

    axios
      .post('http://localhost:5000/api/tasks', data)
      .then(res => {
        this.setState({
            name: '',
            category:'',
            priority:'',
            assignedDate:'',
            dueDate:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateTask!");
        console.log(err);
      })
  };

  render() {
    return (
      <div className="CreateTask">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Task List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Task</h1>
              <p className="lead text-center">
                  Create new task
              </p>

              <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Task Name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Category'
                    name='category'
                    className='form-control'
                    value={this.state.category}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='Due Date'
                    name='dueDate'
                    className='form-control'
                    value={this.state.dueDate}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Priority'
                    name='priority'
                    className='form-control'
                    value={this.state.priority}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTask;