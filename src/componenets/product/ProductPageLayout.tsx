interface ProductPageLayoutProps {
    children: React.ReactNode,
    category: string
}


export default function ProductPageLayout({children, category}: ProductPageLayoutProps) {


    return (
        <div className="fade-in">
            <div className='bg-black '>
                <h2 className='font-bold text-3xl text-center tracking-wider uppercase text-white py-10'>{category}</h2>
            </div>

            <div className='px-8 md:px-12 lg:px-32 mt-20 mb-52'>
                {children}
            </div> 
        </div> 
    )
       
       
}