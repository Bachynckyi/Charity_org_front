import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import scss from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={scss.container_page}>
            <Header/>
            <div>
                <Outlet/>
            </div>
            <div className={scss.container_footer}>
                <Footer/>
            </div>
        </div>
    )

};

export default Layout;