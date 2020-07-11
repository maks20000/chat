<template>
  <div>
    <chat v-if="this.$store.state.auth"></chat>
    <auth v-else></auth>
  </div>
</template>

<script>
import chat from '~/components/chat.vue'
import auth from '~/components/auth.vue'
export default {
  components: {
    chat,auth
  },
}
</script>

<style>

</style>
