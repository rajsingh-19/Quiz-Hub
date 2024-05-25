import React from "react";
import "./auth.css";
import { useAuth } from "../../context/Auth-context";
import loginHandler from "../../services/auth-services";
import { useNavigate } from "react-router-dom";

const Authlogin = () => {
  const navigate = useNavigate();

  const { email, password, authDispatch } = useAuth();
  console.log({ email, password });

  const handlEmailChange = (e) => {
    authDispatch({
      type: "EMAIL",
      payload: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    authDispatch({
      type: "PASSWORD",
      payload: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const token = loginHandler(email, password);
    console.log(token);
    if (token) {
      navigate("/main");
    }
    authDispatch({
      type: "TOKEN",
      payload: token,
    });
    authDispatch({
      type: "CLEAR_CREDENTIALS",
    });
  };

  const handleLoginTestCredential = () => {
    const token = loginHandler("suresh123@gmail.com", "9876543210");
    authDispatch({
      type: "TOKEN",
      payload: token,
    });
    if (token) {
      navigate("/main");
    }
  };

  const handleSingupButton = () => {
    
  }

  return (
    // <div className="">
    //   <p>Login</p>
    //   <div>
    //     <form onSubmit={handleFormSubmit}>
    //       <div>
    //         <label>Email</label>
    //         <input
    //           type="text"
    //           placeholder="Email"
    //           onChange={handlEmailChange}
    //         />
    //       </div>
    //       <div>
    //         <label>Password</label>
    //         <input
    //           type="text"
    //           placeholder="*******"
    //           onChange={handlePasswordChange}
    //         />
    //       </div>
    //       <div>
    //         <button>Submit</button>
    //       </div>
    //     </form>
    //   </div>
    //   <div>
    //     <button onClick={handleLoginTestCredential}>
    //       Login with Test Credential
    //     </button>
    //   </div>
    // </div>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 height-75">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST" onSubmit={handleFormSubmit}>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handlEmailChange} />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"onChange={handlePasswordChange} />
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <div className="m-t10">
        <button onClick={handleSingupButton} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create New Account</button>
    </div>
    
    <p class="mt-10 text-center text-sm text-gray-500">
      <button class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" onClick={handleLoginTestCredential}>
        login with Test Credential
      </button>
    </p>
  </div>
</div>

  );
};

export default Authlogin;
