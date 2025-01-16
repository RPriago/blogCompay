import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = () => {
    const { id } = useParams(); // Mengambil ID dari URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch data blog berdasarkan ID
      axios
        .get(`http://127.0.0.1:8000/api/blog/${id}/`)
        .then((response) => {
          setBlog(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching blog detail:", error);
          setLoading(false);
        });
    }, [id]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!blog) {
      return <p>Blog not found.</p>;
    }
  
    return (
      <div>
        <h1>{blog.tittle}</h1>
        <p>{blog.body}</p>
      </div>
    );
}

export default Detail