import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  const { _id, name, age } = user;
  return (
    <div>
      <li key={_id}>
        <p>{name}</p>
        <p>{age}</p>
      </li>
    </div>
  )
}
function ShowUsers() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9001/")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>Home</h1>

      <Link to="/create-user">
        <button type="button">Create User</button>
      </Link>

      <div>
        <ul>
          {user.map((user) => <UserCard user={user} />)}
        </ul>
      </div>
    </>
  )
}

export default ShowUsers;
