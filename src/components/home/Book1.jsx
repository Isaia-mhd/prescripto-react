import { Box, Image, Text } from "@mantine/core";

export default function Book1() {
  return (
    <Box className="w-full  bg-myblue rounded-xl mt-6 mb-6 md:pt-[50px] lg:pt-[100px] ">
      <Box className="md:flex gap-3 w-full h-full max-w-[95%] md:max-w-[90%] mx-auto ">
        {/* the Left Box */}
        <Box className="w-full  pt-3 pb-12 md:pb-24 flex flex-col items-center justify-center lg:w-[80%] lg:items-start  ">
          <Text className="!text-3xl text-center md:text-left md:!text-5xl  !font-semibold !text-white space-y-0">
            Book Appointment With Trusted Doctors
          </Text>

          <Box className="w-full flex flex-col md:flex-row justify-start items-center gap-3 pt-6 pb-6">
            <Box>
              <Image
                src="./assets/assets_frontend/group_profiles.png"
                className="w-full"
              ></Image>
            </Box>
            <Text className="!text-white !text-sm text-center md:text-left">
              Simply browse through our extensive list of trusted doctors,
              <br />
              schedule your appointment hassle-free.
            </Text>
          </Box>

          {/* BUTTON to book */}
          <Box className=""><a href="#specialty" className=" bg-white px-10 py-3 rounded-full !text-gray-500 !font-semibold">Book appointment</a></Box>
        </Box>

        {/* The Right Image */}
        <Box className="flex justify-center items-end">
          <Box><Image
            src="./assets/assets_frontend/header_img.png"
            alt="header_image"
            className=""
          ></Image></Box>
        </Box>
      </Box>
    </Box>
  );
}
