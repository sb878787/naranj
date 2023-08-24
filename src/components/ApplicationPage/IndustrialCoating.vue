<template>
    <div>
        <swiper :options="swiperOptions2" dir="rtl" class="flex xl:hidden mr-11 mb-11">
    	    <swiper-slide v-for="event in events">
                <div class="flex flex-col justify-center items-center">
                    <img :src="require(`../../assets/${event.ImageSrc}.png`)" class="h-16 w-20 object-contain" alt="logo"/>

                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">{{ event.title }}</p>
                </div>
	        </swiper-slide>
  	    </swiper>

        <div class="flex flex-col">
            <div dir="rtl" class="xl:flex hidden px-60 justify-between items-center flex-wrap gap-20">
                <div v-for="DesktopEvent in DesktopEvents" class="flex flex-col justify-center items-center">
                    <img :src="require(`../../assets/${DesktopEvent.ImageSrc}.png`)" class="h-20 w-24 object-contain" alt="logo"/>

                    <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">{{ DesktopEvent.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions2 : {
                    breakpoints: {
                        150: {
                            slidesPerView: 1.5,
                        },
                        700: {
                            slidesPerView: 2.5,
                        }
                    },
                    loop: true
                },
                events: [
                    {
                        ImageSrc: 'image 25',
                        title: 'Healthcare'
                    },
                    {
                        ImageSrc: 'image 26',
                        title: 'Finance'
                    },
                    {
                        ImageSrc: 'image 27',
                        title: 'IoT'
                    },
                    {
                        ImageSrc: 'image 28',
                        title: 'Fitness'
                    },
                    {
                        ImageSrc: 'image 29',
                        title: 'Game'
                    },
                    {
                        ImageSrc: 'image 30',
                        title: 'Logistics'
                    },
                    {
                        ImageSrc: 'image 31',
                        title: 'Retail'
                    },
                    {
                        ImageSrc: 'image 32',
                        title: 'Social'
                    },
                    {
                        ImageSrc: 'image 33',
                        title: 'Education'
                    },
                    {
                        ImageSrc: 'image 34',
                        title: 'AR/ VR'
                    },
                    {
                        ImageSrc: 'image 35',
                        title: 'Wellness'
                    },
                    {
                        ImageSrc: 'image 36',
                        title: 'Travel'
                    }
                ],
                DesktopEvents: [
                    {
                        ImageSrc: 'image 25',
                        title: 'Healthcare'
                    },
                    {
                        ImageSrc: 'image 26',
                        title: 'Finance'
                    },
                    {
                        ImageSrc: 'image 27',
                        title: 'IoT'
                    },
                    {
                        ImageSrc: 'image 28',
                        title: 'Fitness'
                    },
                    {
                        ImageSrc: 'image 29',
                        title: 'Game'
                    },
                    {
                        ImageSrc: 'image 30',
                        title: 'Logistics'
                    },
                    {
                        ImageSrc: 'image 31',
                        title: 'Retail'
                    },
                    {
                        ImageSrc: 'image 32',
                        title: 'Social'
                    },
                    {
                        ImageSrc: 'image 33',
                        title: 'Education'
                    },
                    {
                        ImageSrc: 'image 34',
                        title: 'AR/ VR'
                    },
                    {
                        ImageSrc: 'image 35',
                        title: 'Wellness'
                    },
                    {
                        ImageSrc: 'image 36',
                        title: 'Travel'
                    },
                ]
            }
        }
    }
</script>