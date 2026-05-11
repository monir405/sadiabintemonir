'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Qualifications', href: '#qualifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'black',
          padding: '0.5rem 0',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.35)',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
          }}
        >
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', ml: '1rem' }}>
            Sadia Binte Monir
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Link href={item.href} key={item.name} passHref>
                <Button
                  sx={{
                    color: 'white',
                    marginLeft: '1rem',
                    fontSize: '1rem',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.08)',
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{ mt: '2rem' }}>
              {navItems.map((item) => (
                <MenuItem key={item.name} onClick={handleMenuClose}>
                  <Link href={item.href} passHref>
                    <Button
                      sx={{
                        color: 'black',
                        textTransform: 'none',
                        fontSize: '1rem',
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
