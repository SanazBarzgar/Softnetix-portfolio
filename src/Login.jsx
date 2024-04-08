import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container d-block">
            <Link to='/' className="text-white font-weight-bold mr-3 " >Brand Name</Link>
            <Link to='/' className="text-warning mr-3 " >Home</Link>
            <Link to='/blog' className="text-warning mr-3" >Blog</Link>
            <Link to='/gallery' className="text-warning" >Gallery</Link>
          </nav>
        </div>
      </header >
      <form className='m-5 d-flex flex-column'>
        <div className='d-flex'>
          <div class="m-3">
            <label for="exampleInputEmail1" class="form-label">Email address:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="m-3">
            <label for="exampleInputPassword1" class="form-label">Password:</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
        </div>
        <div>
          <div class="m-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">I confirm the above information</label>
          </div>
          <button type="submit" class="btn btn-light m-3">Submit</button>

        </div>


      </form>
    </div>
  )
}

export default Login

