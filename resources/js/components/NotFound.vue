<template>
    <div class="row">
        <div class="col-12 mt-4">
            <div class="alert alert-danger" role="alert">
                <h1 style="color:white ; text-align: center"><b>404 not found</b></h1>
            </div>
        </div>
    </div>
</template>
<script>
    import  useRouter  from '../router/index.js';
    export default {
        name: 'notFound',
        methods: {
          checkPage : ()=>{
              const router = useRouter;
              console.log(1);
              // console.log("router.params.id" , router.params.any);
          }

        },
        beforeMount() {
            this.checkPage();
        }
    }
</script>
