<template>
    <layout name="default">
        <div class="overflow-hidden">
            <div class="relative overflow-hidden w-full h-screen block xl:hidden">
                <img class="absolute object-cover -z-20 w-full h-screen object-center" :src="require(`../../assets/${blogItem.ImagePostSrc}.png`)" alt="logo"/>
                <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
            </div>

            <TheSocialBlack />

            <div class="flex items-center gap-x-6 xl:px-56 px-8 xl:mt-40 mt-8" dir="rtl">
                <div class="flex items-center gap-x-6 group cursor-pointer">
                    <router-link to="/blog">
                        <p class="font-YekanM text-[#4D4D4D] text-xl group-hover:text-[#FF8030] group-hover:font-YekanB transition-all">بلاگ</p>
                    </router-link>

                    <svg width="8" height="12" class="mb-1" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.77825 7.62075L1.83192 4.49578L4.77825 1.37081C4.84855 1.29625 4.90432 1.20773 4.94237 1.1103C4.98042 1.01288 5 0.908456 5 0.803004C5 0.697552 4.98042 0.593133 4.94237 0.495708C4.90432 0.398283 4.84855 0.30976 4.77825 0.235195C4.70795 0.160629 4.62448 0.10148 4.53263 0.0611252C4.44077 0.0207705 4.34232 -7.85678e-10 4.2429 0C4.14348 7.8568e-10 4.04502 0.0207705 3.95317 0.0611252C3.86131 0.10148 3.77785 0.160629 3.70755 0.235195L0.222071 3.932C0.151676 4.00651 0.0958264 4.09501 0.0577204 4.19245C0.0196145 4.28988 0 4.39433 0 4.49981C0 4.60529 0.0196145 4.70974 0.0577204 4.80717C0.0958264 4.9046 0.151676 4.99311 0.222071 5.06762L3.70755 8.76442C4.0037 9.07853 4.4821 9.07853 4.77825 8.76442C5.06681 8.45031 5.0744 7.93485 4.77825 7.62075Z" class="fill-[#BBBBBB] group-hover:fill-[#FF8030] group-hover:rotate-180 origin-center transition-all"/>
                    </svg>
                </div>

                <div class="flex items-center gap-x-6 group cursor-pointer">
                    <p class="font-YekanM text-[#4D4D4D] text-xl group-hover:text-[#FF8030] group-hover:font-YekanB transition-all whitespace-nowrap">{{ blogItem.title }}</p>

                    <svg width="8" height="12" class="mb-1" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.77825 7.62075L1.83192 4.49578L4.77825 1.37081C4.84855 1.29625 4.90432 1.20773 4.94237 1.1103C4.98042 1.01288 5 0.908456 5 0.803004C5 0.697552 4.98042 0.593133 4.94237 0.495708C4.90432 0.398283 4.84855 0.30976 4.77825 0.235195C4.70795 0.160629 4.62448 0.10148 4.53263 0.0611252C4.44077 0.0207705 4.34232 -7.85678e-10 4.2429 0C4.14348 7.8568e-10 4.04502 0.0207705 3.95317 0.0611252C3.86131 0.10148 3.77785 0.160629 3.70755 0.235195L0.222071 3.932C0.151676 4.00651 0.0958264 4.09501 0.0577204 4.19245C0.0196145 4.28988 0 4.39433 0 4.49981C0 4.60529 0.0196145 4.70974 0.0577204 4.80717C0.0958264 4.9046 0.151676 4.99311 0.222071 5.06762L3.70755 8.76442C4.0037 9.07853 4.4821 9.07853 4.77825 8.76442C5.06681 8.45031 5.0744 7.93485 4.77825 7.62075Z" class="fill-[#BBBBBB] group-hover:fill-[#FF8030] group-hover:rotate-180 origin-center transition-all"/>
                    </svg>
                </div>

                <p class="font-YekanM text-[#4D4D4D] opacity-50 text-xl xl:w-72 w-40 truncate">{{ blogItem.text }}</p>
            </div>

            <div class="xl:px-56 px-8 xl:pl-72 xl:mt-12 mt-8" dir="rtl">
                <p class="text-[#FF6300] font-YekanM text-lg">{{ blogItem.title }}</p>
                <p class="xl:text-4xl text-2xl font-YekanB xl:w-1/2 xl:mt-5 mt-3 xl:leading-tight leading-normal">{{ blogItem.text }}</p>

                <div class="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-y-6 xl:gap-y-0 xl:mt-7 mt-8" dir="rtl">
                    <div class="flex xl:justify-center items-center gap-x-6">
                        <div>
                            <img :src="require(`../../assets/${blogItem.profile}.png`)" class="xl:w-16 xl:h-16 w-20 h-20 rounded-full object-cover object-center" alt="profile">
                        </div>

                        <div class="flex flex-col xl:gap-y-1">
                            <p class="font-YekanB text-lg">نویسنده : {{ blogItem.writer }}</p>
                            <p class="font-YekanM text-[#4D4D4D] text-lg">{{ blogItem.bio }}</p>
                        </div>
                    </div>

                    <div class="flex flex-col xl:flex-row xl:justify-start xl:items-center gap-x-6 gap-y-2">
                        <p class="font-YekanB">{{ blogItem.view }} بار دیده شده</p>
                        <p class="font-YekanB xl:border-x xl:border-[#BBBBBB] xl:px-6">{{ blogItem.date }}</p>
                        <p class="font-YekanB">{{ blogItem.time }} دقیقه زمان مطالعه</p>
                    </div>
                </div>

                <div class="relative overflow-hidden w-full xl:h-[550px] h-80 xl:rounded-xl rounded-md xl:mt-9 mt-6">
                    <img :src="require(`../../assets/${blogItem.ImagePostSrc}.png`)" class="absolute object-cover w-full xl:h-[550px] h-80 xl:rounded-xl rounded-md object-center" alt="blogImage">
                </div>
            </div>

            <div class="flex flex-col-reverse xl:flex-row gap-y-14 xl:gap-y-0 xl:space-x-20 xl:mt-20 mt-14 xl:px-5 px-8" dir="rtl">
                <SocialNetworks />
                
                <DatailItem />

                <div>
                    <p class="font-YekanB text-2xl">فهرست مطالب</p>

                    <div class="flex flex-col border-r border-[#C9C9C9] xl:mt-6 mt-5 gap-y-4">
                        <div class="border-r-4 border-transparent hover:border-[#FF8030] pr-5 cursor-pointer group transition-all">
                            <p class="font-YekanB text-lg text-[#4C4C4C] xl:w-8/12 group-hover:text-[#FF8030]">چگونه در قرنطینه خانگی دوام بیاوریم؟ فضانوردان ناسا پاسخ می دهند</p>
                        </div>

                        <div class="border-r-4 border-transparent hover:border-[#FF8030] pr-5 cursor-pointer group transition-all">
                            <p class="font-YekanB text-lg text-[#4C4C4C] xl:w-8/12 group-hover:text-[#FF8030]">بیل پالسکی مدیر برنامه تحقیقات انسانی ناسا در این رابطه می گوید:</p>
                        </div>
                    </div>

                    <p class="font-YekanB text-2xl xl:mt-16 mt-10">هم اکنون مشاوره رزرو کنید!</p>
                    <p class="font-YekanM text-[#767676] text-lg mt-3">برای بحث در مورد کسب و کار آنلاین خود</p>

                    <div class="xl:w-9/12 border-2 border-[#FF8030] rounded-lg mt-8 flex flex-col justify-center items-center p-8">
                        <img src="../../assets/image63.png" class="w-24 h-24 rounded-full object-cover" alt="profile">
                        <p class="font-YekanB mt-5 text-2xl">بهار بانژاد</p>
                        <p class="font-YekanM text-[#767676] text-lg mt-1">مدیر فروش نارنج</p>

                        <button type="button" class="bg-[#FF8030] font-YekanB text-white text-lg w-full rounded-md py-4 mt-9 hover:bg-[#ff6b30] transition-all">رزرو کنید</button>
                    </div>
                </div>
            </div>

            <div dir="rtl" class="flex flex-col xl:px-56 px-8">
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

                <div class="xl:w-[64%] border-b border-[#BBBBBB] xl:mt-16 mt-12">
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

            <NewSletters />

            <p class="font-YekanB text-right xl:text-3xl text-2xl xl:px-44 px-8 xl:mt-28 mt-10">آخرین مقاله ها</p>

            <div class="flex flex-col-reverse xl:flex-row items-center xl:gap-x-6 gap-y-10 xl:gap-y-0 xl:px-44 xl:pl-72 px-8 xl:mt-12 mt-9" dir="rtl">
                <div v-for="BlogPost in lastFiveItems" class="w-full">
                    <router-link :to="`/blog/datail/page/${BlogPost.id}`">
                        <div @click="scrollToTop" class="relative overflow-hidden w-full xl:h-80 h-56 rounded-xl">
                            <img :src="require(`../../assets/${BlogPost.ImagePostSrc}.png`)" class="absolute object-cover object-center w-full xl:h-80 h-56 rounded-xl hover:scale-110 duration-300 transition-all" alt="image">
                        </div>
                    </router-link>

                    <p class="text-[#7A74FC] font-YekanM xl:mt-8 mt-5 text-lg xl:text-base">{{ BlogPost.title }}</p>

                    <router-link :to="`/blog/datail/page/${BlogPost.id}`">
                        <p @click="scrollToTop" class="font-YekanB text-2xl xl:mt-4 mt-3 xl:w-3/4 hover:underline transition-all">{{ BlogPost.text }}</p>
                    </router-link>

                    <router-link :to="`/blog/datail/page/${BlogPost.id}`">
                        <p @click="scrollToTop" class="text-[#BBBBBB] font-YekanM xl:mt-6 mt-4 hover:text-[#FF8030] transition-all">مشاهده کنید</p>
                    </router-link>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    import Layout from "@/components/Layouts";
    import TheSocialBlack from "@/components/Social/TheSocialBlack.vue";
    import NewSletters from "@/components/BlogPage/NewSletters.vue";
    import SocialNetworks from "@/components/BlogPage/dataleBlog/SocialNetworks.vue";
    import DatailItem from "@/components/BlogPage/dataleBlog/DatailItem.vue";
    import ComentItem from "@/components/BlogPage/dataleBlog/ComentItem.vue";
    import EvaluateItem from "@/components/BlogPage/dataleBlog/EvaluateItem.vue";

    import { mapGetters , mapState } from "vuex";

    export default {
        components: {
            Layout,
            NewSletters,
            TheSocialBlack,
            SocialNetworks,
            DatailItem,
            ComentItem,
            EvaluateItem
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
            },
            ...mapState([
                'BlogPosts'
            ]),
            lastFiveItems() {
                return this.BlogPosts.slice(-3).reverse()
            }
        },
        methods: { 
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
        // mounted() {
        //     console.log(this.$route.params.id);
        // }
    }
</script>