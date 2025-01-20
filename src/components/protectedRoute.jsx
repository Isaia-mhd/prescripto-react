
import useAuthContext from "../context/AuthContext";
import Loading from "../components/Loading.jsx"
import { Navigate, Outlet } from "react-router";
export default function PrivateRoute() {
    const {user} = useAuthContext();
    // if(!user){
    //   return <Loading />
       
    // }
    return user ? <Outlet/> : <Navigate to ="/login"/>
}