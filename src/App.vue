<template>
  <div class="router-link">
    <router-link to="login">login</router-link> |
    <router-link to="dashboard">dashboard</router-link> |
    <router-link to="notFound">notFound</router-link>
  </div>



  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style lang="less">
.router-link {
  text-align: center;
  a {
    color:#4065E5;
  }
}
</style>
