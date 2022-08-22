import { ref } from 'vue'
import axios from "axios";
import  useRouter  from '../router/index';

export default function useCompanies() {
    const router = useRouter;
    const errors = ref('')

    const getCompanies = async () => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data;
    }

    const getCompany = async (id) => {
        let response = await axios.get('/api/companies/' + id)
        company.value = response.data.data;
    }

    const sendLogin = async (data) => {
        errors.value = ''
        try {
            console.log("data",data);
            await axios.post('/api/login', data)
            await router.push({name: 'index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateCompany = async (id) => {
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

    const destroyCompany = async (id) => {
        await axios.delete('/api/companies/' + id)
    }


    return {
        errors,
        getCompanies,
        getCompany,
        sendLogin,
        updateCompany,
        destroyCompany
    }
}
