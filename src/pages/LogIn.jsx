import { Link } from "react-router-dom";
import SocialLogIn from "./SocialLogIn";


const LogIn = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-black">
  <div className="">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-5">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-screen max-w-sm shadow-2xl bg-orange-600">
      <form className="card-body">
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered " required />
          <label className="label">
            <h3 href="#" className="label-text-alt  text-white">New Here? Please <Link className="link link-hover text-black font-bold" to="/register">Register</Link></h3>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-black">LogIn</button>
        </div>
      </form>
   
    </div>
<SocialLogIn></SocialLogIn>
  </div>
</div>
        </div>
    );
};

export default LogIn;