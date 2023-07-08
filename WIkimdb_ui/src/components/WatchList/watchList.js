import React, { Component } from "react";
import Footers from "../Footer/Footer";
import { variables } from "./Variables.js";

export default class WatchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [],
      ListID: "",
      ListName: "",
      DateAdding: "",
      CreatedUser: "",

      InputListName: "",
      InputCreatedUser: "",

      ListNameFilter: "",
      CreatedUserFilter: "",
      departmentsWithoutFilter: [],
    };
  }

  FilterFn() {
    var ListNameFilter = this.state.ListNameFilter;
    var CreatedUserFilter = this.state.CreatedUserFilter;

    var filteredData = this.state.departmentsWithoutFilter.filter(function(el) {
      return (
        el.ListName.toString()
          .toLowerCase()
          .includes(
            ListNameFilter.toString()
              .trim()
              .toLowerCase()
          ) &&
        el.CreatedUser.toString()
          .toLowerCase()
          .includes(
            CreatedUserFilter.toString()
              .trim()
              .toLowerCase()
          )
      );
    });

    this.setState({ departments: filteredData });
  }

  sortResult(prop, asc) {
    var sortedData = this.state.departmentsWithoutFilter.sort(function(a, b) {
      if (asc) {
        return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
      } else {
        return b[prop] > a[prop] ? 1 : b[prop] < a[prop] ? -1 : 0;
      }
    });

    this.setState({ departments: sortedData });
  }

  changeListNameFilter = (e) => {
    this.state.ListNameFilter = e.target.value;
    this.FilterFn();
  };
  changeCreatedUserFilter = (e) => {
    this.state.CreatedUserFilter = e.target.value;
    this.FilterFn();
  };

  changeInputListName = (e) => {
    this.state.InputListName = e.target.value;
    this.setState({
      ListName: this.state.InputListName,
      DateAdding: "blabla",
      CreatedUser: this.state.InputCreatedUser,
    });
  };

  changeInputCreatedUser = (e) => {
    this.state.InputCreatedUser = e.target.value;
    this.setState({
      ListName: this.state.InputListName,
      DateAdding: "blabla",
      CreatedUser: this.state.InputCreatedUser,
    });
  };

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

  changeCreatedUser = (e) => {
    this.setState({ CreatedUser: e.target.value });
  };

  addClick() {
    this.setState({
      ListName: this.state.InputListName,
      DateAdding: "blabla",
      CreatedUser: this.state.InputCreatedUser,
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
        ListName: this.state.ListName,
        DateAdding: this.state.DateAdding,
        CreatedUser: this.state.CreatedUser,
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

  deleteClick(id) {
    if (window.confirm("Are you sure to delete list with ID = " + id + " ?")) {
      fetch(variables.API_URL + "/" + id, {
        method: "DELETE",
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
  }

  render() {
    const {
      departments,
      ListID,
      ListName,
      DateAdding,
      CreatedUser,
    } = this.state;

    return (
      <div >
        <br />
        <br />
        <br />
        <br />
        <br />
        <table className="table table-striped" id="watchlist">
          <thead>
            <tr>
              <th>
                <div className="d-flex flex-row">
                  <input
                    className="form-control m-0 mb-2"
                    onChange={this.changeInputListName}
                    placeholder="Enter new ListName"
                  />
                </div>
              </th>
              <th>
                <div className="d-flex flex-row">
                  <input
                    className="form-control m-0 mb-2"
                    onChange={this.changeInputCreatedUser}
                    placeholder="Enter new CreatedUser"
                  />
                </div>
              </th>
              <th>
                <button
                  type="button"
                  className="btn btn-primary m-2 float-end"
                  onClick={() => this.addClick()}
                >
                  Add List
                </button>
              </th>
            </tr>
          </thead>
        </table>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <div className="d-flex flex-row">
                  <input
                    className="form-control m-0 mb-2"
                    onChange={this.changeListNameFilter}
                    placeholder="Filter"
                  />

                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => this.sortResult("ListName", true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => this.sortResult("ListName", false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-up-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                    </svg>
                  </button>
                </div>
                ListName
              </th>
              <th>
                <div className="d-flex flex-row">
                  <input
                    className="form-control m-0 mb-2"
                    onChange={this.changeCreatedUserFilter}
                    placeholder="Filter"
                  />

                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => this.sortResult("CreatedUser", true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => this.sortResult("CreatedUser", false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-up-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                    </svg>
                  </button>
                </div>
                CreatedUser
              </th>
              <th>
                <div className="d-flex flex-row">
                  <div className="d-flex flex-row">
                    <input
                      className="form-control m-0 mb-2"
                      onChange={this.changeCreatedUserFilter}
                      placeholder="Filter"
                    />

                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => this.sortResult("CreatedUser", true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-down-square-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => this.sortResult("CreatedUser", false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-up-square-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                DateAdding
              </th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dep) => (
              <tr key={dep.ListName}>
                <td>{dep.ListName}</td>
                <td>{dep.CreatedUser}</td>
                <td>{dep.DateAdding}</td>
                <td>
                  <a href={"/list/" + dep.ListID}>
                    <button
                      type="button"
                      className="btn btn-light mr-1"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>
                  </a>

                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    onClick={() => this.deleteClick(dep.ListID)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footers />
      </div>
    );
  }
}
