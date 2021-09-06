import Image from 'next/image'
function MediumCard({ data }) {
    const {img, title, location, distance} = data
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative w-80 h-80">
            <Image src={img} layout="fill" className="rounded-xl" />
        </div>
            <h3 className="text-2xl mt-3 font-semibold">{title}</h3>
        </div>
    )
}

export default MediumCard
