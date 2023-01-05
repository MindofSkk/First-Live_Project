import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../store/auth/auth.actions";
import Admin from "./Admin";

const Login = () => {
  const token = useSelector((store) => store.auth.data.token);
  //console.log("token",token)
  const [creds, setCreds] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(loginAPI(creds));
  };
  useEffect(() => {
    if (token) {
      navigate("/data");
    }
  }, [token, navigate]);
  return (
    <div>
      {/* <Admin /> */}
      <Text
        fontSize={"40px"}
        fontWeight="bold"
        color={"orangered"}
        marginBottom="10px"
        textAlign={"center"}
      >
        Login Page
      </Text>
      <Box width={"40%"} margin="auto">
        <form onSubmit={handlesubmit}>
          <br />
          <br />
          <FormControl>
            <FormLabel>Email </FormLabel>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handlechange}
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Password </FormLabel>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handlechange}
            />
          </FormControl>
          <br />
          <Button colorScheme="orangered" variant="outline" type="submit">
            Login in
          </Button>
          <br />
        </form>
      </Box>
    </div>
  );
};

export default Login;
