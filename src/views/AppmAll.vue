<template>
    <div class="contact overflow-x-hidden">
        <Header class="hidden xl:block"></Header>
        <div class="relative overflow-hidden xl:w-[650px] h-screen w-full">
            <img class="absolute object-cover -z-20 xl:w-[650px] h-screen w-full object-center" src="../assets/image 67.png" alt="logo"/>
            <ResponsiveHeader></ResponsiveHeader>
            <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
        </div>
        <SocialPages class="hidden xl:block"></SocialPages>
        <div dir="rtl" class="xl:absolute xl:top-[25%] xl:right-0 xl:px-44 static px-8 mt-8 xl:mt-0">
            <p class="font-YekanM text-[#FF6300] xl:text-xl text-lg">برای شروع از ما راهنمایی بخواهید...</p>
            <p class="font-YekanB xl:text-4xl text-2xl xl:pt-5 pt-3 leading-tight xl:text-[#000] text-[#4D4D4D]">ما می توانیم با توجه به بودجه <br class="hidden xl:block"> و اهداف سازمان شما ، نزدیک ترین <br class="hidden xl:block"> مسیر را برای کسب و کار هوشمند <br class="hidden xl:block"> شما تدوین نماییم.</p>
            <p class="font-YekanM text-[#4D4D4D] xl:text-xl xl:pt-10 pt-7 leading-9">خدمات مشاوره نارنج در حوزه فناوری اطلاعات وب به صورت هدفمند ، اختصاصی و <br class="hidden xl:block"> بر مبنای نیاز شما راهکارهایی را ارائه می کند که شاید قبلا به ذهن شما نرسیده و یا <br  class="hidden xl:block"> اهمیت آن برای شما روشن نشده باشد. <br  class="hidden xl:block"> استراتژی ورود موفق کسب و کارها به دنیای مجازی و همچنین راهکارهای کشف <br  class="hidden xl:block"> بازار های جدید نیاز به یک مشاور و راهنما دارد تا راه پر پیچ و خم کسب و کار آنلاین <br  class="hidden xl:block"> و تجارت الکترونیک آنها را آگاه ساخته و راهکار های مناسب ، هدفمند و مقرون به <br  class="hidden xl:block"> صرفه ارائه نماید.</p>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "@/components/HeaderView.vue";
    import Footer from "@/components/FooterView.vue";
    import SocialPages from "@/components/SocialPages.vue";
    import DivBlue from "@/components/DivBlue.vue";
    import ResponsiveHeader from "@/components/ResponsiveHeader.vue";

    export default {
        components: {
            Footer,
            ResponsiveHeader,
            Header,
            SocialPages,
            DivBlue
        },
        data() {
            return {
                limitPosition: 1,
                scrolled: false,
                lastPosition: 0,
                background: false
            }
        },
        methods: {
            handleScroll() {
                if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
                    this.scrolled = true;
                    this.background = true;
                    // move up!
                } 
                
                if (this.lastPosition > window.scrollY) {
                    this.scrolled = false;
                    // move down
                }
                
                this.lastPosition = window.scrollY;
                // this.scrolled = window.scrollY > 250;
                this.background = window.scrollY > 10;
            }
        },
        created() {
            window.addEventListener("scroll", this.handleScroll);
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        }
    }
</script>

<style>
    .headroom {
        will-change: transform;
        transition: transform 200ms linear;
    }
    .headroom--pinned {
        transform: translateY(0%);
    }
    .headroom--unpinned {
        transform: translateY(-100%);
    }
    .blue-theme {
        background-color: white;
        color: black !important;
        box-shadow: 0px 2px 2px #C9C9C9;
    }
    .text-color:hover {
        background-color: transparent !important;
        color: black !important;
    }
</style>