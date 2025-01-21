import { Box, Button, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { useLocation } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import { useEffect } from "react";
// import axios from "axios";
export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();
  const { user, getUser, logout } = useAuthContext();
  // const navigate = useNavigate();
  console.log(location);
  const pathMatched = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  return (
    <Box className="w-full bg-white ">
      <Box className="w-full flex justify-between  py-5 border-b-[1px] border-gray-400">
        <Box
          className="w-[30%] h-[50px]"
          style={{
            backgroundImage: `url("../assets/assets_frontend/logo.svg")`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>

        {/* FOR DESkTOP */}
        <Box className="w-full hidden lg:flex justify-end gap-[150px]">
          {/* Menu */}
          <Box className="flex items-center justify-center gap-5">
            <Link
              to="/"
              className={`!text-xs uppercase font-bold py-2 border-b-2 border-transparent ${
                pathMatched("/") && "border-blue-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className={`!text-xs uppercase font-bold py-2 border-b-2 border-transparent ${
                pathMatched("/doctors") && "border-blue-600"
              }`}
            >
              All doctors
            </Link>
            <Link
              to="/about"
              className={`!text-xs uppercase font-bold py-2 border-b-2 border-transparent ${
                pathMatched("/about") && "border-blue-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`!text-xs uppercase font-bold py-2 border-b-2 border-transparent ${
                pathMatched("/contact") && "border-blue-600"
              }`}
            >
              Contact
            </Link>
            {user ? (
              <Link
                to="/profile"
                className={`!text-xs uppercase font-bold py-2 border-b-2 border-transparent ${
                  pathMatched("/about") && "border-blue-600"
                }`}
              >
                Profile
              </Link>
            ) : (
              ""
            )}
          </Box>
          {/* LOGOUT BUTTON */}
          <Box className="flex items-center justify-end">
            {user ? (
              <Button className="!bg-red-600 !text-sm !font-semibold" onClick={logout}>Logout</Button>
            ) : (
              <Link
                to="/login"
                className="py-3 px-5 bg-myblue text-white text-sm rounded-full"
              >
                Create account
              </Link>
            )}
          </Box>
        </Box>

        {/* FOR MOBILE */}
        <Box className="lg:hidden flex items-center">
          <Drawer
            opened={opened}
            onClose={close}
            position="right"
            size="sm"
            title="Prescripto"
          >
            {/* Drawer content */}
            <Box className="flex flex-col items-center justify-center gap-5">
              <Link
                to="/"
                onClick={close}
                className={`text-xs uppercase font-semibold ${
                  pathMatched("/") &&
                  "!bg-blue-500 py-3 px-3 rounded-md text-white"
                }`}
              >
                Home
              </Link>
              <Link
                to="/doctors"
                onClick={close}
                className={`text-xs uppercase font-semibold ${
                  pathMatched("/doctors") &&
                  "!bg-blue-500 py-3 px-3 rounded-md text-white"
                }`}
              >
                All doctors
              </Link>
              <Link
                to="/about"
                onClick={close}
                className={`text-xs uppercase font-semibold ${
                  pathMatched("/about") &&
                  "!bg-blue-500 py-3 px-3 rounded-md text-white"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={close}
                className={`text-xs uppercase font-semibold ${
                  pathMatched("/contact") &&
                  "!bg-blue-500 py-3 px-3 rounded-md text-white"
                }`}
              >
                Contact
              </Link>
              {/* LOGOUT BUTTON */}
              <Box className="flex items-center justify-end">
                {user ? (
                  <Button
                    onClick={() => {
                      logout();
                      close();
                    }}
                    className="!bg-red-600 !text-sm !font-semibold"
                  >
                    Logout
                  </Button>
                  
                ) : (
                  <Link
                    to="/login"
                    onClick={close}
                    className="py-3 px-5 bg-myblue text-white text-sm rounded-full"
                  >
                    Create account
                  </Link>
                )}
              </Box>
            </Box>
          </Drawer>
          <Box className="w-[30px]">
            <Image
              src="../assets/assets_frontend/menu_icon.svg"
              variant="default"
              onClick={open}
              className="w-full h-full hover:cursor-pointer"
            ></Image>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
