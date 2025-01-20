import { Box, Button, Text } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

export default function StoreDoctor() {
  const params = useParams();
  const navigate = useNavigate();
  const allExperience = [
    "1 Year",
    "2 Years",
    "4 Years",
    "5 Years",
    "6 Years",
    "7 Years",
    "8 Years",
    "9 Years",
    "10 Years",
    "+10 Years",
  ];
  const allStatus = ["Available", "Not Available"];
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    degree: "",
    experience: "",
    status: "",
    address: "",
    fees: 0,
    about: "",
    image: null
  }); 
  

  // FETCHING THE SPECIFIC DOCTOR (API Show)
  useEffect(() => {
    const fetchDoc = async () => {
      if (params.docId) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/doctors/${params.docId}`
          );
          const data = response.data[0];
          setFormData(data); // Mettre à jour les données du médecin
        } catch (error) {
          navigate("/");
          toast.error("Something went wrong");
          console.error("Error fetching doctor data:", error);
        }
      }
    };
    fetchDoc();
  }, [params.docId, navigate]);

  // HANDLING FORM CHANGES
  // const onChange = (e) => {
  //   // FILES
  //   if (e.target.type === "file") {
  //     setDoctor((prevState) => ({
  //       ...prevState,
  //       image: e.target.files[0]
  //     }));
  //   } else{
  //     setDoctor((prevState) => ({
  //       ...prevState,
  //       [e.target.id]: e.target.value,
  //     }));
  //   }
  // };
  const onChange = (e) => {
    const { id, value, files } = e.target;
  
    // Handle file input
    if (files) {
      setFormData((prevState) => ({
        ...prevState,
        image: files[0], // Only store the first file
      }));
      return;
    }
  
    // Handle other inputs
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  

  // UPDATING THE DOCTOR (API PUT)
  // const handleUpdate = async (e) => {
  //   e.preventDefault(); // Prevent page reload
  //   try {
  //     await axios.put(
  //       `http://127.0.0.1:8000/api/doctors/${params.docId}`,
  //       doctor,
  //       // {
  //       //   headers: {
  //       //     "Content-Type": "multipart/form-data",
  //       //   },
  //       // }
  //     );

  //     toast.success("Doctor updated successfully!");
  //     navigate(`/doctor/${params.docId}`); // Redirect after successful update
  //   } catch (error) {
  //     console.error("Error response:", error.response.data);
  //   toast.error("Failed to update doctor. Please try again.");
  //   }
  // };

  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent page reload

    const {
      name,
      specialty,
      degree,
      experience,
      status,
      address,
      fees,
      about,
      image
    } = FormData;
  
    // Only append the image if it's available
    // if (!name || !image) {
    //   toast.error("Please fill in all fields, including the image.");
    //   return;
    // }

    const data = new FormData();
    data.append("name", name);
    data.append("experience", experience);
    data.append("specialty", specialty);
    data.append("degree", degree);
    data.append("status", status);
    data.append("address", address);
    data.append("fees", fees);
    data.append("about", about);
    data.append("image", image);
  
    try {
      // Send the FormData to the backend using axios
      await axios.put(
        `http://127.0.0.1:8000/api/doctors/${params.docId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important header for file uploads
          },
        }
      );
  
      toast.success("Doctor updated successfully!");
      navigate(`/doctor/${params.docId}`); // Redirect after successful update
    } catch (error) {
      console.error("Error response:", error.response?.data);
      toast.error("Failed to update doctor. Please try again.");
    }
  };
  

  return (
    <Box className="w-full">
      <form
        className="mt-6"
        onSubmit={handleUpdate}
        encType="multipart/form-data"
      >
        <Box className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* Name */}
          <Box className="w-full flex flex-col mb-4">
            <label htmlFor="name" className="mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={onChange}
              id="name"
              className="w-[200px] bg-white border-[1px] border-gray-200 p-2"
            />
          </Box>

          {/* Specialty */}
          <Box className="w-full flex flex-col mb-4">
            <label htmlFor="specialty" className="mb-1 font-medium">
              Specialty
            </label>
            <input
              type="text"
              value={formData.specialty}
              onChange={onChange}
              id="specialty"
              className="w-[200px] bg-white border-[1px] border-gray-200 p-2"
            />
          </Box>

          {/* Experience */}
          <Box className="w-full flex flex-col mb-4">
            <label htmlFor="specialty" className="mb-1 font-medium">
              Experience
            </label>
            <select
            value={formData.experience}
              id="experience"
              className="w-[200px] bg-white border-[1px] border-gray-200 p-2"
            >
              {allExperience.map((exp, index) => (
                <option key={index} value={exp}> {exp} </option>
              ))}
            </select>
          </Box>

          {/* Degree */}
          <Box className="w-full flex flex-col mb-4">
            <label htmlFor="degree" className="mb-1 font-medium">
              Degree
            </label>
            <input
              type="text"
              value={formData.degree}
              onChange={onChange}
              id="degree"
              className="w-[200px] bg-white border-[1px] border-gray-200 p-2"
            />
          </Box>

          {/* Address */}
          <Box className="w-full flex flex-col mb-4">
            <label htmlFor="address" className="mb-1 font-medium">
              Address
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={onChange}
              id="address"
              className="w-[200px] bg-white border-[1px] border-gray-200 p-2"
            />
          </Box>

          {/* About */}
          <Box className="w-full flex flex-col mb-4">
            <label htmlFor="about" className="mb-1 font-medium">
              About
            </label>
            <input
              type="text"
              value={formData.about}
              onChange={onChange}
              id="about"
              className="w-[200px] bg-white border-[1px] border-gray-200 p-2"
            />
          </Box>

          {/* Status */}
          <Box className="w-full flex flex-col mb-4">
            <label htmlFor="status" className="mb-1 font-medium">
              Status
            </label>
            <select
            value={formData.status}
              id="status"
              className="w-[200px] bg-white border-[1px] border-gray-200 p-2"
            >
              {allStatus.map((status, index) => (
                <option key={index} value={status}> {status} </option>
              ))}
            </select>
          </Box>

          {/* Fees */}
          <Box className="w-full flex flex-col mb-4">
            <label htmlFor="fees" className="mb-1 font-medium">
              Fees
            </label>
            <input
              type="number"
              value={formData.fees}
              onChange={onChange}
              id="fees"
              className="w-[200px] bg-white border-[1px] border-gray-200 p-2"
            />
          </Box>

          {/* Image */}
          <Box className="flex flex-col mb-4">
            <label htmlFor="img" className="mb-1 font-medium">
              Doctor image
            </label>
            <input
              type="file"
              id="image"
              onChange={onChange}
              className="w-[200px] bg-white border-[1px] border-gray-200 p-2 text-xs"
              accept="image/*"
            />
          </Box>
        </Box>
        <Box className="mt-6">
          <Button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
}
