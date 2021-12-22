import React, {useState} from 'react';
import CategoryCSS from './Categories.module.css';
import ItemInCategory from '../ItemInCategory/ItemInCategory';
import categories from '../../datas/categories'
import Header from '../Header/Header';

function Categories({clothing, addPurchase}) {
const [activeCategory, setCategory] = useState(null);
const sortClothing = activeCategory ? clothing.filter(item => item.category === activeCategory) : [...clothing];

    return (
        <div className={CategoryCSS.container}>
            <Header categories={categories} setCategory={setCategory}/>
            <div className={CategoryCSS.main}>
                <p className={CategoryCSS.text}><span>םדאל תוצלוח 2 םירחוב ללכ ךרדב</span> תוצלוח רחב</p>
                <div className={CategoryCSS.content}>
                {sortClothing.map(item => <ItemInCategory item={item} key={item.id} addPurchase={addPurchase}/>)}
                </div>
                <button className={CategoryCSS.buttons} type='button'><a href='/ab'>האבה הירוגטק</a></button>
            </div>
        </div>
    )
}

export default Categories;