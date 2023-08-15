<template>
    <layout name="default">
        <div class="application overflow-x-hidden">
            <div class="relative overflow-hidden w-full h-screen block xl:hidden">
                <img class="absolute object-cover -z-20 w-full h-screen object-center" src="../assets/Rectangle 94.png" alt="logo"/>
                <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
            </div>

            <div>
                <img src="../assets/Rectangle 94.png" alt="logo" class="absolute hidden xl:block left-0 top-0 h-[800px] w-[550px]" />

                <TheSocialWhite />

                <div class="absolute left-[28%] -z-50 top-[35%] hidden xl:block">
                    <svg width="57" height="114" viewBox="0 0 57 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-3.93352e-06 0.431468C7.42869 0.431468 14.7846 1.89466 21.6479 4.73749C28.5111 7.58033 34.7471 11.7471 40 17C45.2529 22.2529 49.4197 28.489 52.2625 35.3522C55.1054 42.2154 56.5686 49.5713 56.5686 57C56.5686 64.4287 55.1054 71.7847 52.2625 78.6479C49.4197 85.5111 45.2529 91.7472 40 97.0001C34.7471 102.253 28.5111 106.42 21.6479 109.263C14.7846 112.105 7.42869 113.569 -1.01186e-06 113.569L-5.73198e-07 89.045C4.2082 89.045 8.37519 88.2161 12.2631 86.6057C16.1509 84.9953 19.6835 82.6349 22.6592 79.6592C25.6348 76.6836 27.9952 73.151 29.6056 69.2631C31.2161 65.3752 32.0449 61.2082 32.0449 57C32.0449 52.7918 31.2161 48.6248 29.6056 44.737C27.9952 40.8491 25.6348 37.3165 22.6592 34.3409C19.6835 31.3652 16.1509 29.0048 12.2631 27.3944C8.37519 25.784 4.2082 24.9551 -2.22826e-06 24.9551L-3.93352e-06 0.431468Z" fill="#F2F2F2"/>
                    </svg>
                </div>
                
                <div class="absolute left-[36%] top-[23%] hidden xl:block">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M95.4662 70.5205C84.3146 95.449 55.0659 106.617 30.1374 95.4658C5.20888 84.3143 -5.95952 55.0656 5.19206 30.1371C16.3436 5.20855 45.5923 -5.95986 70.5208 5.19173C95.4494 16.3433 106.618 45.592 95.4662 70.5205ZM26.5044 39.671C20.6183 52.829 26.5133 68.2673 39.6713 74.1535C52.8293 80.0396 68.2677 74.1446 74.1538 60.9866C80.04 47.8286 74.1449 32.3902 60.9869 26.5041C47.8289 20.6179 32.3906 26.513 26.5044 39.671Z" fill="#7A74FC"/>
                    </svg>
                </div>

                <div dir="rtl" class="xl:px-44 px-8 xl:mt-56 mt-8">
                    <p class="font-YekanM xl:text-xl text-lg text-[#FF6300]">طراحی موبایل اپلیکیشن</p>
                    <p class="font-YekanB xl:text-5xl text-2xl xl:pt-10 pt-2 leading-tight text-[#4D4D4D] xl:text-black">تجارت خود را با راه حل های مناسب <br> اپلیکیشن موبایل رشد دهید.</p>
                    <p class="font-YekanM xl:text-xl text-[#4D4D4D] xl:pt-14 pt-5 xl:leading-loose leading-relaxed">یک برنامه موفقیت آمیز همراه سه جنبه را با روشی هوشمدانه ترکیب می کند: <br> بازار ، کاربر و خود محصول. همه این عوامل باید با هم کار کنند تا به کاربران <br class="hidden xl:block"> یک ارزش منحصر به فرد ، قابلیت استفاده عالی و عملکرد خوب ارائه دهند. <br class="hidden xl:block"> با استفاده از ابزارها و رشهای صحیح می توانید اطمینان حاصل کنید که <br class="hidden xl:block"> محصول شما به خوبی مورد نیاز بازار ساخته شده و به خوبی تکمیل شده است.</p>
                </div>
            </div>

            <div dir="rtl" class="w-full xl:pt-80 pt-12 px-8 xl:px-0">
                <p class="text-center font-YekanB xl:text-4xl text-2xl font-black leading-tight">با توسعه برنامه تلفن همراه به <br> اهداف تجاری خود برسید</p>
                
                <p class="text-center font-YekanM xl:text-xl text-lg text-[#4D4D4D] pt-3 leading-relaxed">برای دستیابی به نتیج بهتر ، اهداف تجاری و راه حل های فناوری را <br class="hidden xl:block"> به روشی هوشمدانه <br class="block xl:hidden"> ترکیب کنید.</p>
            </div>

            <OperatingSystems />

            <DesignPhone />

            <p class="font-YekanB text-right xl:px-44 px-8 xl:text-4xl text-2xl xl:mt-40 mt-11 xl:mb-28 mb-8">فرآیند توسعه برنامه ما</p>

            <DevelopmentProcess />

            <p class="font-YekanB text-right xl:px-44 px-8 xl:text-4xl text-2xl xl:mt-40 mt-11 xl:mb-28 mb-8">فناوری های کاربردی</p>

            <AppliedTechnologies />

            <p class="font-YekanB text-right xl:px-44 px-8 xl:text-4xl text-2xl xl:mt-40 mt-8 xl:mb-28 mb-8">پوشش صنعتی خدمات نارنج</p>

            <AppliedTechnologies />

            <DivBlue />            
        </div>
    </layout>
</template>

<script>
    import Layout from "@/components/Layouts";
    import TheSocialWhite from "@/components/Social/TheSocialWhite.vue";
    import DivBlue from "@/components/DivBlue.vue";
    import OperatingSystems from "@/components/ApplicationPage/OperatingSystems.vue";
    import DesignPhone from "@/components/ApplicationPage/DesignPhone.vue";
    import DevelopmentProcess from "@/components/ApplicationPage/DevelopmentProcess.vue";
    import AppliedTechnologies from "@/components/ApplicationPage/AppliedTechnologies.vue";

    export default {
        name: 'Application',
        components: {
            Layout,
            TheSocialWhite,
            DivBlue,
            OperatingSystems,
            DesignPhone,
            DevelopmentProcess,
            AppliedTechnologies
        },
        data() {
            return {}
        }
    }
</script>