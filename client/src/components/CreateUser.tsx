import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateUser = () => {

  const [data, setData] = useState({ name: "", age: "" });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      name: data.name,
      age: data.age
    }

    axios.post("http://localhost:9001/", data)
      .then(res => setData({ name: "", age: "" }))
      .catch(err => console.log(err))

    console.log(data);
  }

  return (
    <>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={data.name} name="name" placeholder="Your name" />
        <input type="text" onChange={handleChange} value={data.age} name="age" placeholder="Your age" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default CreateUser;
