
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";
import UseAuth from "../Hook/UseAuth";

const Register = () => {
//   const [password, setPassword] = useState("");

  const { createUser,  updateUserProfile } = UseAuth();

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  
    //navigation
    const navigate = useNavigate();
   
    const form = '/' ;



  const onSubmit = data => {
    const {email, password ,  image, fullName } = data;

    createUser(email, password)
    .then(() => {
      updateUserProfile(fullName, image)
      .then(() =>{
       
          navigate(form);
      
      })
     
      });
}
  
 

  // Function to validate password against individual criteria
//   const validatePassword = (password) => {
//     const errors = [];
//     if (!/[A-Z]/.test(password)) {
//       errors.push("Password must contain at least 1 uppercase letter.");
//     }
//     if (!/[a-z]/.test(password)) {
//       errors.push("Password must contain at least 1 lowercase letter.");
//     }
//     if (password.length < 6) {
//       errors.push("Password must be at least 6 characters long.");
//     }
//     return errors;
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const passwordErrors = validatePassword(password);

//     if (passwordErrors.length > 0) {
//       passwordErrors.forEach((error) => {
//         toast.error(error);
//       });
//       return;
//     }

    // If password is valid, proceed with registration logic
    // toast.success("Registration successful!");
  

  return (
    <div>
      <div className="hero min-h-screen bg-black">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-5">Register now!</h1>
          </div>
          <div className="card shrink-0 w-screen max-w-sm shadow-2xl bg-orange-600">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered"
                   {...register("fullName", { required: true })}  />
              </div>
              {errors.fullName && <span  className="text-red-500">This field is required</span>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                  
                />
                 {errors.email && <span  className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("image")}
                  
                />
                {errors.image && <span  className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                  
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                //   required
                />
                {errors.password && <span  className="text-red-500">This field is required</span>}
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white"
                  >
                    Already Registered? please{" "}
                    <Link className="link link-hover text-black font-bold" to="/login">
                      Login
                    </Link>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-black">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;










// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AuthContext } from "./FirebaseProvider/FirebaseProvider";
// import { useForm } from "react-hook-form";

// const Register = () => {
//   const [password, setPassword] = useState("");

//   const { createUser } = useContext(AuthContext);

//   const {
//     register,
//     handleSubmit,
    
//     formState: { errors },
//   } = useForm();


  
//   const onSubmit = data => {
//     console.log(data);
// }
  
 

//   // Function to validate password against individual criteria
//   const validatePassword = (password) => {
//     const errors = [];
//     if (!/[A-Z]/.test(password)) {
//       errors.push("Password must contain at least 1 uppercase letter.");
//     }
//     if (!/[a-z]/.test(password)) {
//       errors.push("Password must contain at least 1 lowercase letter.");
//     }
//     if (password.length < 6) {
//       errors.push("Password must be at least 6 characters long.");
//     }
//     return errors;
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();

//     const passwordErrors = validatePassword(password);

//     if (passwordErrors.length > 0) {
//       passwordErrors.forEach((error) => {
//         toast.error(error);
//       });
//       return;
//     }

//     // If password is valid, proceed with registration logic
//     // toast.success("Registration successful!");
//   };

//   return (
//     <div>
//       <div className="hero min-h-screen bg-black">
//         <div className="">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold text-white mb-5">Register now!</h1>
//           </div>
//           <div className="card shrink-0 w-screen max-w-sm shadow-2xl bg-orange-600">
//             <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">Name</span>
//                 </label>
//                 <input type="text" placeholder="name" className="input input-bordered" required />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">Photo URL</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Photo URL"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                 //   value={password}
//                 //   onChange={(e) => setPassword(e.target.value)}
//                 //   required
//                 />
//                 <label className="label">
//                   <a
//                     href="#"
//                     className="label-text-alt link link-hover text-white"
//                   >
//                     Already Registered? please{" "}
//                     <Link className="link link-hover text-black font-bold" to="/login">
//                       Login
//                     </Link>
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary bg-black">Register</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;
