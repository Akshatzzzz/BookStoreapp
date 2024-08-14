import React from "react";

function Contact() {
  return (
    <>
      <div className="flex h-screen items-center bg-white justify-center dark:bg-slate-900 dark:text-white">
        <div className="w-2/5">
          <div className=" bg-white dark:bg-slate-900 dark:text-white p-5">
            <form>
              <h3 className="font-bold text-lg">Contact Us</h3>
              {/* name */}
              <div className="mt-5 space-y-1">
                <span>Name</span>
                <br></br>
                <input
                  type="name"
                  className="w-full px-2 py-1 bg-white outline-none border rounded-md  dark:bg-slate-900 dark:text-gray-300"
                  placeholder="Enter your name here"
                />
              </div>
              {/* Email */}
              <div className="mt-5 space-y-1">
                <span>Email</span>
                <br></br>
                <input
                  type="email"
                  className="w-full px-2 py-1 bg-white outline-none border rounded-md  dark:bg-slate-900 dark:text-gray-300"
                  placeholder="Enter your email here"
                />
              </div>
              {/* Password */}
              <div className="mt-5 space-y-1">
                <span>Message</span>
                <br></br>
                <textarea
                  rows="4"
                  cols="50"
                  className="w-full px-2 py-1 bg-white dark:bg-slate-900 dark:text-gray-300 outline-none border rounded-md"
                ></textarea>
              </div>
              {/* Button */}
              <div className="flex mt-4 justify-between">
                <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
