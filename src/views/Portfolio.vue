<template>
    <div class="portfolio overflow-x-hidden">
        <Header class="hidden xl:block"></Header>
        <SocialPages class="hidden xl:block"></SocialPages>
        <div class="absolute left-[45%] top-56 hidden xl:block">
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.7007 40.1982C48.2855 54.539 31.4593 60.964 17.1184 54.5487C2.77759 48.1334 -3.64736 31.3073 2.76791 16.9664C9.18318 2.62556 26.0093 -3.79939 40.3502 2.61588C54.691 9.03115 61.116 25.8573 54.7007 40.1982ZM15.0285 22.4511C11.6423 30.0206 15.0336 38.902 22.6031 42.2881C30.1726 45.6743 39.054 42.283 42.4402 34.7135C45.8263 27.144 42.4351 18.2626 34.8655 14.8764C27.296 11.4903 18.4146 14.8815 15.0285 22.4511Z" fill="#4C4DFF" fill-opacity="0.61"/>
            </svg>
        </div>
        <div class="flex xl:px-44 mt-56 gap-x-14" dir="rtl">
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
        <div class="xl:px-44 mt-4" dir="rtl">
            <p class="font-YekanB text-4xl leading-snug">
                ما طراحی وب سایت در سطح جهانی <br> ایجاد می کنیم ، ارتباطات و مارکها
            </p>
        </div>
        <div class="xl:px-44 mt-5" dir="rtl">
            <p class="text-[#4D4D4D] font-YekanM leading-loose text-lg">
                ما با جدیدترین الگو های طراحی و بکار گیری جدیدترین ابزار ها <br> وب سایتهایی را طراحی کرده ایم که به آنها افتخار می کنیم. <br> برخی از آنها را در اینجا ببینید.
            </p>
        </div>
        <div class="border-b-2 border-[#F2F2F2]">
            <div class="flex justify-center	items-center gap-x-11 mt-20" dir="rtl">
                <button
                    type="button"
                    class="font-YekanM text-lg text-[#4C4C4C] flex gap-x-3 items-stretch justify-stretch hover:text-[#FF8030] focus:text-[#FF8030] focus:border-b-4 focus:border-[#FF8030] duration-75 pb-5"
                    v-model="selectedCategory"
                    value="All"
                >
                    <svg width="17" height="17" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556ZM6.22222 12.4444H2.33333C1.90556 12.4444 1.55556 12.0944 1.55556 11.6667V7.77778H5.44444C5.87222 7.77778 6.22222 8.12778 6.22222 8.55556V12.4444ZM5.44444 6.22222H1.55556V2.33333C1.55556 1.90556 1.90556 1.55556 2.33333 1.55556H6.22222V5.44444C6.22222 5.87222 5.87222 6.22222 5.44444 6.22222ZM11.6667 12.4444H7.77778V8.55556C7.77778 8.12778 8.12778 7.77778 8.55556 7.77778H12.4444V11.6667C12.4444 12.0944 12.0944 12.4444 11.6667 12.4444ZM12.4444 6.22222H8.55556C8.12778 6.22222 7.77778 5.87222 7.77778 5.44444V1.55556H11.6667C12.0944 1.55556 12.4444 1.90556 12.4444 2.33333V6.22222Z" fill="#767676"/>
                    </svg>
                    همه کار ها
                </button>
                <button
                    type="button"
                    class="font-YekanM text-lg text-[#4C4C4C] hover:text-[#FF8030] focus:text-[#FF8030] focus:border-b-4 focus:border-[#FF8030] duration-75 pb-5"
                    v-model="selectedCategory"
                    value="Site"
                >
                    طراحی سایت
                </button>
                <button
                    type="button"
                    class="font-YekanM text-lg text-[#4C4C4C] hover:text-[#FF8030] focus:text-[#FF8030] focus:border-b-4 focus:border-[#FF8030] duration-75 pb-5"
                    v-model="selectedCategory"
                    value="App"
                >
                    طراحی اپلیکیشن
                </button>
                <button
                    type="button"
                    class="font-YekanM text-lg text-[#4C4C4C] hover:text-[#FF8030] focus:text-[#FF8030] focus:border-b-4 focus:border-[#FF8030] duration-75 pb-5"
                    v-model="selectedCategory"
                    value="Graphics"
                >
                    طراحی گرافیک
                </button>
                <button
                    type="button"
                    class="font-YekanM text-lg text-[#4C4C4C] hover:text-[#FF8030] focus:text-[#FF8030] focus:border-b-4 focus:border-[#FF8030] duration-75 pb-5"
                    v-model="selectedCategory"
                    value="Digital"
                >
                    بازاریابی دیجیتال
                </button>
                <button
                    type="button"
                    class="font-YekanM text-lg text-[#4C4C4C] hover:text-[#FF8030] focus:text-[#FF8030] focus:border-b-4 focus:border-[#FF8030] duration-75 pb-5"
                    v-model="selectedCategory"
                    value="software"
                >
                    نرم افزار نارنج
                </button>
            </div>
        </div>
        <div class="mt-24" dir="rtl">
            <div class="flex flex-wrap w-full gap-8 justify-center items-center">
                <div v-for="event in filteredPeople" class="flex flex-col">
                    <div class="relative w-[432px] h-[539px] rounded-lg grayscale hover:grayscale-0 transition-all">
                        <img :src="event.img" class="absolute object-cover -z-20 w-[432px] h-[539px] object-center rounded-lg" :alt="event.alt"/>
                        <img :src="event.logo" class="mr-9 mt-24" :alt="event.altLogo"/>
                        <p class="text-white font-YekanM text-3xl mr-14 mt-8">{{ event.title }}</p>
                        <p class="font-YekanL text-white text-lg mr-14 mt-2 w-1/2">{{ event.text }}</p>
                        <p class="font-YekanL text-white text-lg mr-14 absolute bottom-12">{{ event.type }}</p>
                    </div>
                </div>
            </div>
        </div>
        <DivBlue></DivBlue>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "@/components/FooterView.vue";
    import Header from "@/components/HeaderView.vue";
    import SocialPages from "@/components/SocialPages.vue";
    import DivBlue from "@/components/DivBlue.vue";
    import img from "@/assets/Group 228.png";
    import img2 from "@/assets/Rectangle 83.png";
    import logo from "@/assets/Group 229.png";

    export default {
        components: {
            Footer,
            Header,
            SocialPages,
            DivBlue
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
                        img : img,
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
                        img : img,
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
                    }
                ],
                selectedCategory: "All"
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