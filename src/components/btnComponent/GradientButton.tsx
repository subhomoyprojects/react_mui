import { Button, styled } from "@mui/material";
import "./BtnStyle.css";

export default function GradientButton({ buttonText }: any) {
  const CommonButton = styled(Button)`
    background: linear-gradient(29deg, var(--primaryColor) 28.14%, var(--secondaryColor) 84.33%);
    color: #fff;
    min-height: 6.8rem;
    border-radius: 10px;
    width: 100%;
    max-width: 230px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 400;
    background-size: 100% 300%;
    transition: all 0.3s;
    &:hover {
      background-position: left 100%;
    }
  `;
  return (
    <>
      <CommonButton>{buttonText}</CommonButton>
    </>
  );
}
