import { Stack } from '@mui/material';
import { styled } from '@mui/system';

export const ItemWrapper = styled(Stack)({
  flexDirection: 'row',
  '& > p': {
    margin: 0,
    marginLeft: 8,
  },
});