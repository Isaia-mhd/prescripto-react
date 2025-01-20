import { Box, Text } from "@mantine/core";
// import axios from "axios";
import { useState } from "react";
// import { toast } from "react-toastify";
import useAuthContext from "../context/AuthContext";

export default function Login() {
  const [logStatus, setLogStatus] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, register} = useAuthContext();

  const Register = async (e) => {
    e.preventDefault();
    register({name, email, password});
    // try {
    //   const response = await axios.post("http://localhost:8000/api/register", {
    //     name,
    //     email,
    //     password,
    //   });
    //   if (response.data.error) {
    //     toast.error(response.data.error);
    //   } else {
    //     localStorage.setItem("authToken", response.data.token);
    //     toast.success("You are registered !");
    //     navigate("/");
    //   }
    // } catch (error) {
    //   if (error.response && error.response.status === 422) {
    //     if (error.response.data.errors.name) {
    //       toast.error(error.response.data.errors.name[0]);
    //     } else if (error.response.data.errors.email) {
    //       toast.error(error.response.data.errors.email[0]);
    //     } else {
    //       toast.error(error.response.data.errors.password[0]);
    //     }
    //     console.log(error.response.data.errors.name[0]);
    //   } else {
    //     // Gérer d'autres types d'erreurs
    //     console.error("Request Error:", error.message);
    //   }
    // }
  };

  const Login = async (e) => {
    e.preventDefault();
    login({email, password});
    

    // try {
    //   const response = await axios.post("http://localhost:8000/api/login", {
    //     email,
    //     password,
    //   });
    //   if (response.data.error) {
    //     console.log(response.data.error);
    //     if(!email && !password){
    //       toast.error("Fill all Fields please");
    //     } else if(!email){
    //       toast.error(response.data.error.email[0])
    //     } else if(!password){
    //       toast.error(response.data.error.password[0])
    //     }
        
    //   } else {
    //     // localStorage.setItem("authToken", response.data.token);
    //     toast.success("You are logged in !");
    //     navigate("/");
    //   }
    // } catch (error) {
    //   if (error.status === 422) {
    //     toast.error(error.response.data.message);
    //   }
    // }
  };
  return (
    <Box className="w-full mt-12 mb-[100px] flex justify-center items-center">
      {/* CREATE ACCOUNT FIELD */}
      <Box
        className={`w-[400px] bg-white border-[1px] rounded-2xl py-[50px] shadow-xl px-10 space-y-2 ${
          logStatus && "hidden"
        }`}
      >
        <Text className="!text-2xl !text-gray-700 !font-semibold">
          Create account
        </Text>
        <Text className="!text-gray-700 !text-sm !font-semibold">
          Please create account to book appointment
        </Text>
        <form className="w-full space-y-3" onSubmit={Register}>
          <Box className="space-y-1">
            <label
              htmlFor="name"
              className="text-sm text-gray-700 font-semibold"
            >
              Full Name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="w-full py-1 px-3 bg-white border-2 rounded-md "
            />
          </Box>
          <Box className="space-y-1">
            <label
              htmlFor="mail"
              className="text-sm text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="mail"
              className="w-full py-1 px-3 bg-white border-2 rounded-md "
            />
          </Box>
          <Box className="space-y-1">
            <label
              htmlFor="pass"
              className="text-sm text-gray-700 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="pass"
              className="w-full py-1 px-3 bg-white border-2 rounded-md "
            />
          </Box>

          <Box className="!mt-6 !mb-6">
            <button
              type="submit"
              className="w-full bg-[#5F6FFF] py-3 px-2 text-white text-sm font-semibold rounded-lg shadow-lg"
            >
              Create account
            </button>
          </Box>
        </form>
        <Text className="!text-gray-700 !text-sm !font-semibold">
          Already have an account?{" "}
          <span
            className="text-myblue underline cursor-pointer"
            onClick={() => setLogStatus(true)}
          >
            Login here
          </span>{" "}
        </Text>
      </Box>

      {/* LOGIN FIELD */}
      <Box
        className={`w-[400px] bg-white border-[1px] rounded-2xl py-[50px] shadow-xl px-10 space-y-2 ${
          !logStatus && "hidden"
        }`}
      >
        <Text className="!text-2xl !text-gray-700 !font-semibold">Login</Text>
        <Text className="!text-gray-700 !text-sm !font-semibold">
          Please log in to book appointment
        </Text>
        <form className="w-full space-y-3" onSubmit={Login}>
          <Box className="space-y-1">
            <label
              htmlFor="mail"
              className="text-sm text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="mail"
              className="w-full py-1 px-3 bg-white border-2 rounded-md "
            />
          </Box>
          <Box className="space-y-1">
            <label
              htmlFor="pass"
              className="text-sm text-gray-700 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="pass"
              className="w-full py-1 px-3 bg-white border-2 rounded-md "
            />
          </Box>

          <Box className="!mt-6 !mb-6">
            <button
              type="submit"
              className="w-full bg-[#5F6FFF] py-3 px-2 text-white text-sm font-semibold rounded-lg shadow-lg"
            >
              Login
            </button>
          </Box>
         
        </form>
        <Text className="!text-gray-700 !text-sm !font-semibold">
          Create an new account?{" "}
          <span
            className="text-myblue underline cursor-pointer"
            onClick={() => setLogStatus(false)}
          >
            Click here
          </span>{" "}
        </Text>
      </Box>
    </Box>
  );
}
