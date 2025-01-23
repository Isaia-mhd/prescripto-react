import { Box, Button, Image, Text } from "@mantine/core";
import Docs from "../components/Docs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import useAuthContext from "../context/AuthContext";

export default function MakeAppointment() {
  const [loading, setLoading] = useState(true);
  const {user} = useAuthContext();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const params = useParams();
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  // FETCHING THE SPECIFIC DOCTOR(API Show)
  useEffect(() => {
    const fetchDoc = async () => {
      if (params.docId) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/doctors/${params.docId}`
          );
          setDoctor(response.data[0]);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching doctor data:", error);
        }
      }
    };
    fetchDoc();
  }, []);

  // FETCHING ALL DOCTOR
  useEffect(() => {
    const fetchDoc = async () => {
      if (params.docId) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/doctors`);
          setDoctors(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching doctor data:", error);
        }
      }
    };
    fetchDoc();
  }, []);

  const related = doctors.filter((doc) => doc.specialty === doctor?.specialty);

  // Update the selected day
  const handleDayChange = (selectedDay) => {
    setDay(selectedDay);
  };


   // Calcul des dates réelles de la semaine
   const generateWeekDays = () => {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const today = new Date(); // Date actuelle
    const weekDays = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i); // Ajoute 'i' jours
      const dayName = daysOfWeek[date.getDay()]; // Récupère le nom du jour
      const formattedDate = `${dayName} ${date.getDate()}`; // Exemple: "MONDAY 22"
      weekDays.push(formattedDate);
    }

    return weekDays;
  };

  const weekDays = generateWeekDays(); // Appel de la fonction pour générer les jours
  const times = ["8:30 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "15:00 pm", "15:30 pm", "16:00 pm", "16:30 pm", "17:00 pm"] 


  const Submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    if(user){
      try {
        const response = await axios.post("http://localhost:8000/api/appointment", {date: day, time, user_id: user.id, doctor_id: params.docId});
        console.log(response);
        toast.success("Appointment booked");
        navigate("/my-appointments");
      } catch (error) {
        toast.error("Could not make appointment. Try later");
      } 
    }else{
      navigate("/login");
      toast.error("Log in first before making an appointment")
    }
  }
  return (
    <>
      <Box className="w-full flex flex-col justify-center items-center  sm:flex-row sm:justify-start sm:items-start gap-4 mt-12">
        <Box className="!w-full sm:!w-[300px] sm:!h-[250px] !rounded-lg ">
          <Image
            src={`http://127.0.0.1:8000/storage/${doctor?.image}`}
            alt="doc_image"
            className="!rounded-lg w-full h-full"
          ></Image>
        </Box>

        <Box className="w-[95%] relative bottom-[70px] sm:w-[60%]  bg-white sm:bottom-0 !rounded-lg ">
          <Box className="w-full !border-[1px] !border-gray-200 !rounded-lg !py-4 !px-7">
            <Box className="w-full space-y-3">
              <Text className="!text-2xl !text-gray-700 !font-semibold !flex items-center justify-start gap-2">
                {doctor?.name} <Box className={`!w-[15px] !h-[15px] !rounded-full ${doctor?.status != "Available"? "!bg-amber-400" :"!bg-lime-500"}`}></Box>
              </Text>
              <Text className="!text-md !text-gray-700 !font-semibold">
                {doctor?.degree} - {doctor?.specialty}{" "}
                <span className="!text-xs !border-[1px] !border-gray-200 !rounded-full !py-[2px] !px-3 ">
                  {doctor?.experience}
                </span>
              </Text>
              <Text className="!text-sm !text-gray-800 !font-bold">
                About <br />{" "}
                <span className="!text-xs !text-gray-700 !font-medium">
                  {doctor?.about}
                </span>
              </Text>
              <Text className="!text-sm !text-gray-700 !font-semibold">
                Appointment fee:{" "}
                <span className="!text-gray-900"> ${doctor?.fees} </span>
              </Text>
            </Box>
          </Box>
          {/* DATE TIME OF APOINTMENT */}
          <Box className="w-full mt-6">
            <Text className="!text-lg !text-gray-600 !font-semibold">
              Booking slots
            </Text>
            <form className="w-full" onSubmit={Submit}>
              {/* DAY */}

              <Box className="w-full flex justify-start items-start gap-8 overflow-auto mt-6">
                {/* {JOUR DYNAMIC} */}
                {weekDays.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => handleDayChange(d)}
                    className={`!rounded-full !w-[80px] !h-[100px] !flex px-3 !justify-center !items-center border-[1px] ${
                      day === d
                        ? "!bg-blue-600 !text-white"
                        : "!bg-white !text-gray-700"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </Box>

              {/* TIME */}
              <Box className="mt-10 space-y-3 gap-2 overflow-x-hidden">
                {/* {JOUR DYNAMIC} */}
                {times.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    className={`!rounded-full !h-[40px] !w-[100px] !border-[1px] ${
                      time === t
                        ? "!bg-blue-600 !text-white"
                        : "!bg-white !text-gray-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </Box>

              <button type="submit" className="mt-6 bg-blue-600 py-4 px-4 rounded-full text-sm text-white font-semibold" disabled={doctor?.status != "Available"}>
                {doctor?.status != "Available" ? "Not Available" : "Book appointment"}
              </button>
            </form>
          </Box>
        </Box>
      </Box>

      <Box className="w-full mt-24">
        <Text className="!text-center !text-3xl !font-semibold">
          Related Doctors
        </Text>
        <Box className="w-[300px] mx-auto flex justify-center items-center pt-3">
          <Text className="!text-center !text-sm !text-gray-800 !font-semibold">
            Simply browse through our extensive list of trusted doctors
          </Text>
        </Box>
        <Docs docs={related} />
      </Box>
    </>
  );
}
