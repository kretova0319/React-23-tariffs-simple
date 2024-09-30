import React from "react";
import Card from "./Card";

export default function CardList() {
  return (
    <div className="wrapper">
      <Card
        title="Безлимитный 300"
        price="300"
        speed="10"
        headColor="darkblue"
        mainColor="blue"
      />
      <Card
        title="Безлимитный 450"
        price="450"
        speed="150"
        headColor="darkgreen"
        mainColor="green"
      />
      <Card
        title="Безлимитный 550"
        price="550"
        speed="100"
        headColor="darkred"
        mainColor="red"
      />
      <Card
        title="Безлимитный 1000"
        price="1000"
        speed="200"
        headColor="darkblack"
        mainColor="black"
      />
    </div>
  );
}
