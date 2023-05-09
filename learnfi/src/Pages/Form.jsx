import React, { useReducer } from "react";
import {
  Button,
  Stack,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useDisclosure from "@chakra-ui/react";
import { getdata } from "../Index/Index";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Box,
} from "@chakra-ui/react";
const reducer = (state, action) => {
  switch (action.type) {
    case "Input_Add": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    default: {
      throw new Error("Invalid Input type");
    }
  }
};

const initialState = {
  name: "",
  Image: "",
  location: "",
  Rating: "",
  rank: "",
};

export default function Form({ target, forcerender, setForceRender }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const payload = {
      name: name,
      value:
        type === "checkbox"
          ? checked
          : type === "number"
          ? Number(value)
          : value,
    };

    dispatch({ type: "Input_Add", payload });
  };

  const Postdata = (data) => {
  
       axios.post("http://localhost:8080/Courses", data)
       .then((res)=>{
         setForceRender(!forcerender);
         alert("Data added ");

        }).catch((error)=>{
         console.log("Error adding house: ", error);

       })
   
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Postdata(state);
    getdata();
    navigate(`/courses`);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <FormControl className="houseDetails">
          <Stack spacing={3}>
            <Input
              focusBorderColor={"lime"}
              className="name"
              placeholder="Name"
              value={state.name}
              name="name"
              onChange={handleChange}
            />
            <Input
              focusBorderColor={"lime"}
              className="Image"
              placeholder="Image"
              name="image"
              value={state.image}
              onChange={handleChange}
            />

            <Input
              focusBorderColor={"lime"}
              className="location"
              placeholder="location"
              value={state.location}
              name="location"
              onChange={handleChange}
            />
            <Input
              focusBorderColor={"lime"}
              className="Rating"
              placeholder="Rating"
              value={state.Rating}
              name="Rating"
              onChange={handleChange}
            />
            <Input
              focusBorderColor={"lime"}
              className="rank"
              placeholder="rank"
              type="number"
              name="rank"
              value={state.rank}
              onChange={handleChange}
            />

            {/* <Link to={`/courses`}> */}
            <Button colorScheme={"green"} className="submitBtn" type="submit">
              Submit
            </Button>
            {/* </Link> */}
          </Stack>
        </FormControl>
      </form>
    </div>
  );
}
