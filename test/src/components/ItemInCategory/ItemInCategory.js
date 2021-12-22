import React from 'react';
import ItemCategoryCSS from './ItemInCategory.module.css'
import jacket from '../../img/jacket.png'
import jacket2 from '../../img/jacket2.png'

function ItemInCategory({item, addPurchase}) {
    const {id, name, description} = item;
    return (
            <div className={ItemCategoryCSS.category} onClick={() => addPurchase(id)}>
                <div className={ItemCategoryCSS.category_img}>
                    <img src={jacket2}/>
                </div>
                <div className={ItemCategoryCSS.category_name}>
                    {name}
                </div>
                <div className={ItemCategoryCSS.category_description}>
                    {description}
                </div>
            </div>
    )
}

export default ItemInCategory;