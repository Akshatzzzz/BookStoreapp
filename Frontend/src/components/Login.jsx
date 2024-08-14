import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-900 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to={"/"} onClick={() =>
                  document.getElementById("my_modal_3").close()
                } className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          <h3 className="font-bold text-lg">Login</h3>
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
              Login
            </button>
            <p className="mt-1">
              Not registered?{" "}
              <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                SignUp
              </Link>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
