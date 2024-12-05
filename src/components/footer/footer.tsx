import style from "./footer.module.css";
import GoUpBtn from "./go-up-btn";

type LinkPanel = {
    listName: string;
    links: string[]; //mock links, only label, there is no href
};

export default function Footer() {
    const linkPanels: LinkPanel[] = [
        {
            listName: "Get to Know Us",
            links: ["Careers", "Blog", "About Amazon", "Investor Relations", "Amazon Devices"],
        },
        {
            listName: "Make Money with Us",
            links: [
                "Sell products on Amazon",
                "Sell on Amazon Business",
                "Sell apps on Amazon",
                "Become an Affiliate",
                "Advertise Your Products",
                "Self-Publish with Us",
                "Host an Amazon Hub",
            ],
        },
        {
            listName: "Amazon Payment Products",
            links: ["Amazon Business Card", "Shop with Points", "Reload Your Balance", "Amazon Currency Converter"],
        },
        {
            listName: "Let Us Help You",
            links: [
                "Amazon and COVID-19",
                "Your Account",
                "Your Orders",
                "Shipping Rates & Policies",
                "Returns & Replacements",
                "Manage Your Content and Devices",
                "Amazon Assistant",
                "Help",
            ],
        },
    ];

    return (
        <footer className={style.footer}>
            <GoUpBtn />
            <div className={`bg-primary-300 ${style.footer__top}`}>
                <ul className={style.linksPanels}>
                    {linkPanels.map((panel, _) => {
                        return (
                            <li key={_}>
                                <h4 className="fw-700">{panel.listName}</h4>
                                <ul>
                                    {panel.links.map((l) => (
                                        <li className={style.linkItem} key={l}>
                                            <a>{l}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className={`bg-primary ${style.footer__bottom}`}>
                <div className={style.footer_links}>
                    <a href="#">Conditions of Use</a>
                    <a href="#">Privacy Notice</a>
                    <a href="#">Your Ads Privacy Choices</a>
                </div>
                <div className={style.footer_copywright}>
                    <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </footer>
    );
}
