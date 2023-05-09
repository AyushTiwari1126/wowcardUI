import styles from '@/styles/Navbar.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return (
        <>
            
                <div className={styles.navbar}>
                    <ul>
                        <li>
                            <Link href="/">Login</Link>
                        </li>
                        <li>
                            <Link href="/"><Image src="/bell.svg" width={20} height={20} /></Link>
                        </li>
                        <li>
                            <Link href="/"><Image src="/filter.png" width={20} height={20} /></Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.details}>
                    <ul>
                        <li>
                            <Link href="/"> Application Details</Link>
                        </li>
                        <li>
                            <Link href="/"> Personal Details</Link>
                        </li>
                        <li>
                            <Link href="/"> Supplementary Details</Link>
                        </li>
                    </ul>
                </div>
        </>

    )
}

export default Navbar