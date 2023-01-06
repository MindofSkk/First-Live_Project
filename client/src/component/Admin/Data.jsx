import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData, getdataAPI } from "../../store/product/product.actions";
import Admin from "./Admin";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  SimpleGrid,
  Input,

} from "@chakra-ui/react";
import {
  Box,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useToast } from '@chakra-ui/react'

const Data = () => {
  const toast = useToast()
  const { data, loading } = useSelector((store) => store.product);
  //const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
   console.log("data", data);

  const handlefilter = (e) => {
    //console.log(e.target.value);
    setFilter(e.target.value);
    console.log(e.target.value);
  };

  const handleDelete = (id) => {
    // console.log(id)

    axios
      .delete(`https://json-user-data.up.railway.app/users/${id}`)
      .then(() => dispatch(getdataAPI(filter)))
      .then(()=>toast({
        position: 'top',
        title: 'Data Deleted',
        description: "Data is deleted from backend",
        status: 'success',
        duration: 2000,
        isClosable: true,
      }))
  };

  useEffect(() => {
    dispatch(getdataAPI(filter));
  }, [filter]);
  return (
    <div style={{backgroundColor:"white"}}>
      {/* <Admin /> */}
      <Text
        fontSize={"40px"}
        fontWeight="bold"
        color={"orangered"}
        marginBottom="10px"
        textAlign={"center"}
      >
        UserData
      </Text>
      <div
        style={{
          width: "80%",
          // border: "1px solid red",
          height: "100px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Input
          w="400px"
          type="text"
          placeholder="Search by name"
          onKeyUp={(e) => setFilter(e.target.value)}
        />
        {/* <------------filter by gender------------> */}
        <Select
          placeholder="Gender"
          width="300px"
          onChange={handlefilter}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <h1>Total : {data.length}</h1>
        {/* <-----------filter by country------------> */}
        {/* <Select
          placeholder="filter by country"
          width="300px"
          onChange={handlefilter}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Pakisthan">Pakisthan</option>
          <option value="switzerland">switzerland</option>
          <option value="sri lanka">sri lanka</option>
        </Select> */}
      </div>

      {/* ---data map-------------- */}
      <TableContainer>
          <Table variant='simple' border="1px solid grey" >
            <Thead>
              <Tr>
                <Th>FullName</Th>
                <Th>Gender</Th>
                <Th>Mobile No</Th>
                <Th>Distict</Th>
                <Th>Village</Th>
                <Th>Address</Th>
                <Th>Delete</Th>
                {/* <Th>Edit</Th> */}
                
              </Tr>
            </Thead>
        {data?.map((el) => (
          <Tbody key={el.id}>
          <Tr>
            <Td>{el.FullName}</Td>
            <Td>{el.Gender}</Td>
            <Td>{el.Mobile}</Td>
            <Td>{el.Distict}</Td>
            <Td>{el.Village}</Td>
            <Td>{el.Address}</Td>
            {/* <Td>
              {" "}
              <EditModal el={el} getData={getData} />
            </Td> */}
            <Td>
              <Button onClick={() => handleDelete(el.id)} _hover={{bg:"red"}} bg="red" color="white">Delete</Button>
            </Td>
          </Tr>
        </Tbody>
        ))}
         </Table>
        </TableContainer>

      
        <br /><br /><br />
    </div>
  );
};

export default Data;
