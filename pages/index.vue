<template>
  <div>
    <no-ssr>
      <DiscordProfile id="423925286350880779" />
    </no-ssr>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async created() {
    const ref = this.$fire.firestore.collection("users")
  }
})
</script>
