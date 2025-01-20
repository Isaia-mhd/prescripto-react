import { Box, Button, Image, Text } from "@mantine/core";

export default function Contact() {
  return (
    <Box className="w-full mt-6">
      <Text className="!text-gray-900 text-center !text-2xl !font-normal">
        CONTACT US
      </Text>
      <Box className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-start items-start mt-6">
        <Box className="w-[300px] lg:w-[600px] mx-auto !rounded-lg ">
          <Image
            src="./assets/assets_frontend/contact_image.png"
            alt="about_image"
            className="w-full h-full !rounded-lg"
          ></Image>
        </Box>

        {/* ALL OF THE TEXT */}
        <Box className="w-full !space-y-8">
          <Text className="!text-sm !text-gray-700 !font-semibold lg:!text-md">
          OUR OFFICE
          </Text>

          <Text className="!text-sm !text-gray-700 !font-semibold lg:!text-md">
          00000 Willms Station
          Suite 000, Washington, USA
          </Text>
            <Text className="!text-black !font-semibold">Tel: (000) 000-0000
            Email: greatstackdev@gmail.com</Text>
            <Text className="!text-sm !text-gray-700 !font-semibold lg:!text-md">
            CAREERS AT PRESCRIPTO
            </Text>
            <Text>Learn more about our teams and job openings.</Text>
          
          <Button className="!rounded-none !bg-white !px-4 !text-black !border-[1px] !border-black">Explore Jobs</Button>
        </Box>
      </Box>
    </Box>
  )
}
