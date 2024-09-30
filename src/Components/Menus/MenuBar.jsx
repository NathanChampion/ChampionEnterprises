// Copyright © 2024 Champion Estates LLC.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Resources/VendingWhite.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Styles = () => {
	return {
		root: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#000000',
            position: 'Fixed',
            top: 0,
            height: '74px',
            width: '100%',
            gap: '50px'
        },
		logo: {
			margin: '12px',
			top: '1vh',
			transition: 'height 0.2s linear',
            height: '50px'
		},
		title: {
            color: '#ffffff',
            fontSize: '25px'
        }
	};
};

const pages = ['Services', 'About', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function MenuBar(props) {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

	const styles = Styles();

    return (
      <AppBar style={styles.root}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          {/*<img src={logo} id={'logo'} style={styles.logo} alt={'Champion Logo'}/>
            <p style={styles.title}>
                Champion Estates LLC
            </p>
            <p style={styles.title}>Services</p>
            <p style={styles.title}>About</p>
            <p style={styles.title}>Contact Us</p>
            */}
            <img onClick={() => navigate(`/`)} src={logo} id={'logo'} style={styles.logo} alt={'Champion Logo'}/>
            
            <Typography variant="h6" noWrap
              component="a" href="/  "
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                fontFamily: 'Segoe UI',
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              {'Champion Estates'}
            </Typography>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}>
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '12px'} }}>
              {
                pages.map((page) => (
                  <Button key={page}
                    onClick={() => navigate(`/${page}`)}
                    sx={{ marginTop: .6, color: 'white', display: 'block', fontFamily: 'Segoe UI' }}>
                    { page }
                  </Button>
                ))
              }
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>           
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={() => { window.location.href = 'https://www.facebook.com/profile.php?id=61555012059401&sk=about'}}>
                <FacebookIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={() => { window.location.href = 'https://www.instagram.com/championestates/'}}>
                <InstagramIcon />
              </IconButton>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}