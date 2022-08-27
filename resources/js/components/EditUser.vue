<template>
<div>
    Edit {{id}} {{ $route.params.id }}
    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k" class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
            <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
            </p>
        </div>
    </div>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <form class="space-y-6" v-on:submit.prevent="saveCompany">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="dataRecord.name">
                </div>
            </div>

            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <div class="mt-1">
                    <input type="text" name="email" id="email"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="dataRecord.email">
                </div>
            </div>

<!--            <div>-->
<!--                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>-->
<!--                <div class="mt-1">-->
<!--                    <input type="text" name="address" id="address"-->
<!--                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"-->
<!--                           v-model="company.address">-->
<!--                </div>-->
<!--            </div>-->

<!--            <div>-->
<!--                <label for="website" class="block text-sm font-medium text-gray-700">Website</label>-->
<!--                <div class="mt-1">-->
<!--                    <input type="text" name="website" id="website"-->
<!--                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"-->
<!--                           v-model="company.website">-->
<!--                </div>-->
<!--            </div>-->
        </div>

        <button type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Save
        </button>
    </form>
</div>
</template>

<script>
    import useUser from "../composables/users.js";

    export default {
        name: 'editUser',
        data(){
            return {
                dataRecord: Array,
                errors: Array
            }
        },
        props: {
            id: String
        },
        methods : {

           async getDataById(id){
               const { errors, getUser, getUserWithPaginate , getdataRecord} = useUser();
               const result = await getdataRecord({"id" : id })
               console.log("result" , result);
               this.dataRecord = result.data.data
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
