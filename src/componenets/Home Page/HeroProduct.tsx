// import hero from '../../../public/assets/home/mobile/image-header.jpg'

interface HeroProductProps {
    children: React.ReactNode
}

export default function HeroProduct({children}: HeroProductProps) {

    const hero = '../../../public/assets/home/mobile/image-header.jpg'

    return (
        // <div className="bg-[url('../../../public/assets/home/mobile/image-header.jpg')]">
         <div >
        {/* <div className="text-orange"> */}
           {children}
            <button >See Product</button>
        </div>
    )
}