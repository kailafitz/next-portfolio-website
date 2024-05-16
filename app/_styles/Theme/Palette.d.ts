import { PaletteOptions } from "@mui/material";
import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
    interface Palette {
        white: Palette['primary'];
    }

    interface PaletteOptions {
        white?: PaletteOptions['primary'];
    }
}


// Update the Button's color options to include a salmon option
declare module '@mui/material/TextField' {
    interface TextFieldPropsColorOverrides {
        white: true;
    }
}

declare module '@mui/material/InputBase' {
    interface InputBasePropsColorOverrides {
        white: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        white: true;
    }
}