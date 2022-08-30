<template>
    <div>
        {{count}}
    </div>
</template>
<script>
    import {mapActions , mapGetters , mapMutations} from 'vuex'
    export default {
        name:"vuex",
        computed: {
            ...mapGetters([
                'safelyStoredNumber'
            ]),
            count () {
                return this.$store.state.count
            }
        },
        methods: {
            ...mapMutations([
                // "incrementStoredNumber" mutation thành `this.incrementStoredNumber()`.
                'incrementStoredNumber',
                // "setStoredNumber" mutation thành `this.setStoredNumber(newNumber)`.
                'setStoredNumber'
            ])
        }
    }



</script>
