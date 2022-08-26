<template>
<h1>
    Edit {{id}} {{ $route.params.id }}
</h1>
</template>

<script>
    import useUser from "../composables/users.js";

    export default {
        name: 'editUser',
        props: {
            id: String
        },
        methods : {

           async getDataById(id){
               const { errors, getUser, getUserWithPaginate } = useUser();

              const result = await getUserWithPaginate({"id" : id })
               console.log("this.$route.params.id" , result)
           }
        },
        beforeMount(){
            console.log("props.id",this.$route.params.id);
            this.getDataById(this.$route.params.id);
        }
        // setup(props) {
        //     const { errors, getUser, getUserWithPaginate } = useUser()
        //
        //     const saveCompany = async () => {
        //         await updateCompany(props.id)
        //     }
        //
        //     return {
        //         errors,
        //         company,
        //         saveCompany
        //     }
        // }
    }
</script>
