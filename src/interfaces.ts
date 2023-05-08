
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
    // quantity: number,
    image: {
        mobile: string, 
        tablet: string, 
        desktop: string,
    }
    includes: Includes [],
    name: string,
    new: boolean,
    others: {
        image: {
            mobile: string, 
            tablet: string, 
            desktop: string,
        }
        name: string,
        slug: string
    }[],
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

