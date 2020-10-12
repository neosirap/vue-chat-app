<template>
  <div class="d-flex flex-grow-1 flex-row mt-2">
    <v-navigation-drawer
      :app="$vuetify.breakpoint.mdAndDown"
      :permanent="$vuetify.breakpoint.lgAndUp"
      floating
      :right="$vuetify.rtl"
      class="elevation-1 rounded flex-shrink-0"
      :class="[$vuetify.rtl ? 'ml-3' : 'mr-3']"
      width="240"
    >
      <div class="px-2 py-1">
        <div class="title font-weight-bold primary--text">{{ chatAppName }}</div>
      </div>

      <v-list dense>
        <v-subheader class="ml-1 overline">{{ $tc('chat.channel', 2) }}</v-subheader>

        <!-- channels list -->
        <v-list-item v-for="channelItem in channels" :key="channelItem" :to="`/apps/chat/channel/${channelItem}`" exact>
          <v-list-item-content>
            <v-list-item-title># {{ channelItem }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- channel view -->
    <v-card class="flex-grow-1">
      <router-view :key="$route.fullPath" :username="username"></router-view>
    </v-card>

    <!-- log in dialog -->
    <v-dialog v-model="showLogInDialog" persistent max-width="400">
      <v-card>
        <v-card-title class="title">Log in with a username</v-card-title>
        <div class="pa-3">
          <v-text-field
            ref="channel"
            v-model="inputName"
            label="Username"
            maxlength="30"
            counter="30"
            autofocus
            @keyup.enter="setUsername()"
          ></v-text-field>
        </div>
        <v-card-actions class="pa-2">
          <v-spacer></v-spacer>
          <v-btn :loading="isLoadingAdd" color="success" @click="setUsername()">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
/*
|---------------------------------------------------------------------
| Chat App Main Layout Component
|---------------------------------------------------------------------
|
| Navigation drawer with channels for the chat application
|
*/
import { mapState } from 'vuex'

export default {
  data() {
    return {
      // create channel variables
      showLogInDialog: true,
      isLoadingAdd: false,
      inputName: '',
      username: null
    }
  },
  computed: mapState('app', ['channels', 'chatAppName']),
  methods: {
    // Set username
    setUsername() {
      this.isLoadingAdd = true
      this.username = this.inputName
      this.showLogInDialog = false
      this.isLoadingAdd = false
    }
  }
}
</script>
