export interface IProduct {
    category: string,
    categoryImage: {
        mobile: string, 
        tablet: string, 
        desktop: string,
    }
    description: string,
    features: string,
    gallery: Gallery[],
    id: 1,
    image: {
        mobile: string, 
        tablet: string, 
        desktop: string,
    }
    includes: Includes [],
    name: string,
    new: boolean,
    others: RecommendedProduct[],
    price: number,
    slug: string,
    quantity?: number
}

export interface Gallery {
    desktop: string,
    mobile: string,
    tablet: string,
}

export interface Includes {
    item: string,
    quantity: boolean,
}

export interface RecommendedProduct  {
    image: {
        mobile: string, 
        tablet: string, 
        desktop: string,
    }
    name: string,
    slug: string
}

