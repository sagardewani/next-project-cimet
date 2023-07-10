import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SolarPower from '@mui/icons-material/SolarPower';
import Lightbulb from '@mui/icons-material/Lightbulb';
import parse from 'html-react-parser';
import CostCard from './CostCard';
import Benefit from '../Items/Benefit';
import Tariff from '../Items/Tariff';
import {
  ConnectButton,
  ProductContent,
  ProductKeyPointsWrapper,
  ProductLink,
  ProductTypeChip,
  ProductTypeWrapper,
  RowStack,
  CardBox
} from './card.styled';

const ProductCard = (props) => {

  const viewItemKeys = React.useMemo(() => {
    return Object
      .keys(props)
      .filter((key) => (
        (key.indexOf("view_") === 0 && key !== "view_discount")));
  }, [props]);

  return (
    <Box pt={4} position="relative">
      <ProductTypeWrapper>
        {props.energy_type && (
          <ProductTypeChip icon={<Lightbulb />} label={props.energy_type} />
        )}
        {props.solar_compatible === "yes" && (
          <ProductTypeChip icon={<SolarPower />} label="Solar" />
        )}
      </ProductTypeWrapper>
      <Card sx={{ border: "lightgray 1px solid" }}>
        <ProductContent>
          <Stack gap={4}>
            <RowStack gap={1}>
              <Stack alignItems="center" justifyContent="center" flex={1}>
                <img
                  src={props.provider_image}
                  alt={props.provider_name}
                  style={{
                    height: 64
                  }}
                />
                <ProductLink href="#" sx={{ mb: 2 }} underline="none">
                  View Details
                </ProductLink>
                <ProductLink
                  href={props?.plan_document ?? "#"}
                  underline="none"
                >
                  Basic Plan Information Document
                </ProductLink>
              </Stack>
              <Stack
                alignItems="center"
                justifyContent="center"
                flex={1}
                gap={1}
              >
                <CardBox>
                  <Stack>
                    <Typography>
                      {props?.dmo_percentage?.Ausgrid ?? ""}
                    </Typography>
                    <Typography>{props?.plan_name_below_data ?? ""}</Typography>
                  </Stack>
                </CardBox>
                <RowStack
                  gap={1}
                  sx={{ flexWrap: "wrap", justifyContent: "center" }}
                >
                  {viewItemKeys.map((item) => {
                    return <Benefit key={item} text={parse(props[item])} />
                  })}
                  {props.solar_rates?.map((item) => (
                    <Tariff
                      key={item.id}
                      title={item.solar_description}
                      rate={`${item.solar_price}c`}
                    />
                  ))}
                </RowStack>
              </Stack>
              <Stack alignItems="center" justifyContent="center" flex={1}>
                <CostCard
                  expected_annually_bill_amount={
                    props.expected_annually_bill_amount ?? 0
                  }
                  expected_monthly_bill_amount={
                    props.expected_monthly_bill_amount ?? 0
                  }
                />
              </Stack>
            </RowStack>
            <Stack pl={4} pr={4}>
              {parse(props?.dmo_content?.Ausgrid ?? "")}
            </Stack>
            <ProductKeyPointsWrapper gap={1} justifyContent="space-between">
              <Stack gap={1}>
                <RowStack gap={1} flexWrap="wrap">
                  {props?.cooling_off_period && (
                    <Benefit
                      text={parse(props?.cooling_off_period)}
                      appendedText="cooling off period"
                    />
                  )}
                  {props?.paper_bill_fee && (
                    <Benefit text={parse(props?.paper_bill_fee)} />
                  )}
                  {props?.other_fee_section && (
                    <Benefit text={parse(props?.other_fee_section)} />
                  )}
                </RowStack>
                <Stack sx={{ flexDirection: "row" }}>
                  <Typography sx={{ my: "1em", mr: 1 }}>^</Typography>
                  {parse(props.terms_condition)}
                </Stack>
              </Stack>
              <Box>
                <ConnectButton
                  variant="contained"
                  color='primary'
                >
                  Connect Online Today
                </ConnectButton>
              </Box>
            </ProductKeyPointsWrapper>
          </Stack>
        </ProductContent>
      </Card>
    </Box>
  );
}

export default ProductCard;