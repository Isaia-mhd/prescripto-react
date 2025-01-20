import { Box, Button, Image, Text } from "@mantine/core";
import Docs from "../components/Docs";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";


export default function MakeAppointment() {
  const [doctor, setDoctor] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const params = useParams();
  // const related = doctor.filter()


  // FETCHING THE SPECIFIC DOCTOR(API Show)
  useEffect(()=>{
    const fetchDoc = async () => {
      if(params.docId){
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/doctors/${params.docId}`);
          setDoctor(response.data[0]);
          console.log(response.data);
          
        } catch (error) {
          console.error("Error fetching doctor data:", error);
        }
      }
    }
    fetchDoc(); 
    
  }, []);


  // FETCHING ALL DOCTOR
  useEffect(()=>{
    const fetchDoc = async () => {
      if(params.docId){
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/doctors`);
          setDoctors(response.data);
          console.log(response.data);
          
        } catch (error) {
          console.error("Error fetching doctor data:", error);
        }
      }
    }
    fetchDoc(); 
    
  }, []);
  
  const related = doctors.filter((doc) => doc.specialty === doctor?.specialty);
  return (
    <>
      <Box className="w-full flex flex-col justify-center items-center  sm:flex-row sm:justify-start sm:items-start gap-4 mt-12">
        <Box className="!w-full sm:!w-[300px] sm:!h-[250px] !rounded-lg ">
          <Image
            src={`http://127.0.0.1:8000/storage/${doctor?.image}`}
            alt="doc_image"
            className="!rounded-lg w-full h-full"
          ></Image>
        </Box>

        <Box className="w-[95%] relative bottom-[70px] sm:w-[60%]  bg-white sm:bottom-0 !rounded-lg ">
          <Box className="w-full !border-[1px] !border-gray-200 !rounded-lg !py-4 !px-7">
            <Box className="w-full space-y-3">
              <Text className="!text-2xl !text-gray-700 !font-semibold">
                {doctor?.name}
              </Text>
              <Text className="!text-md !text-gray-700 !font-semibold">
                {doctor?.degree} - {doctor?.specialty}{" "}
                <span className="!text-xs !border-[1px] !border-gray-200 !rounded-full !py-[2px] !px-3 ">
                  {doctor?.experience}
                </span>
              </Text>
              <Text className="!text-sm !text-gray-800 !font-bold">
                About <br />{" "}
                <span className="!text-xs !text-gray-700 !font-medium">
                  {doctor?.about}
                </span>
              </Text>
              <Text className="!text-sm !text-gray-700 !font-semibold">
                Appointment fee: <span className="!text-gray-900"> ${doctor?.fees} </span>
              </Text>
            </Box>
          </Box>
          {/* DATE TIME OF APOINTMENT */}
          <Box className="w-full mt-6">
            <Text className="!text-lg !text-gray-600 !font-semibold">
              Booking slots
            </Text>
            <form className="w-full">
              {/* DAY */}
              <Box className="w-full flex justify-start items-start gap-8 overflow-auto mt-6 ">
                <input
                  type="text"
                  value="THU 16"
                  className="w-[60px] h-[100px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-semibold outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="THU 16"
                  className="w-[60px] h-[100px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-semibold outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="THU 16"
                  className="w-[60px] h-[100px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-semibold outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="THU 16"
                  className="w-[60px] h-[100px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-semibold outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="THU 16"
                  className="w-[60px] h-[100px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-semibold outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="THU 16"
                  className="w-[60px] h-[100px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-semibold outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="THU 16"
                  className="w-[60px] h-[100px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-semibold outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="THU 16"
                  className="w-[60px] h-[100px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-semibold outline-none focus:border-none"
                />
              </Box>

              {/* TIME */}
              <Box className="w-full flex justify-start items-start gap-8 overflow-auto mt-6">
                <input
                  type="text"
                  value="10:00"
                  className="w-[100px] h-[40px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-medium outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="10:00"
                  className="w-[100px] h-[40px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-medium outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="10:00"
                  className="w-[100px] h-[40px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-medium outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="10:00"
                  className="w-[100px] h-[40px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-medium outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="10:00"
                  className="w-[100px] h-[40px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-medium outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="10:00"
                  className="w-[100px] h-[40px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-medium outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="10:00"
                  className="w-[100px] h-[40px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-medium outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="10:00"
                  className="w-[100px] h-[40px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-medium outline-none focus:border-none"
                />
                <input
                  type="text"
                  value="10:00"
                  className="w-[100px] h-[40px] !bg-white focus:!text-white focus:!bg-blue-700  !rounded-full !border-[1px] !border-gray-200 cursor-pointer !text-md !text-center !text-gray-600 !font-medium outline-none focus:border-none"
                />
              </Box>

              <Button className="mt-6 !rounded-full !w-[200px] !text-sm ">
                Book appointment
              </Button>
            </form>
          </Box>
        </Box>
      </Box>

      <Box className="w-full mt-24">
      <Text className="!text-center !text-3xl !font-semibold">
      Related Doctors
      </Text>
      <Box className="w-[300px] mx-auto flex justify-center items-center pt-3">
        <Text className="!text-center !text-sm !text-gray-800 !font-semibold">
        Simply browse through our extensive list of trusted doctors
        </Text>
      </Box>
        <Docs docs={related} />
      </Box>
    </>
  );
}
