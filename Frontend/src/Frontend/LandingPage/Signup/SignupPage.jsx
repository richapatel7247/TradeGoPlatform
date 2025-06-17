import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./Signup.css";

function SignupPage() {
    let [formData, setFormData] = useState({
        username : "",
        password : "",
        email : "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
          return{...currData, [event.target.name] :event.target.value};
        }
      )};

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName : "",
            userName : "",
            password : ""
        });
    }

    return ( 
        <div className="container col-4 mt-3">
            <h4 className=" text-center">Sing in to TradeGo</h4>
            <div className="p-4 sup-box mt-4">
                <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" 
                id="username" 
                class="form-control" 
                aria-describedby="passwordHelpBlock"
                placeholder="enter username"
                value={formData.username}
                name="username"
                onChange={handleInputChange}/>
                <br />

                <label htmlFor="email">Email</label>
                <input type="email"
                  value={formData.email}
                  class="form-control"
                  id="email"
                  name="email" 
                  placeholder="name@example.com"
                  onChange={handleInputChange}/>
                <br />

                <label for="inputPassword5" class="form-label">Password</label>
                <input type="password"
                  id="inputPassword5"
                  class="form-control" 
                  aria-describedby="passwordHelpBlock"
                  placeholder="enter password"
                  value={formData.password}
                  name="password"
                  onChange={handleInputChange}/>
                  <br />
                  <Link to="/dash" className="button"> <Button type="submit" variant="contained" disableElevation>Submit</Button></Link>
                </form></div>
        </div>
     );
}

export default SignupPage;