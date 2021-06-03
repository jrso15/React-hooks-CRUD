import React, { useState } from 'react';

const AddOrderForm = (props) => {
  const initialFormState = { id: null, productName: '', quantity: '', unitPrice: '', totalPrice: '', status: 'Processing', orderedDate: '', eta: '' }
  const [order, setOrders] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setOrders({ ...order, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!order.productName || !order.quantity || !order.unitPrice || !order.totalPrice || !order.eta) return

        props.addOrder(order)
        setOrders(initialFormState)
      }}
    >
      <label>Product Name</label>
      <input
        className="field"
        type="text"
        name="productName"
        value={order.productName}
        onChange={handleInputChange}
      />
      <label>Quantity</label>
      <input
        className="field"
        type="text"
        name="quantity"
        value={order.quantity}
        onChange={handleInputChange}
      />

      <label>Unit Price</label>
      <input
        className="field"
        type="text"
        name="unitPrice"
        value={order.unitPrice}
        onChange={handleInputChange}
      />

      <label>Total Price</label>
      <input
        className="field"
        type="text"
        name="totalPrice"
        value={order.totalPrice}
        onChange={handleInputChange}
      />

      <label>Ordered Date</label>
      <input
        className="field"
        type="date"
        name="orderedDate"
        value={order.orderedDate}
        onChange={handleInputChange}
      />

      <label>Estimated Arrival</label>
      <input
        className="field"
        type="date"
        name="eta"
        value={order.eta}
        onChange={handleInputChange}
      />
      <button className="btn-order">Add Order</button>
    </form>
  )
}

export default AddOrderForm;



