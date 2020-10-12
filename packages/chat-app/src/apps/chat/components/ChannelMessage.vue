<template>
  <div class="d-flex flex-grow-1">
    <div class="font-weight-bold" style="margin-top:8px">
      <span>{{ message.username }}</span><span style="margin-left:7px">></span>
    </div>
    <div class="mx-1">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-card
            class="pa-1"
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
    // Message to display
    message: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
