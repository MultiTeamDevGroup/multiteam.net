<template>
  <div :class="['rol', roles[id].color]">
    <i class="fas fa-circle"></i>
    <span>{{ roles[id].name || id }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    id: String,
  },
  data() {
    return {
      loading: true,
      roles: {
            "393063854336245761": {
                name: "Mod",
                color: "red",
            },
            "393399274437869568": {
                name: "Member",
                color: "blue",
            },
            "917813009248845904": {
                name: "Dev",
                color: "yellow",
            },
            "393332835148234764": {
                name: "Admin",
                color: "green",
            },
            "393333107803160577": {
                name: "Owner",
                color: "purple",
            },
      },
    }
  }
})
</script>