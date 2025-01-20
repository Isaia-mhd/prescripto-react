import { Box } from "@mantine/core";
import { Link } from "react-router-dom";

export default function MoreBtn() {
  return (
    <Box className="w-[100px] text-center hover:cursor-pointer !text-gray-500 font-semibold py-3 mx-auto rounded-full bg-[#EAEFFF] mt-12"><Link to="/doctors">More</Link></Box>
  )
}
