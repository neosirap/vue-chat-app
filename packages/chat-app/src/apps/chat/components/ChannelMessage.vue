<template>
  <div class="d-flex flex-grow-1" :class="{ 'flex-row-reverse': isOwnMessage}">
    <div v-if="!isOwnMessage" class="font-weight-bold" style="margin-top:8px">
      <span>{{ message.user.name }}</span><span style="margin-left:7px">></span>
    </div>
    <div class="mx-1">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-card
            class="pa-1"
            :class="{ 'primary darken-1': isOwnMessage}"
            :dark="isOwnMessage"
            v-bind="attrs"
            v-on="on"
          >
            <div class="font-weight-bold">{{ message.text }}</div>
          </v-card>
        </template>
        <span>{{ message.timestamp | formatDate('lll') }}</span>
      </v-tooltip>
    </div>
    <v-avatar size="40"/> <!-- If this line is not included, ../pages/ChannelPage.vue's method scrollToBottom doesn't work -->
  </div>
</template>

<script>
/*
|---------------------------------------------------------------------
| Channel Message Component
|---------------------------------------------------------------------
|
| Display messages in channel with user information and timestamp
|
*/

export default {
  components: {
  },
  props: {
    // Current logged user
    user: {
      type: Object,
      default: () => {}
    },
    // Message to display
    message: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    // Check if it's a message from the logged user
    isOwnMessage() {
      return this.user.id === this.message.user.id
    }
  }
}
</script>
