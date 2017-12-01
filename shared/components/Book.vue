<template>
    <div>
        <h1>Book Page</h1>
        <p>{{ renderedName }}</p>
    </div>
</template>

<script>
export default {
    preFetchData({ store, route }){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                store.renderedName = 'preFetching is fired in Book Vue!';
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