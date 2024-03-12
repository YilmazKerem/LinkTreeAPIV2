import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function CreateRedirect()
{
    return (
        <>
            <div className='w-2/3 bg-red-300 m-auto h-screen'>
                <form className='pt-3'>
                    <label>
                        <TextField className=' ' id="outlined-basic" label="Link" variant="outlined" />
                    </label>
                    <Button variant="contained">Contained</Button>

                </form>
            </div>
        </>
    );
}
