import ReactNode from "../Types/ReactNode";
import HomeFooter from "../components/Footer";
import Navbar from "../components/Navbar";


function HomeLayout({ children } : {children: ReactNode}) {
    return (
        <>
            <Navbar />
            {children}
            <HomeFooter />
        </>
    );
}

export default HomeLayout;  