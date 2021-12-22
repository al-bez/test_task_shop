import React from 'react';
import HeaderCSS from './Header.module.css';
import logo from '../../img/logo.png'

function Header({categories, setCategory}) {

return (
        <div className={HeaderCSS.header}>
            <div className={HeaderCSS.sort}>
                <div className={HeaderCSS.buttons}>
                {categories ? categories.map((item,i) => {
                    return <button type='button' className={HeaderCSS.button} onClick={(e) => setCategory(e.target.outerText)} key={i}>{item}</button>
                }) : null}
                </div>
                <div className={HeaderCSS.icon}>{'<'}</div>
                </div>
            <div className={HeaderCSS.header_logo}>
            <div className={HeaderCSS.header_text}>
            <p>ונלש תויתוכיא יכה תוצלוחה הנה םייתש םג רשפא לבא דחא ורחבת</p>           
            </div>
            <div className={HeaderCSS.image}>
                <img src={logo} alt='Logo'/>
            </div>
        </div>
        </div>
    )
}

export default Header;