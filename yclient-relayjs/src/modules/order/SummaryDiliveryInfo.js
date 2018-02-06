import React from "react";

export default function SummaryDiliveryInfo({ fullName, address, phone }) {
  return (
    <figure>
      <h5>Dilivery Info</h5>
      <hr />
      <div>Full Name: {fullName} </div>
      <div>Address: {address}</div>
      <div>Phone: {phone}</div>
    </figure>
  );
}
