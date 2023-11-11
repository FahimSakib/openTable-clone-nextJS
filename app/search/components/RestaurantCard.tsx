import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import Price from "../../components/Price";

interface restaurantType {
    id: number;
    name: string;
    main_image: string;
    slug: string;
    price: PRICE;
    location: Location
    cuisine: Cuisine
}

export default function RestaurantCard({ restaurant }: { restaurant: restaurantType }) {
    return (
        <div className="border-b flex pb-5 ml-4">
            <img
                src={restaurant.main_image}
                alt=""
                className="w-44 h-36 rounded"
            />
            <div className="pl-5">
                <h2 className="text-3xl">{restaurant.name}</h2>
                <div className="flex items-start">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <Price price={restaurant.price} />
                        <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
                        <p className="mr-4 capitalize">{restaurant.location.name}</p>
                    </div>
                </div>
                <div className="text-red-600">
                    <Link href={`/restaurant/${restaurant.slug}`}>View more information</Link>
                </div>
            </div>
        </div>
    )
}
