import { useState } from "react";
import {useDispatch, useSelector } from 'react-redux';
import { signup } from "../../../features/user.js/UserSlice";
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import "./Signup.css";


function SignupPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user} = useSelector((state) => state.user); 
  console.log('user:', user);
 
    let [formData, setFormData] = useState({
        username : "",
        password : "",
        email : "",
    });

    let handleInputChange = (event) => {
        setFormData( (currData) => ({
          ...currData, [event.target.name] : event.target.value,
        }))};

    let handleSubmit = async(event) => {
        event.preventDefault();

  
        dispatch(signup(formData));
        navigate('/dashboard');

        setFormData({
            username : "",
            password : "",
            email : "",
        });
    }



    return ( 
        <div className="container col-4 mt-3">
             <h4 className=" text-center">Sing in to TradeGo</h4>
            <div className="p-4 sup-box mt-4">

                <form onSubmit={handleSubmit}>
              
                <label htmlFor="username">Username</label>
                <input type="text" 
                value={formData.username}
                name="username"
                placeholder="richa_030"
                onChange={handleInputChange}
                id="username" 
                required
                label="username"
                className="form-control" 
                aria-describedby="passwordHelpBlock"
               />
                <br />

                <label htmlFor="email">Email</label>
                <input type="email"
                  value={formData.email}
                  name="email" 
                  placeholder="name@example.com"
                  onChange={handleInputChange}
                  id="email"
                  className="form-control"
                 />
                <br />

                 <label htmlFor="inputPassword5" className="form-label">Password</label>
                <input type="password"
                  id="inputPassword5"
                  placeholder="enter password"
                  value={formData.password}
                  name="password"
                  onChange={handleInputChange}
                  className="form-control" 
                  aria-describedby="passwordHelpBlock"/>
                  <br />
                  <Button type="submit" variant="contained" disableElevation>Submit</Button>  
                </form></div>
        </div>
     );
}

export default SignupPage;