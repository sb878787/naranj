<template>
    <div>
        <HomeHeader v-if="$route.name==='home'" />
        <OtherHeader v-else />
    </div>
</template>

<script>
    import HomeHeader from './HomeHeader.vue';
    import OtherHeader from './OtherHeader.vue';

    export default {
        components: {
            OtherHeader,
            HomeHeader
        },
        mounted() {
            console.log(this.$route.name);
        }
    }
</script>

<!-- computed: {
  isLogin() {
     return this.$route.name === 'Login'
  }
} -->