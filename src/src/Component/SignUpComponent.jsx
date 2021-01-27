import React, { Component } from "react";
import UserService from "../services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signupLogin.css";
import "./script";
import {
  Facebook,
  Google,
  Twitter,
  PersonPlusFill,
  PersonCircle,
  EnvelopeFill,
  PhoneFill,
  LockFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import medeasy from "../images/medeasy.png";
import Footer from "./Footer";
import NavBar from "./NavBar";

class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.match.params.userId,
      firstName: "",
      lastName: "",
      userPhone: "",
      emailId: "",
      userPassword: "",
      confirmPassword: "",
      role:{roleId:2},
      userAddress:{flatNo:"no:2"},
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }

  // componentDidMount() {
  //   if (this.state.userId === "_add") {
  //     return;
  //   } else {
  //     UserService.getUserById(this.state.userId).then((res) => {
  //       let user = res.data;
  //       this.setState({
  //         firstName: user.firstName,
  //         lastName: user.lastName,
  //         userPhone: user.userPhone,
  //         emailId: user.emailId,
  //         userPassword: user.userPassword,
  //         confirmPassword: user.confirmPassword,
  //       });
  //     });
  //   }
  // }
  saveOrUpdateUser = (e) => {
    
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userPhone: this.state.userPhone,
      emailId: this.state.emailId,
      userPassword: this.state.userPassword,
      confirmPassword: this.state.confirmPassword,
      role:{roleId:2},
      userAddress:{flatNo:"no:2"},
    };
    console.log("User => " + JSON.stringify(user));

    if (this.state.userId === "_add") {
      UserService.createUser(user).then((res) => {
        this.props.history.push("/");
      });
    } else {
      UserService.updateUser(user, this.state.userId).then((res) => {
        this.props.history.push("/");
      });
    }
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeUserPhoneHandler = (event) => {
    this.setState({ userPhone: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  changeUserPasswordHandler = (event) => {
    this.setState({ userPassword: event.target.value });
  };
  changeConfirmPasswordHandler = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };
 
  render() {
    return (
      <div className="backgroun">
        <NavBar />
        <div className="container">
          <div className="row py-0 mt-4 align-items-center">
            <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
                alt=""
                className="img-fluid mb-3 d-none d-md-block"
              />
              <h1>Create an Account</h1>
              <p className="font-italic text-muted mb-0">
                We care for your Health
              </p>
            </div>

            <div className="col-md-7 col-lg-6 ml-auto">
              <form action="#" onSubmit={this.handleSubmit}>
                <div id="head">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <a href="#" id="heading">
                      <span id="medhead">MedEasy</span>{" "}
                      <img
                        src={medeasy}
                        id="medlogo"
                        alt="MedEasy"
                        className="vert-move"
                      />
                      {/* <span id="reg">&reg;</span> */}
                    </a>
                  </Link>
                </div>

                <div className="row">
                  <div className="input-group col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        {/* <i className="fa fa-user text-muted"> */}
                        <PersonCircle />
                        {/* </i> */}
                      </span>
                    </div>
                    <input
                      id="firstName"
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                      required
                    />
                  </div>
                  <div className="input-group col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        {/* <i className="fa fa-user text-muted"> */}
                        <PersonCircle />
                        {/* </i> */}
                      </span>
                    </div>
                    <input
                      id="lastName"
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0 ic">
                        <EnvelopeFill />
                      </span>
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        {/* <i className="fa fa-phone-square text-muted"> */}
                        <PhoneFill />
                        {/* </i> */}
                      </span>
                    </div>

                    <input
                      id="phoneNumber"
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="form-control bg-white border-md border-left-0 pl-3"
                      value={this.state.userPhone}
                      onChange={this.changeUserPhoneHandler}
                    />
                  </div>

                  <div className="input-group col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        {/* <i className="fa fa-lock text-muted"> */}
                        <LockFill />
                        {/* </i> */}
                      </span>
                    </div>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.userPassword}
                      onChange={this.changeUserPasswordHandler}
                    />
                  </div>
                  <div className="input-group col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        {/* <i className="fa fa-lock text-muted"> */}
                        <LockFill />
                        {/* </i> */}
                      </span>
                    </div>
                    <input
                      id="passwordConfirmation"
                      type="password"
                      name="passwordConfirmation"
                      placeholder="Confirm Password"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.confirmPassword}
                      onChange={this.changeConfirmPasswordHandler}
                    />
                  </div>
                  
                  <div className="form-group col-lg-12 mx-auto mb-0">
                    <button
                      // href="#"
                      className="btn btn-primary btn-block py-2 acc"
                      onClick={this.saveOrUpdateUser}
                    >
                      <i className="fa fa-facebook-f mr-2">
                        <PersonPlusFill />
                      </i>
                      <span className="font-weight-bold">
                        Create your account
                      </span>
                    </button>
                  </div>
                  <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    <div className="border-bottom w-100 ml-5 or"></div>
                    <span className="px-2 small text-muted font-weight-bold text-muted">
                      OR
                    </span>
                    <div className="border-bottom w-100 mr-5 or"></div>
                  </div>
                  <div className="form-group col-lg-12 mx-auto">
                    <button
                      href="#"
                      className="btn btn-primary btn-block py-2 btn-facebook"
                    >
                      <i className="fa fa-facebook-f mr-2">
                        <Facebook />
                      </i>
                      <span className="font-weight-bold">
                        Continue with Facebook
                      </span>
                    </button>
                    <button
                      href="#"
                      className="btn btn-primary btn-block py-2 btn-twitter"
                    >
                      <i className="fa fa-twitter mr-2">
                        <Twitter />
                      </i>
                      <span className="font-weight-bold">
                        Continue with Twitter
                      </span>
                    </button>
                    <button
                      href="#"
                      className="btn btn-primary btn-block py-2 btn-google"
                    >
                      <i className="fa fa-google-f mr-2">
                        <Google />
                      </i>

                      <span className="font-weight-bold">
                        Continue with Google
                      </span>
                    </button>
                  </div>
                  <div className="text-center w-100">
                    <p className="bottom">
                      Already Registered?{" "}
                      <Link to="/login/_add1" style={{ color: "blue" }}>
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUpComponent;
