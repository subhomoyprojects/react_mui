import { Box, Container, Rating, Stack, Typography, styled } from "@mui/material";

export const PaymentHolder = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RatingHolder = styled(Stack)`
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

export const StarRating = styled(Rating)`
  .MuiRating-iconEmpty {
    color: rgba(255, 255, 255, 0.5);
  }
  font-size: 2.5rem;
  color: var(--successColor);
  opacity: 1;
`;

export const TimerArea = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  .clockIcon {
    color: #fff;
    font-size: 3rem;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 3rem;
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    li {
      display: inline-flex;
      align-items: center;
    }
  }
`;

export const BannerContainer = styled(Container)`
  position: absolute;
  z-index: 2;
  bottom: 0;
  padding-bottom: 3rem;
  margin-inline: auto;
  left: 0;
  right: 0;
`;

export const BannerContent = styled(Typography)`
  font-size: 4.5rem;
  font-weight: 700;
  color: #fff;
  span {
    font-weight: 900;
    color: var(--primaryColor);
  }
`;
