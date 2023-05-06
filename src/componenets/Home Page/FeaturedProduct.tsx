interface FeaturedProductProps {
    children: React.ReactNode
}

export default function FeaturedProduct({children}: FeaturedProductProps) {


    return (
        <>
            <div >
                {children}
                <button>see product</button>
            </div>
        </>
    )
} 