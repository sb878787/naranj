<template>
     <layout name="default">
        <div class="blog overflow-x-hidden">
            <div class="relative overflow-hidden w-full h-screen block xl:hidden">
                <img class="absolute object-cover -z-20 w-full h-screen object-center" src="../assets/BlogPage.png" alt="logo"/>
                <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
            </div>

            <TheSocialBlack />

            <TabFilter />

            <div class="xl:mx-44 xl:ml-72 mt-11">
                <div class="relative">
                    <swiper :options="swiperOptions" @slideChange="timer" class="w-full xl:rounded-xl" dir="rtl">
                        <swiper-slide v-for="ImageBlogSlide in ImageBlogSlides">
                            <BlogSlider :data="ImageBlogSlide"/>
                        </swiper-slide>
                    </swiper>

                    <div class="absolute xl:bottom-10 xl:left-12 bottom-6 z-30 left-7 border-2 border-[#CFCFCF] border-opacity-[41%] rounded-full">
                        <figure class="chart" data-percent="100">
                            <svg width="50" height="50">
                                <circle ref="outer" class="outer" cx="165" cy="25" r="22" transform="rotate(-90, 95, 95)" />
                            </svg>
                        </figure>
                    </div>
                </div>

                <div class="flex flex-col xl:flex-row w-full gap-x-16" dir="rtl">
                    <div class="flex flex-col xl:w-7/12 w-full mx-8 xl:mx-0">
                        <div class="mb-10 space-y-2 mt-12">
                            <p class="font-YekanB xl:hidden text-xl text-[#FF6300]">مقالات نارنج</p>
                            <p class="xl:hidden font-YekanM text-xl text-[#4D4D4D] w-10/12">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>

                        <div class="space-y-14">
                            <PostsView v-for="BlogPost in firstFiveItems" :key="BlogPost.id" :dataPosts="BlogPost"/>
                        </div>

                        <div class="flex justify-between items-center w-[85.5%] xl:w-full mt-14">
                            <button class="font-YekanM xl:text-lg xl:w-44 px-4 xl:px-0 text-[#767676] flex justify-center items-center gap-x-5 rounded-full border-2 border-[#767676] py-3 hover:bg-[#444444] hover:text-white hover:border-[#444444] group transition-all outline-none">
                                <div class="xl:group-hover:translate-x-2 transition-all">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 8H15" class="stroke-[#767676] group-hover:stroke-white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8 15L15 8L8 1" class="stroke-[#767676] group-hover:stroke-white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                صفحه قبل
                            </button>

                            <button class="font-YekanM text-lg xl:w-44 px-4 xl:px-0 text-[#FF6300] flex justify-center items-center gap-x-5 rounded-full border-2 border-[#FF8030] py-3 hover:bg-[#FF8030] hover:text-white group transition-all outline-none">
                                صفحه بعد
                                <div class="xl:group-hover:-translate-x-2 transition-all">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 8H1" class="stroke-[#FF6300] group-hover:stroke-white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8 15L1 8L8 1" class="stroke-[#FF6300] group-hover:stroke-white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-col gap-y-10 xl:w-4/12 mt-14" dir="rtl">
                        <div class="mx-8 space-y-2">
                            <p class="font-YekanB xl:hidden text-xl text-[#FF6300]">مقالات مرتبط</p>
                            <p class="xl:hidden font-YekanM text-xl text-[#4D4D4D]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                        </div>

                        <OtherPosts v-for="BlogPost in lastFiveItems" :key="BlogPost.id" :dataOtherPost="BlogPost"/>

                        <JoinBlog />
                    </div>
                </div>
            </div>

            <NewSletters />
        </div>
     </layout>
</template>

<script>
    import Layout from "@/components/Layouts";
    import TheSocialBlack from "@/components/Social/TheSocialBlack.vue";
    import BlogSlider from "@/components/BlogPage/BlogSlider.vue";
    import PostsView from "@/components/BlogPage/PostsView.vue";
    import OtherPosts from "@/components/BlogPage/OtherPosts.vue";
    import JoinBlog from "@/components/BlogPage/JoinBlog.vue";
    import NewSletters from "@/components/BlogPage/NewSletters.vue";
    import TabFilter from "@/components/BlogPage/TabFilter.vue";

    import { mapState } from "vuex";

    export default {
        name: 'Blog',
        components: {
            Layout,
            TheSocialBlack,
            BlogSlider,
            PostsView,
            OtherPosts,
            JoinBlog,
            NewSletters,
            TabFilter
        },
        data() {
            return {
                swiperOptions : {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 7900,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false
                    },
                    loop: true
                },
                ImageBlogSlides: [
                    {
                        ImageSrc : 'Group 242',
                        title: 'توسعه اپلیکیشن',
                        text: 'هزینه ساخت یک سرویس جریان مانند Netflix چقدر هزینه دارد؟',
                        date: '25 اردیبهشت 1399',
                        writer: 'امیر البرزی',
                        time: '20'
                    },
                    {
                        ImageSrc : 'Group 243',
                        title: 'توسعه وب سایت',
                        text: 'هزینه ساخت یک سرویس جریان مانند Netflix چقدر هزینه دارد؟',
                        date: '12 فروردین 1401',
                        writer: 'سید عباس سیدی',
                        time: '32'
                    },
                    {
                        ImageSrc : 'Rectangle 70 (1)',
                        title: 'توسعه بازی',
                        text: 'هزینه ساخت یک سرویس جریان مانند Netflix چقدر هزینه دارد؟',
                        date: '28 مرداد 1396',
                        writer: 'سید محمد علی صابری',
                        time: '15'
                    }
                ]
            }
        },
        methods: {
            timer() {
                const testElements = document.getElementsByClassName("outer")[0];
                this.$refs["outer"].classList.remove("outer");
                setTimeout(() => {
                    this.$refs["outer"].classList.add("outer");
                }, 50);
            }
        },
        computed: {
            ...mapState([
                'BlogPosts'
            ]),
            lastFiveItems() {
                return this.BlogPosts.slice(-3)
            },
            firstFiveItems() {
                return this.BlogPosts.slice(0,3)
            }
        }
    }
</script>

<style>
    .outer {
        fill: url(#image-4);
        stroke: #fff;
        stroke-width: 5;
        stroke-dasharray: 145;
        transition: stroke-dashoffset 1s;
        -webkit-animation-play-state: running;
    }
    .chart[data-percent="100"] .outer {
        stroke-dashoffset: 0;
        animation: show100 8s ease-in;
        animation-iteration-count: infinite;
    }
    @keyframes show100 {
        from {
            stroke-dashoffset: 144;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
</style>