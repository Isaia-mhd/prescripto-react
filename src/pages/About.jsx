import { Box, Image, Text } from "@mantine/core";

export default function About() {
  return (
    <Box className="w-full mt-6">
      <Text className="!text-gray-900 text-center !text-2xl !font-normal">
        ABOUT US
      </Text>
      <Box className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-start items-start mt-6">
        <Box className="w-[300px] lg:w-[600px] mx-auto !rounded-lg ">
          <Image
            src="./assets/assets_frontend/about_image.png"
            alt="about_image"
            className="w-full h-full !rounded-lg"
          ></Image>
        </Box>

        {/* ALL OF THE TEXT */}
        <Box className="w-full space-y-4">
          <Text className="!text-sm !text-gray-700 !font-semibold lg:!text-md">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records
          </Text>

          <Text className="!text-sm !text-gray-700 !font-semibold lg:!text-md">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </Text>
          <Box className="w-full space-y-1">
            <Text className="!text-black !font-semibold">Our Vision</Text>
            <Text className="!text-sm !text-gray-700 !font-semibold lg:!text-md">
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className="w-full mt-6 mb-[150px] ">
        <Text className="!text-xl !font-semibold">WHY CHOOSE US</Text>
        <Box className="w-full flex flex-col lg:flex-row mt-3">
          <Box className="w-full !bg-white border-[1px] hover:!bg-myblue hover:cursor-pointer px-7 py-[30px] lg:py-[80px] space-y-4 transition duration-1000 ease-in-out">
            <Text className="!text-[#1F2937] !text-lg !font-semibold uppercase">Efficiency</Text>
            <Text className="!text-gray-600 !text-sm !font-medium">Streamlined appointment scheduling that fits into your busy lifestyle.</Text>
          </Box>
          <Box className="w-full !bg-white border-[1px] hover:!bg-myblue hover:cursor-pointer px-7 py-[30px] lg:py-[80px] space-y-4 transition duration-1000 ease-in-out">
            <Text className="!text-[#1F2937] !text-lg !font-semibold uppercase">Convenience</Text>
            <Text className="!text-gray-600 !text-sm !font-medium">Access to a network of trusted healthcare professionals in your area.</Text>
          </Box>
          <Box className="w-full !bg-white border-[1px] hover:!bg-myblue hover:cursor-pointer px-7 py-[30px] lg:py-[80px] space-y-4 transition duration-1000 ease-in-out">
            <Text className="!text-[#1F2937] !text-lg !font-semibold uppercase">Personalization</Text>
            <Text className="!text-gray-600 !text-sm !font-medium">Tailored recommendations and reminders to help you stay on top of your health.</Text>
          </Box>
          
        </Box>

      </Box>
    </Box>
  );
}
