import * as React from 'react';
import { Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from 'prop-types';
import { ItemWrapper } from './items.styled';

const Benefit = (props) => {
  return (
    <ItemWrapper>
      <CheckIcon sx={{ color: '#203179' }} />
      {props.text}
      {props.appendedText && <Typography>{props.appendedText}</Typography>}
    </ItemWrapper>
  )
}

Benefit.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
  appendedText: PropTypes.string,
}

export default React.memo(Benefit);

