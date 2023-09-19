import { Box, Container, Grid, Typography } from "@mui/material";
import assets from "../../assets";
import "./Home.css";
import PaymentMethod from "./subComponents/PaymentMethod";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { PaymentHolder, RatingHolder, StarRating, TimerArea, BannerContent, BannerContainer, SectionHeading } from "./lid/StyleComponentHome";
import { howToPlayArray, paymentMethodIcon, awardWinContentArray, winnerCard, testimonials } from "./lid/ArrayListComponents";
import GradientButton from "../btnComponent/GradientButton";
import HowToPlay from "./subComponents/HowToPlay";
import ProductCard from "./subComponents/ProductCard";
import { featureCompetition } from "../proListComponent/ProList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TopWinner from "./subComponents/TopWinner";
import Testimonials from "./subComponents/Testimonials";

// howToPlayIcons

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
          <div className="ribbon-content">
            <span className="ribbon">Ending soon</span>
          </div>
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
      <section className="commonGap awardWinningWrapper">
        <Container>
          <Grid container gap={2} flexDirection={"row"} justifyContent={"space-between"}>
            {Array.isArray(awardWinContentArray) &&
              awardWinContentArray.map((item, index) => {
                return (
                  <Grid item key={index}>
                    <div className="awardWinItem" key={index}>
                      <div className="awardWinIcon">{item.icon}</div>
                      <div className="awardWinContent">
                        <Typography variant="h4">
                          {item.title} <span className="subTitle">{item.subTitle}</span>
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </section>
      <section className="commonGap howToPlayWrapper">
        <Container>
          <Box>
            <Typography variant="h3" className="text-center text-uppercase">
              How To play <span className="subTitle">1, 2, 3 OOOSCH! Its that simple</span>
            </Typography>
          </Box>
          <ul className="playIntro">
            {Array.isArray(howToPlayArray) &&
              howToPlayArray.map((item, index) => (
                <li key={index}>
                  <HowToPlay counter={index + 1} content={item.content} icon={item.icon} />
                </li>
              ))}
          </ul>
        </Container>
      </section>
      <section className="commonGap competitionsWrapper">
        <Container>
          <Box>
            <SectionHeading variant="h2">Featured Competitions</SectionHeading>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {Array.isArray(featureCompetition) &&
                featureCompetition.slice(0, 8).map((item, index) => {
                  return (
                    <Grid item md={4} lg={3} spacing={5} key={index}>
                      <ProductCard img={item.img} title={item.title} package={item.package} tag={item.tag} announcement={item.announcement} />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </Container>
      </section>
      <section className="commonGap competitionsWrapper">
        <Container>
          <Box>
            <SectionHeading variant="h2">Ending Soon</SectionHeading>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {Array.isArray(featureCompetition) &&
                featureCompetition.slice(0, 8).map((item, index) => {
                  return (
                    <Grid item md={4} lg={3} spacing={5} key={index}>
                      <ProductCard img={item.img} title={item.title} package={item.package} tag={item.tag} announcement={item.announcement} />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </Container>
      </section>
      <section className="commonGap competitionsWrapper">
        <Container>
          <Box>
            <SectionHeading variant="h2">More Competitions</SectionHeading>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {Array.isArray(featureCompetition) &&
                featureCompetition.slice(8, 12).map((item, index) => {
                  return (
                    <Grid item md={4} lg={3} spacing={5} key={index}>
                      <ProductCard img={item.img} title={item.title} package={item.package} tag={item.tag} announcement={item.announcement} bgColor="var(--primaryColor)" />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
          <Box mt={5} className="text-center">
            <GradientButton buttonText="View All" />
          </Box>
        </Container>
      </section>
      <section className="commonGap topWinnerWrapper">
        <Container>
          <Box>
            <SectionHeading variant="h2" style={{ color: "#fff" }}>
              Top Winner
            </SectionHeading>
          </Box>
          <Box>
            <Swiper
              modules={[Navigation]}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {Array.isArray(winnerCard) &&
                winnerCard.map((item, index) => (
                  <SwiperSlide key={index}>
                    <TopWinner title={item.title} img={item.image} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </Box>
          <Box className="text-center" mt={5}>
            <GradientButton buttonText="View all" />
          </Box>
        </Container>
      </section>
      <section className="commonGap testimonialsWrapper">
        <Container>
          <Box>
            <SectionHeading variant="h2">Testimonials</SectionHeading>
          </Box>
          <Box>
            <Swiper
              modules={[Navigation]}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {Array.isArray(testimonials) &&
                testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Testimonials image={item.image} name={item.name} designation={item.designation} content={item.content} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </Box>
        </Container>
      </section>
    </>
  );
}
