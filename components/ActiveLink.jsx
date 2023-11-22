import Link from "next/link";
import { useRouter } from "next/router";

export const ActiveLink = ({ text, href }) => {

    const style = {
        color: '#0070f3',
        textDecoderation: 'underline'
    }

    const { asPath } = useRouter();
    // console.log(router)

    return (
        <Link href={href} style={asPath === href ? style : null}>
            {text}
        </Link>
    )
};
