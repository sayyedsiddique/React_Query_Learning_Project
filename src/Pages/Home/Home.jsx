import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchPosts = async () => {
   try {
    const {data} = await axios.get("https://gorest.co.in/public/v2/posts")
    return data
   } catch (error) {
    throw Error("Unable to fetch posts")
   }
}

const Home = () => {

    const {data, isLoading, error} = useQuery("posts", fetchPosts)
    console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home