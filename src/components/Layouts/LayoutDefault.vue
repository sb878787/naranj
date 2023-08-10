<template>
    <div>
        <nav>
            <TheHeader />
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
    import TheHeader from "@/components/Headers/TheHeader.vue";
    import TheFooter from "@/components/Footers/TheFooter.vue";

    export default {
        component: {
            TheHeader,
            TheFooter
        }
    }
</script>