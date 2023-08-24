<template>
     <layout name="default">
        <div class="blog overflow-hidden">
            <div class="relative overflow-hidden w-full h-screen block xl:hidden">
                <img class="absolute object-cover -z-20 w-full h-screen object-center" src="../assets/BlogPage.png" alt="logo"/>
                <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
            </div>

            <TheSocialBlack />

            <div dir="rtl" class="flex items-start justify-start mx-44 ml-72 mt-40 font-YekanB text-lg border-b border-[#C4C4C4]">
                <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">همه خبر ها</label>
                <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">اتفاق های نارنجی</label>
                <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">آموزشی</label>
                <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">وبینار</label>
                <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">تکنولوژی</label>
                <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">مراکز خرید</label>
                <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">نوآوری</label>
                <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">راهنماهای مشتری</label>
            </div>

            <div class="mx-44 ml-72 mt-11">
                <div class="relative">
                    <swiper :options="swiperOptions" class="w-full rounded-xl" dir="rtl">
                        <swiper-slide v-for="ImageBlogSlide in ImageBlogSlides">
                            <BlogSlider :data="ImageBlogSlide"/>
                        </swiper-slide>
                    </swiper>

                    <div class="border-2 border-[#CFCFCF] border-opacity-[41%] w-12 h-12 rounded-full absolute bottom-10 left-14 z-40 ring-4 ring-white"></div>
                </div>

                <div class="flex w-full gap-16" dir="rtl">
                    <div class="flex flex-col w-7/12">
                        <PostsView v-for="BlogPost in BlogPosts" :dataPosts="BlogPost"/>
                    </div>

                    <div class="flex flex-col gap-y-10 w-4/12 mt-28" dir="rtl">
                        <OtherPosts v-for="(BlogOtherPost, index) in BlogOtherPosts" :indexOf="index" :dataOtherPost="BlogOtherPost"/>

                        <JoinBlog />
                    </div>
                </div>
            </div>

            <div class="px-44 pl-72">
                <div class="flex bg-[#2C56CF] w-full h-96 mt-28 rounded-xl p-16 pr-24" dir="rtl">
                    <div class="relative flex-1 flex-col">
                        <p class="font-YekanB text-5xl text-white leading-tight">آیا میخواهید مطالب ما <br> را دنبال کنید</p>

                        <p class="text-white font-YekanM text-2xl absolute bottom-0">فقط کافیه ایمیل خود را اینجا وارد کنید <br> تا ما شما را از آخرین اخبار تکنولوژی و نسخه های <br> آپدیت وب سایت و اپلیکیشن با خبر کنیم</p>
                    </div>

                    <div class="relative flex-1 flex-col">
                        <div class="flex justify-between items-center w-full bg-white h-20 mt-5 rounded-xl pr-12 pl-3">
                            <form action="/" class="flex w-full">
                                <input type="email" name="email" class="font-YekanM text-[#BBBBBB] placeholder:text-[#BBBBBB] text-xl outline-none w-full" placeholder="لطفا ایمیل خود را وارد کنید..."/>
                            
                                <input type="button" class="font-YekanB text-white text-lg bg-[#FF8030] w-1/4 h-14 rounded-lg" value="ارسال">
                            </form>
                        </div>

                        <div class="absolute bottom-0">
                            <form action="/" class="flex flex-wrap items-center w-full">
                                <input type="radio" name="option" id="site" class="outline-none relative h-5 w-5 appearance-none rounded-full border-none before:absolute before:h-5 before:w-5 before:scale-0 before:rounded-full before:bg-[#FF8030] bg-[#0737C0] before:content-[''] after:absolute after:z-[1] after:block after:h-5 after:w-5 after:rounded-full after:content-[''] checked:after:absolute checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer focus:shadow-none focus:before:scale-100 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]" checked>
                                <label for="site" class="text-white font-YekanM text-xl mr-4 cursor-pointer">سایت و اپلیکیشن</label>

                                <input type="radio" name="option" id="admin" class="w-5 h-5 outline-none mr-28">
                                <label for="admin" class="text-white font-YekanM text-xl mr-4 cursor-pointer">پنل های ادمین</label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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

    export default {
        name: 'Blog',
        components: {
            Layout,
            TheSocialBlack,
            BlogSlider,
            PostsView,
            OtherPosts,
            JoinBlog
        },
        data() {
            return {
                swiperOptions : {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 8000,
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