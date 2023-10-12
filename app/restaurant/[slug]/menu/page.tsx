import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";

export default function RestaurantMenuPage() {
    return (
        <>
            <Header />
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                <div className="bg-white w-[100%] rounded p-3 shadow">
                    <RestaurantNavBar />
                    <Menu />
                </div>
            </div>
        </>
    )
}