import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Footers from "../Footer/Footer";
import "./css/styleFilms.css";
import "../Home/css/font-awesome.min.css";
import "../Home/css/tooplate-gymso-style.css";
import FilmBox from "../filmBox/filmBox";
import { Fragment, useState } from "react";
import { variables } from "../Contribution/Variables";
//import Multiselect from "multiselect-react-dropdown";

export default class Films extends Component {
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
      Genre: "",

      TitleFilter: "",
      DirectorFilter: "",
      GenreFilter: "",
      //GenreCount: 0,
      departmentsWithoutFilter: [],
    };
  }

  FilterFn() {
    var TitleFilter = this.state.TitleFilter;
    var DirectorFilter = this.state.DirectorFilter;
    var GenreFilter = this.state.GenreFilter;

    var filteredData = this.state.departmentsWithoutFilter.filter(function(el) {
      return (
        el.Title.toString()
          .toLowerCase()
          .includes(
            TitleFilter.toString()
              .trim()
              .toLowerCase()
          ) &&
        el.Director.toString()
          .toLowerCase()
          .includes(
            DirectorFilter.toString()
              .trim()
              .toLowerCase()
          ) &&
        el.GenreTotal.toString()
          .toLowerCase()
          .includes(
            GenreFilter.toString()
              .trim()
              .toLowerCase()
          )
      );
    });

    this.setState({ departments: filteredData });
  }

  searchClick(TitleFilter) {
    var TitleFilter = this.state.TitleFilter;
    fetch(variables.API_URL + "/Title/" + TitleFilter, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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

  changeTitleFilter = (e) => {
    this.state.TitleFilter = e.target.value;
    this.FilterFn();
  };
  changeDirectorFilter = (e) => {
    this.state.DirectorFilter = e.target.value;
    this.FilterFn();
  };

  changeGenreFilter = (e) => {
    this.state.GenreFilter = e.target.value;
    this.FilterFn();
  };

  // changeMul = (value) => {
  //   var options = document.getElementById("select-meal-type").selectedOptions;
  //   var values = Array.from(options).map(({ selectedValue}) => selectedValue);
  //   console.log(values);
  // };

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
    const state = {
      options: [
        { name: "All", value: "" },
        { name: "Fantasy", value: "Fantasy" },
        { name: "Adventure", value: "Adventure" },
        { name: "Animation", value: "Animation" },
        { name: "Crime", value: "Crime" },
        { name: "Mystery", value: "Mystery" },
        { name: "Drama", value: "Drama" },
        { name: "Thriller", value: "Thriller" },
        { name: "Action", value: "Action" },
        { name: "Romance", value: "Romance" },
        { name: "Sci-fi", value: "Sci-fi" },
        { name: "Horror", value: "Horror" },
        { name: "Comedy", value: "Comedy" },
        { name: "Documentary", value: "Documentary" },
      ],
    };

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
      <div className="background">
        {/* Thanh search Bar */}
        <div class="s002">
          <form>
            <fieldset>
              <legend>SEARCH FILMS</legend>
            </fieldset>
            <section class="search-sec ">
              <div class="container ">
                <form
                  method="get"
                  onSubmit={() => this.searchClick()}
                  novalidate="novalidate"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="row">
                        {/* Điền tên phim */}
                        <div class="col-lg-4 col-md-4 col-sm-9 p-0">
                          <input
                            type="text"
                            class="form-control search-slt"
                            placeholder="Enter Film's Name"
                            onChange={this.changeTitleFilter}
                          />
                        </div>
                        {/* Tác giả */}
                        <div class="col-lg-4 col-md-4 col-sm-9 p-0">
                          <input
                            type="text"
                            class="form-control search-slt"
                            placeholder="Enter Director's Name"
                            onChange={this.changeDirectorFilter}
                          />
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-9 p-0">
                          <select
                            class="form-control search-slt"
                            onChange={this.changeGenreFilter}
                          >
                            <option value="" disabled selected>
                              Select your option
                            </option>
                            {state.options.map((option) => (
                              <option value={option.value}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* <div className="col-lg-11 col-md-11 col-sm-12 p-0">
                          <Multiselect
                            id="select-meal-type"
                            options={state.options} // Options to display in the dropdown
                            selectedValues={state.selectedValue} // Preselected value to persist in dropdown
                            // onSelect={this.onSelect} // Function will trigger on select event
                            // onRemove={this.onRemove} // Function will trigger on remove event
                            displayValue="name" // Property name to display in the dropdown options
                            className="form-control search-slt"
                            onSelect={this.changeGenreFilter}
                          />
                        </div> */}

                        {/* <div class="col-lg-11 col-md-11 col-sm-9 p-0">
                          <button
                            type="button btn-danger submit"
                            class="wrn-btn"
                          >
                            Search
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </form>
        </div>
        {/* Bắt đầu từ đây là phần list ra các phim
          4 thẻ 1 dòng*/}
        {/* Chưa code nếu k có phim thì như nào vì cũng không biết nó kết nối ra sao */}
        <section className="class section" id="class">
          <div class="container">
            <div class="row">
              {/* Thanh thông báo */}
              <div class="col-lg-12 col-12 text-center mb-5">
                <h2>Look at what we found you !</h2>
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
