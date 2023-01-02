import React from 'react';

const Order = ({ order }) => {

  const { name, email, service } = order;

  const handleChange = (e) => {
    console.log(e.target.value, order._id);
    const id = order._id;
    console.log(id);
    order.status = e.target.value;
    console.log(order);
    fetch(`http://localhost:4000/order/${order._id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(result => result.json())
      .then(ok => console.log('ok'))
  }

  // const options = [
  //   "Pending",
  //   "Ongoing",
  //   "Done"
  // ];

  return (
    <tr>
      <th></th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{service}</td>
      <td>
        <select onChange={handleChange} className="form-select" aria-label="Default select example">
          <option value="Pending">{order.status}</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Done">Done</option>
        </select>
      </td>
    </tr>
  );
};

export default Order;