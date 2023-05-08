import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Form from "./Form";
import axios from "axios";
import Footer from "../Components/Footer";
import { Button } from "@chakra-ui/react";
import { color } from "framer-motion";

const getfilterurl = (location, Rank) => {
  let url = `http://localhost:8080/institutions`;

  if (location) {
    return (url = `${url}?location=${location}`);
  } else if (Rank === "asc") {
    return (url = `${url} += '&_sort=${Rank}'`);
  } else if (Rank === "desc") {
    return (url += "&_sort=rank&_order=desc");
  }
  return `http://localhost:8080/institutions`;
};

export default function Institutes({ target }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [location, setCategory] = useState("");
  const [Rank, setRank] = useState("");

  const handleClick = () => {
    setToggle(!toggle);
  };

  const getdata = async (location, Rank) => {
    const apiurl = getfilterurl(location, Rank);

    try {
      setLoading(true);
      const res = await fetch(apiurl);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata(location, Rank);
  }, [location, Rank]);

  const deleteResturants = (id) => {
    return axios({
      method: "delete",
      url: `http://localhost:8080/institutions/${id}`,
    }).then((res) => {
      getdata();
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      <div>
        <img
          style={{ height: "500px", width: "100%", borderRadius: "10px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzr75JHMo0YAnvDZWdQ4KRDWDPdro3NYZgw&usqp=CAU"
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

        <select
          name=""
          id=""
          value={Rank}
          onChange={(e) => setRank(e.target.value)}
          style={{
            padding: "8px",
            backgroundColor: "#01579B",
            color: "white",
            marginLeft: "30px",
            borderRadius: "5px",
            fontSize: "20px",
          }}
        >
          <option value="asc">Sort By Rank</option>
          <option value="asc">Assending Order</option>
          <option value="asc">Descending Order</option>
        </select>

        {toggle ? (
          <Form target={target} />
        ) : (
          <>
            {loading ? (
              <h1 style={{ fontSize: "30px" }}>Loading....</h1>
            ) : (
              <div
                style={{
                  padding: "30px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                }}
              >
                {data.map((item) => (
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
