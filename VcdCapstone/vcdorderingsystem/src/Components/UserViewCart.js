import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import './UserViewCartStyle.css';

function UserViewCart() {
    const [cart, setCarts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.post("http://localhost:8080/allCartItems", null, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            setCarts(response.data);
        });
    }, []);

    const handledelete=(cartId)=>{
        axios.post(`http://localhost:8080/deleteCart/${cartId}`)
        .then((res) => {
          if (res.data === "Successfull") {
              alert("Do you want to really delete");
  
            setCarts((prevCartDetails) =>
              prevCartDetails.filter((cart) => cart.cartId !== cartId)
            );
  
          } else {
            alert("Delete failed");
          }
        })
        .catch((error) => {
          console.error("Error deleting store:", error);
  
        });
  
    }

    return (
        <div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/">LogOut</Link>
            </nav>
        <div>
            
            <h1>Your Cart</h1>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Vcd Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Modify</th>
                        <th>Delete</th>
                        <th>Place Order</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((vcd) => (
                        <tr key={vcd.vcdId}>
                            <td>{vcd.vcdName}</td>
                            <td>{vcd.quantity}</td>
                            <td>${vcd.totalCost.toFixed(2)}</td>
                            <td><button onClick={(e) => navigate("/modifyCart/" + vcd.cartId)}>Modify</button></td>
                            <td><button onClick={()=>handledelete(vcd.cartId)}>Delete</button></td>
                            <td><button onClick={(e) => navigate("/payment/" + vcd.totalCost)}>Order</button></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default UserViewCart;
