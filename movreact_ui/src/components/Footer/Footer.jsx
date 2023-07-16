import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./styleFooter.css";

function Footers() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="ml-auto mb-4 col-12">
            <br />
            <br />
            <p style={{ fontSize: 18 }}>PROJECT PHILOSOPHY</p>
            <p style={{ fontSize: 22 }}>
              "Without films, a soul is not a soul."
            </p>
          </div>

          <div className="d-flex justify-content-center mx-auto col-12">
            <p className="m-auto col-lg-3 col-md-6 col-12">
              <i className="fa fa-envelope-o mr-1" ></i>
              <a href="#" >Bao.KM210098@sis.hust.edu.vn</a>
              <p>
                <i className="fa fa-phone mr-1"></i> 037-563-9568
              </p>
            </p>

            <p className="m-auto col-lg-3 col-md-6 col-12">
              <i className="fa fa-envelope-o mr-1"></i>
              <a href="#"> Duc.PT215038@sis.hust.edu.vn</a>
              <p>
                <i className="fa fa-phone mr-1"></i> 086-920-7890
              </p>
            </p>

            <p className="m-auto col-lg-3 col-md-6 col-12">
              <i className="fa fa-envelope-o mr-1"></i>
              <a href="#">Duong.NGT215023@sis.hust.edu.vn</a>
              <p>
                <i className="fa fa-phone mr-1"></i> 094-467-0350
              </p>
            </p>

            <p className="m-auto col-lg-3 col-md-6 col-12">
              <i className="fa fa-envelope-o mr-1"></i>
              <a href="#">Gioi.DV215041@sis.hust.edu.vn</a>
              <p>
                <i className="fa fa-phone mr-1"></i> 010-020-0000
              </p>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
