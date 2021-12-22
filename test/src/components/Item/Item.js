import React from 'react';
import ItemCSS from './Item.module.css';
import jacket from '../../img/jacket.png'

function Item({item, deleteItem}) {
    const {id, name} = item;
    return (
            <div className={ItemCSS.item}>
                <button className={ItemCSS.delete} onClick={() => deleteItem(id)}>&times;</button>
                <div className={ItemCSS.item_info}>
                    <div className={ItemCSS.text}>{name}</div>
                    <div>
                    <img src={jacket} alt='Jacket'/>
                    </div>
                </div>
            </div>
    )
}

export default Item;