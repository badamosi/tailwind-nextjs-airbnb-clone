import Image from 'next/image'
import {StarIcon} from '@heroicons/react/solid'
import {HeartIcon} from '@heroicons/react/outline'

function InfoCard({ info }) {
    
    const { title, description, img, lat, long, location, price, star, total } = info;
    return (
        <div className="flex py-7 px-2 border-b cursor-pointer hover:shadow-lg hover:opacity-80 transition duration-200 ease-out first:border-t last:mb-6">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p className="">{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2" />
                <p className="text-sm text-gray-500 pt-2 flex-grow">{description}</p>

                <div className="flex justify-between items-center pt-5">
                    <div className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        <p className="text-sm font-semibold">{star}</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                        <p className="text-xs font-extralight">{total }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
