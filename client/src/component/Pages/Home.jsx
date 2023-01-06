import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const toast = useToast()
  const navigate = useNavigate();
 
  const [data, setData] = useState({});
  const [gender, setGender] = useState("");
 

  const handlechange = (e) => {
    
    const { name, value } = e.target;
    
    setData({
      ...data,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const cred = {
      FullName: data.FullName,
      Distict: data.Distict,
      Gender: gender,
      Mobile: data.Mobile,
      Village: data.Village,
      Address: data.Address,
    };
    console.log(cred);
    fetch("https://json-masai-ser-production.up.railway.app/posts", {
      method: "POST",
      body: JSON.stringify(cred),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        toast({
          position: 'top',
          title: 'Registeration sucessfull.',
          description: "Thank you  for participating.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        navigate("/")

      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong ");
      });
  };
  return (
    <div>
      <marquee direction="left">
        <h2 style={{ color: "blue", fontWeight: "bolder", scrollAmount: "20" }}>
          1001 पाठ कर्ताओं के द्वारा श्री सुंदरकांड पाठ में शामिल होने हेतु
          सदस्य फॉर्म।
        </h2>
      </marquee>
      <Text
        fontSize={"40px"}
        fontWeight="bold"
        color={"orangered"}
        marginBottom="10px"
        textAlign={"center"}
      >
        श्री मानस प्रचार मंडल पिस्का नगड़ी।
      </Text>
      <Box
        width={"80%"}
        margin="auto"
        border="1px solid orangered"
        padding={"15px"}
        bg="white"
      >
        <form onSubmit={handlesubmit}>
          <FormControl>
            <FormLabel>Full Name / पूरा नाम :-</FormLabel>
            <Input
              type="text"
              placeholder="Full Name / पूरा नाम "
              //name="user"
              name="FullName"
              onChange={handlechange}
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Mobile No</FormLabel>
            <Input
              type="Number"
              placeholder="Enter Mobile No"
              name="Mobile"
              onChange={handlechange}
            />
          </FormControl>

          <br />
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="row">
              <Radio
                colorScheme="red"
                name="Gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
              >
                Male
              </Radio>
              <Radio
                colorScheme="green"
                name="Gender"
                value="female"
                onChange={(e) => setGender(e.target.value)}
              >
                Female
              </Radio>
            </Stack>
          </RadioGroup>
          <br />

          <FormControl>
            <FormLabel>Village/ गांव :-</FormLabel>
            <Input
              type="text"
              placeholder="Village/ गांव  "
              //name="user"
              name="Village"
              onChange={handlechange}
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>District / जिला :-</FormLabel>
            <Input
              type="text"
              placeholder="Distict / जिला "
              //name="user"
              name="Distict"
              onChange={handlechange}
            />
          </FormControl>

          <br />
          <FormControl>
            <FormLabel>Address / पता :-</FormLabel>
            <Input
              type="text"
              placeholder="Address / पता  "
              //name="user"
              name="Address"
              onChange={handlechange}
            />
          </FormControl>
          {/* <FormControl>
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              placeholder="Country"
              name="Country"
              onChange={handlechange}
            />
          </FormControl> */}
          {/* <Select
            placeholder="select country"
            name="Country"
            onChange={handlechange}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Pakisthan">Pakisthan</option>
            <option value="switzerland">switzerland</option>
            <option value="sri lanka">sri lanka</option>
          </Select> */}
          <br />

          <br />
          <Button
            colorScheme="tomato"
            bg="orangered"
            color="white"
            variant="outline"
            type="submit"
            display={"block"}
            margin="auto"
          >
            Submit
          </Button>
        </form>
      </Box>

     <br />
    </div>
  );
};
