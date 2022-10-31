import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function Layout({ children }: { children: ReactElement }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}