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
                    <swiper :options="swiperOptions" class="w-full xl:rounded-xl" dir="rtl">
                        <swiper-slide v-for="ImageBlogSlide in ImageBlogSlides">
                            <BlogSlider :data="ImageBlogSlide"/>
                        </swiper-slide>
                    </swiper>

                    <div class="absolute xl:bottom-10 xl:left-12 bottom-6 z-30 left-7 border-2 border-[#CFCFCF] border-opacity-[41%] rounded-full">
                        <figure class="chart" data-percent="100">
                            <svg width="50" height="50">
                                <circle class="outer" cx="165" cy="25" r="22" transform="rotate(-90, 95, 95)" />
                            </svg>
                        </figure>
                    </div>
                </div>

                <div class="flex flex-col xl:flex-row w-full gap-x-16" dir="rtl">
                    <div class="flex flex-col xl:w-7/12 w-full mx-8 xl:mx-0">
                        <PostsView v-for="BlogPost in BlogPosts" :dataPosts="BlogPost"/>

                        <!-- <div class="flex justify-between mt-10">
                            <button 
                                :disabled="pageNumber === 0" 
                                @click="prevPage">
                                Previous
                            </button>

                            <button 
                                :disabled="pageNumber >= pageCount -1" 
                                @click="nextPage">
                                Next
                            </button>
                        </div> -->
                    </div>

                    <div class="flex flex-col gap-y-10 xl:w-4/12 mt-28" dir="rtl">
                        <OtherPosts v-for="(BlogOtherPost, index) in BlogOtherPosts" :indexOf="index" :dataOtherPost="BlogOtherPost"/>

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
                        delay: 7600,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true
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
                ],
                BlogPosts: [
                    {
                        title: 'مراکز خرید',
                        text: 'چگونه در قرنطینه خانگی دوام بیاوریم؟ فضانوردان ناسا پاسخ می دهند',
                        time: '20',
                        date: '25 اردیبهشت 1399',
                        ImagePostSrc: 'imagePostBlog1'
                    },
                    {
                        title: 'مراکز خرید',
                        text: 'چگونه در قرنطینه خانگی دوام بیاوریم؟ فضانوردان ناسا پاسخ می دهند',
                        time: '20',
                        date: '25 اردیبهشت 1399',
                        ImagePostSrc: 'imagePostBlog3'
                    },
                    {
                        title: 'مراکز خرید',
                        text: 'چگونه در قرنطینه خانگی دوام بیاوریم؟ فضانوردان ناسا پاسخ می دهند',
                        time: '20',
                        date: '25 اردیبهشت 1399',
                        ImagePostSrc: 'imagePostBlog2'
                    }
                ],
                BlogOtherPosts: [
                    {
                        ImageOtherPost: 'otherPosts3',
                        title: 'علمی',
                        text: 'چگونه در قرنطینه خانگی دوام بیاوریم؟ فضانوردان ناسا پاسخ می دهند',
                        date: '25 اردیبهشت 1399'
                    },
                    {
                        ImageOtherPost: 'otherPosts2',
                        title: 'نوآوری',
                        text: 'چگونه در قرنطینه خانگی دوام بیاوریم؟ فضانوردان ناسا پاسخ می دهند',
                        date: '10 مرداد 1396'
                    },
                    {
                        ImageOtherPost: 'otherPosts1',
                        title: 'نوآوری',
                        text: 'چگونه در قرنطینه خانگی دوام بیاوریم؟ فضانوردان ناسا پاسخ می دهند',
                        date: '15 تیر 1387'
                    }
                ]
            }
        }
    }
</script>

<style>
    .outer {
        fill: url(#image-4);
        stroke: #fff;
        stroke-width: 5;
        stroke-dasharray: 218;
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
            stroke-dashoffset: 217;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
</style>