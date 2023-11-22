import Link from "next/link";
import { ActiveLink } from "./ActiveLink";


const Navbar = () => {
    return (
        <nav>
            <ActiveLink text='Home' href='/'/>
            <ActiveLink text='About' href='/about'/>
        </nav>
    )
};

export default Navbar;