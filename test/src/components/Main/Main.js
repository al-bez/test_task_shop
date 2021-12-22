import React from 'react';
import Header from '../Header/Header';
import MainCSS from './Main.module.css';
import Item from '../Item/Item';


function Main({clothing, deleteItem}) {
    return (
        <div className={MainCSS.container}>
          <Header/>
           <div className={MainCSS.main}>
            <p className={MainCSS.text}> ךלש הנמזהה</p>
            <div className={MainCSS.content}>
            {clothing.map(item => {
                return <Item item={item} key={item.id} deleteItem={deleteItem}/>
            })}
            </div>
            <div className={MainCSS.buttons}>
            <button type='button'><a href='/'>המישר תכירע</a></button>
            <button type='button'>!ילש הליבחה תאז</button>
            </div>
           </div>
        </div>
    )
}

export default Main;