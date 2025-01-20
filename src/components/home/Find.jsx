import { Box, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router";

export default function Find() {
  const navigate = useNavigate();
  const finds = [
    {
      imgUrl: "./assets/assets_frontend/General_physician.svg",
      specialty: "General physician",
    },
    {
      imgUrl: "./assets/assets_frontend/Gynecologist.svg",
      specialty: "Gynecologist",
    },
    {
      imgUrl: "./assets/assets_frontend/Dermatologist.svg",
      specialty: "Dermatologist",
    },
    {
      imgUrl: "./assets/assets_frontend/Pediatricians.svg",
      specialty: "Pediatricians",
    },
    {
      imgUrl: "./assets/assets_frontend/Neurologist.svg",
      specialty: "Neurologist",
    },
    {
      imgUrl: "./assets/assets_frontend/Gastroenterologist.svg",
      specialty: "Gastroenterologist",
    },
  ];
  return (
    <Box id="specialty" className="w-full mt-12 mb-6">
      <Text className="!text-center !text-3xl !font-semibold">
        Find by Speciality
      </Text>
      <Box className="w-[300px] mx-auto flex justify-center items-center pt-3">
        <Text className="!text-center !text-sm !text-gray-800 !font-semibold">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </Text>
      </Box>
      <Box className="w-full lg:max-w-[70%] mx-auto flex gap-3 pt-6 overflow-x-auto scrollbar-none ">
        {finds.map((find) => (
          <Box className="w-full flex flex-col justify-between items-center cursor-pointer hover:-translate-y-4 !transition !duration-500 !ease-in-out ">
            <Box className="rounded-full w-[70px]  lg:w-[100px] h-[100px]">
              <Image src={find.imgUrl} alt="image" className="" onClick={()=>navigate(`/doctors/${find.specialty}`)}></Image>
            </Box>
            <Text className="!text-xs !text-gray-800 !font-semibold truncate">
              {" "}
              {find.specialty}{" "}
            </Text>
          </Box>
        ))}
        
      </Box>
    </Box>
  );
}
