<template>
    <div id="#app">
        <h1>Top Page</h1>
        <p>{{ renderedName }}</p>
        <router-link to="/book">book</router-link>
    </div>
</template>

<script>
export default {
    preFetchData({ store, route }){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                store.renderedName = 'preFetching is fired in Top Vue!';
                resolve();
            }, 500);
        });
    },
    computed: {
        renderedName() {
            return this.$store.renderedName;
        }
    }
}
</script>