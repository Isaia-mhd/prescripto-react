import { Box, Text } from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import apiClient from "../../apiClient";

export default function Login() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState(null);
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    setErreur(null);
    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });
      
      
      console.log(response.data.error);
      if(response.data.error){
          toast.error(response.data.error);
      } else{
          localStorage.setItem("authToken", response.data.token);
          toast.success("User registered");
          setName("");
          setEmail("");
          setPassword("");
      }
      

    } catch (error) {
      // Gérer les erreurs de validation ou de serveur
      if (err.response && err.response.data) {
        setErreur(err.response.data.message || "Une erreur est survenue.");
        toast.error(erreur);
      } else {
        setErreur("Impossible de se connecter au serveur.");
        toast.error(erreur);
      }
    }
  };

  const Login = async (e) => {
    e.preventDefault();
    setErreur(null);
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        name,
        password,
      });

      localStorage.setItem("authToken", response.data.token);
      toast.success("You are logged in !");
      navigate("/");
    } catch (error) {
      // Gestion des erreurs
      if (err.response) {
        setErreur(err.response.data.message); // Message d'erreur provenant de l'API Laravel
      } else {
        setErreur("Une erreur s'est produite. Veuillez réessayer.");
      }
    }
  };
  return (
    <Box className="w-full mt-12 mb-[100px] flex justify-center items-center">
      {/* CREATE ACCOUNT FIELD */}
      <Box
        className={`w-[400px] bg-white border-[1px] rounded-2xl py-[50px] shadow-xl px-10 space-y-2 ${
          login && "hidden"
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
            onClick={() => setLogin(true)}
          >
            Login here
          </span>{" "}
        </Text>
      </Box>

      {/* LOGIN FIELD */}
      <Box
        className={`w-[400px] bg-white border-[1px] rounded-2xl py-[50px] shadow-xl px-10 space-y-2 ${
          !login && "hidden"
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
          <Box>{erreur && <p style={{ color: "red" }}>{erreur}</p>}</Box>

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
            onClick={() => setLogin(false)}
          >
            Click here
          </span>{" "}
        </Text>
      </Box>
    </Box>
  );
}
