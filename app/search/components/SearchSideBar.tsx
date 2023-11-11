import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

interface LocationType {
    id: number,
    name: string
}


interface CuisineType {
    id: number,
    name: string
}


interface SearchParamsType {
    city?: string,
    cuisine?: string,
    price?: PRICE
}

export default function SearchSideBar({ locations, cuisines, searchParams }: { locations: LocationType[], cuisines: CuisineType[], searchParams: SearchParamsType }) {
    const prices = [
        { id: 1, label: "$", value: PRICE.CHEAP, className: "border w-full text-reg text-center font-light rounded-l p-2" },
        { id: 2, label: "$$", value: PRICE.REGULAR, className: "border-r border-t border-b w-full text-reg text-center font-light p-2" },
        { id: 3, label: "$$$", value: PRICE.EXPENSIVE, className: "border-r border-t border-b w-full text-reg text-center font-light p-2 rounded-r" }
    ]

    return (
        <div className="w-1/5">
            <div className="border-b pb-4 flex flex-col">
                <h1 className="mb-2">Region</h1>
                {locations.map(location => (
                    <Link href={
                        { pathname: '/search', query: { ...searchParams, city: location.name } }
                    }
                        className="font-light text-reg capitalize" key={location.id}>{location.name}</Link>
                ))}
            </div>
            <div className="border-b pb-4 mt-3 flex flex-col">
                <h1 className="mb-2">Cuisine</h1>
                {cuisines.map(cuisine => (
                    <Link href={
                        { pathname: '/search', query: { ...searchParams, cuisine: cuisine.name } }
                    }
                        className="font-light text-reg capitalize" key={cuisine.id}>{cuisine.name}</Link>
                ))}
            </div>
            <div className="mt-3 pb-4">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                    {prices.map(price => (
                        <Link href={
                            { pathname: '/search', query: { ...searchParams, price: price.value } }
                        }
                            className={price.className}>
                            {price.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    )
}
