import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
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
      {blogs.length === 0 && <p>No blogs available.</p>}
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.tittle}</h2>
          <Link to={`/blog/${blog.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Home