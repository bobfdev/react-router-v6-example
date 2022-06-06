import { useNavigate, useParams } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const { username } = useParams();

  return (
    <div>
      <h1>Profile</h1>
      <h2>{username}</h2>
      <button onClick={() => {navigate('/about')}}>About Page</button>
    </div>
  )
}

export default Profile