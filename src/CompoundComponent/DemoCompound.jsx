import React from "react";
import { Card } from "./Card";

function DemoCompound() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Hello World</Card.Title>
        <Card.Image src="https://placekitten.com/408/287" alt="cat" />
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          voluptatibus dolor quam tempora ad! Id aliquid neque ex rem beatae in
          voluptate, distinctio labore adipisci tempora a unde dolores
          reprehenderit.
        </Card.Text>
        <Card.Button>Click Here</Card.Button>
      </Card.Body>
    </Card>
  );
}
export default DemoCompound;
