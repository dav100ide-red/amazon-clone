"use client";
import Link from "next/link";
import style from "./header.module.css";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { BsCart } from "react-icons/bs";

import SearchBar from "./search-bar/search-bar";
import { useAppSelector } from "@/store/hooks";
import { cartSelectors } from "@/store/slices/cartSlice";

export default function Header() {
    const totalItemsQntity = useAppSelector(cartSelectors.getTotatlItemsQntity);
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
                <SearchBar />

                <div className={`${style.header__top__account} hover-border`}>
                    <small>Hello, sign in</small>
                    <div className="fw-700">Account</div>
                </div>
                <Link className={`${style.header__top__cart} hover-border`} href="/cart">
                    <BsCart size={40} color="var(--white)" />
                    <span className="text-accent fw-700">{totalItemsQntity}</span>
                </Link>
            </div>
            <div className={style.header__bottom}>todo: header bottom</div>
        </header>
    );
}
