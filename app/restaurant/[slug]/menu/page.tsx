import Navbar from "../../../components/Navbar";
import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";

export default function RestaurantMenuPage() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen text-black">
            <main className="max-w-screen-2xl m-auto bg-white">
                <Navbar />
                <Header />
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[100%] rounded p-3 shadow">
                        <RestaurantNavBar />
                        <Menu />
                    </div>
                </div>
            </main>
        </main>

    )
}