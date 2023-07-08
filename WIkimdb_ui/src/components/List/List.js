import React, { Children, Component } from "react";
import FilmBox from "../filmBox/filmBox.jsx";
import { variables } from "./Variables.js";
import Footers from "../Footer/Footer";
import "./list.css";
import { useParams } from "react-router-dom";

export default function List() {
  let { id } = useParams();
  return <Bla hookValue={id}></Bla>;
}

class Bla extends Component {
  constructor(props) {
    super(props);

    //const ListID = this.props.hookValue;

    this.state = {
      departments: [],
      MovieID: "",
      Title: "",
      FilmURL: "",
      IMDBRating: "",
      Runtime: "",
      ReleasedYear: "",
      GenreTotal: "",
      PosterLink: "",
      Director: "",
      Genre: "",

      InputMovieIDtoAdd: "",
      InputMovieIDtoDel: "",

      ListID: "",
    };
  }

  changeInputMovieIDtoAdd = (e) => {
    this.state.InputMovieIDtoAdd = e.target.value;
    this.setState({
      MovieID: this.state.InputMovieIDtoAdd,
    });
  };

  changeInputMovieIDtoDel = (e) => {
    this.state.InputMovieIDtoDel = e.target.value;
    this.setState({
      MovieID: this.state.InputMovieIDtoDel,
    });
  };

  addClick() {
    this.setState({
      MovieID: this.state.InputMovieIDtoAdd,
      ListID: this.props.hookValue,
    });
    this.createClickAdd();
  }

  createClickAdd() {
    fetch(variables.API_URL + "/AddFilmToList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MovieID: this.state.MovieID,
        ListID: this.state.ListID,
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

  delClick() {
    this.setState({
      MovieID: this.state.InputMovieIDtoDel,
      ListID: this.props.hookValue,
    });
    this.createClickDel();
  }

  createClickDel() {
    if (
      window.confirm(
        "Are you sure to delete list with ID = " + this.state.MovieID + " ?"
      )
    ) {
      fetch(variables.API_URL + "/DeleteFilmFromList", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          MovieID: this.state.MovieID,
          ListID: this.state.ListID,
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
  }

  refreshList() {
    fetch(variables.API_URL + "/GetInfoListID/" + this.props.hookValue)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ departments: data, departmentsWithoutFilter: data });
      });
  }
  componentDidMount() {
    this.refreshList();
  }
  render() {
    const ListID = this.props.hookValue;

    const {
      departments,
      MovieID,
      Title,
      FilmURL,
      IMDBRating,
      Runtime,
      ReleasedYear,
      PosterLink,
      Director,
      GenreTotal,
      InputMovieIDtoAdd,
    } = this.state;
    return (
      <div>
        <div class="container" id="addingbar">
          <br />
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
              <form class="card card-sm">
                <div class="card-body row no-gutters align-items-center">
                  <div class="col">
                    <input
                      className="form-control form-control-lg form-control-borderless"
                      type="search"
                      onChange={this.changeInputMovieIDtoAdd}
                      placeholder="Enter MovieID to Add"
                    />
                  </div>

                  <div class="col-auto">
                    <button
                      class="btn btn-lg btn-success"
                      type="button"
                      onClick={() => this.addClick()}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
              <form class="card card-sm">
                <div class="card-body row no-gutters align-items-center">
                  <div class="col">
                    <input
                      className="form-control form-control-lg form-control-borderless"
                      type="search"
                      onChange={this.changeInputMovieIDtoDel}
                      placeholder="Enter MovieID to Delete"
                    />
                  </div>

                  <div class="col-auto">
                    <button
                      class="btn btn-lg btn-danger"
                      type="button"
                      onClick={() => this.delClick()}
                    >
                      Del
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <section className="class section" id="class">
          <div class="container">
            <div class="row">
              {/* Thanh thông báo */}
              <div class="col-lg-12 col-12 text-center mb-5">
                <h2>Look at what you have</h2>
                <p>List - {ListID}</p>
                <p>{MovieID}</p>
              </div>
              <>
                {departments.map((film) => (
                  <FilmBox
                    MovieID={film.MovieID}
                    Title={film.Title}
                    FilmURL={film.FilmURL}
                    IMDBRating={film.IMDBRating}
                    Runtime={film.Runtime}
                    ReleasedYear={film.ReleasedYear}
                    PosterLink={film.PosterLink}
                    Director={film.Director}
                    GenreTotal={film.GenreTotal}
                  />
                ))}
              </>
            </div>
          </div>
        </section>

        <Footers />
      </div>
    );
  }
}
