<template>
	<div id="app">
    <h3>Example Vue Server Renderer App</h3>
    <p class="systemStatus">system state => {{renderedText}}</p>
    <ul>
      <li><router-link to="/">Clap</router-link></li>
      <li><router-link to="/links">Links</router-link></li>
    </ul>
    <div class="viewWrap">
        <router-view></router-view>
    </div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'app',
    computed: mapState({
        renderedText: function(state){
            return state.renderedText;
        }
    })
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .viewWrap {
        padding-top: 20px;
    }
    ul {
        list-style-type: none;
    }
    .systemStatus {
        font-size: 18px;
    }
</style>
