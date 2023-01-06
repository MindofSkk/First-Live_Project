import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";

import logo from "./logo.jpeg";
import { useNavigate } from "react-router-dom";
export const NewPage = () => {
  const navigate = useNavigate();
  const re = () => {
    navigate("/form");
  };
  return (
    <div>
      <Box
        className={styles.gridata}
        width={"99%"}
        margin="auto"
        // border="1px solid orangered"
        padding={"15px"}
        textAlign="center"
      >
        <Box>
          {" "}
          <Image
            boxSize="100%"
            margin="auto"
            objectFit="cover"
            src={logo}
            alt="vDan Abramo"
          />{" "}
        </Box>
        <Box
          border="1px solid orangered"
          borderRadius="5px"
          bg={"skyblue"}
          color="black"
        >
          <Text padding={"40px"}>
            <Heading mb={4}>श्री सुंदरकांड पाठ</Heading>
            <Heading size="ml">
              {" "}
              दिनांक: शनिवार, 21 जनवरी 2023 श्री सुंदरकांड पाठ 1001 पाठकों
              द्वारा प्रातः 9:00 बजे से अपराह्न 3:00 बजे तक
            </Heading>
            <br />

            <Heading size="md">
              {" "}
              श्री सुंदरकांड पाठ के पाठक के रूप में जुड़ने के लिए पंजीकरण करें
            </Heading>
            <br />
            {/* कार्यक्रम विवरण भक्तगण कृपया ध्यान दें <br />
            श्री सुंदरकांड पाठ के पाठक के रूप में जुड़ने के लिए पंजीकरण करें */}
            <Button
              colorScheme="tomato"
              bg="orangered"
              color="white"
              variant="outline"
              type="submit"
              display={"block"}
              margin="auto"
              onClick={re}
            >
              पंजीकरण करें
            </Button>
          </Text>
        </Box>
      </Box>
{/* --------- */}
      <Box
        width={"99%"}
        margin="auto"
        padding={"15px"}
        textAlign="center"
        bg={"#1b1c1d"}
        color="white"
        borderRadius="5px"
      >
        <Heading size="sm" >
          {" "}
          <u style={{color:"red.100"}}> कार्यक्रम विवरण :</u> <br /> <br />
          दिनांक: शनिवार, 21 जनवरी 2023 श्री सुंदरकांड पाठ 1001 पाठकों द्वारा
          प्रातः 9:00 बजे से अपराह्न 3:00 बजे तक <br /> <br />
          <Heading size="lg" color={"#e5ba59"}>
            {" "}
            विशाल भंडारा शाम 4 बजे से
          </Heading>
        </Heading>

        <br />
        <Heading size="md" >
          {" "}
          <u style={{color:"orange"}}> कार्यक्रम स्थल। :</u> <br /> <br />
          राधा कृष्ण मंदिर, पिस्का नगरी। <br /> 
         
        </Heading>
         <br />
        <Button
              colorScheme="tomato"
              bg="orangered"
              color="white"
              variant="outline"
              type="submit"
              display={"block"}
              margin="auto"
              onClick={re}
            >
           Register | SignUp
             
            </Button>
        <br />
        <Heading size="sm" >
          {" "}
          <u style={{color:"red"}}> श्री मानस प्रचार मंडल एवं युवा सहयोगी :</u> <br /> <br />
          रघुनंदन केशरी, अनंत पाठक, अमर केशरी, चंद्रकांत पाठक, राजकमल चौधरी,
          नीतीश पाठक, देवानंद चौधरी, सुमित चौधरी, आलोक चौधरी, संजीव, विकास और
          अरुण प्रमाणिक
        </Heading>
      </Box>
      <br />


      {/* --------- */}


      <Box
        width={"99%"}
        margin="auto"
        padding={"15px"}
        textAlign="center"
        bg={"#1b1c1d"}
        color="white"
        borderRadius="5px"
      >
        Contact us :- <br />
        7004389272
        9386723663
      </Box>
    </div>
  );
};
