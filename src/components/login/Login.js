import React from "react";
import Image from "../../images/login.png";
import GoogleIcon from "../../images/google.svg";
import "./styles.scss";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    for (let element of e.target.elements) {
      if (element.name === "email" || element.name === "password") {
        data[element.name] = element.value;
      }
    }
    console.log(data);
  };

  return (
    <section className="flex">
      <div className="w-1/2 bg-white h-auto">
        <img src={Image} alt="" className="h-screen object-fill max-h-screen w-auto ml-10" />
      </div>
      <div className="w-1/2 lightGrayBG h-auto">
        <div className="my-auto">
          <div className="text-gray-900 font-bold text-3xl mb-2 text-center mt-16">Login</div>
          <div className="w-full max-w-xs mx-auto py-8">
            <form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-semibold text-gray-700 text-sm mb-2">
                  Username/Email:
                </label>
                <input
                  required
                  type="email"
                  placeholder="Username/Email....."
                  label="Username/Email:"
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                />
              </div>
              <div class="mb-6">
                <label className="block font-semibold text-gray-700 text-sm mb-2">
                  Password:
                </label>
                <input
                  required
                  type="password"
                  label="Password:"
                  placeholder="Password...."
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 text-xs mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                />
                <a className="block text-gray-700 text-xs text-right hover:text-blue-700" href="/forgot-password">
                  Forgot Password?
                </a>
              </div>
              <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4" type="button">
                LOG IN
              </button>
              <button className="bg-white hover:bg-white py-2 px-4 rounded w-full flex items-center" type="button">
                <img src={GoogleIcon} alt="" className="h-5 w-5 ml-3" />
                <div className="font-bold text-black ml-8">Sign in with Google</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
