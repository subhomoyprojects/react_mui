import { Box, Container, Rating, Stack } from "@mui/material";
import assets from "../../assets";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="playStoreWrapper">
        <Container maxWidth="xl">
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
          <Stack spacing={1}>
            <Rating name="size-large" defaultValue={2} size="large" />
          </Stack>
        </Container>
      </section>
    </>
  );
}
