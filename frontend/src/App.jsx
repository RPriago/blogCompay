import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/blog/')
        setBlogs(response.data)
      } catch {
        console.error("Error fetching data:",error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>Blog List</h1>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <h2>{blog.tittle}</h2>
            </li>
          ))}
        </ul>
    </>
  )
}

export default App
