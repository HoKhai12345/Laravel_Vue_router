import { ref } from 'vue'
import axios from "axios";
import  useRouter  from '../router/index';

export default function useUser() {
    const router = useRouter;
    const errors = ref('')


    const getUser = async (param) => {
        let response = await axios.get('/api/users/list' , { params: param })
         const result = response.data.data;
        console.log("RESULT" , result);
        return result
    }
    const getUserWithPaginate = async (param) => {
        let response = await axios.get('/api/users/listPagination' , { params: param })
        return response
    }
    return {
        errors,
        getUser,
        getUserWithPaginate
    }
}
