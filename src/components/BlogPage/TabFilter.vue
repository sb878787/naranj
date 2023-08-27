<template>
    <div>
        <div dir="rtl" class="hidden xl:flex items-start justify-start xl:mx-44 xl:ml-72 xl:mt-40 font-YekanB text-lg border-b border-[#C4C4C4]">
            <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">همه خبر ها</label>
            <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">اتفاق های نارنجی</label>
            <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">آموزشی</label>
            <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">وبینار</label>
            <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">تکنولوژی</label>
            <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">مراکز خرید</label>
            <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">نوآوری</label>
            <label class="hover:text-[#FF8030] cursor-pointer w-32 text-center h-[52px] hover:border-b-4 hover:border-[#FF8030] duration-100">راهنماهای مشتری</label>
        </div>

        <swiper :options="swiperOptions2" class="flex xl:hidden mr-8 mt-8 font-YekanB text-lg border-b border-[#C4C4C4]" dir="rtl">
            <swiper-slide class="!h-12 hover:text-[#FF8030] cursor-pointer text-center hover:border-b-4 hover:border-[#FF8030] transition-all">
                <label>همه خبر ها</label>
            </swiper-slide>

            <swiper-slide class="!h-12 hover:text-[#FF8030] cursor-pointer text-center hover:border-b-4 hover:border-[#FF8030] transition-all">
                <label>اتفاق های نارنجی</label>
            </swiper-slide>

            <swiper-slide class="!h-12 hover:text-[#FF8030] cursor-pointer text-center hover:border-b-4 hover:border-[#FF8030] transition-all">
                <label>آموزشی</label>
            </swiper-slide>

            <swiper-slide class="!h-12 hover:text-[#FF8030] cursor-pointer text-center hover:border-b-4 hover:border-[#FF8030] transition-all">
                <label>وبینار</label>
            </swiper-slide>

            <swiper-slide class="!h-12 hover:text-[#FF8030] cursor-pointer text-center hover:border-b-4 hover:border-[#FF8030] transition-all">
                <label>تکنولوژی</label>
            </swiper-slide>

            <swiper-slide class="!h-12 hover:text-[#FF8030] cursor-pointer text-center hover:border-b-4 hover:border-[#FF8030] transition-all">
                <label>مراکز خرید</label>
            </swiper-slide>

            <swiper-slide class="!h-12 hover:text-[#FF8030] cursor-pointer text-center hover:border-b-4 hover:border-[#FF8030] transition-all">
                <label>نوآوری</label>
            </swiper-slide>

            <swiper-slide class="!h-12 hover:text-[#FF8030] cursor-pointer text-center hover:border-b-4 hover:border-[#FF8030] transition-all">
                <label>راهنماهای مشتری</label>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions2 : {
                    slidesPerView: 2
                }
            }
        }
    }
</script>