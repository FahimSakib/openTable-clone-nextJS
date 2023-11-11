import { PrismaClient } from "@prisma/client";
import Navbar from "../components/Navbar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient()

const fetchRestaurantsByCity = (city: string) => {
    const select = {
        id: true,
        name: true,
        main_image: true,
        cuisine: true,
        slug: true,
        location: true,
        price: true
    }

    if (!city) {
        return prisma.restaurant.findMany({ select })
    }

    return prisma.restaurant.findMany({
        where: {
            location: { name: { equals: city.toLowerCase() } }
        },
        select
    })
}

export default async function Search({ searchParams }: { searchParams: { city: string } }) {
    const restaurants = await fetchRestaurantsByCity(searchParams.city)

    return (
        <>
            <Header />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar />
                <div className="w-5/6">
                    {restaurants.length ?
                        (restaurants.map(restaurant => <RestaurantCard restaurant={restaurant} />))
                        : 'Sorry! No restaurant found.'}
                </div>
            </div>
        </>
    )
}