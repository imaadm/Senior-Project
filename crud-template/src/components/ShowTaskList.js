import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class ShowTaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/tasks')
      .then(res => {
        this.setState({
          tasks: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowtaskList');
      })
  };


  render() {
    const tasks = this.state.tasks;
    console.log("Printtask: " + tasks);
    let bookList;

    if(!tasks) {
      bookList = "there is no book record!";
    } else {
      bookList = tasks.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">tasks List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {bookList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowTaskList;