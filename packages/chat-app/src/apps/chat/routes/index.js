export default [{
  path: '',
  redirect: 'channel/general'
}, {
  path: 'channel/:channel_id',
  name: 'apps-chat-channel',
  component: () => import(/* webpackChunkName: "apps-chat-channel" */ '@/apps/chat/pages/ChannelPage.vue')
}]
