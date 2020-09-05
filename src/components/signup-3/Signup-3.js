import React from 'react';
import Image from '../../images/Signup/signup3.jpg';
import Logo from '../../images/Logo/logo-pipory.png';

const Signup3 = () => {
    return (
        <section className="flex">
            {/* TODO: Make the page responsive */}
            <div className="w-1/2 bg-white h-auto">
                <img src={Image} alt="" className="h-screen object-fill max-h-screen w-auto" />
            </div>
            <div className="w-1/2 lightGrayBG h-auto">
                <div className="my-auto">
                    <img src={Logo} alt="" className="ml-auto mr-auto mt-16" />
                    <div className="px-16">
                        <form className="px-8 pt-6 pb-8 mb-4">
                            <div className="text-gray-900 font-bold text-4xl mb-2 text-center mt-6">Welcome To Pipory</div>
                            <div className="text-gray-600 font-medium text-3xl mb-2 text-center break-words">
                                <p className="ml-16 mr-16 break-words mb-10 mt-3">
                                    Connecting creative minds all around the world
                                </p> 
                            </div>
                            <div className="px-16">
                                <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full" type="button">
                                    GET STARTED
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup3
