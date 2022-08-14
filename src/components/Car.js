import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";

const Car = () => {
  const { id } = useParams();
  const selectedCar = cars.find((car) => car.id == id);
  let {
    carId,
    Name,
    Miles_per_Gallon,
    Cylinders,
    Displacement,
    Horsepower,
    Weight_in_lbs,
    Year,
    Origin,
  } = selectedCar;

  return (
    <Container>
      <Paper>
        <h3>{selectedCar.Name}</h3>
        <Chip label={"Year: " + selectedCar.Year} color="primary"></Chip>
        <Chip label={"id: " + selectedCar.id} color="primary"></Chip>
        <Chip
          label={"Miles_per_Gallon: " + selectedCar.Miles_per_Gallon}
        ></Chip>
        <Chip label={"Cylinders: " + selectedCar.Cylinders} color="primary"></Chip>
        <Chip label={"Displacement: " + selectedCar.Displacement} color="primary"></Chip>
        <Chip label={"Horsepower: " + selectedCar.Horsepower} color="primary"></Chip>
        <Chip label={"Weight_in_lbs: " + selectedCar.Weight_in_lbs} color="primary"></Chip>
        <Chip label={"Acceleration: " + selectedCar.Acceleration} color="primary"></Chip>
        <Chip label={"Origin: " + selectedCar.Origin} color="primary"></Chip>
      </Paper>
    </Container>
  );
};

export default Car;
