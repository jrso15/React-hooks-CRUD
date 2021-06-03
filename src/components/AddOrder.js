import React, { useState } from 'react';
import OrderDetails from '../OrderDetails';
import AddOrderForm from './AddOrderForm';
import EditOrderForm from './EditOrderForm';

const AddOrder = () => {

  var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const ordersData = [
    { id: 1, productName: 'Mouse', quantity: '5', unitPrice: 'PHP 1000', totalPrice: 'PHP 3000', status: 'Processing', orderedDate: date, eta: "2020-8-20" },
    { id: 2, productName: 'Laptop', quantity: '3', unitPrice: 'PHP 2000', totalPrice: 'PHP 5000', status: 'Processing', orderedDate: date, eta: "2020-8-25"},
    { id: 3, productName: 'Monitor', quantity: '10', unitPrice: 'PHP 1700', totalPrice: 'PHP 6000', status: 'Processing', orderedDate: date, eta: "2020-8-27" },
    { id: 4, productName: 'Mouse', quantity: '5', unitPrice: 'PHP 1000', totalPrice: 'PHP 3000', status: 'Processing', orderedDate: date, eta: "2020-8-20" },
    { id: 5, productName: 'Laptop', quantity: '3', unitPrice: 'PHP 2000', totalPrice: 'PHP 5000', status: 'Processing', orderedDate: date, eta: "2020-8-25"},
    { id: 6, productName: 'Monitor', quantity: '10', unitPrice: 'PHP 1700', totalPrice: 'PHP 6000', status: 'Processing', orderedDate: date, eta: "2020-8-27" },
  ]

  const [orders, setOrders] = useState(ordersData)

  const addOrder = (order) => {
    order.id = orders.length + 1
    setOrders([...orders, order])
  }

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id))
  }

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, productName: '', quantity: '', unitPrice: '', totalPrice: '', status: '', orderedDate: date }
  const [currentOrder, setCurrentOrder] = useState(initialFormState)

  const editRow = (order) => {
  setEditing(true)

    setCurrentOrder({ id: order.id, productName: order.productName, quantity: order.quantity, unitPrice: order.unitPrice, totalPrice: order.totalPrice, status: order.status, orderedDate: order.orderedDate, eta: order.eta })
  }

  const updateOrder = (id, updatedOrder) => {
    setEditing(false)

    setOrders(orders.map((order) => (order.id === id ? updatedOrder : order)))
  }


  return (
    <div className="container">
      <div className="order-details">
        <div className="order-details-list">
          {editing ? (
            <div>
              <h2>Edit Orders</h2>
              <EditOrderForm
                setEditing={setEditing}
                currentOrder={currentOrder}
                updateOrder={updateOrder}
              />
            </div>
          ) : (
            <div>
              <h3>ADD ORDERS</h3>
              <AddOrderForm addOrder={addOrder} />
            </div>
          )}
        </div>
        <div className="order-details-list">
          <h2>VIEW ORDERS </h2>
          <OrderDetails orders={orders} editRow={editRow} deleteOrder={deleteOrder} />
        </div>
        
      </div>
    </div>


  )
}

export default AddOrder;




