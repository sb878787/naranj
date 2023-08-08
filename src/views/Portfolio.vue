<template>
    <div class="portfolio overflow-x-hidden">
        <TheHeader />

        <div class="relative overflow-hidden w-full h-screen block xl:hidden">
            <img class="absolute object-cover -z-20 w-full h-screen object-center" src="../assets/Rectangle 89.png" alt="logo"/>
            <TheResponsiveHeader />
            <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
        </div>

        <TheSocialBlack />

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

        <TabFilter />
        
        <DivBlue />
        
        <TheFooter />
    </div>
</template>

<script>
    import TheFooter from "@/components/Footers/TheFooter.vue";
    import TheHeader from "@/components/Headers/TheHeader.vue";
    import TheSocialBlack from "@/components/Social/TheSocialBlack.vue";
    import DivBlue from "@/components/DivBlue.vue";
    import TheResponsiveHeader from "@/components/Headers/TheResponsiveHeader.vue";
    import TabFilter from "@/components/TabFilter.vue";

    export default {
        components: {
            TheFooter,
            TheHeader,
            TheSocialBlack,
            DivBlue,
            TheResponsiveHeader,
            TabFilter
        },
        data() {
            return {}
        }
    }
</script>