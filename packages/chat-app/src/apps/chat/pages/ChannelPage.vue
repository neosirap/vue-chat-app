<template>
  <div>
    <!-- channel toolbar -->
    <v-app-bar flat height="64">
      <v-app-bar-nav-icon class="hidden-lg-and-up" @click="$emit('toggle-menu')"></v-app-bar-nav-icon>
      <div class="title font-weight-bold"># {{ channelName }}</div>

      <v-spacer></v-spacer>

      <div v-if="username !== null" class="font-weight-bold">You are logged in as {{ username }}.</div>
      
    </v-app-bar>

    <v-divider></v-divider>

    <!-- channel messages -->
    <div class="channel-page">
      <div id="messages" ref="messages" class="messages mx-2">
        <transition-group name="list">
          <channel-message
            v-for="message in messages[channelName]"
            :key="message.id"
            :message="message"
            class="my-4 d-flex"
          />
        </transition-group>
        <v-progress-circular
          v-show="loadingMessages"
          class="my-4"
          indeterminate
          size="64"
        ></v-progress-circular>
      </div>

      <div class="input-box pa-2">
        <input-box :channel="channelName" @send-message="sendMessage" />
      </div>
    </div>
    
  </div>
</template>

<script>
import InputBox from '../components/InputBox'
import ChannelMessage from '../components/ChannelMessage'
import db from '../../../firebase'

import { mapState } from 'vuex'

/*
|---------------------------------------------------------------------
| Chat Channel Page Component
|---------------------------------------------------------------------
|
| Layout to display the channel messages and users online
|
*/
export default {
  components: {
    InputBox,
    ChannelMessage
  },
  props: {
    // Current logged user
    username: {
      type: String,
      default: () => ({})
    }
  },
  data() {
    return {
      // channel information and messages
      channelName: '',
      loadingMessages: true
    }
  },
  computed: mapState('app', ['messages']),
  created() {
    this.startChannel()
    this.getMessages()
  },
  methods: {
    startChannel() {
      this.loadingMessages = true
      this.channelName = this.$route.params.channel_id

      if (!(this.channelName in this.messages)) {
        this.$router.replace({ path: '/error' })
      }
    },
    getMessages() {
      db.ref('messages/' + this.channelName).on('value', (snapshot) => {
        this.loadingMessages = false
        this.$store.commit('app/getMessages', { channel: this.channelName, messages: snapshot.val() })
        this.scrollToBottom()
      })
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.messages.scrollTop = (this.$refs.messages.scrollHeight)
      })
    },
    // Send message to channel
    sendMessage(message) {
      const newMessageKey = db.ref().child('messages/' + this.channelName).push().key
      const update = {}

      update[newMessageKey] = {
        username: this.username,
        text: message,
        timestamp: (new Date()).getTime(),
        id: newMessageKey
      }
      db.ref('messages/' + this.channelName).update(update)
    }
  }
}
</script>
<style lang="scss" scoped>
// List Transition Animation
.list-enter-active {
  transition: all 0.3s;
}

.list-move {
  transition: transform 0.3s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
// -- End List Transition Animation

.channel-page {
  position: absolute;
  top: 65px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: url("/images/chat/chat-bg-2.png");

  .messages {
    flex-grow: 1;
    padding-right: 9px;
    margin-bottom: 68px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    min-height: 0;
  }

  .input-box {
    position: fixed;
    bottom: 12px;
    width: 100%;
  }

  .messages {
    padding-bottom: 0px;
  }

  .input-box {
    position: absolute;
    bottom: 12px;
  }
}

.theme--dark {
  .channel-page {
    background: none;
  }
}
</style>
