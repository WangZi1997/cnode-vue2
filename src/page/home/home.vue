<template>
    <div  
        v-infinite-scroll="getTopics"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="40">
        <card v-for="item in data" :key="item.id" :item="item" :list="'YES'"></card>

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
            loading: true
        }
    },
    methods: {
        getTopics() {
            this.loading = true
            topics({
                limit: this.limit,
                page: this.page
            }).then(({ data: { data, success } }) => {
                if (success) {
                    this.data = [...this.data, ...data]
                    this.page += 1
                    if (data.length != 0) this.loading = false
                }
            })
        }
    },
    components: {
        card
    },
    computed: {},
    created() {
        this.getTopics()
    }
}
</script>

<style lang="scss" scoped>

</style>


