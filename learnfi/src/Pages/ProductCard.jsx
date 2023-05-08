import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function ProductCard({
  name,
  id,
  image,
  rank,
  location,
  Rating,
  deleteResturants,
}) {
  return (
    <div
      style={{
        fontSize: "23px",
        width: "400px",
        margin: "auto",
        marginTop: "30px",
        borderRadius: "20px",
        textAlign: "center",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        lineHeight: "35px",
        color: "#546E7A",
      }}
    >
      <div style={{ padding: "20px" }}>
        <img
          style={{ width: "100%", height: "230px", borderRadius: "20px",boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px" }}
          src={image}
          alt={name}
        />
      </div>

      <label htmlFor="">
        <h2>Name: {name}</h2>
      </label>
      <label htmlFor="">
        <p>Loaction : {location}</p>
      </label>
      <label htmlFor="">
        <p>Rating :{Rating}</p>
      </label>
      <label htmlFor="">
        <p>Rank : {rank}</p>
      </label>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <Link to={`/edit/${id}`}><button>
          <EditIcon />
        </button></Link>
        
        <button onClick={() => deleteResturants(id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
