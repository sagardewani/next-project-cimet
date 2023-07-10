import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Info from "@mui/icons-material/Info";
import PropTypes from "prop-types";
import { EstimatedCost, CostBox } from "./card.styled";

const CostCard = (props) => {
  return (
    <Card>
      <CardContent style={{ width: 280, padding: 0 }}>
        <Stack>
          <EstimatedCost>
            <Typography variant='costModalTitle'>Estimated cost</Typography>
            <Info sx={{ color: 'white', fontSize: 16 }} />
          </EstimatedCost>
          <CostBox>
            <Stack flexDirection="row">
              <Typography variant='yearlyPrice'>
                ${props.expected_annually_bill_amount ?? 0}^
                <Typography variant='durationSymbol'>/yr</Typography>
              </Typography>
            </Stack>
            <Stack flexDirection="row">
              <Typography variant='monthlyPrice'>
                ${props.expected_monthly_bill_amount ?? 0}
                <Typography variant='durationSymbol'>/mo</Typography>
              </Typography>
            </Stack>
          </CostBox>
        </Stack>
      </CardContent>
    </Card>
  )
}

CostCard.propTypes = {
  expected_annually_bill_amount: PropTypes.number.isRequired,
  expected_monthly_bill_amount: PropTypes.number.isRequired,
};

export default React.memo(CostCard);