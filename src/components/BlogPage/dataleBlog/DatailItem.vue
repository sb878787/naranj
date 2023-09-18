<template>
    <div class="xl:w-1/2">
        <p class="font-YekanM text-[#4C4C4C] text-lg xl:leading-loose leading-relaxed">{{ blogItem.text2 }}</p>
        <p class="font-YekanM text-[#4C4C4C] text-lg xl:leading-loose xl:mt-10 mt-8">{{ blogItem.text2 }}</p>

        <div class="relative overflow-hidden w-full xl:h-[450px] h-96 xl:mt-16 mt-12 rounded-lg">
            <img :src="require(`../../../assets/${blogItem.image}.png`)" class="absolute object-cover object-center w-full xl:h-[450px] h-96 rounded-lg" alt="image">
        </div>

        <p class="font-YekanB text-xl xl:mt-16 mt-12 leading-relaxed">«بیل پالسکی» مدیر برنامه تحقیقات انسانی ناسا در این رابطه می گوید :</p>
        <p class="font-YekanM text-[#4C4C4C] text-lg xl:leading-loose xl:mt-5 mt-3">{{ blogItem.text2 }}</p>
    
        <div class="relative overflow-hidden w-full xl:h-[500px] h-96 xl:mt-14 mt-12 rounded-lg">
            <img :src="require(`../../../assets/${blogItem.image2}.png`)" class="absolute object-cover object-center w-full xl:h-[500px] h-96 rounded-lg" alt="image">
        </div>

        <p class="font-YekanB text-xl xl:mt-16 mt-12 leading-relaxed">«بیل پالسکی» مدیر برنامه تحقیقات انسانی ناسا در این رابطه می گوید :</p>
        <p class="font-YekanM text-[#4C4C4C] text-lg xl:leading-loose xl:mt-5 mt-3">{{ blogItem.text2 }}</p>
    
        <SocialResponsiv />

        <div class="w-full border-b border-[#BBBBBB] xl:my-16 my-8 mb-12"></div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import SocialResponsiv from "./SocialResponsiv.vue";
    
    export default {
        components: {
            SocialResponsiv
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'BlogId'
            ]),

            blogItem() {
                return this.BlogId(parseInt(this.$route.params.id))
            }
        }
    }
</script>