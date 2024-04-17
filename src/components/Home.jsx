import React, { useState } from "react"; // Added import for React and useState
import { Profiler } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"; // Removed duplicate import for useState
import { setUsers } from "../redux/action/UserActions";
import axios from "axios";

const Home = ({ url }) => {
  
  const Users = useSelector(state => state.user.gitHubUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (userId) => {
    navigate(`/github-user/${userId}`);
  };

  const getUsers = async () => {
    const response = await axios.get(url).catch((error) => {
      console.log(error);
    });
    dispatch(setUsers(response.data));
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {isLoading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      <div className="w-full lg:grid-cols-4 md:grid-cols-2 grid lg:px-[100px] px-4">
        {Users &&
          Users.map((user) => (
            <div onClick={() => handleClick(user.id)} key={user.id}>
              <Profile
                key={user.id}
                image_url={user.avatar_url}
                username={user.login}
                profile_link={user.html_url}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
