import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" justify-center w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-semibold text-grey-300">
            Sign Up
            <span className="text-blue-500"> Chatty</span>
          </h1>
        </div>
        <form>
        <div>
            <label className="label mt-2 p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Visrut Lukhi"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label mt-2 p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="visrutlukhi"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label mt-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label mt-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>
          {/* {"Gender check box} */}
          <GenderCheckBox/>
          <a href="#" className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp