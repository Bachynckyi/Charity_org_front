import Header from "components/Header/Header";
import scss from "./SharedLayout.module.scss";

const SharedLayout = () => {
    return (
        <div className={scss.container}>
            <Header/>
        </div>
    )

};

export default SharedLayout;