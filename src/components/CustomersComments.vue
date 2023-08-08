<template>
    <div>
        <div class="pr-0 xl:pr-24 mt-6">
            <div dir="rtl" class="xl:relative xl:z-20 z-0 static w-full p-14 px-8 xl:pr-14 pl-0 xl:py-16 rounded-r-0 xl:rounded-r-xl bg-[#C9C9C9] xl:bg-[#2E58D1]">
                
                <div class="absolute left-0 hidden xl:block">
                    <svg width="171" height="204" viewBox="0 0 171 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="68.7378" cy="102.172" r="101.772" transform="rotate(-45.0585 68.7378 102.172)" fill="url(#paint0_linear_1_3999)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1_3999" x1="27.124" y1="9.44373" x2="107.944" y2="168.628" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0A3BC9"/>
                                <stop offset="0.989114" stop-color="#0A3BC9" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div class="absolute top-8 left-[30%] hidden xl:block">
                    <svg width="173" height="173" viewBox="0 0 173 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="86.4765" cy="86.4766" r="85.5338" transform="rotate(-9.49884 86.4765 86.4766)" fill="url(#paint0_linear_1_3997)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1_3997" x1="51.5023" y1="8.54326" x2="119.427" y2="142.329" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0A3BC9"/>
                                <stop offset="0.989114" stop-color="#0A3BC9" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div class="absolute right-[8%] -z-10 hidden xl:block">
                    <svg width="357" height="357" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="178.622" cy="178.622" r="177.928" transform="rotate(45.4105 178.622 178.622)" fill="url(#paint0_linear_1_3996)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1_3996" x1="105.868" y1="16.5044" x2="247.166" y2="294.806" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0A3BC9"/>
                                <stop offset="0.989114" stop-color="#0A3BC9" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <p class="text-[#FF6300] font-YekanM xl:text-xl text-lg">نظرات مشتریان نارنج</p>
                <p class="text-white xl:text-4xl text-2xl font-YekanM pt-3 xl:pt-5 leading-snug xl:mb-24 mb-16">ما همیشه آماده <br> انجام کار های بزرگ هستیم</p>
                
                <swiper :options="swiperOptions" class="xl:pl-14" dir="rtl">
                    <swiper-slide v-for="slide in slides">
                        <div class="pb-14 xl:pb-0">
                            <div class="bg-white rounded-xl p-7 pb-0 xl:ml-0 ml-8" dir="rtl">
                                <img :src="slide.svg" class="hidden sm:block" :alt="slide.alt2" />

                                <p class="text-[#4C4C4C] font-YekanM text-sm xl:text-xl pt-0 sm:pt-5">
                                    {{ slide.title }}
                                </p>

                                <div class="flex xl:mt-12 mt-5">
                                    <div class="xl:border-b-8 xl:border-[#FF7E30] border-0 pb-7">
                                        <img :src="slide.img" :alt="slide.alt" class="rounded-full w-[65px] h-[65px] object-cover sm:static absolute top-36"/>
                                    </div>

                                    <div class="flex mr-24 mb-6 sm:mr-0 sm:mb-0">
                                        <div class="block sm:hidden pt-[6px]">
                                            <svg width="15" height="10" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1H11" stroke="black"/>
                                            </svg>
                                        </div>

                                        <div class="flex flex-col items-start sm:pt-2 xl:pt-1">
                                            <p class="text-[#4D4D4D] font-YekanM xl:text-xl sm:text-lg text-sm text-right font-semibold pr-4">
                                                {{ slide.name }}
                                            </p>

                                            <p class="text-[#767676] font-YekanM text-right pt-2 xl:text-lg sm:text-md text-[10px] pr-4">
                                                {{ slide.text }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

                <div class="flex pl-9 xl:pt-10 pt-0 mb-9 xl:mb-0" dir="ltr">
                    <div class="swiper-pagination" dir="rtl"></div>
                </div>

                <button type="button" class="bg-[#FF6300] rounded-md absolute mt-9 w-44 hidden xl:block">
                    <div class="flex justify-between">
                        <div>
                            <p class="text-white font-YekanM text-center px-5 pt-4 text-[17px]">ثبت سفارش</p>
                        </div>

                        <div class="bg-[#FF8030] p-4 rounded-md">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1455 11.4583C17.0085 11.4583 17.708 10.7588 17.708 9.89584C17.708 9.03289 17.0085 8.33334 16.1455 8.33334C15.2826 8.33334 14.583 9.03289 14.583 9.89584C14.583 10.7588 15.2826 11.4583 16.1455 11.4583Z" fill="white"/>
                                <path d="M8.85449 11.4583C9.71744 11.4583 10.417 10.7588 10.417 9.89584C10.417 9.03289 9.71744 8.33334 8.85449 8.33334C7.99155 8.33334 7.29199 9.03289 7.29199 9.89584C7.29199 10.7588 7.99155 11.4583 8.85449 11.4583Z" fill="white"/>
                                <path d="M12.5003 18.75C14.8753 18.75 16.8962 17.0208 17.7087 14.5833H7.29199C8.10449 17.0208 10.1253 18.75 12.5003 18.75Z" fill="white"/>
                                <path d="M12.4893 2.08333C6.73926 2.08333 2.08301 6.75 2.08301 12.5C2.08301 18.25 6.73926 22.9167 12.4893 22.9167C18.2497 22.9167 22.9163 18.25 22.9163 12.5C22.9163 6.75 18.2497 2.08333 12.4893 2.08333ZM12.4997 20.8333C7.89551 20.8333 4.16634 17.1042 4.16634 12.5C4.16634 7.89583 7.89551 4.16667 12.4997 4.16667C17.1038 4.16667 20.833 7.89583 20.833 12.5C20.833 17.1042 17.1038 20.8333 12.4997 20.8333Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import ProfileUser from '@/assets/Man3.jpg';
    import logoSlider from '@/assets/logo-slider.png';

    export default {
        data() {
            return {
                swiperOptions : {
                    spaceBetween:50,
                    slidesPerView:2.6,
                    breakpoints: {
                        1366: {
                            spaceBetween:50,
                            slidesPerView:2.6,
                        },
                        150: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        700: {
                            slidesPerView: 1.7,
                            spaceBetween: 20
                        }
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }
                },
                slides : [
                    {
                        svg : logoSlider,
                        alt2 : 'Logo',
                        title : 'تیم نارنج در طول سال هایی که تمام خدمات تلاش کرده تمامی کارها با کیفیت و در زمان گروه منسجم ... دیجیتال شرکت در اختیار این گروه بوده همیشه',
                        img : ProfileUser,
                        alt : 'Profile',
                        name : 'شهرام حدادی ابیانه',
                        text : 'مدیر عامل شرکت بنای آرمانی'
                    },
                    {
                        svg : logoSlider,
                        alt2 : 'Logo',
                        title : 'تیم نارنج در طول سال هایی که تمام خدمات تلاش کرده تمامی کارها با کیفیت و در زمان گروه منسجم ... دیجیتال شرکت در اختیار این گروه بوده همیشه',
                        img : ProfileUser,
                        alt : 'Profile',
                        name : 'شهرام حدادی ابیانه',
                        text : 'مدیر عامل شرکت بنای آرمانی'
                    },
                    {
                        svg : logoSlider,
                        alt2 : 'Logo',
                        title : 'تیم نارنج در طول سال هایی که تمام خدمات تلاش کرده تمامی کارها با کیفیت و در زمان گروه منسجم ... دیجیتال شرکت در اختیار این گروه بوده همیشه',
                        img : ProfileUser,
                        alt : 'Profile',
                        name : 'شهرام حدادی ابیانه',
                        text : 'مدیر عامل شرکت بنای آرمانی'
                    },
                    {
                        svg : logoSlider,
                        alt2 : 'Logo',
                        title : 'تیم نارنج در طول سال هایی که تمام خدمات تلاش کرده تمامی کارها با کیفیت و در زمان گروه منسجم ... دیجیتال شرکت در اختیار این گروه بوده همیشه',
                        img : ProfileUser,
                        alt : 'Profile',
                        name : 'شهرام حدادی ابیانه',
                        text : 'مدیر عامل شرکت بنای آرمانی'
                    },
                    {
                        svg : logoSlider,
                        alt2 : 'Logo',
                        title : 'تیم نارنج در طول سال هایی که تمام خدمات تلاش کرده تمامی کارها با کیفیت و در زمان گروه منسجم ... دیجیتال شرکت در اختیار این گروه بوده همیشه',
                        img : ProfileUser,
                        alt : 'Profile',
                        name : 'شهرام حدادی ابیانه',
                        text : 'مدیر عامل شرکت بنای آرمانی'
                    }
                ]
            }
        }
    }
</script>

<style>
    .swiper-pagination-bullet {
        width: 12px !important;
        height: 12px !important;
        margin: 7px !important;
        background: #e4e4e4 !important;
        opacity: 1 !important;
    }
    .swiper-pagination-bullet-active {
        opacity: 1;
        background: #FF8030 !important;
    }
</style>