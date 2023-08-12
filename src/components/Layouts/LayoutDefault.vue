<template>
    <div>
        <nav>
            <TheHeader />
            <TheResponsiveHeader />
        </nav>

        <main>
            <slot />
        </main>
        
        <footer>
            <TheFooter />
        </footer>
    </div>
</template>

<script>
    import TheFooter from "@/components/Footers/TheFooter.vue";
    import TheHeader from "@/components/Headers/TheHeader.vue";
    import TheResponsiveHeader from "@/components/Headers/TheResponsiveHeader.vue";

    export default {
        components: {
            TheHeader,
            TheFooter,
            TheResponsiveHeader,
        }
    }
</script>