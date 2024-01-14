// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [getAdverts, setAdverts] = useState([]);
  const [getForm, setForm] = useState({
    title: '',
  });
  const updateForm = (e) => {
    const {name, value} = e.target;
    setForm(prevState => ({
        ...prevState,
        [name]: value
    }))
  }
  const handleSubmit = e => {
    e.preventDefault();
    const data = getForm;

    console.log(data);

    axios.post("api/adverts", data).then(res => {
        // console.log(res.data);
        // localStorage.setItem('token', res.data.token);
        router.push('/');
    }).catch(err => {
        // console.log(err);
    })
}
  // const [getUserFavourites, setUserFavourites] = useState([]);

  // useEffect(()=>{
  //     // axios.get("http://localhost:3000/adverts")
  //     axios.get("http:///:3001/adverts")
  //     .then(response => {
  //         setAdverts(response.data);
  //         // getUserDetails();
          
  //     }).catch(err => {
  //         // console.log(err);
  //     })
  // }, [])

  




  return (
    <>

      <h4>Hello Evelina...</h4>
      {getAdverts.map(post => (
              <h4>{post.title}</h4>              
          ))}
      <form onSubmit={handleSubmit}>
        <input 
          // className={classes.Input} 
          type='input' 
          // placeholder={props.placeholder}
          name='title'
          value={getForm.title}
          onChange={updateForm}
        />
        <button type='submit' />
      </form>
      

    </>
  )
}
