<template>
    <div>
        <ServiceResponsive />
        <ServiceDesktop />
    </div>
</template>

<script>
    import ServiceResponsive from "./ServiceResponsive.vue";
    import ServiceDesktop from "./ServiceDesktop.vue";

    export default {
        components: {
            ServiceResponsive,
            ServiceDesktop
        }
    }
</script>