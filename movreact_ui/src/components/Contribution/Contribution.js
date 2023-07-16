import React, { Component } from "react";
import "./Contribution.css";
import { variables } from "./Variables.js";
import Footers from "../Footer/Footer";

export default class Contribution extends Component {
  constructor(props) {
    super(props);

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
      TitleType: "",

      MovieIDFilter:"",
      TitleFilter: "",
      FilmUrlFilter:"",
      IMDBRatingFilter:"",
      RuntimeFilter:"",
      ReleasedYearFilter: "",
      GenreTotalFilter: "",
      PosterLinkFilter: "",
      DirectorFilter: "",
      departmentsWithoutFilter: [],
    };
  }

  changeMovieID = (e) => {
    this.state.MovieIDFilter = e.target.value;
    this.setState({
      MovieID: this.state.MovieIDFilter,
      Title: this.state.TitleFilter,
      FilmURL: this.state.FilmUrlFilter,
      IMDBRating: this.state.IMDBRatingFilter,
      Runtime: this.state.RuntimeFilter,
      ReleasedYear: this.state.ReleasedYearFilter,
      GenreTotal: this.state.GenreTotalFilter,
      PosterLink: this.state.PosterLinkFilter,
      Director: this.state.DirectorFilter,
    });
  };

  changeTitle = (e) => {
    this.state.TitleFilter = e.target.value;
    this.setState({
      MovieID: this.state.MovieIDFilter,
      Title: this.state.TitleFilter,
      FilmURL: this.state.FilmUrlFilter,
      IMDBRating: this.state.IMDBRatingFilter,
      Runtime: this.state.RuntimeFilter,
      ReleasedYear: this.state.ReleasedYearFilter,
      GenreTotal: this.state.GenreTotalFilter,
      PosterLink: this.state.PosterLinkFilter,
      Director: this.state.DirectorFilter,
    });
  };
  

  changeFilmUrl = (e) => {
    this.state.FilmUrlFilter = e.target.value;
    this.setState({
      MovieID: this.state.MovieIDFilter,
      Title: this.state.TitleFilter,
      FilmURL: this.state.FilmUrlFilter,
      IMDBRating: this.state.IMDBRatingFilter,
      Runtime: this.state.RuntimeFilter,
      ReleasedYear: this.state.ReleasedYearFilter,
      GenreTotal: this.state.GenreTotalFilter,
      PosterLink: this.state.PosterLinkFilter,
      Director: this.state.DirectorFilter,
    });
  };

  changeImdbRating = (e) => {
    this.state.IMDBRatingFilter = e.target.value;
    this.setState({
      MovieID: this.state.MovieIDFilter,
      Title: this.state.TitleFilter,
      FilmURL: this.state.FilmUrlFilter,
      IMDBRating: this.state.IMDBRatingFilter,
      Runtime: this.state.RuntimeFilter,
      ReleasedYear: this.state.ReleasedYearFilter,
      GenreTotal: this.state.GenreTotalFilter,
      PosterLink: this.state.PosterLinkFilter,
      Director: this.state.DirectorFilter,
    });
  };

  changeRuntime = (e) => {
    this.state.RuntimeFilter = e.target.value;
    this.setState({
      MovieID: this.state.MovieIDFilter,
      Title: this.state.TitleFilter,
      FilmURL: this.state.FilmUrlFilter,
      IMDBRating: this.state.IMDBRatingFilter,
      Runtime: this.state.RuntimeFilter,
      ReleasedYear: this.state.ReleasedYearFilter,
      GenreTotal: this.state.GenreTotalFilter,
      PosterLink: this.state.PosterLinkFilter,
      Director: this.state.DirectorFilter,
    });
  };

  changeReleasedYear = (e) => {
    this.state.ReleasedYearFilter = e.target.value;
    this.setState({
      MovieID: this.state.MovieIDFilter,
      Title: this.state.TitleFilter,
      FilmURL: this.state.FilmUrlFilter,
      IMDBRating: this.state.IMDBRatingFilter,
      Runtime: this.state.RuntimeFilter,
      ReleasedYear: this.state.ReleasedYearFilter,
      GenreTotal: this.state.GenreTotalFilter,
      PosterLink: this.state.PosterLinkFilter,
      Director: this.state.DirectorFilter,
    });
  };

  changeGenreTotal = (e) => {
    this.state.GenreTotalFilter = e.target.value;
    this.setState({
      MovieID: this.state.MovieIDFilter,
      Title: this.state.TitleFilter,
      FilmURL: this.state.FilmUrlFilter,
      IMDBRating: this.state.IMDBRatingFilter,
      Runtime: this.state.RuntimeFilter,
      ReleasedYear: this.state.ReleasedYearFilter,
      GenreTotal: this.state.GenreTotalFilter,
      PosterLink: this.state.PosterLinkFilter,
      Director: this.state.DirectorFilter,
    });
  };

  changePosterLink = (e) => {
    this.state.PosterLinkFilter = e.target.value;
    this.setState({
      MovieID: this.state.MovieIDFilter,
      Title: this.state.TitleFilter,
      FilmURL: this.state.FilmUrlFilter,
      IMDBRating: this.state.IMDBRatingFilter,
      Runtime: this.state.RuntimeFilter,
      ReleasedYear: this.state.ReleasedYearFilter,
      GenreTotal: this.state.GenreTotalFilter,
      PosterLink: this.state.PosterLinkFilter,
      Director: this.state.DirectorFilter,
    });
  };

  changeDirector = (e) => {
    this.state.DirectorFilter = e.target.value;
    this.setState({
      MovieID: this.state.MovieIDFilter,
      Title: this.state.TitleFilter,
      FilmURL: this.state.FilmUrlFilter,
      IMDBRating: this.state.IMDBRatingFilter,
      Runtime: this.state.RuntimeFilter,
      ReleasedYear: this.state.ReleasedYearFilter,
      GenreTotal: this.state.GenreTotalFilter,
      PosterLink: this.state.PosterLinkFilter,
      Director: this.state.DirectorFilter,
    });
  };


  addClick() {
    this.setState({
      MovieID: this.state.MovieID,
      Title: this.state.Title,
      FilmURL: this.state.FilmUrlF,
      IMDBRating: this.state.IMDBRating,
      Runtime: this.state.Runtime,
      ReleasedYear: this.state.ReleasedYear,
      GenreTotal: this.state.GenreTotal,
      PosterLink: this.state.PosterLink,
      Director: this.state.Director,
    });
    this.createClick();
  }

  refreshList() {
    fetch(variables.API_URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ departments: data, departmentsWithoutFilter: data });
      });
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
        Title: this.state.Title,
        FilmURL: this.state.FilmURL,
        IMDBRating: this.state.IMDBRating,
        Runtime: this.state.Runtime,
        ReleasedYear: this.state.ReleasedYear,
        GenreTotal: this.state.GenreTotal,
        PosterLink: this.state.PosterLink,
        Director: this.state.Director,
        TitleType: "Movie",
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

  render() {
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
    } = this.state;

    return (
      <>  
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="login-box">
          <h2>Contribution</h2>
          <form method="POST">
            <div class="user-box">
              <input type="text" name="" required="" onChange={this.changeMovieID}/>
              <label >MovieID</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" onChange={this.changeTitle}/>
              <label >Title</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" onChange={this.changeFilmUrl} />
              <label >FilmURL</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" onChange={this.changeImdbRating}/>
              <label >IMDBRating</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" onChange={this.changeRuntime}/>
              <label >Runtime</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" onChange={this.changeReleasedYear}/>
              <label >ReleasedYear</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" onChange={this.changePosterLink}/>
              <label >PosterLink</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" onChange={this.changeDirector}/>
              <label >Director</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" onChange={this.changeGenreTotal}/>
              <label >GenreTotal (with ' , ')</label>
            </div>

            <a onClick={() => this.addClick()}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
        <Footers></Footers>
      </>
    );
  }
}
