import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Footers from "../Footer/Footer";
import "./styleForum.css";
import ForumBox from "./ForumBox";
import { variables } from "./Variables.js";

class Forum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [],
      MovieID: "",
      Title: "",
      Username: "",
      Comment: "",
      CommentDate: "",

      InputMovieID: "",
      InputUsername: "",
      InputComment: "",
      departmentsWithoutFilter: [],
    };
  }

  changeInputMovieID = (e) => {
    this.state.InputMovieID = e.target.value;
    this.setState({
      MovieID: this.state.InputMovieID,
      Username: this.state.InputUsername,
      Comment: this.state.InputComment,
      Title: "string",
      CommentDate: "string",
    });
  };

  changeInputUsername = (e) => {
    this.state.InputUsername = e.target.value;
    this.setState({
      MovieID: this.state.InputMovieID,
      Username: this.state.InputUsername,
      Comment: this.state.InputComment,
      Title: "string",
      CommentDate: "string",
    });
  };

  changeInputComment = (e) => {
    this.state.InputComment = e.target.value;
    this.setState({
      MovieID: this.state.InputMovieID,
      Username: this.state.InputUsername,
      Comment: this.state.InputComment,
      Title: "string",
      CommentDate: "string",
    });
  };

  addClick() {
    this.setState({
      MovieID: this.state.InputMovieID,
      Username: this.state.InputUsername,
      Comment: this.state.InputComment,
      Title: "string",
      CommentDate: "string",
    });
    this.createClick();
  }

  createClick() {
    fetch(variables.API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MovieID: this.state.MovieID,
        Username: this.state.Username,
        Comment: this.state.Comment,
        Title: "string",
        CommentDate: "string",
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  refreshList() {
    fetch(variables.API_URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ departments: data, departmentsWithoutFilter: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }
  render() {
    const {
      departments,
      MovieID,
      Title,
      Username,
      Comment,
      CommentDate,

      InputMovieID,
    } = this.state;
    return (
      <>
        <br />
        <br />
        <br />

        <section className="mt-5" id="background">
          <div class="container">
            <div class="row">
              <div class="col-sm-5 col-md-6 col-12 pb-4">
                <h1>Comments</h1>

                <>
                  {departments.map((forum) => (
                    <ForumBox
                      MovieID={forum.MovieID}
                      Title={forum.Title}
                      Username={forum.Username}
                      Comment={forum.Comment}
                      CommentDate={forum.CommentDate}
                    />
                  ))}
                </>
              </div>
              <div class="col-lg-5 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4 mb-4">
                <form id="algin-form">
                  <div class="form-group">
                    <h4>Leave a comment</h4>
                    <br />
                    <label for="message">Message</label>
                    <br />
                    <textarea
                      // value={textarea}
                      onChange={this.changeInputComment}
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="name">Username</label>
                    <input
                      type="text"
                      name="name"
                      id="fullname"
                      class="form-control"
                      onChange={this.changeInputUsername}
                    />
                  </div>
                  <div class="form-group">
                    <label for="film">Movie ID</label>
                    <input
                      type="text"
                      name="film"
                      id="film"
                      class="form-control"
                      onChange={this.changeInputMovieID}
                    />
                  </div>
                  <div class="form-group"></div>
                  <div class="form-inline">
                    <input
                      type="checkbox"
                      name="check"
                      id="checkbx"
                      class="mr-1"
                    />
                    <label for="subscribe">
                      Subscribe me to the newlettter
                    </label>
                  </div>
                  <div class="form-group">
                    <button
                      type="button"
                      id="post"
                      class="btn"
                      onClick={() => this.addClick()}
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footers />
      </>
    );
  }
}

export default Forum;
