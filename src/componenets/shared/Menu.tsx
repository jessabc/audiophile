import Category from './Category'
import categoryHeadphones from '/src/assets/shared/desktop/image-category-thumbnail-headphones.png'
import categorySpeakers from '/src/assets/shared/desktop/image-category-thumbnail-speakers.png'
import categoryEarphones from '/src/assets/shared/desktop/image-category-thumbnail-earphones.png'


export default function Menu() {

    return (
 
        <section className='  md:mx-12 md:grid md:grid-cols-3 gap-2  lg:mx-32'> 

            <Category 
                image={categoryHeadphones} 
                link='headphones'
            />

            <Category 
                image={categorySpeakers} 
                link='speakers'
            />

            <Category 
                image={categoryEarphones} 
                link='earphones'
            />

        </section>
    )
}