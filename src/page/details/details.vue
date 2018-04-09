<template>
    <div
        v-infinite-scroll="show"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="40" >
        <!-- <card v-for="item in data" :key="item.id" :item="item"></card> -->
        <card v-if="item" :item="item" ></card>

        <transition name="slide-fade">
            <div v-if="content" class="content" v-html='content'></div>
        </transition>

        <transition name="slide-fade">
            <div
                v-if="Replies!=null"
                class="leave-word" >
                <mt-field
                    v-model="word"
                    placeholder="评论不要少于十五字"
                    type="textarea"
                    rows="4" >
                    </mt-field>
                <mt-button
                    type="primary"
                    @click.native="newReplies" >
                    提交评论
                    </mt-button>
            </div>
        </transition>

        <word
            v-if="Replies&&Show"
            v-for="item in Replies"
            :key="item.id"
            :item="item"></word>

    </div>
</template>
<script>
import { topicsDetails, replies } from '@/service/'
import { Field, Button, Toast } from 'mint-ui'
import card from '@/components/card'
import word from '@/components/word'
import '@/style/markdown.scss'
export default {
    data() {
        return {
            item: null,
            content: null,
            replies: null,
            loading: true,
            Show: false,
            word: ''
        }
    },
    methods: {
        show() {
            this.Show = true
            this.loading = true
        },
        getTopicsDetails() {
            topicsDetails({
                id: this.$route.params.id
            }).then(({ data: { data, success } }) => {
                if (success) {
                    this.item = {
                        author: data.author,
                        title: data.title,
                        reply_count: data.reply_count,
                        reply_count: data.visit_count
                    }
                    this.content = data.content
                    this.replies = data.replies
                    this.loading = false
                }
            })
        },
        newReplies() {
            if (this.word.length < 15) {
                Toast({
                    message: '字数太少了吧~',
                    position: 'middle'
                })
                return
            }
            replies({
                content: this.word,
                topic_id: this.$route.params.id
            }).then(({ data }) => {
                console.log(data)
                if (data.success) {
                    this.getTopicsDetails()
                    this.word = ''
                    Toast({
                        message: '评论成功',
                        position: 'middle'
                    })
                }
            })
        }
    },
    components: {
        card,
        word,
        [Field.name]: Field,
        [Button.name]: Button
    },
    computed: {
        Replies() {
            let replies = this.replies
            if (replies && replies.length > 20) replies.length = 20
            return replies
        }
    },

    created() {
        scrollTo(0, 0)
        this.getTopicsDetails()
    }
}
</script>

<style lang="scss" scoped>
.content {
    margin: 0.5rem;
}

.leave-word {
    background: #fff;
    box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
    margin: 0.5rem;
    border-radius: 0.1rem;
    padding-bottom: 0.7rem;
}
</style>


