import './index.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
function About() {

  const [user, setuser] = useState("")
  const url = "https://jsonplaceholder.typicode.com/users"
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response.data)
      setuser(response.data);
    };
    fetchData()
  }, [])

  const ab = Object.values(user)
  return (
    <div>
      {
        ab.map((d)=> 
        <div className='Api-data'>
        <h3>{d.id}</h3>
        <p>{d.name}</p>
        <p>{d.email}</p>
        <p>{d.username}</p>
        <p>{d.website}</p>
        <p>{d.phone}</p>

        </div>
     )}
    </div>
  )
}
export default About