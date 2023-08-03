<template>
    <div class="portfolio overflow-x-hidden">
        <Header class="hidden xl:block"></Header>
        <div class="relative overflow-hidden w-full h-screen block xl:hidden">
            <img class="absolute object-cover -z-20 w-full h-screen object-center" src="../assets/Rectangle 89.png" alt="logo"/>
            <ResponsiveHeader></ResponsiveHeader>
            <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
        </div>
        <SocialPages class="hidden xl:block"></SocialPages>
        <div class="absolute left-[45%] top-56 hidden xl:block">
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.7007 40.1982C48.2855 54.539 31.4593 60.964 17.1184 54.5487C2.77759 48.1334 -3.64736 31.3073 2.76791 16.9664C9.18318 2.62556 26.0093 -3.79939 40.3502 2.61588C54.691 9.03115 61.116 25.8573 54.7007 40.1982ZM15.0285 22.4511C11.6423 30.0206 15.0336 38.902 22.6031 42.2881C30.1726 45.6743 39.054 42.283 42.4402 34.7135C45.8263 27.144 42.4351 18.2626 34.8655 14.8764C27.296 11.4903 18.4146 14.8815 15.0285 22.4511Z" fill="#4C4DFF" fill-opacity="0.61"/>
            </svg>
        </div>
        <div class="flex flex-col xl:flex-row px-8 mt-7 xl:px-44 xl:mt-56 gap-x-14" dir="rtl">
            <p class="font-YekanM text-lg text-[#FF6300]">
                نمونه کارهای نارنج
            </p>
            <p class="font-YekanM text-lg text-[#ACACAC]">
                طراحی سایت
            </p>
            <p class="font-YekanM text-lg text-[#ACACAC]">
                طرحی اپلیکیشن
            </p>
        </div>
        <div class="xl:px-44 xl:mt-4 mt-3" dir="rtl">
            <p class="font-YekanB xl:text-4xl text-2xl xl:leading-snug leading-normal px-8 xl:px-0 text-[#4D4D4D] xl:text-black">
                ما طراحی وب سایت در سطح جهانی <br class="hidden xl:block"> ایجاد می کنیم ، ارتباطات و مارکها
            </p>
        </div>
        <div class="xl:px-44 px-8 mt-5" dir="rtl">
            <p class="text-[#4D4D4D] font-YekanM leading-loose xl:text-lg">
                ما با جدیدترین الگو های طراحی و بکار گیری جدیدترین ابزار ها <br class="hidden xl:block"> وب سایتهایی را طراحی کرده ایم که به آنها افتخار می کنیم. <br class="hidden xl:block"> برخی از آنها را در اینجا ببینید.
            </p>
        </div>
        <swiper :options="swiperOptions" class="xl:hidden px-8 border-b-2 border-[#F2F2F2] mt-12 flex justify-center items-center" dir="rtl">
            <swiper-slide>
                <label class="font-YekanM text-lg text-[#4C4C4C] group flex space-x-4 items-stretch justify-stretch hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-32 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="All" />
                    <svg width="17" height="17" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556ZM6.22222 12.4444H2.33333C1.90556 12.4444 1.55556 12.0944 1.55556 11.6667V7.77778H5.44444C5.87222 7.77778 6.22222 8.12778 6.22222 8.55556V12.4444ZM5.44444 6.22222H1.55556V2.33333C1.55556 1.90556 1.90556 1.55556 2.33333 1.55556H6.22222V5.44444C6.22222 5.87222 5.87222 6.22222 5.44444 6.22222ZM11.6667 12.4444H7.77778V8.55556C7.77778 8.12778 8.12778 7.77778 8.55556 7.77778H12.4444V11.6667C12.4444 12.0944 12.0944 12.4444 11.6667 12.4444ZM12.4444 6.22222H8.55556C8.12778 6.22222 7.77778 5.87222 7.77778 5.44444V1.55556H11.6667C12.0944 1.55556 12.4444 1.90556 12.4444 2.33333V6.22222Z" class="fill-[#767676] group-hover:fill-[#FF8030] duration-75"/>
                    </svg>
                    همه کار ها
                </label>
            </swiper-slide>
            <swiper-slide>
                <label class="font-YekanM text-lg text-[#4C4C4C] flex items-center justify-center hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-28 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="Site" />طراحی سایت</label>
            </swiper-slide>
            <swiper-slide>
                <label class="font-YekanM text-lg text-[#4C4C4C] flex items-center justify-center hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-32 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="App" />طراحی اپلیکیشن</label>
            </swiper-slide>
            <swiper-slide>
                <label class="font-YekanM text-lg text-[#4C4C4C] flex items-center justify-center hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-28 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="Graphics" />طراحی گرافیک</label>
            </swiper-slide>
            <swiper-slide>
                <label class="font-YekanM text-lg text-[#4C4C4C] flex items-center justify-center hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-32 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="Digital" />بازاریابی دیجیتال</label>
            </swiper-slide>
            <swiper-slide>
                <label class="font-YekanM text-lg text-[#4C4C4C] flex items-center justify-center hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-28 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="software" />نرم افزار نارنج</label>
            </swiper-slide>
        </swiper>
        <div class="border-b-2 border-[#F2F2F2] hidden xl:block">
            <div class="flex flex-col xl:flex-row xl:justify-center xl:items-center justify-start items-start gap-x-11 px-8 xl:px-0 xl:mt-20 mt-14" dir="rtl">
                <label class="font-YekanM text-lg text-[#4C4C4C] group flex space-x-4 items-stretch justify-stretch hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-32 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="All" />
                    <svg width="17" height="17" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556ZM6.22222 12.4444H2.33333C1.90556 12.4444 1.55556 12.0944 1.55556 11.6667V7.77778H5.44444C5.87222 7.77778 6.22222 8.12778 6.22222 8.55556V12.4444ZM5.44444 6.22222H1.55556V2.33333C1.55556 1.90556 1.90556 1.55556 2.33333 1.55556H6.22222V5.44444C6.22222 5.87222 5.87222 6.22222 5.44444 6.22222ZM11.6667 12.4444H7.77778V8.55556C7.77778 8.12778 8.12778 7.77778 8.55556 7.77778H12.4444V11.6667C12.4444 12.0944 12.0944 12.4444 11.6667 12.4444ZM12.4444 6.22222H8.55556C8.12778 6.22222 7.77778 5.87222 7.77778 5.44444V1.55556H11.6667C12.0944 1.55556 12.4444 1.90556 12.4444 2.33333V6.22222Z" class="fill-[#767676] group-hover:fill-[#FF8030] duration-75"/>
                    </svg>
                    همه کار ها
                </label>
                <label class="font-YekanM text-lg text-[#4C4C4C] hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-28 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="Site" /> طراحی سایت</label>
                <label class="font-YekanM text-lg text-[#4C4C4C] hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-32 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="App" /> طراحی اپلیکیشن</label>
                <label class="font-YekanM text-lg text-[#4C4C4C] hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-28 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="Graphics" /> طراحی گرافیک</label>
                <label class="font-YekanM text-lg text-[#4C4C4C] hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-32 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="Digital" /> بازاریابی دیجیتال</label>
                <label class="font-YekanM text-lg text-[#4C4C4C] hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-28 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="software" /> نرم افزار نارنج</label>
            </div>
        </div>
        <div class="container mx-auto px-6 md:px-12 xl:mb-52 mb-20" dir="rtl">
            <div class="grid grid-cols-12 items-start gap-7 xl:pt-24 pt-16">
                <div
                v-for="event, index in filteredPeople"
                :key="index"
                :class="[
                    `xl:col-span-4 col-span-12 acpect-[1/1.2]`,
                    '[&:nth-of-type(3n-1)]:xl:translate-y-24'
                ]">
                    <div class="relative w-full h-[532px] rounded-lg group">
                        <img :src="event.img" class="absolute object-cover -z-20 w-full h-[532px] object-center rounded-lg transition-all grayscale group-hover:grayscale-0" :alt="event.alt"/>
                        <img :src="event.logo" class="xl:mr-9 mr-2 pt-24" :alt="event.altLogo"/>
                        <p class="text-white font-YekanM text-3xl xl:mr-14 mr-7 mt-8">{{ event.title }}</p>
                        <p class="font-YekanL text-white text-lg xl:mr-14 mr-7 mt-2 w-3/4 sm:w-1/2">{{ event.text }}</p>
                        <div class="flex justify-center items-center">
                            <button type="button" class="font-YekanM text-center py-4 px-10 mt-36 rounded-md bg-white invisible group-hover:visible group-hover:duration-300 group-hover:-translate-y-24">
                                مشاهده پروژه
                            </button>
                        </div>
                        <p class="font-YekanL text-white text-lg xl:mr-14 mr-7 absolute bottom-8">{{ event.type }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="container mx-auto px-6 md:px-12">
            <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                <div class="aspect-video p-8 rounded-3xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="mb-8 flex items-center gap-4">
                        <img src="../assets/Group 228.png" alt="" class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h4 class="text-lg font-semibold text-gray-700 dark:text-white">Mohammad Ali</h4>
                            <span class="text-gray-600 dark:text-gray-400">Web dev</span>
                        </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus vitae iste earum rem, iusto, omnis dolorem aut reprehenderit doloremque assumenda consectetur soluta quae hic veritatis mollitia, suscipit impedit perspiciatis laborum?
                    </p>
                </div>
                <div class="aspect-video p-8 rounded-3xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="mb-8 flex items-center gap-4">
                        <img src="../assets/Group 228.png" alt="" class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h4 class="text-lg font-semibold text-gray-700 dark:text-white">Mohammad Ali</h4>
                            <span class="text-gray-600 dark:text-gray-400">Web dev</span>
                        </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit architecto est perspiciatis atque illo dolore, saepe cupiditate odio pariatur aut eos labore quisquam sunt voluptate ad at ex cum.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus vitae iste earum rem, iusto, omnis dolorem aut reprehenderit doloremque assumenda consectetur soluta quae hic veritatis mollitia, suscipit impedit perspiciatis laborum?
                    </p>
                </div>
                <div class="aspect-video p-8 rounded-3xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="mb-8 flex items-center gap-4">
                        <img src="../assets/Group 228.png" alt="" class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h4 class="text-lg font-semibold text-gray-700 dark:text-white">Mohammad Ali</h4>
                            <span class="text-gray-600 dark:text-gray-400">Web dev</span>
                        </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit architecto est perspiciatis atque illo dolore, saepe cupiditate odio pariatur aut eos labore quisquam sunt voluptate ad at ex cum.
                    </p>
                </div>
                <div class="aspect-video p-8 rounded-3xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="mb-8 flex items-center gap-4">
                        <img src="../assets/Group 228.png" alt="" class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h4 class="text-lg font-semibold text-gray-700 dark:text-white">Mohammad Ali</h4>
                            <span class="text-gray-600 dark:text-gray-400">Web dev</span>
                        </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus vitae iste earum rem, iusto, omnis dolorem aut reprehenderit doloremque assumenda consectetur soluta quae hic veritatis mollitia, suscipit impedit perspiciatis laborum?
                    </p>
                </div>
                <div class="aspect-video p-8 rounded-3xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="mb-8 flex items-center gap-4">
                        <img src="../assets/Group 228.png" alt="" class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h4 class="text-lg font-semibold text-gray-700 dark:text-white">Mohammad Ali</h4>
                            <span class="text-gray-600 dark:text-gray-400">Web dev</span>
                        </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit architecto est perspiciatis atque illo dolore, saepe cupiditate odio pariatur aut eos labore quisquam sunt voluptate ad at ex cum.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus vitae iste earum rem, iusto, omnis dolorem aut reprehenderit doloremque assumenda consectetur soluta quae hic veritatis mollitia, suscipit impedit perspiciatis laborum?
                    </p>
                </div>
                <div class="aspect-video p-8 rounded-3xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="mb-8 flex items-center gap-4">
                        <img src="../assets/Group 228.png" alt="" class="w-12 h-12 rounded-full object-cover">
                        <div>
                            <h4 class="text-lg font-semibold text-gray-700 dark:text-white">Mohammad Ali</h4>
                            <span class="text-gray-600 dark:text-gray-400">Web dev</span>
                        </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit architecto est perspiciatis atque illo dolore, saepe cupiditate odio pariatur aut eos labore quisquam sunt voluptate ad at ex cum.
                    </p>
                </div>
            </div>
        </div> -->
        <DivBlue></DivBlue>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "@/components/FooterView.vue";
    import Header from "@/components/HeaderView.vue";
    import SocialPages from "@/components/SocialPages.vue";
    import DivBlue from "@/components/DivBlue.vue";
    import ResponsiveHeader from "@/components/ResponsiveHeader.vue";
    import img from "@/assets/Group 228.png";
    import img2 from "@/assets/Rectangle 83.png";
    import logo from "@/assets/Group 229.png";

    export default {
        components: {
            Footer,
            Header,
            SocialPages,
            DivBlue,
            ResponsiveHeader
        },
        data() {
            return {
                events: [
                    {
                        img : img,
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'بنای آرمانی',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / طراحی کاتالوگ',
                        category : 'Site'
                    },
                    {
                        img : 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'توس راوین سازه',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / بازاریابی دیجیتال',
                        category : 'Digital'
                    },
                    {
                        img : 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'بنای آرمانی',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / طراحی کاتالوگ',
                        category : 'App'
                    },
                    {
                        img : img2,
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'توس راوین سازه',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / بازاریابی دیجیتال',
                        category : 'Digital'
                    },
                    {
                        img : 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'بنای آرمانی',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / طراحی کاتالوگ',
                        category : 'App'
                    },
                    {
                        img : img2,
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'توس راوین سازه',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / بازاریابی دیجیتال',
                        category : 'Digital'
                    },
                    {
                        img : 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'توس راوین سازه',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / بازاریابی دیجیتال',
                        category : 'software'
                    },
                    {
                        img : img,
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'بنای آرمانی',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / طراحی کاتالوگ',
                        category : 'software'
                    },
                    {
                        img : 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'توس راوین سازه',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / بازاریابی دیجیتال',
                        category : 'Digital'
                    }
                ],
                selectedCategory: "All",
                swiperOptions : {
                    breakpoints: {
                        150: {
                            slidesPerView: 2.2
                        },
                        700: {
                            slidesPerView: 4.2
                        }
                    },
                    loop: false
                },
            }
        },
        computed: {
            filteredPeople() {
                var vm = this;
                var category = vm.selectedCategory;
                
                if(category === "All") {
                    return vm.events;
                } else {
                    return vm.events.filter(function(event) {
                        return event.category === category;
                    });
                }
            }
        }
    }
</script>