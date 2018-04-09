<template>
  <div id="app">
    <header-top ></header-top>
    <router-view/>
    <mt-spinner v-if="loading" class="loading" type="triple-bounce" color="#26a2ff"  :size="60"></mt-spinner>
    
    
  </div>
</template>

<script>
import headerTop from '@/components/header'
import { mapState } from 'vuex'
import { Spinner } from 'mint-ui'
export default {
    name: 'App',
    components: {
        headerTop,
        [Spinner.name]: Spinner
    },
    computed: {
        ...mapState(['loading'])
    }
}
</script>

<style lang="scss" scoped>
@import './style/common.scss';

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 40px;
    min-height: 100vh;
}
.loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


</style>
