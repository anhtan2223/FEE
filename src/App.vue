<template >
    <Nav></Nav>
    <div class="body">
        <router-view></router-view>
    </div>
</template>
  
<script setup lang='ts'>
import Nav from './components/Navigation.vue'
</script>
  
<style>
Nav {
    display: inline-flexbox;
    position: top;
}
.body {
    background: linear-gradient(to right , #c72092 , #6c14d0);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>