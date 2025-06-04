import styles from './dash.module.css'

export default function DashBoard(){
   return(
    <>
    <div className={styles.background}>
        <h1>Dashboard</h1>
        <main className={styles.main}>
         <h3>Scheduled Appointments</h3>
         <div>
            appointments
         </div>
        </main>
    </div>
    </>
   )
}