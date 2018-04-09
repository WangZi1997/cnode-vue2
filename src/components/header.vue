<template>
    
    <mt-header class="header" fixed :title="titleText">
        <mt-button v-if="this.$route.name!='home'" icon="back" slot="left" @click.native="back" ></mt-button>
        <mt-button v-if="this.$route.name!='newPage'" slot="right"  @click.native="newPage" >发帖</mt-button>
        
    </mt-header>
     
</template>

<script>
import { Header, Button } from 'mint-ui'

export default {
    data() {
        return {
            headTitle: {
                home: 'Cnode',
                details: '主题详情',
                newPage: '新建主题'
            }
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        newPage() {
            this.$router.push('/newPage')
        }
    },
    components: {
        [Header.name]: Header,
        [Button.name]: Button
    },
    computed: {
        titleText() {
            return this.headTitle[this.$route.name]
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    color: #fff;
    padding: 0 10px;
}
</style>


