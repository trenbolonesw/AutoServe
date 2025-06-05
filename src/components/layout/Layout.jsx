import { Link, Outlet } from "react-router";

import image2 from '../../images/menubar128.png'
import styles from './layout.module.css'
import { useState } from "react";
export default function Layout(){

 const [drop,setDrop] = useState(false)

   function handleDrop(){
    setDrop( prev => !prev)
   }

    return (
        <>
        <div>
            <div className={styles.layout}>
              
          
            
            <h1 className={styles.header}>
            <Link className={styles.headerLink} to={'/'}> Auto<strong>Serve</strong></Link>
            </h1>
           <button className={styles.button} onClick={handleDrop}>
            <img src={image2} alt="" height={70} width={70}/>
            </button>
            <div className={styles.menu}>
             
            <div className={`${styles.dropdown} ${drop ? styles.dropdown: styles.dropdownhidden}`}>
                <Link className={styles.Link} to={'/CreateAppointment'}>Book Appointment</Link>
                <Link className={styles.Link}>Products</Link>
                <Link className={styles.Link}>About Us</Link>
                <Link to={'/DashBoard'} className={styles.Link}>Dashboard</Link>
            </div>
         
            </div>
            </div>
            <Outlet/>
        </div>
        </>
    )
}