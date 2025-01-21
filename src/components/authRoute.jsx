import useAuthContext from "../context/AuthContext";
import Loading from "../components/Loading.jsx";
import { Navigate, Outlet } from "react-router";
export default function authRoute() {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
}
