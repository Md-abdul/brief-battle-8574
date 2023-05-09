import React, { useEffect, useReducer } from 'react'
import { Button, Stack, Checkbox, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import useDisclosure from '@chakra-ui/react'
import Footer from '../Components/Footer'
const reducer = (state, action) => {
    switch (action.type) {
      case "Change_Input": {
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      }
      case 'PREFELL_DATA' : {
          return {
              ...state,
              ...action.payload
          }
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


export default function Form({target}) {

    const [state, dispatch] = useReducer(reducer, initialState);
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios({
            method:'get',
            url: `http://localhost:8080/Courses/${id}`
        })
        .then((res) => {
            console.log(res.data)
            dispatch({type:'PREFELL_DATA', payload:res?.data})
        })
    }, [id])

    const updatedData = (id,data) => {
        return axios({
            method:'put',
            url:`http://localhost:8080/Courses/${id}`,
            data:data
        })
    }

    const handelChange = (e) => {
        let { name, value, type } = e.target;
    
        const payload = {
          name: name,
          value: type === "number" ? Number(value) : value,
        };
    
        dispatch({ type: "Change_Input", payload });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        updatedData(id, state).then((res) => {
            navigate(`/courses`)
        })
    };

  return (
    <div>
        <form className="form" onSubmit={handleSubmit} >
        <FormControl className='houseDetails' mt={70}>
          <Stack spacing={3} >
            <Input
              focusBorderColor={"lime"}
              className="name"
              placeholder="Name"
              value={state.name}
              name='name'
              onChange={handelChange}
            />
            <Input
              focusBorderColor={"lime"}
              className="Image"
              placeholder="Image"
              name="image"
              value={state.image}
              onChange={handelChange}
            />
             
            <Input
              focusBorderColor={"lime"}
              className="location"
              placeholder="location"
              value={state.location}
              name='location'
              onChange={handelChange}
            />
            <Input
              focusBorderColor={"lime"}
              className="Rating"
              placeholder="Rating"
              value={state.Rating}
              name='Rating'
              onChange={handelChange}
            />
            <Input
              focusBorderColor={"lime"}
              className="rank"
              placeholder="rank"
              type="number"
              name='rank'
              value={state.rank}
              onChange={handelChange}
            />
            <Button colorScheme={"green"} className="submitBtn" type="submit">
              Submit
            </Button>
          </Stack>
        </FormControl>
      </form>
      <br/>
      <Footer/>
    </div>
  )
}
