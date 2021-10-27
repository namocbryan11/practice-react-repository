import ApiService from "../Utils/ApiService";

export const getUsers = () => (dispatch) =>
{
        ApiService.getAllUsers().then((response)=> {
        console.log(response);
        return response.data;
        })
}
