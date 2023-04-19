<template>
  <div class="h_header">
    <div class="h_top" v-if="!hideTop">
      <div class="h_top_body">
        <ul class="top_list clearfix" v-if="userInfo">
          <li v-if="isTeacher">
            <nuxt-link :to="{ name: 'account-teacher' }"
              >Instructor Center</nuxt-link
            >
          </li>
          <li class="s_left">
            <nuxt-link :to="{ name: 'account-myprograms' }"
              >My Programs</nuxt-link
            >
          </li>
          <li class="s_left">
            <nuxt-link :to="{ name: 'account' }">Account</nuxt-link>
          </li>
          <li class="s_left">
            <nuxt-link :to="{ name: 'account-accomplishments' }"
              >Accomplishments</nuxt-link
            >
          </li>
          <li><a href="javascript:" @click="signOut">Exit</a></li>
        </ul>
        <ul class="top_list clearfix" v-else>
          <li class="s_left">
            <a href="javascript:" @click="login">Log In</a>
          </li>
          <li><a href="javascript:" @click="register">Sign up</a></li>
        </ul>
      </div>
    </div>
    <div class="h_nav">
      <div class="h_logo">
        <!--<img src="require('./assets/image/logo1.png')">-->
        <!--<img v-bind:src="require('./assets/image/logo1.png')" />-->
        <a href="/"
          ><img class="logo" src="~/assets/image/Logo2.png" alt=""
        /></a>
      </div>
      <!--这里是Home, Course, Program的Navigation Bar-->
      <ul class="h_nav_ul clearfix" v-if="!hideTop && navList">
        <li v-for="(item, index) in navList" :key="index">
          <nuxt-link
            :class="{ active: isNow === item.navUrl }"
            :to="item.navUrl"
            :target="item.target"
            >{{ item.navTitle }}</nuxt-link
          >
        </li>
      </ul>
      <nuxt-link
        v-if="hideTop"
        :to="{ name: 'index' }"
        class="go_index font_14 c_blue"
        >Back to Home</nuxt-link
      >
    </div>
  </div>
</template>
<script>
import { serviceInfo, getNav } from "~/api/main.js";
import bq from "bq-static";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  props: {
    active: {
      type: String,
    },
    hideTop: {
      type: Boolean,
    },
    hideSearch: {
      type: Boolean,
    },
  },
  data() {
    return {
      webInfo: this.$store.state.webInfo,
      mainUrl: this.$store.state.clientData.mainUrl,
      userInfo: "",
      name: "",
      isTeacher: false,
      navList: this.$store.state.navList.list,
      isNow: "",
    };
  },
  methods: {
    signOut() {
      this.$store.commit("SIGN_OUT");
      this.userInfo = "";
      if (this.$route.path.includes("account")) {
        this.$router.push({ name: "login" });
      } else {
        window.location.reload();
      }
    },
    login() {
      this.$store.commit("SET_TEMPORARYURL");
      this.$router.push({ name: "login" });
    },
    register() {
      this.$router.push({ name: "login", query: { tab: 2 } });
    },
  },
  mounted() {
    bq();
    this.isNow = this.$route.path;
    this.userInfo = this.$store.state.userInfo;
    if (this.$store.state.tokenInfo && this.userInfo) {
      this.name = this.userInfo.mobile;
      if (this.userInfo.userType === 2 || this.userInfo.userType === 4) {
        this.isTeacher = true;
      }
    }
  },
};
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.h_header {
  background: #fff;
  a {
    text-decoration: none;
    color: black;
  }
}
.h_top {
  background: rgb(7, 95, 237);
  .h_top_body {
    width: 1200px;
    min-height: 30px;
    margin: 0px auto;
  }
}
.top_list {
  float: right;
  li {
    float: left;
    color: #ccc;
    font-size: 12px;
    margin-top: 9px;
    padding: 0px 10px 0px 0px;
    position: relative;
    img {
      width: 14px;
      height: 13px;
      position: absolute;
      left: -20px;
    }
    .vip_icon {
      position: relative;
      left: 0;
      top: 1px;
      cursor: pointer;
    }
    a {
      color: #ccc;
      &:hover {
        text-decoration: none;
        color: #fff;
      }
      &.c_gold {
        color: #ca9e70;
      }
    }
    &.s_left {
      border-left: 1px solid #ccc;
      padding-left: 10px;
    }
  }
}
.h_nav {
  width: 1200px;
  margin: 0 auto;
  height: 110px;
  position: relative;
  .go_index {
    position: absolute;
    right: 10px;
    bottom: 20px;
  }
}
.h_logo {
  display: inline-block;
  position: absolute;
  top: 25px;
  // left: 20px;
  img {
    height: 52px;
  }
}
.h_nav_ul {
  display: inline-block;
  margin-left: 280px;
  li {
    float: left;
    height: 110px;
    line-height: 110px;
    font-size: 16px;
    padding: 0 15px;
    .active {
      color: red;
    }
    a:hover {
      color: red;
      text-decoration: none;
    }
  }
}
</style>
