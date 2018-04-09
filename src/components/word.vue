<template>
   <transition name="slide-fade">
    <div class="card">
        <div class="card-content">
            <div class="item-content">
                <p class="item-media">
                    <img width="44" height="44" :src="item.author.avatar_url" alt="">
                    <span>@{{item.author.loginname}}</span>
                </p>
                
            </div>
            <div class="item-inner" v-html="item.content"></div>
        </div>        
    </div>
  </transition>
     
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {},
    components: {},
    props: ['item', 'list'],
    computed: {
        titleText() {}
    }
}
</script>

<style lang="scss" scoped>
.card {
    background: #fff;
    box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
    margin: 0.5rem;
    position: relative;
    border-radius: 0.1rem;
    font-size: 0.7rem;
    .item-content {
        box-sizing: border-box;
        padding-left: 0.75rem;
        min-height: 2.2rem;
        display: flex;

        .item-media {
            span {
                font-size: 16px;
                padding-left: 5px;
            }
        }
    }
    .item-inner {
        text-align: left;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        padding-bottom: 0.75rem;
    }
}
</style>


