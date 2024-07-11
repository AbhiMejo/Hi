import React, { useState,useEffect} from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function ModifyVcd() {
  const { vcdId }=useParams();
  
  
  const [vcd, setVcd] = useState({
    
    vcdName: '',
    vcdPrice: '',
    
  });
  const {vcdName,vcdPrice}=vcd
  const changeHandler = (e) => {
    setVcd({ ...vcd, [e.target.name]: e.target.value });
  };

  

  const navigate = useNavigate();


  useEffect(() => {
    
    const fetchStoreDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/getVcdDetails/${vcdId}` 
        );

        const vcdDetails = response.data; 

        if (vcdDetails) {
          setVcd({ ...vcd, ...vcdDetails });
        } else {
          console.log(response);
          alert("Vcd Id does not exist");
        }
      } catch (error) {
        console.error("Error occurred:", error);
        alert("Error occurred. Please try again later.");
      }
    };

    fetchStoreDetails();
  }, [vcdId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    
      axios.post("http://localhost:8080/modifyVcd", vcd, {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          
          vcdId: vcdId
        }
      }).then((response) => {
        if (response.data === "Successfull") {
          navigate("/viewVcd");
        }
      });
    };

  return (
    <div>
        <h1>Update Vcd Details</h1>
      <form onSubmit={submitHandler}>
        Vcd Id: <input type="number" name="vcdId" value={vcdId} onChange={changeHandler} readOnly/><br />
        Vcd Name: <input type="text" name="vcdName" value={vcdName} onChange={changeHandler} /><br />
        Vcd Price: <input type="text" name="vcdPrice" value={vcdPrice} onChange={changeHandler} /><br />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ModifyVcd;