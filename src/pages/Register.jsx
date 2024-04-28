
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from "react-hook-form";
import UseAuth from "../Hook/UseAuth";

const Register = () => {
  const { createUser, updateUserProfile } = UseAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Navigation route after registration
  const form = "/";

  // Function to validate password with specific conditions
  const validatePassword = (password) => {
    const passwordErrors = [];

    if (!/[A-Z]/.test(password)) {
      passwordErrors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      passwordErrors.push("Password must contain at least one lowercase letter.");
    }
    if (password.length < 6) {
      passwordErrors.push("Password must be at least six characters long.");
    }

    return passwordErrors;
  };

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;

    // Validate the password and show toast for each failed condition
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      // Display individual toast messages for each error
      passwordErrors.forEach((error) => {
        toast.error(error);
      });
      return; // Stop form submission if validation fails
    }

    // If password is valid, proceed with user creation
    createUser(email, password)
      .then(() => {
        const user = {email, fullName};
        fetch('http://localhost:5000/user',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
        })
        return updateUserProfile(fullName, image);
        
      })
      .then(() => {
        toast.success("Registration successful!"); // Show success toast
        navigate(form); // Navigate after successful registration
      } )
      .catch((error) => {
        // Handle registration errors and display toast
        toast.error("Registration failed: " + error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-black">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-5">Register now!</h1>
          </div>
          <div className="card shrink-0 w-screen max-w-sm shadow-2xl bg-orange-600">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
              </div>
              {errors.fullName && (
                <span className="text-red-500">This field is required</span>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
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
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white"
                  >
                    Already Registered? Please{" "}
                    <Link
                      className="link link-hover text-black font-bold"
                      to="/login"
                    >
                      Login
                    </Link>
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-black">Register</button>
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







// import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { useForm } from "react-hook-form";
// import UseAuth from "../Hook/UseAuth";

// const Register = () => {


//   const { createUser,  updateUserProfile } = UseAuth();

//   const {
//     register,
//     handleSubmit,
    
//     formState: { errors },
//   } = useForm();

  
//     //navigation
//     const navigate = useNavigate();
   
//     const form = '/' ;



//   const onSubmit = data => {
//     const {email, password ,  image, fullName } = data;

//     createUser(email, password)
//     .then(() => {
//       updateUserProfile(fullName, image)
//       .then(() =>{
       
//           navigate(form);
      
//       })
     
//       });
// }
  
 

 
  

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
//                 <input type="text" placeholder="name" className="input input-bordered"
//                    {...register("fullName", { required: true })}  />
//               </div>
//               {errors.fullName && <span  className="text-red-500">This field is required</span>}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   {...register("email", { required: true })}
                  
//                 />
//                  {errors.email && <span  className="text-red-500">This field is required</span>}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">Photo URL</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Photo URL"
//                   className="input input-bordered"
//                   {...register("image")}
                  
//                 />
//                 {errors.image && <span  className="text-red-500">This field is required</span>}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text text-white">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   {...register("password", { required: true })}
                  
               
//                 />
//                 {errors.password && <span  className="text-red-500">This field is required</span>}
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







