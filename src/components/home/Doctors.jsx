import { Box, Text } from "@mantine/core";
import MoreBtn from "./MoreBtn";
import Docs from "../Docs";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/doctors");
        console.log(response.data);
        setDoctors(response.data);
        setLoading(false);
      } catch (error) {
        return error;
      }
    };
    fetchDoctors();
  }, []);
  return (
    <Box className="w-full mt-24 mb-6">
      <Text className="!text-center !text-3xl !font-semibold">
        Top Doctors to Book
      </Text>
      <Box className="w-[300px] mx-auto flex justify-center items-center pt-3">
        <Text className="!text-center !text-sm !text-gray-800 !font-semibold">
          Simply browse through our extensive list of trusted doctors
        </Text>
      </Box>
      <Docs docs={doctors}/>
      <MoreBtn />  
    </Box>
  );
}
