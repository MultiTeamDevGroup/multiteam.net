<template>
  <div class="grid grid-cols-2 w-full">
    <nav class="navbar bg-opacity-100 w-full bg-mtWhite">
      <div class="mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <!-- Website Logo -->
            <div>
              <NuxtLink to="/" class="flex items-center py-4 px-2">
                <img src="assets/logo.svg" alt="Logo" class="h-12 mr-2" />
              </NuxtLink>
            </div>
            <!-- Primary Navbar items -->
            <div class="hidden md:flex items-center space-x-1">
              <div v-for="(item, index) in nav_items" :key="index" class="mx-8">
                <NuxtLink
                  v-if="item.active"
                  :to="item.to"
                  :class="[
                    'mx-20',
                    'py-4',
                    'px-2',
                    `text-blue-500`,
                    `border-b-4 border-blue-500`,
                    'font-semibold',
                    'navbar-item'
                  ]"
                >
                  <img :src="item.icon_path" class="h-10 navbar-item" />
                </NuxtLink>
                <NuxtLink
                  v-else
                  :to="item.to"
                  class="
                    mx-20
                    py-4
                    px-2
                    text-gray-500
                    font-semibold
                    hover:text-blue-500
                    transition
                    duration-300
                  "
                >
                  <img :src="item.icon_path" class="h-10 navbar-item" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="titlebar w-full">
      <div class="mx-auto py-4 px-8 bg-mtBlack">
        <h1 class="text-mtWhite text-center">
          {{ nav_items.find((e) => e.active == true).name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      nav_items: [
        {
          name: "About",
          icon_path: "/icons/icon_tab_about.svg",
          to: "/",
          active: true,
        },
        {
          name: "Games",
          icon_path: "/icons/icon_tab_games.svg",
          to: "/games",
          active: false,
        },
        {
          name: "Minecraft",
          icon_path: "/icons/icon_tab_minecraft.svg",
          to: "/minecraft",
          active: false,
        },
        {
          name: "Premium",
          icon_path: "/icons/icon_tab_premium.svg",
          to: "/premium",
          active: false,
        },
        {
          name: "Donate",
          icon_path: "/icons/icon_tab_donate.svg",
          to: "/donate",
          active: false,
        },
        {
          name: "Account",
          icon_path: "/icons/icon_tab_account.svg",
          to: "/account",
          active: false,
        },
      ],
    };
  },
});
</script>

<style scoped>
.navbar {
  top: 0;
  left: 0;
  border-radius: 0px 0px 10px 0px;
}
.titlebar {
  top: 0;
  right: 0;
}

.navbar-item{
  transition-duration: 0.2s;
}
.navbar-item:hover{
  cursor: pointer;
  transform: scale(1.15);
  transition-duration: 0.2s;
}
</style>