import React from 'react'
import ContactCard from './ContactCard'
const  info=[
    {
        id:1,
        imgurl:'https://images.unsplash.com/photo-1652685620115-9a730abdd56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        name:"Annette Murohy",
        email:"sara.cruz@example.com",
        number:'98978778878'
    },
    {
        id:2,
        imgurl:'https://images.unsplash.com/photo-1652768742119-3a4d0f7fb653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        name:"Theresa Watson",
        email:"michel.mitchell@example.com",
        number:'98978778878'
    },
    {
        id:3,
        imgurl:'https://images.unsplash.com/photo-1652721748199-0b156810f5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
        name:"Cody Howard",
        email:"glen.lane@example.com",
        number:'98978778878'
    },
    {
        id:4,
        imgurl:'https://images.unsplash.com/photo-1652734789593-58bba762235b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1962&q=80',
        name:"Max Lane",
        email:"dwight.fleming@example.com",
        number:'98978778878'
    },
    {
        id:5,
        imgurl:'https://images.unsplash.com/photo-1652769707112-84f00e78435b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
        name:"Marvin fisher",
        email:"kelly.howard@example.com",
        number:'98978778878'
    },
    {
        id:6,
        imgurl:'https://images.unsplash.com/photo-1638911944043-605aa006698d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name:"Brooklyn Mccoy",
        email:"chad.stephens@example.com",
        number:'98978778878'
    }
]

const ContactList = () => {
    // const [show,setShow]= React.useState(info);
  return (
    <div>
      {
          info.map((ele)=>{
            //  console.log(ele)
            return(
                <>
                <ContactCard key={ele.id} name={ele.name} email={ele.email} imgg={ele.imgurl} number={ele.number} />
                {/* <h1>{ele.name}</h1> */}
           
                </>
            )
          })
      }
    </div>
  )
}

export default ContactList
