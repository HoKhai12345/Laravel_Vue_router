<template>
<h1>
    EDIT
</h1>
</template>

<script>
    import useUser from "../composables/users.js";

    export default {
        name: 'editUser',
        props: {
            id: Number
        },
        methods : {

           async getDataById(id){
               const { errors, getUser, getUserWithPaginate } = useUser();

               await getUserWithPaginate({"id" : id })
           }
        },
        beforeMount(){
            console.log("props.id",this.id);
            this.getDataById(props.id);
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
