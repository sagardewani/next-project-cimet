import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "styled-components";
import PropTypes from 'prop-types';

const Count = styled(Typography)`
  padding: 0 8px;
  border-radius: 50%;
  background-color: white;
  color: black;
`;

const Label = styled(Typography)`
  text-transform: capitalize;
`;

const ChipLabel = (props) => {
  return (
    <Stack flexDirection="row" gap={2} alignItems="center">
      <Label>{props.label}</Label>
      {props.count !== undefined && <Count>{props.count}</Count>}
    </Stack>
  );
};

ChipLabel.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number,
};

export default React.memo(ChipLabel);