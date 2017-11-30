<template>
    <div>
        <h1>Bookリスト</h1>
        <ul>
            <li v-for="book in booList" :key="book.id">
                {{ book.name }}
            </li>
        </ul>
        <p>{{ bookCount }}</p>
    </div>
</template>

<script>
import bookModule from 'shared/store/bookModule';

export default {
    asyncData({ store }){
        store.registerModule('book', bookModule);
        return store.dispatch('book/fetchBookList');
    },
    destroyed(){
        this.$store.unregisterModule('book');
    },
    computed: {
        bookCount(){
            return this.$store.state.book.count;
        }
    }
}
</script>