import { Box, Button, Text } from "@mantine/core";
// import { Link } from "react-router-dom";
import Docs from "../components/Docs";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { useNavigate, useParams } from "react-router";

export default function Doc() {
  const [opened, { open, close }] = useDisclosure(false);
  const [specialty, setSpecialty] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [docFiltered, setDocFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

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

  useEffect(()=> {
    const fetchSpecialty = async () =>{
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/get-specialty");
        setSpecialty(response.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchSpecialty();
  }, []);

  
  function speClick(spe) {
    navigate(`/doctors/${spe}`);
  }
  useEffect(() =>{
    if(params.docSpecialty){
      const filtered = doctors.filter((doc) => doc.specialty === params.docSpecialty);
      setDocFiltered(filtered);
    } else{
      setDocFiltered(doctors);
    }

  }, [params.docSpecialty, doctors]);


  
  

  return (
    <Box className="w-full pt-6">
      <Text className="!text-gray-600  text-center lg:text-start !text-sm !font-semibold ">
        Browse through the doctors specialist.
      </Text>

      {/* BUTOON FOR FILTER THE SPECIALTY */}
      <Button
        variant="default"
        onClick={open}
        className="md:!hidden !w-full h-full !text-black !font-normal  !bg-gray-200 hover:cursor-pointer mt-3"
      >
        Filters
      </Button>
      {loading && <Loading />}
      {/* DOCTOR'S LIST */}
      {!loading && (
        <Box className="w-full flex justify-center lg:justify-start items-start gap-4">
          <Box className="w-[20%] hidden md:flex flex-col justify-start items-start gap-3 pt-6">
            {/* FOR DESKTOP */}
            {specialty.map((spe) => (
              <Button 
                onClick={() => speClick(spe.specialty)}
                key={spe?.id}
                to="#"
                className="!truncate !bg-white !text-black !w-full !border-[1px] !py-1 !px-4 !border-gray-500 !rounded-md focus:!bg-[#EAEFFF] "
              >
                {spe?.specialty}
              </Button>
            ))}

            {/* FOR MOBIL */}
            <Box className="flex lg:hidden ">
              <Drawer
                opened={opened}
                onClose={close}
                position="left"
                size="xs"
                bg="yellow"
                title="Choose the specialty you needed"
              >
                {/* Drawer content */}
                <Box className="flex flex-col justify-start items-start gap-3">
                  {specialty.map((spe) => (
                    <Button 
                      onClick={() => {speClick(spe.specialty); close()}}
                      to="#"
                      className="!w-[70%] !border-[1px] !py-1 !px-4 !text-center !border-gray-500 !rounded-md focus:!bg-[#EAEFFF]  "
                    >
                      {spe?.specialty}
                    </Button>
                  ))}
                </Box>
              </Drawer>
              <Box className="w-[30px]"></Box>
            </Box>
          </Box>
          <Box className="w-[80%]">
            <Docs docs={docFiltered} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
