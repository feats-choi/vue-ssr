<template>
    <div>{{ book.title }}</div>
</template>

<script>
import { clientTitleMixin } from '/shared/mixin/title';

export default {
    mixins: [clientTitleMixin],
    title(){
        return this.book.title
    },
    asyncData({ store, route }){
        return store.dispatch('fetchItem', route.params.id)
    },
    computed: {
        book(){
            return this.$store.state.bookList[this.$route.params.id]
        }
    }
}
</script>