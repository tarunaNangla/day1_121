import React from 'react'
import styles from './ContactCard.module.css'
import {useState} from 'react'
const ContactCard = (props) => {
//    console.log(props)
const [load,setLoading] = useState(false);


  const {key, name, email, imgg, number}=props
    return (
    <div id={key} className={styles.divflex} >
     
      <div>
        <img className={styles.pic} src={imgg} alt="pic" />
      </div>
      
      <div className={styles.set} >
               <h4 onClick={()=>setLoading(!load)}>{name}</h4>
        

        <p>{email}</p>
      </div>
      <div>
       {load && <h4>{number}</h4>}

      </div>
    </div>
  )
}

export default ContactCard
