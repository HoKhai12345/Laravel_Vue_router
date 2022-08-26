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
    const updateUser = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/companies/' + id, company.value)
            await router.push({name: 'companies.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }
    return {
        errors,
        getUser,
        getUserWithPaginate,
        updateUser
    }
}
