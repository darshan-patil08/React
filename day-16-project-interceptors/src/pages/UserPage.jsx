import axios from 'axios';

const UserPage = () => {

    const getUserData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/users');
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>

    </div>
  )
}

export default UserPage