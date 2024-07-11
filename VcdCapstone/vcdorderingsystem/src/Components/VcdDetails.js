import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./AddVcdStyle.css"; 

function VcdDetails() {
    
    const [vcd, setVcd] = useState({ vcdName: '', vcdPrice: '' });
    const [storeId, setStoreId] = useState('');
    
    const changeHandler = (e) => {
        setVcd({ ...vcd, [e.target.name]: e.target.value });
    }

    const changeHandler1 = (e) => {
        setStoreId(e.target.value);
    }

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/addVcd', vcd, {
                headers: {
                    'Content-type': 'application/json',
                },
                params: {
                    storeId: storeId
                }
            });

            if (response.data === 'Successfull') {
                navigate("/viewVcd");
            } else {
                console.log(response);
                alert('Store Id does not exist');
            }
        } catch (error) {
            alert('Error occurred');
        }   
    }

    return (
        <div className="vcd-details-container">
            <h2>Add Vcd Details</h2>
            <div className="addvcdimage"></div>
            <form onSubmit={submitHandler}>
                <label>Vcd Name:</label>
                <input type="text" name="vcdName" onChange={changeHandler} /><br />

                <label>vcd Price:</label>
                <input type="text" name="vcdPrice" onChange={changeHandler} /><br />

                <label>Store Id:</label>
                <input type="text" name="storeId" onChange={changeHandler1} /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default VcdDetails;
