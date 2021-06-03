import React from 'react'

const OrderDetails = (props) => (
  <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Unit Price </th>
        <th>Total Price </th>
        <th> Status </th>
        <th>Ordered Date </th>
        <th> ETA </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.orders.length > 0 ? (
        props.orders.map((order) => (
          <tr key={order.id}>
            <td>{order.productName}</td>
            <td>{order.quantity}</td>
            <td>{order.unitPrice}</td>
            <td>{order.totalPrice}</td>
            <td>{order.status} </td>
            <td>{order.orderedDate}</td>
            <td>{order.eta} </td>
            <td>
              <button
                onClick={() => {
                  props.editRow(order)
                }}
                className="btn muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteOrder(order.id)}
                className="btn muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No Orders</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default OrderDetails;