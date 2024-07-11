import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams,Link } from "react-router-dom";

function UserViewVcd() {
    const { storeId } = useParams();
    const [vcds, setVcds] = useState([]);
    const [quantity, setQuantity] = useState('');
    const [userId,setId] = useState('');
    const navigate=useNavigate();

    const addToCart = (vcdId) => {
        axios.post(`http://localhost:8080/addToCart/${vcdId}`, null, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                quantity: quantity
            }
        })
            .then((response) => {
                
            })
            .catch((error) => {
                console.error('Error fetching vcd details:', error);
            });

            if(addToCart){
                alert("Added to Cart");
            }
    };
    

    useEffect(() => {
        axios.post("http://localhost:8080/viewAvailableVcds", null, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                storeId: storeId
            }
        }).then((response) => {
            setVcds(response.data);
             
            
        });
    }, [storeId]);

    return (
        <div>
           <nav className="navbar3">
                   <Link to="/">Home</Link>   
                  <Link to="/userViewCart">View Cart</Link>
                  <Link to="/">LogOut</Link> 
               </nav>
            
            <h1 className='text-center'>Available Vcds</h1>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <td>Vcd Name</td>
                        <td>Price Per Vcd</td>
                        <td>Quantity</td>
                        <td>Add to Cart</td>
                        <td>Payment</td>
                    </tr>
                </thead>
                <tbody>
                    {vcds.map((vcd) => (
                        <tr key={vcd.vcdId}>
                            <td>{vcd.vcdName}</td>
                            <td>{vcd.vcdPrice}</td>
                            <td>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={quantity}
                                    min={1}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    required
                                />
                            </td>
                            <td>
                                <button onClick={() => addToCart(vcd.vcdId)}>Add</button>
                            </td>
                            
                            <td><button onClick={(e) => navigate("/payment/" + (vcd.vcdPrice*quantity))}>Buy</button></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserViewVcd;
