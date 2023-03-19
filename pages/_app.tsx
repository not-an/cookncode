import { AppProps } from "next/app";
import '../styles/index.css';

export default function Cookncode({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}