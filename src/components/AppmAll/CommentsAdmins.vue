<template>
    <div>
        <p class="font-YekanB xl:text-4xl text-3xl xl:text-[#000] text-[#4D4D4D] text-right xl:px-44 px-8 xl:mt-48 mt-16 xl:leading-snug leading-normal">نظر مدیران مراکز خرید <br> درباره خدمات اپلیکیشن نارنج</p>
        <p class="font-YekanM xl:text-xl text-lg text-[#4D4D4D] text-right xl:px-44 px-8 mt-5 xl:leading-loose leading-loose" dir="rtl">ببینید مشتریان ما در مورد روشی که خدمات توسعه اپلیکیشن نارنج به آنها <br class="hidden xl:block"> در بهره گیری از فناوری های پیشرفته کمک می کند می گویند.</p>

        <div class="xl:px-44 px-8 xl:mt-20 mt-14">
            <swiper :options="swiperOptions" dir="rtl">
                <swiper-slide>
                    <div class="p-5">
                        <div class="bg-white rounded-lg shadow-md xl:p-16 p-8">
                            <div class="flex xl:items-start items-center justify-start xl:gap-x-7 gap-x-3">
                                <div class="xl:border-b-[3px] xl:border-[#FF8030] xl:pb-6">
                                    <div class="relative overflow-hidden w-16 h-16 rounded-full">
                                        <img src="../../assets/image 64.png" class="absolute object-cover object-center w-16 h-16" alt="profile">
                                    </div>
                                </div>
                                <div class="flex flex-col xl:gap-y-2 gap-y-1" dir="rtl">
                                    <p class="font-YekanB xl:text-2xl text-lg">شهرام حدادی ابیانه</p>
                                    <p class="font-YekanM xl:text-lg text-sm text-[#767676]">مدیر عامل شرکت بنای آرمانی</p>
                                </div>
                            </div>
                            <div class="flex flex-col xl:flex-row gap-x-10 gap-y-5 items-center justify-between">
                                <div class="xl:w-1/2 w-full">
                                    <p class="text-[#4C4C4C] font-YekanM xl:text-lg leading-relaxed xl:pt-3 pt-6">
                                        آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی
                                    </p>
                                </div>
                                <div class="relative xl:w-1/2 w-full">
                                    <div class="relative overflow-hidden w-full xl:h-52 h-32 rounded-xl flex items-center justify-center">
                                        <img src="../../assets/image 68.png" class="absolute object-cover object-center w-full xl:h-52 h-32 z-10" alt="profile">
                                        <button @click="openModal2" class="bg-[#FF8030] rounded-full w-14 h-14 flex items-center justify-center absolute z-40">
                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.17272C0 0.973437 0.0462501 0.778009 0.133751 0.603154C0.421252 0.0374444 1.07126 -0.166983 1.58751 0.148015L14.4501 7.97537C14.6251 8.08209 14.7688 8.24023 14.8651 8.4318C15.1526 8.99751 14.9651 9.71107 14.4501 10.0248L1.58751 17.8521C1.43063 17.9484 1.25144 17.9995 1.06876 18C0.478753 18 0 17.4754 0 16.8287V1.17272Z" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="p-5">
                        <div class="bg-white rounded-lg shadow-md xl:p-16 p-8">
                            <div class="flex xl:items-start items-center justify-start xl:gap-x-7 gap-x-3">
                                <div class="xl:border-b-[3px] xl:border-[#FF8030] xl:pb-6">
                                    <div class="relative overflow-hidden w-16 h-16 rounded-full">
                                        <img src="../../assets/image 64.png" class="absolute object-cover object-center w-16 h-16" alt="profile">
                                    </div>
                                </div>
                                <div class="flex flex-col xl:gap-y-2 gap-y-1" dir="rtl">
                                    <p class="font-YekanB xl:text-2xl text-lg">شهرام حدادی ابیانه</p>
                                    <p class="font-YekanM xl:text-lg text-sm text-[#767676]">مدیر عامل شرکت بنای آرمانی</p>
                                </div>
                            </div>
                            <div class="flex flex-col xl:flex-row gap-x-10 gap-y-5 items-center justify-between">
                                <div class="xl:w-1/2 w-full">
                                    <p class="text-[#4C4C4C] font-YekanM xl:text-lg leading-relaxed xl:pt-3 pt-6">
                                        آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی
                                    </p>
                                </div>
                                <div class="relative xl:w-1/2 w-full">
                                    <div class="relative overflow-hidden w-full xl:h-52 h-32 rounded-xl flex items-center justify-center">
                                        <img src="../../assets/image 68.png" class="absolute object-cover object-center w-full xl:h-52 h-32 z-10" alt="profile">
                                        <button @click="openModal2" class="bg-[#FF8030] rounded-full w-14 h-14 flex items-center justify-center absolute z-40">
                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.17272C0 0.973437 0.0462501 0.778009 0.133751 0.603154C0.421252 0.0374444 1.07126 -0.166983 1.58751 0.148015L14.4501 7.97537C14.6251 8.08209 14.7688 8.24023 14.8651 8.4318C15.1526 8.99751 14.9651 9.71107 14.4501 10.0248L1.58751 17.8521C1.43063 17.9484 1.25144 17.9995 1.06876 18C0.478753 18 0 17.4754 0 16.8287V1.17272Z" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="p-5">
                        <div class="bg-white rounded-lg shadow-md xl:p-16 p-8">
                            <div class="flex xl:items-start items-center justify-start xl:gap-x-7 gap-x-3">
                                <div class="xl:border-b-[3px] xl:border-[#FF8030] xl:pb-6">
                                    <div class="relative overflow-hidden w-16 h-16 rounded-full">
                                        <img src="../../assets/image 64.png" class="absolute object-cover object-center w-16 h-16" alt="profile">
                                    </div>
                                </div>
                                <div class="flex flex-col xl:gap-y-2 gap-y-1" dir="rtl">
                                    <p class="font-YekanB xl:text-2xl text-lg">شهرام حدادی ابیانه</p>
                                    <p class="font-YekanM xl:text-lg text-sm text-[#767676]">مدیر عامل شرکت بنای آرمانی</p>
                                </div>
                            </div>
                            <div class="flex flex-col xl:flex-row gap-x-10 gap-y-5 items-center justify-between">
                                <div class="xl:w-1/2 w-full">
                                    <p class="text-[#4C4C4C] font-YekanM xl:text-lg leading-relaxed xl:pt-3 pt-6">
                                        آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی
                                    </p>
                                </div>
                                <div class="relative xl:w-1/2 w-full">
                                    <div class="relative overflow-hidden w-full xl:h-52 h-32 rounded-xl flex items-center justify-center">
                                        <img src="../../assets/image 68.png" class="absolute object-cover object-center w-full xl:h-52 h-32 z-10" alt="profile">
                                        <button @click="openModal2" class="bg-[#FF8030] rounded-full w-14 h-14 flex items-center justify-center absolute z-40">
                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.17272C0 0.973437 0.0462501 0.778009 0.133751 0.603154C0.421252 0.0374444 1.07126 -0.166983 1.58751 0.148015L14.4501 7.97537C14.6251 8.08209 14.7688 8.24023 14.8651 8.4318C15.1526 8.99751 14.9651 9.71107 14.4501 10.0248L1.58751 17.8521C1.43063 17.9484 1.25144 17.9995 1.06876 18C0.478753 18 0 17.4754 0 16.8287V1.17272Z" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="p-5">
                        <div class="bg-white rounded-lg shadow-md xl:p-16 p-8">
                            <div class="flex xl:items-start items-center justify-start xl:gap-x-7 gap-x-3">
                                <div class="xl:border-b-[3px] xl:border-[#FF8030] xl:pb-6">
                                    <div class="relative overflow-hidden w-16 h-16 rounded-full">
                                        <img src="../../assets/image 64.png" class="absolute object-cover object-center w-16 h-16" alt="profile">
                                    </div>
                                </div>
                                <div class="flex flex-col xl:gap-y-2 gap-y-1" dir="rtl">
                                    <p class="font-YekanB xl:text-2xl text-lg">شهرام حدادی ابیانه</p>
                                    <p class="font-YekanM xl:text-lg text-sm text-[#767676]">مدیر عامل شرکت بنای آرمانی</p>
                                </div>
                            </div>
                            <div class="flex flex-col xl:flex-row gap-x-10 gap-y-5 items-center justify-between">
                                <div class="xl:w-1/2 w-full">
                                    <p class="text-[#4C4C4C] font-YekanM xl:text-lg leading-relaxed xl:pt-3 pt-6">
                                        آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی
                                    </p>
                                </div>
                                <div class="relative xl:w-1/2 w-full">
                                    <div class="relative overflow-hidden w-full xl:h-52 h-32 rounded-xl flex items-center justify-center">
                                        <img src="../../assets/image 68.png" class="absolute object-cover object-center w-full xl:h-52 h-32 z-10" alt="profile">
                                        <button @click="openModal2" class="bg-[#FF8030] rounded-full w-14 h-14 flex items-center justify-center absolute z-40">
                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.17272C0 0.973437 0.0462501 0.778009 0.133751 0.603154C0.421252 0.0374444 1.07126 -0.166983 1.58751 0.148015L14.4501 7.97537C14.6251 8.08209 14.7688 8.24023 14.8651 8.4318C15.1526 8.99751 14.9651 9.71107 14.4501 10.0248L1.58751 17.8521C1.43063 17.9484 1.25144 17.9995 1.06876 18C0.478753 18 0 17.4754 0 16.8287V1.17272Z" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="p-5">
                        <div class="bg-white rounded-lg shadow-md xl:p-16 p-8">
                            <div class="flex xl:items-start items-center justify-start xl:gap-x-7 gap-x-3">
                                <div class="xl:border-b-[3px] xl:border-[#FF8030] xl:pb-6">
                                    <div class="relative overflow-hidden w-16 h-16 rounded-full">
                                        <img src="../../assets/image 64.png" class="absolute object-cover object-center w-16 h-16" alt="profile">
                                    </div>
                                </div>
                                <div class="flex flex-col xl:gap-y-2 gap-y-1" dir="rtl">
                                    <p class="font-YekanB xl:text-2xl text-lg">شهرام حدادی ابیانه</p>
                                    <p class="font-YekanM xl:text-lg text-sm text-[#767676]">مدیر عامل شرکت بنای آرمانی</p>
                                </div>
                            </div>
                            <div class="flex flex-col xl:flex-row gap-x-10 gap-y-5 items-center justify-between">
                                <div class="xl:w-1/2 w-full">
                                    <p class="text-[#4C4C4C] font-YekanM xl:text-lg leading-relaxed xl:pt-3 pt-6">
                                        آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی
                                    </p>
                                </div>
                                <div class="relative xl:w-1/2 w-full">
                                    <div class="relative overflow-hidden w-full xl:h-52 h-32 rounded-xl flex items-center justify-center">
                                        <img src="../../assets/image 68.png" class="absolute object-cover object-center w-full xl:h-52 h-32 z-10" alt="profile">
                                        <button @click="openModal2" class="bg-[#FF8030] rounded-full w-14 h-14 flex items-center justify-center absolute z-40">
                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.17272C0 0.973437 0.0462501 0.778009 0.133751 0.603154C0.421252 0.0374444 1.07126 -0.166983 1.58751 0.148015L14.4501 7.97537C14.6251 8.08209 14.7688 8.24023 14.8651 8.4318C15.1526 8.99751 14.9651 9.71107 14.4501 10.0248L1.58751 17.8521C1.43063 17.9484 1.25144 17.9995 1.06876 18C0.478753 18 0 17.4754 0 16.8287V1.17272Z" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <div class="flex pl-5 mt-2 xl:hidden" dir="ltr">
            <div class="swiper-pagination" dir="rtl"></div>
        </div>

        <transition name="translateY">
            <div v-show="inModalOpen2" @click="closeModal2" class="fixed top-0 z-50 w-full h-screen bg-black bg-opacity-[0.5] flex items-center justify-center">
                <button type="button" @click="closeModal2" class="text-white bg-[#FF6300] rounded-lg p-5 px-6 absolute xl:top-24 xl:right-96 top-44 right-8 text-xl">&#10005;</button>
                <div>
                    <video id="videoElement2" width="100%" controls>
                        <source src="../../assets/video/047f812ca27807257a076707913a5fc938923532-480p.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inModalOpen2: false,
                swiperOptions : {
                    slidesPerView:1.5,
                    breakpoints: {
                        1366: {
                            slidesPerView:1.5,
                        },
                        150: {
                            slidesPerView: 1
                        }
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }
                }
            }
        },
        methods: {
            openModal2() {
                this.inModalOpen2 = true
                document.body.classList.add('over');
            },
            closeModal2() {
                let video = document.getElementById('videoElement2')
                video.pause()
                this.inModalOpen2 = false
                document.body.classList.remove('over');
            }
        }
    }
</script>

<style>
    .translateY-enter{
        transform:translateY(-200px);
        opacity: 0;
    }
    .translateY-enter-active,.translateY-leave-active{
        transform-origin: top left 0;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
    }
    .translateY-leave-to{
        transform: translateY(-200px);
        opacity: 0;
    }
</style>