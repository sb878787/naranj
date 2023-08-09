<template>
    <div class="contact overflow-x-hidden">
        <TheHeader />
        
        <div class="relative overflow-hidden xl:w-[750px] h-screen w-full xl:rounded-br-[80%] rounded-br-0">
            <img class="absolute object-cover -z-20 xl:w-[750px] h-screen w-full object-center" src="../assets/image 61.png" alt="logo"/>
            <TheResponsiveHeader />
            <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
        </div>

        <TheSocialWhite />

        <div dir="rtl" class="xl:absolute xl:top-[25%] xl:right-0 xl:px-44 static px-8 mt-8 xl:mt-0">
            <p class="font-YekanM text-[#FF6300] xl:text-xl text-lg">برای شروع از ما راهنمایی بخواهید...</p>
            <p class="font-YekanB xl:text-4xl text-2xl xl:pt-5 pt-3 leading-tight xl:text-[#000] text-[#4D4D4D]">ما می توانیم با توجه به بودجه <br class="hidden xl:block"> و اهداف سازمان شما ، نزدیک ترین <br class="hidden xl:block"> مسیر را برای کسب و کار هوشمند <br class="hidden xl:block"> شما تدوین نماییم.</p>
            <p class="font-YekanM text-[#4D4D4D] xl:text-xl xl:pt-10 pt-7 leading-9">خدمات مشاوره نارنج در حوزه فناوری اطلاعات وب به صورت هدفمند ، اختصاصی و <br class="hidden xl:block"> بر مبنای نیاز شما راهکارهایی را ارائه می کند که شاید قبلا به ذهن شما نرسیده و یا <br  class="hidden xl:block"> اهمیت آن برای شما روشن نشده باشد. <br  class="hidden xl:block"> استراتژی ورود موفق کسب و کارها به دنیای مجازی و همچنین راهکارهای کشف <br  class="hidden xl:block"> بازار های جدید نیاز به یک مشاور و راهنما دارد تا راه پر پیچ و خم کسب و کار آنلاین <br  class="hidden xl:block"> و تجارت الکترونیک آنها را آگاه ساخته و راهکار های مناسب ، هدفمند و مقرون به <br  class="hidden xl:block"> صرفه ارائه نماید.</p>
        </div>

        <div class="absolute right-0 top-[30%] -z-50 hidden xl:block">
            <svg width="237" height="238" viewBox="0 0 237 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M237.128 0.156766C206.009 0.156774 175.194 6.28621 146.443 18.1951C117.693 30.104 91.569 47.5592 69.5642 69.564C47.5594 91.5688 30.1042 117.692 18.1953 146.443C6.28638 175.194 0.156962 206.008 0.156959 237.128L116.074 237.128C116.074 221.231 119.205 205.489 125.288 190.802C131.372 176.115 140.289 162.77 151.53 151.529C162.771 140.289 176.116 131.372 190.803 125.288C205.49 119.205 221.231 116.073 237.128 116.073L237.128 0.156766Z" fill="#F2F2F2" fill-opacity="0.49"/>
            </svg>
        </div>

        <div class="absolute top-[79%] left-[27%] hidden xl:block">
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.75 56.75C43.9094 69.5906 23.0906 69.5906 10.25 56.75C-2.59062 43.9094 -2.59062 23.0906 10.25 10.25C23.0906 -2.59062 43.9094 -2.59062 56.75 10.25C69.5906 23.0906 69.5906 43.9094 56.75 56.75ZM24.0402 24.0402C18.8156 29.2647 18.8156 37.7353 24.0402 42.9598C29.2647 48.1844 37.7353 48.1844 42.9598 42.9598C48.1844 37.7353 48.1844 29.2647 42.9598 24.0402C37.7353 18.8156 29.2647 18.8156 24.0402 24.0402Z" fill="#F2F2F2"/>
            </svg>
        </div>

        <div class="absolute top-[74%] left-[40%] hidden xl:block">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M95.4662 70.5205C84.3146 95.449 55.0659 106.617 30.1374 95.4658C5.20888 84.3143 -5.95952 55.0656 5.19206 30.1371C16.3436 5.20855 45.5923 -5.95986 70.5208 5.19173C95.4494 16.3433 106.618 45.592 95.4662 70.5205ZM26.5044 39.671C20.6183 52.829 26.5133 68.2673 39.6713 74.1535C52.8293 80.0396 68.2677 74.1446 74.1538 60.9866C80.04 47.8286 74.1449 32.3902 60.9869 26.5041C47.8289 20.6179 32.3906 26.513 26.5044 39.671Z" fill="#7A74FC"/>
            </svg>
        </div>

        <div class="absolute top-[78%] left-[38%] hidden xl:block">
            <svg width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.598666 138.197C0.598666 146.481 7.33034 153.274 15.5746 152.461C30.4773 150.991 45.1103 147.333 58.9956 141.581C77.5097 133.912 94.3321 122.672 108.502 108.502C122.672 94.332 133.913 77.5096 141.581 58.9955C147.333 45.1102 150.991 30.4772 152.461 15.5745C153.274 7.33025 146.482 0.59858 138.197 0.59858L15.5987 0.59858C7.31439 0.59858 0.598672 7.31431 0.598671 15.5986L0.598666 138.197Z" fill="#FF8030" fill-opacity="0.59"/>
            </svg>
        </div>

        <TakesProject />

        <div dir="rtl" class="flex-row px-60 items-center justify-between -space-x-6 mt-8 hidden xl:flex">
            <p class="text-xl font-YekanB text-center leading-8">ثبت درخواست <br> مشاوره در نارنج</p>
            <p class="text-xl font-YekanB text-center leading-8">بررسی توسط <br> مشاورین نارنج</p>
            <p class="text-xl font-YekanB text-center leading-8">دعوت برای جلسه <br> حضوری یا آنلاین</p>
            <p class="text-xl font-YekanB text-center leading-8">بررسی نتایج <br> جلسه مشاوره</p>
            <p class="text-xl font-YekanB text-center leading-8">ارائه راهکار <br> اجرایی توسط نارنج</p>
        </div>

        <ContactSupport />

        <TheFooter />
    </div>
</template>

<script>
    import TheFooter from "@/components/Footers/TheFooter.vue";
    import TheHeader from "@/components/Headers/TheHeader.vue";
    import TheResponsiveHeader from "@/components/Headers/TheResponsiveHeader.vue";
    import TheSocialWhite from "@/components/Social/TheSocialWhite.vue";
    import TakesProject from "@/components/TakesProject.vue";
    import ContactSupport from "@/components/ContactSupport.vue"

    export default {
        components: {
            TheFooter,
            TheResponsiveHeader,
            TheHeader,
            TheSocialWhite,
            TakesProject,
            ContactSupport
        },
        data() {
            return {}
        }
    }
</script>