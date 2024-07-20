import { PaletteOptions } from "@mui/material";
import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
    interface Palette {
        light: Palette['primary'];
    }

    interface PaletteOptions {
        light?: PaletteOptions['primary'];
    }
}


// Update the Button's color options to include a salmon option
declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
        light: true;
    }
}

declare module '@mui/material/InputBase' {
    interface InputBasePropsColorOverrides {
        light: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        light: true;
    }
}