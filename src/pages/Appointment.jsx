import { Box, Button, Image, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAuthContext from "../context/AuthContext";
import axios from "axios";
import Loading from "../components/Loading";
export default function Appointment() {
  const [rdv, setRdv] = useState([]);
  const { user, getUser } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [canceled, setCanceled] = useState([]);
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  useEffect(() => {
    setLoading(true);
    const getAppointmentUser = async () => {
      if (user) {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/appointment/user`
          );

          const data = response.data.data;
          const appointment = data.filter((data) => data.user_id === user.id);
          setRdv(appointment);
          console.log(appointment);
        } catch (error) {
          toast.error(error);
          console.log(error);
        }
      }
      setLoading(false);
    };
    getAppointmentUser();
  }, [user]);

  

  // Fonction appelée lorsqu'un rendez-vous est annulé
  const cancelAppointment = async(rdvId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/appointment/delete/${rdvId}`)
      setCanceled((prevCanceled) => [...prevCanceled, rdvId]);
      toast.success(`Appointment ${rdvId} canceled`);
    } catch (error) {
      toast.error("Failed to cancel appointment. Please try again.");
      console.error("Error canceling appointment:", error);
    }
  };

  const isCanceled = (element) => {
    return canceled.includes(element);
  };

  return (
    <Box className="w-full mt-6 mb-12">
      <Text className="!text-gray-600 !text-lg !font-semibold !py-3 border-b-[1px] border-gray-200">
        My appointments
      </Text>
      {rdv.length === 0 && !loading && (
        <p className="text-amber-400 text-xl text-center pt-[50px] ">
          You do not have an appointment yet
        </p>
      )}
      {/* FOREACH */}
      {loading && <Loading />}
      {!loading &&
        rdv &&
        rdv.map((rdv) => (
          <>
            <Box
              key={rdv.id}
              className="w-full flex mt-3 pb-6 !border-b-[1px] border-gray-200 "
            >
              <Box className="w-full flex justify-start items-start gap-3">
                <Box className="w-[150px] ">
                  <Image
                    src={`http://127.0.0.1:8000/storage/${rdv.doctor.image}`}
                  ></Image>
                </Box>
                <Box className="flex flex-col">
                  <Text className="!text-lg !font-semibold !text-gray-800">
                    {rdv.doctor.name}
                  </Text>
                  <Text className="!text-sm !font-semibold !text-gray-800">
                    {rdv.doctor.specialty}
                  </Text>
                  <Text className="!text-sm !font-semibold !text-gray-800">
                    Address: <br />{" "}
                    <span className="!text-xs !text-gray-600 !font-semibold">
                      {rdv.doctor.address}
                    </span>
                  </Text>
                  <Text className="!text-sm !font-semibold !text-gray-800">
                    Date & Time:{" "}
                    <span className="!text-xs !text-gray-600 !font-semibold">
                      {rdv.date} | {rdv.time}
                    </span>
                  </Text>
                </Box>
              </Box>

              {/*BUTTON PAY/CANCEL */}
              <Box className="flex flex-col justify-end items-end gap-3">
                <Button className="!w-[200px] !text-gray-600 !text-sm !font-semibold !bg-white !border-[1px] !border-gray-200 !rounded-md !py-2  hover:!bg-blue-600 hover:!text-white transition duration-500 ease-in-out ">
                  Pay online
                </Button>
                <Button
                  onClick={() => cancelAppointment(rdv.id)}
                  disabled={isCanceled(rdv.id)}
                  className={`!w-[200px] !text-red-600 !text-sm !font-semibold !border-[1px] !border-gray-200 !rounded-md !py-2  hover:!bg-red-600 hover:!text-white transition duration-500 ease-in-out ${isCanceled(rdv.id) ? "!bg-amber-300": "!bg-white"}`}
                >
                  {isCanceled(rdv.id) ? "Canceled" : "Cancel appointment"}
                </Button>
              </Box>
            </Box>
          </>
        ))}
    </Box>
  );
}
