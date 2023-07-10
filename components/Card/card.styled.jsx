import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';

export const ConnectButton = styled(Button)(({ theme }) => ({
  marginTop: 2,
  marginBottom: 2,
  marginLeft: "auto",
  marginRight: "auto",
  width: 'max-content',
  padding: theme.spacing(1.5, 2),
  borderRadius: 25,
  textTransform: "capitalize",
}));

export const ProductContent = styled(CardContent)({
  padding: 0,
  paddingTop: 32,
  '&:last-child': {
    paddingBottom: 0
  }
})

export const ProductKeyPointsWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  backgroundColor: '#F5F5F5',
  padding: 32,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const RowStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const CardBox = styled(Box)({
  backgroundColor: '#f5f5f5',
  padding: 12,
  borderRadius: 4,
});

export const ProductLink = styled(Link)({
  color: '#5eb8f1',
  fontWeight: 500,
});

export const ProductTypeWrapper = styled(Box)({
  position: "absolute",
  top: 16,
  left: 24,
  zIndex: 1,
  display: "flex",
  gap: 16
});

export const ProductTypeChip = styled(Chip)(({ theme }) => ({
  borderRadius: 1.5,
  padding: theme.spacing(0.5, 1),
  backgroundColor: "#f5f5f5",
  textTransform: "capitalize",
}));

export const EstimatedCost = styled(Box)({
  backgroundColor: '#2e5ea1',
  flexDirection: 'row',
  display: 'flex',
  padding: 8,
  gap: 8,
  alignItems: 'center',
});

export const CostBox = styled(Box)({
  backgroundColor: '#d0e7eb',
  padding: 16,
});
