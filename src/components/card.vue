<template>
  <transition name="slide-fade">
    <div class="card" @click="toDetails">
      <div class="card-content">
        <div class="item-content">
          <p class="item-media">
            <img width="44" height="44" :src="item.author.avatar_url" alt="">
          </p>
          <div class="item-inner">
            <h3>{{item.title}}</h3>
            <p>
              <span>
                回复{{item.reply_count}}/阅读{{item.visit_count}}
              </span>
              <span>
                作者:{{item.author.loginname}}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        toDetails() {
            if (this.list !== 'YES') return
            this.$router.push({ name: 'details', params: { id: this.item.id } })
        }
    },
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
        .item-inner {
            text-align: left;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            h3 {
                width: 12rem;
                word-wrap: break-word;
            }
        }
    }
}
</style>


