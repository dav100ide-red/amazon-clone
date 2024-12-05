import type { Metadata } from "next";
import "./index.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import localFont from "next/font/local";

export const metadata: Metadata = {
    title: "Amazon clone",
    description: "Generated by create next app",
};

export const amazonEmber = localFont({
    src: [
        { path: "../assets/fonts/AmazonEmber-Rg.ttf", weight: "400", style: "normal" }, // Regular
        { path: "../assets/fonts/AmazonEmber-RgIt.ttf", weight: "400", style: "italic" }, // Regular Italic
        { path: "../assets/fonts/AmazonEmber-Md.ttf", weight: "500", style: "normal" }, // Medium
        { path: "../assets/fonts/AmazonEmber-MdIt.ttf", weight: "500", style: "italic" }, // Medium Italic
        { path: "../assets/fonts/AmazonEmber-Bd.ttf", weight: "700", style: "normal" }, // Bold
        { path: "../assets/fonts/AmazonEmber-BdIt.ttf", weight: "700", style: "italic" }, // Bold Italic
    ],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={amazonEmber.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
