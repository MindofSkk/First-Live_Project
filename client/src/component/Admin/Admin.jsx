import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handlLogin = () => {
    navigate("/login");
  };
  const handlListpage = () => {
    navigate("/data");
  };
  const handlReport = () => {
    navigate("/report");
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "teal",
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <Button
          colorScheme="teal"
          size="lg"
          bgGradient="linear(to-r, red.500, yellow.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          onClick={handleHome}
        >
          Home
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          bgGradient="linear(to-r, red.500, yellow.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          onClick={handlLogin}
        >
          Login
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          bgGradient="linear(to-r, red.500, yellow.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          onClick={handlListpage}
        >
          DataPage
        </Button>
        <Button
          colorScheme="teal"
          size="lg"
          bgGradient="linear(to-r, red.500, yellow.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          onClick={handlReport}
        >
          Report
        </Button>
      </div>
    </div>
  );
};

export default Admin;
