import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API"
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function LoginCard() {
    const history = useHistory();
    const [userAccount, setUserAccount] = useState({
        userID: '',
        password: ''
    })
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserAccount({
            ...userAccount,
            [name]: value
        })
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(userAccount);
        API.getAccountByID(userAccount.userID).then(res => {
            console.log(res.data)
            setUserAccount({
                userID: '',
                password: ''
            })
            if(res.data===null){
                console.log("invalid user credentials")
            } else if(res.data.password===userAccount.password){
                console.log("login successful");
            } else{
                console.log("incorrect login");
            }
            // history.push("/")

        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="container">
            <h5 className="loginTitle">Login to your MHA Account:</h5>
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card red darken-4 loginCard">
                        <div className="card-content white-text">
                            <form className="container" onSubmit={handleFormSubmit}>
                                <div className="row">
                                    <x-h7 className="white-text">User ID:</x-h7>
                                    <div className="input-field col m12 white">
                                        <input onChange={handleInputChange} value={userAccount.userID} className="validate" name="userID" type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <x-h7 className="white-text">Password:</x-h7>
                                    <div className="input-field col m12 white">
                                        <input onChange={handleInputChange} value={userAccount.password} className="validate" name="password" type="password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <input className="loginButton" type="submit" value="Login" />
                                    <Link to="/createaccount"><input className="loginButton" type="button" value="Create Account" /></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id="loginBumper">
            </div>
        </div>
    );
}

export default LoginCard;