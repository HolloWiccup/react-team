import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography";

const RANGE = {
    MIN:1970,
    MAX: 2023,
}

export default function YearSlider() {
    const [value, setValue] = React.useState<number[]>([1980, 2011]);

    // @ts-ignore
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Box width='100%' >
            <Typography sx={{marginBottom: '40px'}}>Year release:</Typography>
            <Slider
                getAriaLabel={() => 'Year range'}
                // marks
                min={RANGE.MIN}
                max={RANGE.MAX}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
            />
        </Box>
    );
}