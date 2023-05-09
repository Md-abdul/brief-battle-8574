 import axios from "axios";

// const Postdata = async (data) => {
//   try {
//       await axios.post('http://localhost:8080/Courses', data);
//       console.log("House added ");
//     } catch (error) {
//       console.log("Error adding house: ", error);
//     }
//   };

   const getdata = () => {
    return axios({
        url:`http://localhost:8080/Courses`,
        method:'get',

    })
  }

 export {getdata}