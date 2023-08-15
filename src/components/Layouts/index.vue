<template>
  <component :is="componentLoader">
    <slot />
  </component>
</template>


<script>
  export default {
    name: 'Layout',
    props: {
      name: {
        type: String,
        default: "default"
      }
    },
    computed: {
      componentLoader () { 
        return () => import(`@/components/Layouts/${this.name}.vue`);
      }
    },
    // created() {
    //   // Check if the layout component
    //   // has already been registered.

    //   if (!Vue.options.components[this.name]) {

    //     Vue.component(
    //       this.name,
    //       () => import(`@/components/Layouts/default.vue`),
    //     );
    //   }

    //   this.$parent.$emit('update:layout', this.name);
    // },
    // render() {
    //   return this.$slots.default[0];
    // },
  };
</script>