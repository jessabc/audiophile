import Category from './Category'
import categoryHeadphones from '/src/assets/shared/desktop/image-category-thumbnail-headphones.png'
import categorySpeakers from '/src/assets/shared/desktop/image-category-thumbnail-speakers.png'
import categoryEarphones from '/src/assets/shared/desktop/image-category-thumbnail-earphones.png'


export default function Menu({isMenuModalVisible, setIsMenuModalVisible}) {

    return (
 
        <section className={`md:mx-12 md:grid md:grid-cols-3 gap-2  lg:mx-32 ${isMenuModalVisible ? '' : ''}`}  > 

            <Category 
                image={categoryHeadphones} 
                link='headphones'
                isMenuModalVisible={isMenuModalVisible}
                setIsMenuModalVisible={setIsMenuModalVisible}
            />

            <Category 
                image={categorySpeakers} 
                link='speakers'
                isMenuModalVisible={isMenuModalVisible}
                setIsMenuModalVisible={setIsMenuModalVisible}
            />

            <Category 
                image={categoryEarphones} 
                link='earphones'
                isMenuModalVisible={isMenuModalVisible}
                setIsMenuModalVisible={setIsMenuModalVisible}
            />

        </section>
    )
}