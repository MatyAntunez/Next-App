import Head from "next/head";
import Navbar from "../Navbar";

export const MainLayaout = ({ children }) => {
    return (
        <div>
            <Head>
                <title> Blog - Matias Antunez </title>
                <meta name="description" content='Home Page' />
            </Head>

            <Navbar />

            <main >
                {children}
            </main>
        </div>
    )
};
