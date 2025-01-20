import Book1 from "../components/home/Book1";
import Book2 from "../components/home/Book2";
import Find from "../components/home/Find";
import Doctor from "../components/home/Doctors";
import useAuthContext from "../context/AuthContext";
import { useEffect } from "react";

export default function Home() {
  const {user, getUser} = useAuthContext();
  useEffect(()=>{
    if(!user){
      getUser();
    }
  }, [])
  return (
    <>
        
        <Book1 />
        <Find />
        <Doctor />
        <Book2 />
    </>
  )
}
