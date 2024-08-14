import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{
        backgroundImage:
          "url('https://www.spectator.co.uk/wp-content/uploads/2023/03/iStock-1087508538.jpg?w=1272')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-2/5">
        <div className=" modal-box bg-white dark:bg-slate-900 dark:text-white p-5">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">SignUp</h3>
            {/* name */}
            <div className="mt-5 space-y-1">
              <span>Name</span>
              <br></br>
              <input
                type="name"
                className="w-60 px-2 py-1 bg-white outline-none border rounded-md  dark:bg-slate-900 dark:text-gray-300"
                placeholder="Enter your name here"
                {...register("name", { required: true })}
              />
              <br></br>
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required!!
                </span>
              )}
            </div>
            {/* Email */}
            <div className="mt-5 space-y-1">
              <span>Email</span>
              <br></br>
              <input
                type="email"
                className="w-60 px-2 py-1 bg-white outline-none border rounded-md  dark:bg-slate-900 dark:text-gray-300"
                placeholder="Enter your email here"
                {...register("email", { required: true })}
              />
              <br></br>
              {errors.email && <span className="text-sm text-red-500">This field is required!!</span>}
            </div>
            {/* Password */}
            <div className="mt-5 space-y-1">
              <span>Password</span>
              <br></br>
              <input
                type="password"
                className="w-60 px-2 py-1 bg-white dark:bg-slate-900 dark:text-gray-300 outline-none border rounded-md"
                placeholder="Enter your password here"
                {...register("password", { required: true })}
              />
               <br></br>
               {errors.password && <span className="text-sm text-red-500">This field is required!!</span>}
            </div>
            {/* Button */}
            <div className="flex mt-4 justify-between">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                SignUp
              </button>
              <p className="mt-1">
                Have account?{" "}
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
