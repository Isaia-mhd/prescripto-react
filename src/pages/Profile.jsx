import { Box, Image, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import useAuthContext from "../context/AuthContext";
export default function Profile() {
  const {user, getUser} = useAuthContext();
  const [formData, setFormData] = useState({
    email: "mohamedesaie21@gmail.com",
    phone: "261329070729",
    address: "401 City one",
    gender: "Male",
    date: "21/05/2003",
  });

  const { email, phone, address, gender, date } = formData;


  useEffect(()=>{
    if(!user){
      getUser();
    }
  }, [])
  
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      email: "mohamedesaie22@gmail.com",
    }));
  }, []);

  return (
    <Box className="w-full mt-6 !mb-24">
      <Box className="w-[200px] !rounded-lg mb-3">
        <Image
          src="/assets/assets_frontend/profile_pic.png"
          alt="profile"
          className="w-full !rounded-lg"
        ></Image>
      </Box>

      <Text className="w-[400px] !py-[10px] border-b-2 !text-2xl !font-semibold !text-slate-800 ">
        {user?.name}
      </Text>

      <form>
        <Text className="!underline !uppercase !pt-3 !text-gray-600 !text-md">
          CONTACT INFORMATION
        </Text>
        <Box className="w-full">
          <Box className="w-full flex justify-start items-center gap-[30px] ">
            <label
              htmlFor="email"
              className="text-gray-600 font-sm font-semibold w-[100px]"
            >
              Email Id:
            </label>
            <input
              type="email"
              value={user ? user.email : email}
              id="email"
              className="w-[300px] text-blue-600 text-sm font-semibold  "
            />
          </Box>
          <Box className="w-full flex justify-start items-center gap-[30px] ">
            <label
              htmlFor="email"
              className="text-gray-600 font-sm font-semibold w-[100px]"
            >
              Phone:
            </label>
            <input
              type="text"
              value={phone}
              id="email"
              className="w-[300px] text-blue-600 text-sm font-semibold"
            />
          </Box>
          <Box className="w-full flex justify-start items-center gap-[30px] ">
            <label
              htmlFor="email"
              className="text-gray-600 font-sm font-semibold w-[100px]"
            >
              Address:
            </label>
            <input
              type="email"
              value={address}
              id="email"
              className="w-[300px] text-blue-600 text-sm font-semibold"
            />
          </Box>
        </Box>

        <Text className="!underline !uppercase !pt-3 !text-gray-600 !text-md">
          BASIC INFORMATION
        </Text>
        <Box className="w-full">
          <Box className="w-full flex justify-start items-center gap-[30px] ">
            <label
              htmlFor="email"
              className="text-gray-600 font-sm font-semibold w-[100px]"
            >
              Gender:
            </label>
            <input
              type="text"
              value={gender}
              id="email"
              className="w-[300px] text-gray-600 text-sm font-semibold"
            />
          </Box>
          <Box className="w-full flex justify-start items-center gap-[30px] ">
            <label
              htmlFor="email"
              className="text-gray-600 font-sm font-semibold w-[100px]"
            >
              Birthday:
            </label>
            <input
              type="date"
              value={date}
              id="email"
              className="w-[150px] text-gray-600 text-sm font-semibold"
            />
          </Box>
        </Box>
        <button type="submit" className="w-[200px] py-2 px-2 rounded-full border-[1px] border-blue-600 mt-6 text-sm ">Save information</button>
      </form>
    </Box>
  );
}
