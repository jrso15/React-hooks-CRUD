import React, { Component } from 'react';
import orders from "../orders.json";


class Orders extends Component {
	render() {
		return (
			<div>
				<main>
		            <h1 className="title"> Orders List </h1>
		            <div className="sub-heading">
		              <div className="order-title"> ID </div>
		              <div className="order-title"> Products </div>
		              <div className="order-title"> Quantity </div>
		              <div className="order-title"> Unit Price </div>
		              <div className="order-title"> Total Price </div>
		              <div className="order-title"> Status </div>
		              <div className="order-title"> Date Ordered </div>
		              <div className="order-title"> Estimated Arrival </div>
		            </div>
				{
		            orders.map((item, i) => {
						return (
							<div key={i} className="orders-container">
								<div className="order-list"> {item.id} </div>
								<div className="order-list"> {item.productName} </div>
								<div className="order-list"> {item.quantity} </div>
								<div className="order-list"> PHP {item.unitPrice} </div>
								<div className="order-list"> PHP {item.totalPrice} </div>
								<div className="order-list"> {item.status} </div>
								<div className="order-list"> {item.dateOrdered} </div>
								<div className="order-list"> {item.eta} </div>
							</div>
						);
					})
				}
				</main>
			</div>
        );
	}
}

export default Orders;


