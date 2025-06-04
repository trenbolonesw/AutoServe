
import styles from './appointment.module.css'

export default function CreateAppointment(){

  

    return(
        <>
        <div className={styles.page}>
            <header className={styles.header}>Make an Appointment</header>
            <form className={styles.form}>
                <label>First Name</label>
                <input className={styles.input} placeholder="John"/>
                 <label>Last Name</label>
                <input className={styles.input} placeholder="Doe"/>
                 <label>Email Address</label>
                <input className={styles.input} placeholder="John@gmail.com"/>
                 <label>Phone Number</label>
                <input className={styles.input} type="tel" placeholder="204-858-1234"/>
                  <label>Time</label>
                <input className={styles.input} type='date'/>
                 <label>Select Service</label>
                
                <select className={styles.input}>
                    <option>Tire Change</option>
                    <option>Oil Change</option>
                    <option>General Checkup</option>
                </select>
                
                 <button className={styles.sendbutton}>Create Appointment</button>
            </form>
        </div>
        </>
    )
}
