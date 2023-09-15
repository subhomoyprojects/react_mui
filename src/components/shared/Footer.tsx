import { Container, Grid, Typography } from "@mui/material";
import "./Shared.css";
import assets from "../../assets";
import { Link } from "react-router-dom";
import svg from "../../assets/svg";
export const paymentMethodIcon: string[] = [assets.applePay, assets.googlePay, assets.visa, assets.masterCard];
export const socialMedia: string[] = [svg.facebook, svg.bell, svg.instagram, svg.youtube, svg.tweeter, svg.ticktock];
export default function Footer() {
  return (
    <footer className="commonGap footerWrapper">
      <Container>
        <Grid container>
          <Grid md={4} item>
            <Typography variant="h4" className="footerTitle">
              Payment Methods
            </Typography>
            <ul className="mt-3 paymentHolder">
              {Array.isArray(paymentMethodIcon) &&
                paymentMethodIcon.map((item, index) => {
                  return (
                    <li key={index}>
                      <button className="paymentMethod" type="button">
                        <img src={item} alt="" />
                      </button>
                    </li>
                  );
                })}
            </ul>
            <Typography variant="h4" className="footerTitle">
              Available On
            </Typography>
            <ul className="storeBtnHolder mt-3">
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
          </Grid>
          <Grid md={4} item>
            <p className="copyRight">
              &copy; 2023 Ooosch Giveaways Limited <Link to="/"> Terms & Conditions</Link> <Link to="/"> Privacy Policy</Link> <Link to="/"> FAQs</Link> <Link to="/"> info@ooosch.com</Link> <Link to="/"> 0838704805</Link> Company Registration Number:
              NI677339 Address: Suite 4000 To 4025, 6 Margaret Street, Newry, Co.Down, Northern Ireland, BT34 1DF
            </p>
          </Grid>
          <Grid md={4} className="socialMedia">
            <div className="socialHolder">
              <Typography variant="h4" className="footerTitle">
                Social Media
              </Typography>
              <ul className="socialMediaHolder">
                {Array.isArray(socialMedia) &&
                  socialMedia.map((item, index) => (
                    <li key={index}>
                      <a href="">
                        <img src={item} alt="" />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
