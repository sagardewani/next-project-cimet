import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { styled } from "styled-components";
import FilterAlt from "@mui/icons-material/FilterAlt";
import InfoRounded from "@mui/icons-material/InfoRounded";
import LocationOn from "@mui/icons-material/LocationOn";
import PropTypes from "prop-types";
import ChipLabel from "../ChipLabel";


const Label = styled(Chip)`
  border-radius: 6px;
  background-color: #1b2a74;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Header = (props) => {
  return (
    <Stack>
      <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
        <Label
          label={<ChipLabel label={props.label} count={props.count} />}
          color="primary"
        />
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <Typography><LocationOn sx={{ verticalAlign: "sub" }}/> 2000, NSW</Typography>
          <Button color="primary" variant="contained" startIcon={<FilterAlt />}>Filter</Button>
        </Stack>
      </Stack>
      <Box>
        <Typography>
          <InfoRounded fontSize="16" sx={{ verticalAlign: "middle" }}/> 
          Initial Recommendations are based on average medium usage as determined by relevant energy regulators, please adjust your usage to get more accurate results.
        </Typography>
      </Box>
    </Stack>
  );
};

Header.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default React.memo(Header);