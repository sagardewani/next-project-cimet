import * as React from 'react';
import { Typography } from '@mui/material';
import SolarPower from '@mui/icons-material/SolarPower';
import PropTypes from 'prop-types';
import { ItemWrapper } from './items.styled';

const Tariff = (props) => {
  return (
    <ItemWrapper sx={{ backgroundColor: '#d0e7eb', p: 1 }}>
      <SolarPower />
      <Typography>{`${props.title}: ${props.rate}`}</Typography>
    </ItemWrapper>
  )
}

Tariff.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  rate: PropTypes.string.isRequired,
}

export default React.memo(Tariff);

