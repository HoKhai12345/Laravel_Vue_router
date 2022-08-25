<template>
<div>
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
        <tbody v-for="item in items">
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
                <a href="javascript:;"
                   class="text-secondary font-weight-bold text-xs"
                   data-toggle="tooltip" data-original-title="Edit user">
                    Edit
                </a>
            </td>
        </tr>
        </tbody>
    </table>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" v-if="pagination2.current_page > 1" >
                <a class="page-link" href="#" aria-label="Previous"
                   @click.prevent="changePage(pagination2.current_page - 1 , 3 , textSearch)">
                    <<
                </a>
            </li>
            <li class="page-item" v-for="page in pagesNumber"  v-bind:class="[ page == isActived ? 'active' : '']">
                <a  :style="[page == isActived ? {'color': 'white'} : {'color': 'black'}]"  class="page-link" href="#" @click.prevent="changePage(page , 3 , textSearch)">{{ page }}</a>
            </li>
            <li class="page-item" v-if="pagination2.current_page < pagination.last_page">
                <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(pagination2.current_page + 1 , 3 , textSearch)">
                    <span aria-hidden="true">»</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Table',
        props: {
            listData: Array,
            pagesNumber: Array,
            isActive:Number,
            pagination:Object,
            textSearch:String
        },
        data() {
            return {
                processing: false,
                items: [],
                pagination2: {
                    total: 9,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 2
                },
                offset: 4,
                formErrors:{},
                formErrorsUpdate:{},
                newItem : {'title':'','description':''},
                fillItem : {'title':'','description':'','id':''}
            }
        },
        methods: {
            getVueItems: function(page , limit , username){
                axios.get('/api/users/listPagination?page='+page+'&limit='+limit+'&username='+username).then((response) => {
                    console.log("response" , response.data.data.data);
                    // this.$set('items', response.data.data.data);
                    this.items = response.data.data.data;
                    this.pagination2 = response.data.pagination;
                    console.log("this.pagination2" , this.pagination2);
                });
            },
            changePage: function (page , limit , username) {
                this.pagination.current_page = page;
                this.getVueItems(page , limit , username);
            },
        },
        computed:{
            isActived: function () {
                return this.pagination.current_page;
            },
        },
        beforeMount(){
            this.getVueItems(this.pagination.current_page , 3);
        },

    }
</script>
