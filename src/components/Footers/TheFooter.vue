<template>
    <div>
        <HomeFooter v-if="$route.name==='home'" />
        <OtherFooter v-else />
    </div>
</template>

<script>
    import HomeFooter from './HomeFooter.vue';
    import OtherFooter from './OtherFooter.vue';

    export default {
        components: {
            OtherFooter,
            HomeFooter
        }
    }
</script>