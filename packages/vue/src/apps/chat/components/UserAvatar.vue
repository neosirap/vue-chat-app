<template>
  <v-avatar size="40" class="">
  </v-avatar>
</template>

<script>
/*
|---------------------------------------------------------------------
| User Avatar Component
|---------------------------------------------------------------------
|
| User avatar for chat messages, display avatar if available or name
| initials
|
*/
export default {
  props: {
    // User to display
    user: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    // Calculate user name initials
    initials() {
      if (!this.user) return ''

      const { name } = this.user

      if (!name) return ''

      const initials = name.match(/\b\w/g) || []

      return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
    }
  }
}
</script>
