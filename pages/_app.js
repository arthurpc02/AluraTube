import {ThemeProvider} from "styled-components";
import { CSSReset } from "../src/components/CSSReset";

function MyApp({ Component, pageProps }) {
    console.log("_app.js");
    const themeActive = {
        backgroundLevel1: "red",
    };
    return (
        <ThemeProvider theme={themeActive}>
            <CSSReset />
            <Component{...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp;