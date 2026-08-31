
import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { API } from '../config/axiosintence';

const UserPage = () => {

    // eslint-disable-next-line no-unused-vars
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

   
    const getUserData = async () => {
        try {
            const response = await API.get('/users');
            setUserData(response.data);
            setLoading(false);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getUserData();
    }, []);

    if(loading){
        return (
            <div className='flex justify-center items-center h-screen'>
                <h1 className='text-2xl font-bold'>Loading...</h1>
            </div>
        )
    }
 console.log(`userData`, userData);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {
            userData.map((user) => (
                <UserCard key={user.id} user={user} />
            ))
        }
    </div>
  )
}

export default UserPage