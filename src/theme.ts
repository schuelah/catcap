import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: React.CSSProperties['color'];
            warning: React.CSSProperties['color'];
            success: React.CSSProperties['color'];
        }
    }
    interface Palette {
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }

    interface PaletteColor {
        lighter?: string;
        main: string;
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color'];
            warning: React.CSSProperties['color'];
            success: React.CSSProperties['color'];
        };
    }
}

export const theme = createTheme({
    status: {
        danger: '#FF5555',
        warning: '#FFFF99',
        success: '#76BC44'
    },
    palette: {
        primary: {
            main: '#E64479',
            darker: '#CA5699',
        },
        secondary: {
            main: '#9BD3DD',
            darker: '#71C5E8'
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});
