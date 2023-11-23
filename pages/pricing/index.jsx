import { MainLayaout } from "@/components/layaouts/MainLayaout";
import Link from "next/link";

const Pricing = () => {
    return (
        <MainLayaout>
            <h1>Pricing Page</h1>

            <h1>
                Ir a <Link href='/'>Home</Link>
            </h1>

            <p>
                Get started by editing&nbsp;
                <code className="font-mono font-bold">pages/pricing/index.jsx</code>
            </p>
        </MainLayaout>
    )
};

export default Pricing
