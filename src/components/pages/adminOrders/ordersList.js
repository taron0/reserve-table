import React from "react";

const OrdersList = ({ list }) => {
  return (
    <tr>
      <td>{list.name}</td>
      <td>{list.lastname}</td>
      <td>{list.email}</td>
      <td>{list.person}</td>
      <td>{list.date}</td>
      <td>{list.time}</td>
    </tr>
  );
};

export default OrdersList;
