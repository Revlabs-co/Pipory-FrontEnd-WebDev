import React from "react";
import Image from "../../images/signup1.png";
import GoogleIcon from "../../images/google.svg";
import "./styles.scss";

// TODO: Form Handling (what happens when you press Submit)

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    for (let element of e.target.elements) {
      if (
        element.name === "email" ||
        element.name === "password" ||
        element.name === "name"
      ) {
        data[element.name] = element.value;
      }
    }
    console.log(data);
  };

  return (
    <section className="flex mb-4">
      <div className="w-1/2 bg-white h-auto">
          {/* TODO: Make the image fit the screen without having the scroll */}
          <img src={Image} alt="" className="object-fill w-auto h-auto" />
      </div>
      <div className="w-1/2 lightGrayBG h-auto">
        <div className="div my-auto">
          <div className="text-gray-900 font-bold text-3xl mb-2 text-center mt-16">Signup</div>
          <div className="w-full max-w-xs mx-auto py-8">
            <form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-semibold text-gray-700 text-sm mb-2">
                  Name:
                </label>
                <input
                  required
                  type="name"
                  label="Name"
                  placeholder="Full Name...."
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                />
              </div>
              <div className="mb-1">
                <label className="block font-semibold text-gray-700 text-sm mb-2">
                  Email:
                </label>
                <input
                  required
                  type="email"
                  label="Email"
                  placeholder="Email...."
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 text-xs mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
                  placeholder="Password....."
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 text-xs mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                />
              </div>
              <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4" type="button">
                CONTINUE
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

export default Signup;
