import React from 'react'
import styles from '@/styles/Sidebar.module.css'
import { useState } from 'react'

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)

    const [toggled, setToggled] = React.useState(true);
    const toggleImage = () => {
        let val = !toggled;
        (val === !toggled ? setToggled(!toggled) : setToggled(toggled))
    };
    const [isOpen, setIsOpen] = useState(false);
    const onclickItem = () => {
        setIsOpen(!isOpen)
    }

    if (item.childrens) {
        return (
            <>
            <div className={open ? styles.sidebaritemsopen : styles.sidebaritems}>
                <div className={styles.sidebartitle} onClick={() => setOpen(!open)}>
                    <span onClick={toggleImage}>
                        {item.icon && <i className={item.icon} ></i>}
                        {item.title}
                        {/* <i class="bi bi-chevron-down toggle-btn" className={styles.togglebtn} onClick={() => setOpen(!open)}></i>    */}
                        {toggled || !open ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg2} /> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg2} />}
                    </span>
                </div>
                <div className={styles.sidebarcontent}>
                    {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
            </>
        )
    } else {
        return (
            <a href={item.path} onClick={onclickItem} className={`${isOpen === true ? styles.sidebaritemsplainactive : styles.sidebaritemsplain}`}>
                {item.icon && <i className={item.icon}></i>}
                {item.title}
            </a>
        )
    }
}
