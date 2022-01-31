<template>
  <div>
    <section>
      <div class="profile">
        <div class="pro-header">
          <div class="pro-avatar">
            <img
              :src="user.avatarURL || 'https://cdn.discordapp.com/embed/avatars/0.png'"
              alt="avatar-username"
            />
            <span class="pro-status">
              <i class="fas fa-circle red"></i>
            </span>
          </div>
          <div class="pro-username">
            <div v-if="user.display_name">
              <span class="text-username">{{ user.display_name || "Unknown error!" }}</span>
            </div>
            <div v-else>
              <span class="text-username">{{ user.username || "Unknown error!" }}</span><span class="text-discrim">{{ user.tag || "#0000" }}</span>
            </div>
          </div>
        </div>
        <div class="pro-body">
          <div class="pro-content">
            <div class="title-body">ROLES</div>

            <div class="roles-body">
              <!-- roles list -->
              <DiscordProfileRole v-for="(item, index) in roles" :key="index" :id="item" />
              <!--
              <div class="rol red">
                <i class="fas fa-circle"></i>
                <span>Mod</span>
              </div>
              <div class="rol blue">
                <i class="fas fa-circle"></i>
                <span>Member</span>
              </div>
              <div class="rol yellow">
                <i class="fas fa-circle"></i>
                <span>Dev</span>
              </div>
              -->
              <!--  -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    id: String,
  },
  data() {
    return {
      loading: true,
      roles: [],
      user: {
        avatarURL: null,
        display_name: null,
        backgroundImage: false,
        backgroundColor: "#FFF",
        tag: "#0000",
        username: "Loading...",
      },
    };
  },
  async created() {
    console.log("call fetch");
    this.fetchUser(this.id);
  },
  methods: {
    async fetchUser(id: string) {
      const ref = this.$fire.firestore.collection("users").doc(id);
      const doc = await ref.get();
      this.user.avatarURL = doc.data()?.user.avatar
        ? doc.data()?.user.avatar
        : null;
      this.user.username = doc.data()?.user.username;
      this.user.tag = doc.data()?.user.tag;
      this.user.display_name = doc.data()?.display_name;
      this.roles = doc.data()?.roles;
      console.log(doc.data());
    },
  },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

:root {
  --dcRoleArtist: #fff700;
  --dcRoleCoder: #ff7a00;
  --dcRoleDev: #0060ff;
  --dcRoleMultiEx: #276ee3;
  --dcRoleStarwars: #f6c100;
  --dcRoleFactorya: #adbed3;
  --dcRoleJASG: #7100bc;
}

.profile {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #202225;
  width: 250px;
  color: white;
  border-radius: 5px;
  -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(32, 34, 37, 0.6);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(32, 34, 37, 0.6);
}

.profile:hover {
  //transform: translateY(-10px);
}

.profile .pro-header {
  padding: 20px;
  flex: 1 1 auto;
  flex-direction: column;
}

/* ----- */
/* Header Profile */
.pro-header {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Avatar */
.pro-avatar {
  display: inline-block;
  position: relative;
}

.pro-avatar img {
  border-radius: 50%;
  width: 100px;
}
.pro-status {
  transform: translate(50%, 50%);
  position: absolute;
  bottom: 14.64%;
  right: 14.64%;
  background-color: #202225;
  border-radius: 50%;
  padding: 3px;
}
.pro-status i {
  font-size: 20px;
}

/* Username */
.pro-username {
  margin-top: 15px;
}
.pro-username .text-username {
  font-weight: 900;
}
.pro-username .text-discrim {
  color: darkgrey;
  font-weight: 400;
}

/* ------ */
/* Body Profile */

.pro-body {
  background-color: #2f3136;
  padding: 10px;
  min-height: 156px;
}
.pro-body .title-body {
  font-weight: 700;
  color: darkgrey;
  font-size: 13px;
}

.pro-body .roles-body {
  margin-top: 15px;
}
.roles-body {
  flex-wrap: wrap;
  display: flex;
}
.roles-body .rol {
  border: 1px solid;
  border-radius: 11px;
  display: flex;
  align-items: center;
  margin: 0 4px 4px 0;
  padding: 4px;
  box-sizing: border-box;
  height: 22px;
  font-size: 12px;
  font-weight: 500;
}

.rol span {
  color: white;
  margin-left: 5px;
  margin-right: 5px;
}

/* ----- */
/* Footer Profile */
.pro-footer {
  background-color: #2f3136;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.content-footer .title-footer {
  font-weight: 700;
  color: darkgray;
  font-size: 13px;
}
.content-footer .subtitle-footer textarea {
  font-size: 11px;
  margin-top: 8px;
  color: darkgrey;
  width: 90%;
  padding: 10px;
  background-color: #2f3136;
  border: none;
  resize: none;
  overflow: auto;
}
.content-footer .subtitle-footer textarea:focus {
  background: #202225;
  outline: none;
  border-radius: 3px;
}
.content-footer .form-footer {
  margin-top: 20px;
}
.form-footer input {
  border: 2px solid #323232;
  border-radius: 3px;
  width: 90%;
  padding: 10px;
  background-color: #202225;
  color: darkgray;
}

.form-footer input:focus {
  border: 2px solid #7289da;
  outline: none;
  border-radius: 3px;
}
.content-footer .text-footer {
  font-size: 11px;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 20px;
  color: darkgrey;
}

/* colors */
.red {
  color: red;
}
.blue {
  color: blue;
}
.green {
  color: green;
}
.yellow {
  color: yellow;
}

.usr-status-online {
  color: #43b581;
}

.usr-status-afk {
  color: #faa61a;
}

.usr-status-dnd {
  color: #f04747;
}

.usr-status-invisible {
  color: #747f8d;
}
</style>