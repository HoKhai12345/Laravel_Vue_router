// User.vue
<template>
    <div>
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12">
                <strong>
                    <router-link :to="{ name: 'dashboard'}">
                        Home
                    </router-link>
                </strong>
                <strong>    / <a>Users</a> </strong>
                </div>
                <div class="col-12">
                    <div class="card my-4">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 class="text-white text-capitaclize ps-3">Danh sách User</h6>
                            </div>
                        </div>
                        <div class="card-body px-0 pb-2">
                            <div class="row">
                                <div class="col-12">
                                    <form class="ml-2" action="javascript:void(0)" method="get">
                                        <p><b>Text search: {{ textSearch }}</b></p>
                                        <label>name : </label>
                                        <input name="username" v-model="textSearch" id="username" @change="(e) => onChangeUser(e, 3 , 0 , textSearch)"
                                               placeholder="user name"/>
                                        <button type="submit" :disabled="processing" class="btn btn-primary btn-block">
                                            {{ processing ? "Please wait" : "Submit" }}
                                        </button>
                                    </form>
                                </div>
                                <div class="col-12">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center mb-0">
                                            <thead>
                                            <tr>
                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Name
                                                </th>
                                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Email
                                                </th>
                                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    CreatedAt
                                                </th>
                                                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    UpdatedAt
                                                </th>
                                                <th class="text-secondary opacity-7"></th>
                                            </tr>
                                            </thead>
                                            <tbody v-for="item in listData">
                                            <tr>
                                                <td>
                                                    <div class="d-flex px-2 py-1">
                                                        <div>
                                                            <!--                                                    <img src="../assets/img/team-4.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user6">-->
                                                        </div>
                                                        <div class="d-flex flex-column justify-content-center">
                                                            <h6 class="mb-0 text-sm">{{item.name}}</h6>
                                                            <p class="text-xs text-secondary mb-0">
                                                                {{item.email}}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p class="text-xs font-weight-bold mb-0">{{item.email}}</p>
                                                    <!--                                                    <p class="text-xs text-secondary mb-0">Developer</p>-->
                                                </td>
                                                <td class="align-middle text-center text-sm">
                                                    <span class="badge badge-sm bg-gradient-secondary">{{item.created_at}}</span>
                                                </td>
                                                <td class="align-middle text-center">
                                                    <span
                                                        class="text-secondary text-xs font-weight-bold">{{item.updated_at}}</span>
                                                </td>
                                                <td class="align-middle">
<!--                                                    <a href="javascript:;"-->
<!--                                                       class="text-secondary font-weight-bold text-xs"-->
<!--                                                       data-toggle="tooltip" data-original-title="Edit user">-->
<!--                                                        Edit-->
<!--                                                    </a>-->
                                                    <div>
                                                        <b-button v-b-modal="modalId(item.id)" @click="getDataById(item.id)">Edit</b-button>

                                                        <b-modal :id="'modal' + item.id" @ok="onSubmit" title="BootstrapVue">
                                                            <div>
                                                                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                                                    <b-form-group
                                                                        id="input-group-1"
                                                                        label="Email address:"
                                                                        label-for="input-1"
                                                                        description="We'll never share your email with anyone else."
                                                                    >
                                                                        <b-form-input
                                                                            id="input-1"
                                                                            v-model="dataRecord.email?dataRecord.email:form.email"
                                                                            type="email"
                                                                            required
                                                                        ></b-form-input>
                                                                    </b-form-group>

                                                                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                                                        <b-form-input
                                                                            id="input-2"
                                                                            v-model="dataRecord.name?dataRecord.name:form.name"
                                                                            placeholder="Enter name"
                                                                            type="name"
                                                                            required
                                                                        ></b-form-input>
                                                                    </b-form-group>
                                                                    <b-form-group id="input-group-7" label="Id:" label-for="input-7">
                                                                        <b-form-input
                                                                            id="input-7"
                                                                            disabled
                                                                            v-model="dataRecord.id"
                                                                            placeholder="Enter id"
                                                                            type="id"
                                                                            required
                                                                        ></b-form-input>
                                                                    </b-form-group>
<!--                                                                    <b-form-group id="input-group-3" label="Food:" label-for="input-3">-->
<!--                                                                        <b-form-select-->
<!--                                                                            id="input-3"-->
<!--                                                                            v-model="form.food"-->
<!--                                                                            :options="foods"-->
<!--                                                                            required-->
<!--                                                                        ></b-form-select>-->
<!--                                                                    </b-form-group>-->

