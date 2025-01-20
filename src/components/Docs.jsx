import { Box, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router";

const Docs = ({ docs }) => {
  const navigate = useNavigate()

  return (
    <Box className="w-full max-w-[300px] mx-auto sm:max-w-full gap-6 pt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {docs.map((doc, index) => (
        <Box onClick={()=>navigate(`/appointment/${doc.id}`)}
          key={index}
          className="w-full rounded-xl border-2 cursor-pointer hover:-translate-y-4 !transition !duration-500 !ease-in-out "
        >
          <Box className="rounded-lg w-full bg-[#EAEFFF]">
            <Image src={`http://127.0.0.1:8000/storage/${doc.image}`} alt="image" className="w-full"></Image>
          </Box>
          <Box className="w-full pt-6 pb-3 px-3">
            <Text className={`!text-sm !font-semibold truncate flex items-center justify-start gap-3 ${doc.status === "Available" ? "!text-green-400" : "!text-amber-500"}`}>
              <Box className={`w-[10px] h-[10px] rounded-full ${doc.status === "Available" ? "bg-green-400": "bg-amber-500"}`}></Box>{" "}
              {doc.status}{" "}
            </Text>
            <Text className="!text-xl !text-gray-800 !font-semibold truncate">
              {" "}
              {doc.name}{" "}
            </Text>
            <Text className="!text-sm !text-gray-800 !font-semibold truncate">
              {" "}
              {doc.specialty}{" "}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Docs;
