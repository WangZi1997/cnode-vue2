<template>
  <div >
    <header-top></header-top>

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <mt-spinner v-if="loading" class="loading" type="triple-bounce" color="#26a2ff" :size="60"></mt-spinner>

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


.loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
