import "./userStyle.css";
import Footers from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

const WatchList = () => {
  return (
    <div class="login-box">
  <h2>Login</h2>
  <form>

    {/* Login name */}
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>

    {/* Password */}
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    
    {/* Nút submit, hướng đến đâu thì chỉnh sửa cái href là được */}
    <a href="watchList">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
  );
};

export default WatchList;
