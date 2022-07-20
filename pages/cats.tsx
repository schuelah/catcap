import { useState } from 'react';
import axios from 'axios';
import { Grid, Button } from '@mui/material';
import SchedHeader from './header';

export default function Cats() {
    //array destructuring
    //const [value, updatingFunction] = useState(state to start at)
    const [numCat, setCats] = useState(1);
    const [viewedCat, setNewCat] = useState(<img id="photo" src="https://thecatapi.com/api/images/get?format=src&type=gif" alt=""></img>);
    const [plural, setPlural] = useState("gif");

    async function handleClick() {
        //set cat count
        if (numCat > 0) {
            setPlural("gifs");
        }
        setCats(numCat + 1);

        //view a new cat
        let response = await axios.get('https://api.thecatapi.com/v1/images/search?mime_types=gif', { params: { limit: 1, size: "full" } });
        let resCat = response.data[0];
        setNewCat(<img id="photo" src={resCat.url} alt=""></img>);
    }

    return (

        <div>
            <SchedHeader></SchedHeader>
            <Grid container direction='column' justifyContent="flex-end" alignItems="center">
                <Grid item xs={10}>{viewedCat}</Grid>
                <br></br>
                <h3>You've viewed {numCat} cat {plural}.</h3>
                <Button variant="contained" onClick={handleClick}>Show me a new cat!</Button>
            </Grid>
        </div>
    );
}