import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container">
      {user && (
        <div>
          <p>Hello: {user?.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
