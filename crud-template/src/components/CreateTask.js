import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateTask extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      category:'',
      due_date:'',
      priority:0,
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userKey = localStorage.getItem("userInfo");
    const data = {
      name: this.state.name,
      category: this.state.category,
      due_date: this.state.due_date,
      priority: this.state.priority,
      id: userKey
    };

    axios
      .post('http://localhost:5000/api/tasks', data)
      .then(res => {
        this.setState({
            name: '',
            category:'',
            due_date:'',
            priority:0,
            id: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateTask!");
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
                  Show BooK List
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
                    placeholder='Title of the Task'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='ISBN'
                    name='isbn'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>


                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Publisher of this Task'
                    name='publisher'
                    className='form-control'
                    value={this.state.publisher}
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