import React from 'react';
import Image from '../../images/Signup/signup2-(2).png';

const Signup2 = () => {
    return (
        <section className="flex">
            <div className="w-1/2 bg-white h-auto">
                {/* TODO: need to change the picture to the original illustration taken from dribble */}
                <img src={Image} alt="" className="h-screen w-full object-contain max-h-screen" />
            </div>
            <div className="w-1/2 lightGrayBG h-auto">
                <div className="my-auto">
                <div className="text-gray-900 font-bold text-5xl mb-2 text-center mt-16">Just a few more details</div>
                <div className="w-full max-x-ws mx-auto py-8">
                    <form className="rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4 items-center">
                            <label className="block font-semibold text-gray-700 text-center text-xl mb-2">
                            Your Occupation
                            </label>
                            <select name="cars" id="cars" className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 text-xs leading-tight focus:outline-none focus:shadow-outline">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select> 
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block font-semibold text-gray-900 text-center text-xl mb-2">
                                Select your interests
                            </label>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Signup2
