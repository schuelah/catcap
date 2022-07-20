import { Component } from 'react';
import { useEffect, useState } from "react";
import { AppBar, IconButton, MenuItem, Toolbar, Link, Menu, Grid, Typography } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
const pages = ['About', 'New Scheduler'];
const links = ['/about', '/basicForm'];
let pageLinks = [{ 'title': 'About', "link": "./about" }, { 'title': 'Website', "link": 'https://aresmbschueller.wordpress.com/' }, { 'title': 'Github', "link": 'https://github.com/schuelah' }];


export default function SchedHeader() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant="h6" component="div">
                    <Link href='./cats' underline="none">CatCap</Link>
                </Typography>
                {pageLinks.map((a, b) => (
                    <MenuItem key={b}>
                        <Link href={a.link} underline="none" color="white">
                            {a.title}
                        </Link>
                    </MenuItem>
                ))}
                <Grid
                    justifyContent="flex-end" container>
                    <IconButton size="large"
                        aria-haspopup="true"
                        aria-label="account of current user"
                        onClick={handleMenu}
                        color="inherit"
                        aria-controls="menu-appbar"
                    >
                        <PetsIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <a href='/about'>
                            <MenuItem href='/about'>About</MenuItem>
                        </a>
                    </Menu>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}