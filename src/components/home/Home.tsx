import { Box, Container, Grid, Typography } from "@mui/material";
import assets from "../../assets";
import "./Home.css";
import PaymentMethod from "./subComponents/PaymentMethod";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { PaymentHolder, RatingHolder, StarRating, TimerArea, BannerContent, BannerContainer } from "./lid/StyleComponentHome";
import { paymentMethodIcon } from "./lid/ArrayListComponents";
import GradientButton from "../btnComponent/GradientButton";

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
      <section className="liveDrawWrapper">
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography className="text-uppercase" variant="h3">
            NEXT LIVE DRAW Begins
          </Typography>
          <TimerArea>
            <AccessAlarmIcon className="clockIcon" />
            <ul>
              <li>16 Hours</li>
              <li>16 Min</li>
              <li>16 Sec</li>
            </ul>
          </TimerArea>
        </Container>
      </section>
      <section className="bannerWrapper">
        <figure className="bannerImgHolder">
          <img src={assets.banner} alt="" />
        </figure>
        <BannerContainer>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <BannerContent variant="h1">
                2016 Volkswagen Golf <span>GTD Auto + €3,000 Cash</span>
              </BannerContent>
            </Grid>
            <Grid item md={6} className="bannerButtonHolder">
              <GradientButton buttonText="Enter Now" />
            </Grid>
          </Grid>
        </BannerContainer>
      </section>
    </>
  );
}
