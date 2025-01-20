import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const csrf = async () => {
        await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      };
  const navigate = useNavigate();

  const getUser = async () => {
    try {
        const { data } = await axios.get("http://localhost:8000/api/user", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            }
        });
        
        setUser(data.user);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error.message);
      }
  };

  const login = async ({ ...data }) => {
    await csrf();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        data
      );
      
        localStorage.setItem("authToken", response.data.token);
        getUser();
        toast.success("You are logged in !");
        navigate("/");
    } catch (error) {
      if (error.status === 422) {
        if(error.response.data.message){
            toast.error(error.response.data.message);
        }
          
        if(error.response.data.error.email){
            toast.error(error.response.data.error.email[0]);
        } else if(error.response.data.error.password) {
            toast.error(error.response.data.error.password[0]);
        } else{
            
            toast.error(error.response.message);
        }
      } else if(error.status === 500){
        toast.error(error.response.data.error)
      }
    }
  };

  const register = async ({ ...data }) => {
    await csrf();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        data
      );

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        
        localStorage.setItem("authToken", response.data.token);
        await getUser();
        toast.success("You are registered !");
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        if (error.response.data.errors.name) {
          toast.error(error.response.data.errors.name[0]);
        } else if (error.response.data.errors.email) {
          toast.error(error.response.data.errors.email[0]);
        } else {
          toast.error(error.response.data.errors.password[0]);
        }
        console.log(error.response.data.errors);
      } else {
        // Gérer d'autres types d'erreurs
        console.error("Request Error:", error.message);
      }
    }
  };

  const logout = async (e) => {
    try {
        const response =  await axios.post("http://localhost:8000/api/logout", {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
        });
        if (response.data.success) {
            // Clear token from local storage
            localStorage.removeItem("authToken");
            setUser(null);
            toast.success("You are logged out!");
            navigate("/login");
        }
        
    } catch (error) {
        toast.error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, getUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
