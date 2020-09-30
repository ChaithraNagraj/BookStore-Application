import React, { Component } from 'react'

export class OrderPlaced  extends Component {
    render() {
        return (
            
            <div className="order-placed-container">
                <div className="upper-image-div">
                    {/* <img className="order-img-div" src={celebration}></img> */}
                </div>
                <div className="order-info-div">
                    <h2>Order placed Succesfully</h2>
                </div>
                <div>
                    <p className="order-info">Hurray!!!! Your Order Is Confirmed<br/>
                    your order id is XXXXX  is on the way<br/>
                    for Further Communication Contact us On
                    </p>
                </div>
                <div className="table-div">
                    <table>
                        <tr className="table-coloumn">
                            <th>Email us</th>
                            <th>Contact us</th>
                            <th>Address</th>
                        </tr>
                        <tr className="table-data">
                            <td>abc@gmail.com</td>
                            <td>+91-XXXX-XXXX-XX</td>
                            <td>XYZ near PQY,Banglore</td>
                        </tr>
                    </table>
                </div>

                
            </div>
        )
    }
}

 export default OrderPlaced
