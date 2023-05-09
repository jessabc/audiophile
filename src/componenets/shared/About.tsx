import bestGear from '../../../public/assets/shared/mobile/image-best-gear.jpg'


export default function About() {

    return (
        <section className='mx-8 flex flex-col gap-2 justify-center items-center mb-20 md:mx-12 md:gap-8'>
            <img src={bestGear} alt="" className='rounded-lg'/>
            <h3 className='font-bold text-2xl leading-9 text-center tracking-wider uppercase text-black px-2 md:text-4xl md:px-20'>Bringing you the <span className='text-orange'>best</span> audio gear</h3>
            <p className='leading-6 text-center text-black opacity-50 md:px-20'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </section>
    )
}