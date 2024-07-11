import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import VcdDetails from "./VcdDetails";
import './ViewVcdStyle.css';


function ViewVcd() {
  const [vcds, setVcds] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/viewVcd")
      .then((response) => {
        setVcds(response.data);
      });
  }, []);

  const handleDelete = (vcdId) => {

    axios.post(`http://localhost:8080/deleteVcd/${vcdId}`)
      .then((res) => {
        if (res.data === "Successfull") {
            alert("Do you want to really delete");

          setVcds((prevStoreDetails) =>
            prevStoreDetails.filter((vcd) => vcd.vcdId !== vcdId)
          );

        } else {
          alert("Delete failed");
        }
      })
      .catch((error) => {
        console.error("Error deleting store:", error);

      });

  };

  return (
    <div>
         <nav className="navbar">
                   <Link to="/">Home</Link>   
                   <Link to="/addVcd">AddVcd</Link>   
                    
               </nav>
     
               <h2 className='text-center'>Vcd List</h2>
               <table className="table table-striped">
        <thead>
          <tr>
            <td>Vcd Id</td>
            <td>Vcd Name</td>
            <td>Vcd Price</td>
            <td>Store name</td>
            <td>Store Id</td> 
            <td>Modify Vcd</td>  
            <td>Delete Vcd</td> 
          </tr>
        </thead>
        <tbody>
          {
            vcds.map((vcd) => (
              <tr key={vcd.vcdId}>
                <td>{vcd.vcdId}</td>
                <td>{vcd.vcdName}</td>
                <td>{vcd.vcdPrice}</td>
                <td>{vcd.storeName}</td>  
                <td>{vcd.store.storeId}</td>
                <td>
                  <button onClick={() => navigate("/modifyVcd/" + vcd.vcdId)}>Modify</button>
                </td>
                
                <td><button onClick={() => handleDelete(vcd.vcdId)}>Delete</button></td>
                
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ViewVcd;
