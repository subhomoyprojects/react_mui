import { Box, Container, Rating, Stack, Typography, styled } from "@mui/material";
import assets from "../../assets";
import "./Home.css";
import PaymentMethod from "./PaymentMethod";

const paymentMethodIcon: string[] = [assets.applePay, assets.googlePay, assets.visa, assets.masterCard];

const PaymentHolder = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RatingHolder = styled(Stack)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  & > * {
    flex: 1;
  }
  h4 {
    margin-left: 1rem !important;
    color: #fff;
    margin-top: 0 !important;
  }
`;

const StarRating = styled(Rating)`
  .MuiRating-iconEmpty {
    color: rgba(255, 255, 255, 0.5);
  }
  font-size: 2.5rem;
  color: var(--successColor);
  opacity: 1;
`;

export default function Home() {
  return (
    <>
      <section className="playStoreWrapper">
        <Container>
          <PaymentHolder>
            <Box>
              <ul className="storeBtnHolder">
                <li>
                  <button type="button">
                    <img src={assets.gPay} alt="" />
                  </button>
                </li>
                <li>
                  <button type="button">
                    <img src={assets.appStore} alt="" />
                  </button>
                </li>
              </ul>
            </Box>
            <RatingHolder spacing={1}>
              <StarRating name="size-large" defaultValue={2} size="large" />
              <Typography variant="h4">Trustpilot</Typography>
            </RatingHolder>
            <Box>
              <ul className="paymentHolder">
                {Array.isArray(paymentMethodIcon) &&
                  paymentMethodIcon.map((item: string, index: number) => {
                    return (
                      <li key={index}>
                        <PaymentMethod paymentImage={item} />
                      </li>
                    );
                  })}
              </ul>
            </Box>
          </PaymentHolder>
        </Container>
      </section>
    </>
  );
}
