import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./BudgetCard";

function BudgetHome() {
  return (
    <Container className="d-flex flex-column min-vh-100 my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <BudgetCard name="Entertainment" gray amount={200} max={1000}></BudgetCard>
        <BudgetCard name="Food" amount={2100} max={2000}></BudgetCard>
      </div>
    </Container>
  );
}

export default BudgetHome;