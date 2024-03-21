import { PRICE, PrismaClient } from "@prisma/client";
import { equal } from "assert";
import Navbar from "../components/Navbar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient()

interface SearchParams {
    city?: string,
    cuisine?: string,
    price?: PRICE
}

const fetchRestaurantsByCity = (searchParams: SearchParams) => {
    const select = {
        id: true,
        name: true,
        main_image: true,
        cuisine: true,
        slug: true,
        location: true,
        price: true,
        reviews: true
    }

    const where: any = {}

    if (searchParams.city) {
        const location = { name: { equals: searchParams.city.toLowerCase() } }
        where.location = location
    }

    if (searchParams.cuisine) {
        const cuisine = { name: { equals: searchParams.cuisine.toLowerCase() } }
        where.cuisine = cuisine
    }

    if (searchParams.price) {
        const price = { equals: searchParams.price }
        where.price = price
    }


    return prisma.restaurant.findMany({
        where,
        select
    })
}

const fetchLocations = () => {
    return prisma.location.findMany({
        select: {
            id: true,
            name: true
        }
    })
}

const fetchCuisines = () => {
    return prisma.cuisine.findMany(
        {
            select: {
                id: true,
                name: true
            }
        }
    )
}

export default async function Search({ searchParams }: { searchParams: SearchParams }) {
    const restaurants = await fetchRestaurantsByCity(searchParams)
    const locations = await fetchLocations()
    const cuisines = await fetchCuisines()

    return (
        <>
            <Header />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar locations={locations} cuisines={cuisines} searchParams={searchParams} />
                <div className="w-5/6">
                    {restaurants.length ?
                        (restaurants.map(restaurant => <RestaurantCard restaurant={restaurant} />))
                        : 'Sorry! No restaurant found.'}
                </div>
            </div>
        </>
    )
}