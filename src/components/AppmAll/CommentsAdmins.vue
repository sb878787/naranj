<template>
    <div>
        <p class="font-YekanB xl:text-4xl text-3xl xl:text-[#000] text-[#4D4D4D] text-right xl:px-44 px-8 xl:mt-48 mt-16 xl:leading-snug leading-normal">نظر مدیران مراکز خرید <br> درباره خدمات اپلیکیشن نارنج</p>
        <p class="font-YekanM xl:text-xl text-lg text-[#4D4D4D] text-right xl:px-44 px-8 mt-5 xl:leading-loose leading-loose" dir="rtl">ببینید مشتریان ما در مورد روشی که خدمات توسعه اپلیکیشن نارنج به آنها <br class="hidden xl:block"> در بهره گیری از فناوری های پیشرفته کمک می کند می گویند.</p>

        <div class="xl:px-44 px-8 xl:mt-20 mt-14">
            <swiper :options="swiperOptions" dir="rtl">
                <swiper-slide v-for="comment in comments">
                    <SliderComments @openModal="openModal" :data="comment" />
                </swiper-slide>
            </swiper>
        </div>

        <div class="flex pl-5 mt-2 xl:hidden" dir="ltr">
            <div class="swiper-pagination" dir="rtl"></div>
        </div>

        <Modal :is-play-video="isPlayVideo" :video-src="videoSrc" />
    </div>
</template>

<script>
    import Modal from './Modal.vue';
    import SliderComments from './SliderComments.vue';

    export default {
        components: {
            Modal,
            SliderComments
        },
        data() {
            return {
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
                },
                isPlayVideo: false,
                videoSrc: "",
                comments: [
                    {
                        name: 'شهرام حدادی ابیانه',
                        title: 'مدیر عامل شرکت بنای آرمانی',
                        profile: "image64",
                        text: 'آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی',
                        image: "image68"
                    },
                    {
                        name: 'سید محمد علی صابری',
                        title: 'کارآموز شرکت نارنج',
                        profile: "image63",
                        text: 'آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی',
                        image: "image10"
                    },
                    {
                        name: 'مهندس سیدی',
                        title: 'فرانت کار شرکت نارنج',
                        profile: "Group241",
                        text: 'آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی',
                        image: "Rectangle117"
                    }
                ]
            }
        },
        methods: {
            openModal(src) {
                this.isPlayVideo = !this.isPlayVideo;

                this.videoSrc = src;
            }
        }
    }
</script>