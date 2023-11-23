import Link from "next/link";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    // {
        // text: 'Contact',
        // href: '/contact'
    // },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];


const Navbar = () => {
    return (
        <nav>
            {
                menuItems.map(item => (
                <ActiveLink text={item.text} href={item.href}></ActiveLink> 
                ))
            }

            {/* <ActiveLink text='Home' href='/'/> */}
            {/* <ActiveLink text='About' href='/about'/> */}
            {/* <ActiveLink text='Pricing' href='/pricing'/> */}
        </nav>
    )
};

export default Navbar;