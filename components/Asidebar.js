import styles from '@/styles/Sidebar.module.css'
// import styles from '@/styles/Home.module.css'
import classNames from 'classnames'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import items from "../data/sidebar.json"
import SidebarItem from "./SidebarItem"

function Asidebar() {

    //--------------------------------------------------------------------------------
    //----------------------- toggle for accordianheader------------------------------

    let [toggled1, setToggled1] = React.useState(true);
    let toggleImage1 = () => {
        let val1 = !toggled1;
        (val1 === !toggled1 ? setToggled1(!toggled1) : setToggled1(toggled1))
    };

    let [toggled2, setToggled2] = React.useState(true);
    let toggleImage2 = () => {
        let val2 = !toggled2;
        (val2 === !toggled2 ? setToggled2(!toggled2) : setToggled2(toggled2))
    };

    let [toggled3, setToggled3] = React.useState(true);
    let toggleImage3 = () => {
        let val3 = !toggled3;
        (val3 === !toggled3 ? setToggled3(!toggled3) : setToggled3(toggled3))
    };

    let [toggled4, setToggled4] = React.useState(true);
    let toggleImage4 = () => {
        let val4 = !toggled4;
        (val4 === !toggled4 ? setToggled4(!toggled4) : setToggled4(toggled4))
    };

    //----------------------------------------------------------------
    //--------------------- dropdownitems-----------------------------

    const [isOpen1, setIsOpen1] = useState(false);
    const onclickHeader1 = () => {
        setIsOpen1(!isOpen1)
    }

    const [isOpen2, setIsOpen2] = useState(false);
    const onclickHeader2 = () => {
        setIsOpen2(!isOpen2)
    }

    const [isOpen3, setIsOpen3] = useState(false);
    const onclickHeader3 = () => {
        setIsOpen3(!isOpen3)
    }

    const [isOpen4, setIsOpen4] = useState(false);
    const onclickHeader4 = () => {
        setIsOpen4(!isOpen4)
    }

    //----------------------------------------------------------------
    //----------------------dropdown for System Setup-----------------

    const [isOpen5, setIsOpen5] = useState(false);
    const onclickHeader5 = () => {
        setIsOpen5(!isOpen5)
    }

    const [isOpen6, setIsOpen6] = useState(false);
    const onclickHeader6 = () => {
        setIsOpen6(!isOpen6)
    }

    //-------------------------------------------------------------------
    //----------------------dropdown for User management-----------------

    const [isOpen7, setIsOpen7] = useState(false);
    const onclickHeader7 = () => {
        setIsOpen7(!isOpen7)
    }

    const [isOpen8, setIsOpen8] = useState(false);
    const onclickHeader8 = () => {
        setIsOpen8(!isOpen8)
    }

    //--------------------------------------------------------------------
    //----------------------dropdown for Cards Management ----------------

    const [isOpen9, setIsOpen9] = useState(false);
    const onclickHeader9 = () => {
        setIsOpen9(!isOpen9)
    }

    const [isOpen10, setIsOpen10] = useState(false);
    const onclickHeader10 = () => {
        setIsOpen10(!isOpen10)
    }

    const [isOpen11, setIsOpen11] = useState(false);
    const onclickHeader11 = () => {
        setIsOpen11(!isOpen11)
    }

    const [isOpen12, setIsOpen12] = useState(false);
    const onclickHeader12 = () => {
        setIsOpen12(!isOpen12)
    }

    // const Menu = ({ data }) => {
    //     const keys = data.map(function (item, key) { return { key: key, close: null, item: item } });
    //     onOpen = (key) => {
    //         // this will close all menus except the current one
    //         keys.forEach(x => {
    //             if (x.key !== key && x.close !== null)
    //                 x.close(); // Close should be set by child eg MenuItem.
    //         })
    //     }
    // }

    // const [item, onOpen] = useState(true);
    // MenuItems = ({ item, onOpen }) => {

    //     let [subMenuOpened, setSubMenuOpened] = useState < boolean > (false);
    //     item.close = () => { setSubMenuOpened(false); } /// this is so the parent will trigger close
    //     const switchMenu = (condition) => setSubMenuOpened(condition !== null ? condition : !subMenuOpened)
    //     useEffect(() => {
    //         if (subMenuOpened)
    //             onOpen(item.key); // trigger parent
    //     });
    // }

    //---------------------------------------------------------------------
    return (
        <>
            {/* <nav className={styles.headerMenu}>
                {
                    keys.map((item, index) => <MenuItem onOpen={onOpen} key={index} item={item} />)
                }
            </nav> */}
            <div className={styles.aside}>
                <Image
                    className={styles.logo}
                    src="/wowlogo.svg"
                    alt="Welcome to WOW Card"
                    width={100}
                    height={50} />

                <div className={styles.itemsbox}>
                    {items.map((item, index) => <SidebarItem key={index} item={item} />)}
                </div>
                {/* <div className={styles.container}> */}

                {/* <div className={styles.accordianOne} class="accordion-item">
                        <h2 onClick={onclickHeader1} className={`${isOpen1 === true ? styles.accordianheaderactive : styles.accordianheader}`}>

                            <button onClick={toggleImage1} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <Image className={styles.ddtimg1} src="/gear.svg" width={20} height={20} />
                                System Setup
                                {toggled1 ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg2} /> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg2} />}
                            </button>
                        </h2>
                        <div className={styles.accordianBody} id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className={styles.accordianitems} class="accordion-body" >
                                <li><a onClick={onclickHeader5} className={`${isOpen5 === true ? styles.dropdownitemsactive : styles.dropdownitems}`} href="#">Card Product Setup</a></li>
                                <li><a onClick={onclickHeader6} className={`${isOpen6 === true ? styles.dropdownitemsactive : styles.dropdownitems}`} href="#">Card Product Rules</a></li>
                            </div>
                        </div>
                    </div>


                <div className={styles.accordianTwo} class="accordion-item">
                        <h2 onClick={onclickHeader2} className={`${isOpen2 === true ? styles.accordianheaderactive : styles.accordianheader}`}>
                            <button onClick={toggleImage2} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <Image className={styles.ddtimg1} src="/person.svg" width={20} height={20} />
                                User Management
                                {toggled2 ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg2} /> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg2} />}
                            </button>
                        </h2>
                        <div className={styles.accordianBody} id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className={styles.accordianitems} class="accordion-body">
                                <li><a onClick={onclickHeader7} className={`${isOpen7 === true ? styles.dropdownitemsactive : styles.dropdownitems}`} href="#">Credit Scoring</a></li>
                                <li><a onClick={onclickHeader8} className={`${isOpen8 === true ? styles.dropdownitemsactive : styles.dropdownitems}`} href="#">Credit Limit Profile</a></li>
                            </div>
                        </div>
                    </div> */}


                {/* <div className={styles.accordianThree} class="accordion-item">
                        <h2 onClick={onclickHeader3} className={`${isOpen3 === true ? styles.accordianheaderactive : styles.accordianheader}`}>
                            <button onClick={toggleImage3} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <Image className={styles.ddtimg1} src="/wallet2.svg" width={20} height={20} />
                                Cards Management
                                {toggled3 ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg2} /> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg2} />}
                            </button>
                        </h2>
                        <div className={styles.accordianBody} id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className={styles.accordianitems} class="accordion-body">
                                <li><a onClick={onclickHeader9} className={`${isOpen9 === true ? styles.dropdownitemsactive : styles.dropdownitems}`} href="#">Customer Group Fee</a></li>
                                <li><a onClick={onclickHeader10} className={`${isOpen10 === true ? styles.dropdownitemsactive : styles.dropdownitems}`} href="#">Product Transactions</a></li>
                                <li><a onClick={onclickHeader11} className={`${isOpen11 === true ? styles.dropdownitemsactive : styles.dropdownitems}`} href="#">Card Production</a></li>
                                <li><a onClick={onclickHeader12} className={`${isOpen12 === true ? styles.dropdownitemsactive : styles.dropdownitems}`} href="#">Prepaid Cards</a></li>
                                
                            </div>
                        </div>
                    </div> */}

                {/* <li><a className={styles.dropdownitems} href="#">Credit Scoring</a></li>
                                <li><a className={styles.dropdownitems} href="#">Credit Limit Profile</a></li>
                                <li><a className={styles.dropdownitems} href="#">Customer Group Fee</a></li> */}

                {/* <div className={styles.accordianFour} class="accordion-item">
                        <h2 onClick={onclickHeader4} className={`${isOpen4 === true ? styles.accordianheaderactive : styles.accordianheader}`}>
                            <button onClick={toggleImage4} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <Image className={styles.ddtimg1} src="/pencil-square.svg" width={20} height={20} />
                                Application Forms
                                {toggled4 ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg2} /> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg2} />}
                            </button>
                        </h2>
                        <div className={styles.accordianBody} id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className={styles.accordianitems} class="accordion-body">
                                <li><a className={styles.dropdownitems} href="#">Card Product Setup</a></li>
                                <li><a className={styles.dropdownitems} href="#">Card Product Rules</a></li>
                                <li><a className={styles.dropdownitems} href="#">Credit Scoring</a></li>
                                <li><a className={styles.dropdownitems} href="#">Credit Limit Profile</a></li>
                                <li><a className={styles.dropdownitems} href="#">Customer Group Fee</a></li>
                            </div>
                        </div>
                    </div> */}

            </div>


            {/* <div className={styles.dropdown}>
                    <a className={styles.dropdowntoggle} onClick={toggleImage} class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        <Image onClick={() => setHidden(!hidden)} className={styles.ddtimg1} src="/wallet2.svg" width={20} height={20} />Cards Management
                        {toggled ? <img src="/chevron-down.svg" alt="down" className={styles.ddtimg2} /> : <img src="/chevron-up.svg" alt="up" className={styles.ddtimg2} />}
                    </a>
                    <ul class="dropdown-menu">
                        <li><a className={styles.dropdownitems} href="#">Card Product Setup</a></li>
                        <li><a className={styles.dropdownitems} href="#">Card Product Rules</a></li>
                        <li><a className={styles.dropdownitems} href="#">Credit Scoring</a></li>
                        <li><a className={styles.dropdownitems} href="#">Credit Limit Profile</a></li>
                        <li><a className={styles.dropdownitems} href="#">Customer Group Fee</a></li>
                        
                    </ul>
                </div> */}

            {/* </div> */}
        </>
    );
}

export default Asidebar