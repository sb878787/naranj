<template>
    <div class="xl:w-[67%]">
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

        <p class="font-YekanB xl:text-3xl text-2xl">مقالات مرتبط</p>

        <div class="w-full border-r border-[#C9C9C9] xl:mt-8 mt-5">
            <ul class="space-y-4">
                <li class="font-YekanB text-[#4C4C4C] xl:text-xl text-lg xl:pr-7 pr-5 cursor-pointer hover:text-[#FF8030] border-r-4 border-transparent hover:border-[#FF8030] transition-all">چگونه ما یک برنامه برای تاکسی آنلاین تولید کردیم</li>
                <li class="font-YekanB text-[#4C4C4C] xl:text-xl text-lg xl:pr-7 pr-5 cursor-pointer hover:text-[#FF8030] border-r-4 border-transparent hover:border-[#FF8030] transition-all">چگونه ما یک برنامه برای دام تولید کنیم</li>
                <li class="font-YekanB text-[#4C4C4C] xl:text-xl text-lg xl:pr-7 pr-5 cursor-pointer hover:text-[#FF8030] border-r-4 border-transparent hover:border-[#FF8030] transition-all">چگونه ما یک برنامه برای تاکسی آنلاین تولید کردیم</li>
                <li class="font-YekanB text-[#4C4C4C] xl:text-xl text-lg xl:pr-7 pr-5 cursor-pointer hover:text-[#FF8030] border-r-4 border-transparent hover:border-[#FF8030] transition-all">چگونه ما یک برنامه برای دام تولید کنیم</li>
            </ul>
        </div>

        <EvaluateItem />

        <div class="w-full border-b border-[#BBBBBB] xl:mt-16 mt-12">
            <p class="font-YekanB text-lg border-b-4 border-[#FF8030] w-14 pb-5">0 نظرات</p>
        </div>

        <div class="flex gap-x-5 mt-6">
            <svg @click="Like = !Like" class="cursor-pointer" width="23" height="22" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5889 2.39292L17.5898 2.39382C19.6045 4.41701 19.6011 7.55415 17.5933 9.56113L17.5932 9.56126L10.0002 17.1542L2.40732 9.56126L2.40719 9.56113C0.398961 7.55375 0.396421 4.41662 2.40667 2.39783L2.40798 2.39651C2.87759 1.92295 3.43621 1.54693 4.0517 1.2901C4.66704 1.03333 5.32708 0.900757 5.99384 0.9C7.25226 0.900162 8.46473 1.37296 9.39108 2.22474L10.0002 2.7848L10.6093 2.22482C11.5358 1.37311 12.7483 0.900312 14.0068 0.9C14.6728 0.900564 15.332 1.03272 15.9467 1.28888C16.5615 1.54509 17.1196 1.92029 17.5889 2.39292Z" class="stroke-[#FF8030]" :class="Like ? 'fill-[#FF8030]' : ''" stroke-width="1.8"/>
            </svg>

            <p @click="Like = !Like" class="font-YekanB text-[#767676] cursor-pointer hover:text-[#FF8030] transition-all" :class="Like ? '!text-[#FF8030]' : ''">پیشنهاد میدم</p>
        </div>

        <ComentItem />
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import EvaluateItem from "./EvaluateItem.vue";
    import ComentItem from "./ComentItem.vue";
    import SocialResponsiv from "./SocialResponsiv.vue";
    
    export default {
        components: {
            EvaluateItem,
            ComentItem,
            SocialResponsiv
        },
        data() {
            return {
                Like: false
            }
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