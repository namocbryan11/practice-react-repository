import axios from 'axios';

const GET_SAMPLE_USERS = "http://jsonplaceholder.typicode.com/users";

class ApiService {

    getAllUsers()
    {
        return axios.get(GET_SAMPLE_USERS);
    }
}

export default new ApiService();