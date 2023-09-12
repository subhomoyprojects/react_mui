import { AppBar, Badge, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Shared.css";
import { useState } from "react";
import assets from "../../assets";
import BtnComponent from "../btnComponent/BtnComponent";
import { Link } from "react-router-dom";

const pages = ["Home", "competitions", "og club", "How to enter"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  // Method Area Start

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Navigation = styled(AppBar)`
    background: linear-gradient(90deg, var(--primaryColor) 0%, var(--secondaryColor) 100%);
  `;

  // Method Area End

  return (
    <header className="header-wrapper">
      <Navigation position="static">
        <Container>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appBar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appBar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" className="menu-item">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <figure className="logo">
              <img src={assets.logo} alt="" />
            </figure>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button key={page} className="menu-item" onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <ul className="header-auth-area">
                <li>
                  <BtnComponent flag={false} text="Login" />
                </li>
                <li>
                  <BtnComponent flag={true} text="Register" />
                </li>
              </ul>
            </Box>
            <Box>
              <Link to="/" className="text-uppercase cart">
                <span>Cart</span>
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon className="icon" />
                </Badge>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </Navigation>
    </header>
  );
}
