import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Home = () => {
  const id = useParams();
  const [user, setUser] = useState([]);
  const nav = useNavigate();


  async function fetchApi() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUser(data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="user-list">
          {user.map((user) => (
            <div className="user" key={user.id} >
              <div className="user-card" onClick={() => nav(`${user.id}`)}>
                <div className="user-card__container">
                  <h3>{user.name}</h3>
                  <p>
                    <b>Email:</b> {user.email}
                  </p>
                  <p>
                    <b>Phone:</b> {user.phone}
                  </p>
                  <p>
                    <b>Website:</b>
                    {user.website}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
