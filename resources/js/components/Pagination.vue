<template>
    <div>
        <TableComponent :list-data=items />
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" v-if="pagination2.current_page > 1" >
                    <a class="page-link" href="#" aria-label="Previous"
                       @click.prevent="changePage(pagination2.current_page - 1)">
                        <<
                    </a>
                </li>
                <li class="page-item" v-for="page in pagesNumber"  v-bind:class="[ page == isActived ? 'active' : '']">
                    <a  :style="[page == isActived ? {'color': 'white'} : {'color': 'black'}]"  class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                </li>
                <li class="page-item" v-if="pagination2.current_page < pagination.last_page">
                    <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(pagination2.current_page + 1)">
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import axios from "axios";
    import TableComponent from "../components/childComponent/Table";
    export default {
        name: 'Pagination',
        props: {
            pagesNumber: Array,
            isActive:Number,
            pagination:Object
        },
        data() {
            return {
                processing: false,
                textSearch: "",
                listData : [],
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
            getVueItems: function(page){
                axios.get('/api/users/listPagination?page='+page).then((response) => {
                    console.log("response" , response.data.data.data);
                    // this.$set('items', response.data.data.data);
                    this.items = response.data.data.data;
                    this.pagination2 = response.data.pagination;
                    console.log("this.pagination2" , this.pagination2);
                });
            },
            changePage: function (page) {
                this.pagination.current_page = page;
                this.getVueItems(page);
            },
        },
        computed:{
            isActived: function () {
                return this.pagination.current_page;
            },
        },
        components:{
            TableComponent
        },
        beforeMount(){
            this.getVueItems(this.pagination.current_page);
        },


    }
</script>
