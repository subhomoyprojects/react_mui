import { Box, Card, Container, Rating, Stack, Typography, styled } from "@mui/material";

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
  padding-bottom: 6rem;
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

export const SectionHeading = styled(Typography)`
  color: var(--titleColor);
  text-transform: uppercase;
  font-weight: 900 !important;
  text-align: center;
  margin-bottom: 6rem;
`;

export const ProductCardTitle = styled(Typography)`
  font-size: 1.8rem !important;
  color: var(--titleColor) !important;
  text-transform: capitalize;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 44px;
`;
export const TopWinnerCard = styled(Card)`
  border-radius: 1.6rem;
  overflow: hidden;
  .MuiTypography-h5 {
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    text-transform: capitalize;
    text-align: center;
    min-height: 80px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const TestimonialsCard = styled(Card)`
  background-color: #f0f6ff;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  .abater {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;
    margin-inline: auto;
    margin-bottom: 30px;
  }
  .abater img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h4 {
    font-size: 18px;
    color: #000;
    text-transform: capitalize;
    margin-bottom: 15px;
  }
  h4 span {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
`;
