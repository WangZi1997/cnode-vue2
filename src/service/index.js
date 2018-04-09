import fetch from '../../config/fetch'

/**
 * fetch
 *
 * @url  路径
 * @method  方式
 * @parmes  参数
 */
let tab = 'dev'
//主题
const topics = (parmes = {}) => {
  parmes.tab = 'all' || tab
  return fetch('/topics', 'get', parmes)
}

//新建主题
const newTopics = (parmes = {}) => {
  parmes.tab = tab
  return fetch('/topics', 'post', parmes, true)
}

//主题详情
const topicsDetails = (parmes = {}) => {
  return fetch(`/topic/${parmes.id}`, 'get', parmes, true)
}

//新建评论
const replies = (parmes = {}) => {
  return fetch(`/topic/${parmes.topic_id}/replies`, 'post', parmes, true)
}

export { topics, topicsDetails, replies, newTopics }
