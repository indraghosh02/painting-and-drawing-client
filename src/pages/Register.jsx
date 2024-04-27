import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
        <div className="hero min-h-screen bg-black">
<div className="">
<div className="text-center">
  <h1 className="text-5xl font-bold text-white mb-5">Register now!</h1>
  
</div>
<div className="card shrink-0 w-screen max-w-sm shadow-2xl bg-orange-600">
  <form className="card-body">
  <div className="form-control ">
      <label className="label">
        <span className="label-text text-white">Name</span>
      </label>
      <input type="text" placeholder="name" className="input input-bordered " required />
    </div>
    <div className="form-control ">
      <label className="label">
        <span className="label-text text-white">Email</span>
      </label>
      <input type="email" placeholder="email" className="input input-bordered " required />
    </div>
    <div className="form-control ">
      <label className="label">
        <span className="label-text text-white">Photo URL</span>
      </label>
      <input type="text" placeholder="Photo URL" className="input input-bordered " required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white">Password</span>
      </label>
      <input type="password" placeholder="password" className="input input-bordered " required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover text-white">Already Registered? please <Link className="link link-hover text-black font-bold" to="/login">Login</Link></a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary bg-black">Register </button>
    </div>
  </form>
</div>
</div>
</div>
    </div>
);

};

export default Register;