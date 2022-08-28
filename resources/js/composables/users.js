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
    const getUserWithPaginate = async (params) => {
        let response = await axios.get('/api/users/listPagination' , { params: params })
        return response
    }
    const getdataRecord = async (params) => {
        let response = await axios.get('/api/users/dataRecord' , { params: params })
        return response
    }
    const updateUser = async (id , param) => {
        errors.value = ''
        try {
            await axios.put('/users/edit/' + id, param)
            // await router.push({name: 'companies.index'})
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
        updateUser,
        getdataRecord
    }
}