<!--                                                                    <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">-->
<!--                                                                        <b-form-checkbox-group-->
<!--                                                                            v-model="form.checked"-->
<!--                                                                            id="checkboxes-4"-->
<!--                                                                            :aria-describedby="ariaDescribedby"-->
<!--                                                                        >-->
<!--                                                                            <b-form-checkbox value="me">Check me out</b-form-checkbox>-->
<!--                                                                            <b-form-checkbox value="that">Check that out</b-form-checkbox>-->
<!--                                                                        </b-form-checkbox-group>-->
<!--                                                                    </b-form-group>-->

                                                                    <b-button type="submit" variant="primary">Submit</b-button>
                                                                    <b-button type="reset" variant="danger">Reset</b-button>
                                                                </b-form>
                                                                <b-card class="mt-3" header="Form Data Result">
                                                                    <pre class="m-0">{{ form }}</pre>
                                                                </b-card>
                                                            </div>

                                                        </b-modal>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination">
                                                <li class="page-item" v-if="pagination.current_page > 1" >
                                                    <a class="page-link" href="#" aria-label="Previous"
                                                       @click.prevent="changePage(pagination.current_page - 1 , 3 , textSearch)">
                                                        <<
                                                    </a>
                                                </li>
                                                <li class="page-item" v-for="page in pagesNumber"  v-bind:class="[ page == isActived ? 'active' : '']">
                                                    <a  :style="[page == isActived ? {'color': 'white'} : {'color': 'black'}]"  class="page-link" href="#" @click.prevent="changePage(page , 3 , textSearch)">{{ page }}</a>
                                                </li>
                                                <li class="page-item" v-if="pagination.current_page < pagination.last_page">
                                                    <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(pagination.current_page + 1 , 3 , textSearch)">
                                                        <span aria-hidden="true">»</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <!-- Pagination -->
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer py-4  ">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-lg-between">
                        <div class="col-lg-6 mb-lg-0 mb-4">
                            <div class="copyright text-center text-sm text-muted text-lg-start">
                                @2022
                                <!--                                © <script>-->
                                <!--                                document.write(new Date().getFullYear())-->
                                <!--                            </script>,-->
                                made with <i class="fa fa-heart"></i> by
                                <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank">Creative
                                    Tim</a>
                                for a better web.
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Creative
                                        Tim</a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted"
                                       target="_blank">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com/blog" class="nav-link text-muted"
                                       target="_blank">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted"
                                       target="_blank">License</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>


    import {reactive, onMounted} from "vue";
    import axios from "axios";
    import useUser from "../composables/users";
    import TableComponent from "../components/childComponent/Table";
    import Pagination from "../components/Pagination";
    import  useRouter  from '../router/index';
    import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
    export default {
        name: 'User',
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    id:'',
                    food: null,
                    checked: []
                },
                dataRecord: Object,
                foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true,
                processing: false,
                textSearch: "",
                listData : [],
                items: [],
                pagination: {
                    total: 0,
                    per_page: 0,
                    from: 1,
                    to: 0,
                    current_page: 1
                },
                offset: 4,
                formErrors:{},
                formErrorsUpdate:{},
                newItem : {'title':'','description':''},
                fillItem : {'title':'','description':'','id':''}
            }
        },
        ready : function(){
            this.getVueItems(this.pagination.current_page);
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                console.log("v",event.preventDefault());
                const { errors , updateUser} = useUser();
                updateUser();
                alert(JSON.stringify(this.form))
            },
            onReset(event) {
                event.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            },
            modalId(i) {
                return 'modal' + i;
            },
            handleRedirect: function(e){
                const router = useRouter;
            },
            async getDataById(id){
                const { errors, getUser, getUserWithPaginate , getdataRecord , updateUser} = useUser();
                const result = await getdataRecord({"id" : id })
                console.log("result" , result);
                this.dataRecord = result.data.data
            },
            getVueItems: function(page , limit ,textSearch){
                axios.get('/api/users/listPagination?page='+page+'&limit='+limit+'&username='+textSearch).then((response) => {
                    console.log("response" , response.data.data.data);
                    this.listData =  response.data.data.data;
                    this.items = response.data.data.data;
                    this.pagination = response.data.pagination;
                });
            },
            changePage: function (page , limit , username) {
                this.pagination.current_page = page;
                this.getVueItems(page , limit , username);
            },
            async onChangeUser(e, limit) {
                const {errors, getUser , getUserWithPaginate} = await useUser();
                const response = await getUserWithPaginate({"page":1 , "limit": limit , "username": e.target.value});
                    this.listData = response.data.data.data;
                    this.items = response.data.data.data;
                    this.pagination = response.data.pagination;
                    this.processing = true
                setTimeout(()=>{this.processing = false;
                } , 1000)
                return {
                    errors,
                    response
                }
            }
        },
        beforeMount(){
            this.getVueItems(this.pagination.current_page , 3 , this.textSearch);
            },
        components: {
            TableComponent,
            Pagination
        },
        computed:{
            publishedBooksMessage() {
                // `this` points to the component instance
                return this.textSearch != "" ? 'Yes' : 'No'
            },
            isActived: function () {
                return this.pagination.current_page;
            },
            pagesNumber: function () {
                if (!this.pagination.to) {
                    return [];
                }
                var from = this.pagination.current_page - this.offset;
                if (from < 1) {
                    from = 1;
                }
                var to = from + (this.offset * 2);
                if (to >= this.pagination.last_page) {
                    to = this.pagination.last_page;
                }
                var pagesArray = [];
                while (from <= to) {
                    pagesArray.push(from);
                    from++;
                }
                return pagesArray;
            }
        }

    }
</script>
