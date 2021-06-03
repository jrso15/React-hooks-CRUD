import React, { useState, useEffect } from 'react';

const EditOrderForm = (props) => {
  const [order, setOrders] = useState(props.currentOrder)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setOrders({ ...order, [name]: value })
  }

  useEffect(() => {
    setOrders(props.currentOrder)
  }, [props])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateOrder(order.id, order)
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

      <label>Status</label>
      <input
        className="field"
        type="text"
        name="status"
        value={order.status}
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

      <button className="btn-update">Update Order</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn-update muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditOrderForm;

