import React from "react";
import { Container } from "@mui/material";
import ProductCard from "../components/Card";
import Header from "../components/Header";
import { getPlans } from "../api/plans";

export default function Home(props) {
  const [plans, setPlans] = React.useState([]);

  React.useEffect(() => {
    getPlans()
      .then((plans) => setPlans(plans))
      .catch((error) => console.log(error));
  }, []);

  const header = React.useMemo(() => ({
    count: plans?.["electricity"]?.length ?? 0,
    label: Object.keys(plans || {})?.[0] || "",
  }), [plans]);

  return (
    <Container sx={{ mt: 4 }}>
      <Header {...header} />
      {
        plans?.[header.label]?.map((plan) => <ProductCard key={plan.id} {...plan} />)
      }
    </Container>
  );
}
