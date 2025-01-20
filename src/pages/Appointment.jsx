import { Box, Button, Image, Text } from "@mantine/core";

export default function Appointment() {
  return (
    <Box className="w-full mt-6 mb-12">
      <Text className="!text-gray-600 !text-lg !font-semibold !py-3 border-b-[1px] border-gray-200">
        My appointments
      </Text>
      {/* FOREACH */}
      <Box className="w-full flex mt-3 pb-6 !border-b-[1px] border-gray-200 ">
        <Box className="w-full flex justify-start items-start gap-3">
          <Box className="w-[150px] ">
            <Image src="./assets/assets_frontend/doc5.png"></Image>
          </Box>
          <Box className="flex flex-col">
            <Text className="!text-lg !font-semibold !text-gray-800">
              Dr. Jennifer Garcia
            </Text>
            <Text className="!text-sm !font-semibold !text-gray-800">
              Neurologist
            </Text>
            <Text className="!text-sm !font-semibold !text-gray-800">
              Address: <br />{" "}
              <span className="!text-xs !text-gray-600 !font-semibold">
                37th Cross, Richmond Circle, Ring Road, London
              </span>
            </Text>
            <Text className="!text-sm !font-semibold !text-gray-800">
              Date & Time:{" "}
              <span className="!text-xs !text-gray-600 !font-semibold">
                16 Feb 2025 | 11:30
              </span>
            </Text>
          </Box>
        </Box>

        {/*BUTTON PAY/CANCEL */}
        <Box className="flex flex-col justify-end items-end gap-3">
          <Button className="!w-[200px] !text-gray-600 !text-sm !font-semibold !bg-white !border-[1px] !border-gray-200 !rounded-md !py-2  hover:!bg-blue-600 hover:!text-white transition duration-500 ease-in-out ">
            Pay online
          </Button>
          <Button className="!w-[200px] !text-gray-600 !text-sm !font-semibold !bg-white !border-[1px] !border-gray-200 !rounded-md !py-2  hover:!bg-red-600 hover:!text-white transition duration-500 ease-in-out ">
            Cancel appointment
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
