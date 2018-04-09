<template>
    <div >
        <transition name="slide-fade">
            <div 
                class="leave-word" >
                <mt-field  placeholder="请输入标题" v-model="title"></mt-field>
                <mt-field 
                    v-model="content"  
                    placeholder="请输入内容" 
                    type="textarea" 
                    rows="10" >
                    </mt-field>
                <mt-button 
                    type="primary"
                    @click.native="newTopics" >
                    发布
                    </mt-button>
            </div>
        </transition>
       
  
    </div>
</template>
<script>
import { newTopics } from '@/service/'
import { Field, Button, Toast } from 'mint-ui'

export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        newTopics() {
            if (!this.title) {
                Toast({
                    message: '请填写标题',
                    position: 'middle'
                })
                return
            } else if (!this.content) {
                Toast({
                    message: '请填写内容',
                    position: 'middle'
                })
                return
            }

            newTopics({
                title: this.title,
                content: this.content
            }).then(({ data }) => {
                if(data.success){
                    this.$router.replace(`/details/${data.topic_id}`)
                }
                 Toast({
                    message: '发布成功',
                    position: 'middle'
                })
                
            })
        }
    },
    components: {
        [Field.name]: Field,
        [Button.name]: Button
    },
    computed: {},

    created() {}
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


