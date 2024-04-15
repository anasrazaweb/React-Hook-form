
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
function App() {

  const onSubmit = (data) => {
    console.log(data)
  }
  const schema = yup.object({
    firstname: yup
      .string()
      .required("This field is required"),

    email: yup.
      string()
      .email("This muat be a vaild email")
      .required("Email is required"),

    phone: yup.
      string()
      .required("Phone number is Required"),

    password: yup.
      string()
      .required("Password is Required").min(6, "The password must be a Six carecter"),

    conFormpassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Your password don\'t match')
      .required("Password is Required")
      .min(6, "The password must be a Six carecter"),
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  
  return (
    <div className=" flex justify-center items-center">
      <div className=" w-full px-3 md:px-0 md:w-[40%] ">
        <h1 className=" text-2xl md:text-4xl text-center py-5 font-semibold"> User Ragestaration  Form </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 ">Your First Name</label>
            <input
              type="firstname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
              placeholder="Enter your Name"
              {...register("firstname", {
                required: true
              })} />
            {errors.firstname && <span className=" text-red-600 text-sm">{errors.firstname.message}</span>}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
              placeholder="name@flowbite.com"
              {...register("email", {
                required: true
              })} />
            {errors.email && <span className=" text-red-600 text-sm">{errors.email.message}</span>}
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Your phone</label>
            <input
              type="phone"
              placeholder="+92 03122332406"
              className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
              {...register("phone")} />
            {errors.phone && <span className=" text-red-600 text-sm ">{errors.phone.message}</span>}
          </div>

          <div className="mb-5 mt-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input
              type="password"
              placeholder="******"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
              {...register("password", {
                required: true
              })} />
            {errors.password && <span className=" text-red-600 text-sm">{errors.password.message}</span>}
          </div>

          <div className="mb-5">
            <label htmlFor="conFormpassword" className="block mb-2 text-sm font-medium text-gray-900 ">Your Conform Password</label>
            <input
              type="conFormpassword"
              placeholder="*****"
              {...register("conFormpassword")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
              {...register("conFormpassword", {
                required: true
              })} />
            {errors.conFormpassword && <span className=" text-red-600 text-sm">{errors.conFormpassword.message}</span>}
          </div>
          <button className=" bg-blue-700 text-white p-1 rounded-full px-5" type="submit" >Submit</button>
        </form>

      </div>
    </div>
  );
}

export default App;
