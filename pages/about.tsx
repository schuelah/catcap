import { useState } from 'react';
import { Grid } from '@mui/material';
import SchedHeader from './header';

export default function About() {
    return (
        <div>
            <SchedHeader></SchedHeader>
            <Grid container className='marginSpace' justifyContent="center">
                <text>This is a cat app that uses a cat API to demonstrate my ability to code in Typescript and React. It also lets you look at cats!</text>
            </Grid>
        </div>
    )
}
