import { Box, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box className="w-full flex flex-col lg:flex-row gap-12 mt-12 mb-12">
      <Box className="w-full space-y-4">
        <Box
          className="w-[200px] h-[50px]"
          style={{
            backgroundImage: `url("../assets/assets_frontend/logo.svg")`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Text className="!text-gray-500 !text-sm w-full lg:w-[400px] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </Box>

      {/* COMPAGNY AND GET IN TOUCH */}
      <Box className="w-full flex justify-start gap-4">
        <Box className="w-full">
          <Text className="!text-xl !font-semibold">COMPANY</Text>
          <Box className="pt-4 flex flex-col gap-3">
            <Text className="
!text-gray-500 !text-sm !font-bold ">
              <Link to="/">Home</Link>
            </Text>
            <Text className="
!text-gray-500 !text-sm !font-bold ">
              <Link to="/">About us</Link>
            </Text>
            <Text className="
!text-gray-500 !text-sm !font-bold ">
              <Link to="/">Delivery</Link>
            </Text>
            <Text className="
!text-gray-500 !text-sm !font-bold ">
              <Link to="/">Privacy policy</Link>
            </Text>
          </Box>
        </Box>
        <Box className="w-full ">
          <Text className="!text-xl !font-semibold">GET IN TOUCH</Text>
          <Box className="pt-4 flex flex-col gap-3">
            <Text className="
!text-gray-500 !text-sm !font-bold ">
              <Link to="/">+0-000-000-000</Link>
            </Text>
            <Text className="
!text-gray-500 !text-sm !font-bold ">
              <Link to="/">+0-000-000-000</Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
