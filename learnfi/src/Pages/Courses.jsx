import React, { useEffect, useReducer, useState } from "react";
import ProductCard from "./ProductCard";
import Form from "./Form";
import axios from "axios";
import Footer from "../Components/Footer";
import { Button } from "@chakra-ui/react";
import { color } from "framer-motion";
import { Postdata } from "./Form";

const initState = {
  isLoading: false,
  isError: false,
  data: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_REQUEST": {
      return { ...state, isLoading: true };
    }
    case "GET_DATA": {
      return { ...state, data: payload ,isLoading:false};
    }
    case "GET_DATA_FAILURE": {
      return { ...state, isError: true, isLoading: false };
    }
    default: {
      return state;
    }
  }
};
const sort = "rank"
const getfilterurl = (location, orderby,sort) => {
  let url = `http://localhost:8080/Courses`;

  if (location) {
    return (url = `${url}?location=${location}`);
  } 
  else if(orderby){
    return (url = `${url}&_sort=${sort}&_order=${orderby}`)
  }
  return `http://localhost:8080/Courses`;
};

export const getdata = async (location, orderby,sort) => {
  const apiurl = getfilterurl(location, orderby,sort);

  const res = await fetch(apiurl);
  const data = await res.json();

  return data;
};

export default function Courses({ target }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const [forcerender,setForceRender]=useState(false)

  const [toggle, setToggle] = useState(false);
  const [location, setCategory] = useState("");
  const [orderby, setorderby] = useState("");
  

  
  const handleClick = () => {
    setToggle(!toggle);
  };
  
  useEffect(() => {
    dispatch({ type: "GET_REQUEST" });
    getdata(location, orderby)
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_DATA", payload: res });
      })
      .catch(() => {
        dispatch({ type: "GET_DATA_FAILURE" });
      });
  }, [location, orderby,forcerender,]);

  // useEffect(() => {
    const deleteResturants = (id) => {
      return axios({
        method: "delete",
        url: `http://localhost:8080/Courses/${id}`,
      }).then((res) => {
        getdata(location, orderby)
      });
    };
  // }, [])
  
 
  console.log("outside forcerender",forcerender);
  return (
    <div style={{ padding: "30px" }}>
      <div>
        <img
          style={{ height: "500px", width: "100%", borderRadius: "10px" }}
          src="https://thumbs.dreamstime.com/b/online-courses-banner-flat-style-workspace-laptop-books-lamp-coffee-e-learning-concept-distance-education-177644012.jpg"
          alt="course"
        />
      </div>
      <div>
        <Button
          style={{ marginLeft: "30px", marginTop: "7px" }}
          colorScheme={"messenger"}
          onClick={handleClick}
        >
          {toggle ? "View Dashboard" : "View Form"}
        </Button>

        <select
          name=""
          id=""
          value={location}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            backgroundColor: "#01579B",
            color: "white",
            border: "none",
            marginLeft: "30px",
            marginTop: "22px",
            fontSize: "20px",
          }}
        >
          <option value="">Filter By Loaction </option>
          <option value="Kolkata">Kolkata </option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi </option>
        </select>

{/* <button style={{border:'1px solid'}} onClick={() => setorderby("asc")}>Asce</button>
        <button style={{border:'1px solid'}} onClick={() => setorderby("desc")}>desc</button>
        <button  onClick={() => setorderby("")}>reset</button> */}

        <select
          name=""
          id=""
          value={orderby}
          onChange={(e) => setorderby(e.target.value)}
          style={{
            padding: "8px",
            backgroundColor: "#01579B",
            color: "white",
            marginLeft: "30px",
            borderRadius: "5px",
            fontSize: "20px",
          }}
        >
          <option value="">Sort By Rank</option>
          <option value="asc">Assending Order</option>
          <option value="desc">Descending Order</option>
        </select>

        {toggle ? (
          <Form forcerender={forcerender} setForceRender={setForceRender} target={target}  />
        ) : (
          <>
            {  state.isLoading ? (
              <h1 style={{ fontSize: "30px" }}>Loading....</h1>
            ) : (
              <div
                style={{
                  padding: "30px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                }}
              >
                {state?.data?.map((item) => (
                  <div>
                    <ProductCard
                      deleteResturants={deleteResturants}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                      }}
                      {...item}
                      key={item.id}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
