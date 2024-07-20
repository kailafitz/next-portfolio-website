import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        name: React.CSSProperties;
        copyright: React.CSSProperties;
        externalLinkHeading: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        name?: React.CSSProperties;
        copyright?: React.CSSProperties;
        externalLinkHeading?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        name: true;
        copyright: true;
        externalLinkHeading: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        inset: true;
    }
}
