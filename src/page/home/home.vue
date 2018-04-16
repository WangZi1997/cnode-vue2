<template>
  <div>
    <div v-infinite-scroll="getTopics" infinite-scroll-disabled="scroll_disabled" infinite-scroll-distance="40">
      <card v-for="item in data" :key="item.id" :item="item" :list="'YES'"></card>

    </div>

  </div>
</template>
<script>
import { topics } from '@/service/'
import card from '@/components/card'
export default {
    data() {
        return {
            name: null,
            limit: 10,
            page: 1,
            data: [],
            scroll_disabled: true
        }
    },
    methods: {
        getTopics() {
            this.scroll_disabled = true
            topics({
                limit: this.limit,
                page: this.page
            }).then(({ data: { data, success } }) => {
                if (success) {
                    this.data = [...this.data, ...data]
                    this.page += 1
                    if (data.length != 0) this.scroll_disabled = false
                }
            })
        }
    },
    components: {
        card
    },
    computed: {},
    mounted() {
        this.getTopics()
    },
    watch: {
        $route(to, from) {
            this.scroll_disabled = to.name !== 'home'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


