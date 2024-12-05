import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.header__top}>
                <Link className="hover-border" href="/">
                    <Image src="/images/amazon_logo.png" alt="logo" width={115} height={58} />
                </Link>
                <div className={`${style.header__top__delivery} hover-border`}>
                    <CiLocationOn className={style.locationIcon} />
                    <div>
                        <span className="text-gray-100">Delivering to Roma 00185</span>
                        <br />
                        <span className="fw-700">Update locations</span>
                    </div>
                </div>
            </div>
            <div className={style.header__bottom}>happy :-)</div>
        </header>
    );
}
