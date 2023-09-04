<template>
    <div>
        <swiper :options="swiperOptions" class="xl:hidden px-8 border-b-2 border-[#F2F2F2] mt-12 flex justify-center items-center" dir="rtl">
            <swiper-slide>
                <label 
                    class="font-YekanM text-lg text-[#4C4C4C] group flex space-x-4 items-stretch justify-stretch hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-32 h-12"
                >
                    <input type="radio" class="invisible" v-model="selectedCategory" value="All" />
                    
                    <svg width="17" height="17" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556ZM6.22222 12.4444H2.33333C1.90556 12.4444 1.55556 12.0944 1.55556 11.6667V7.77778H5.44444C5.87222 7.77778 6.22222 8.12778 6.22222 8.55556V12.4444ZM5.44444 6.22222H1.55556V2.33333C1.55556 1.90556 1.90556 1.55556 2.33333 1.55556H6.22222V5.44444C6.22222 5.87222 5.87222 6.22222 5.44444 6.22222ZM11.6667 12.4444H7.77778V8.55556C7.77778 8.12778 8.12778 7.77778 8.55556 7.77778H12.4444V11.6667C12.4444 12.0944 12.0944 12.4444 11.6667 12.4444ZM12.4444 6.22222H8.55556C8.12778 6.22222 7.77778 5.87222 7.77778 5.44444V1.55556H11.6667C12.0944 1.55556 12.4444 1.90556 12.4444 2.33333V6.22222Z" class="fill-[#767676] group-hover:fill-[#FF8030] duration-75"/>
                    </svg>
                    همه کار ها
                </label>
            </swiper-slide>

            <swiper-slide>
                <label class="font-YekanM text-lg text-[#4C4C4C] flex items-start justify-start hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-28 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="Site" />طراحی سایت</label>
            </swiper-slide>

            <swiper-slide>
                <label class="font-YekanM text-lg text-[#4C4C4C] flex items-start justify-start hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-32 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="App" />طراحی اپلیکیشن</label>
            </swiper-slide>

            <swiper-slide>
                <label class="font-YekanM text-lg text-[#4C4C4C] flex items-start justify-start hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-28 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="Graphics" />طراحی گرافیک</label>
            </swiper-slide>

            <swiper-slide>
                <label class="font-YekanM text-lg text-[#4C4C4C] flex items-start justify-start hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-32 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="Digital" />بازاریابی دیجیتال</label>
            </swiper-slide>

            <swiper-slide>
                <label class="font-YekanM text-lg text-[#4C4C4C] flex items-start justify-start hover:text-[#FF8030] cursor-pointer hover:border-b-4 hover:border-[#FF8030] duration-75 pb-5 w-28 h-12"><input type="radio" class="invisible" v-model="selectedCategory" value="software" />نرم افزار نارنج</label>
            </swiper-slide>
        </swiper>

        <div class="border-b-2 border-[#F2F2F2] hidden xl:block">
            <div class="flex flex-col xl:flex-row xl:justify-center xl:items-start justify-start items-start gap-x-11 px-8 xl:px-0 xl:mt-20 mt-14" dir="rtl">
                <div @click="active = !active" class="font-YekanM group text-lg cursor-pointer hover:text-[#FF8030] border-b-4 border-transparent hover:border-[#FF8030] duration-75 pb-5 w-32" :class="active ? 'text-[#FF8030] border-[#FF8030]' : ''">
                    <label class="flex space-x-4 items-stretch justify-stretch cursor-pointer"><input type="radio" class="invisible" v-model="selectedCategory" value="All" />
                        <svg width="17" height="17" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556ZM6.22222 12.4444H2.33333C1.90556 12.4444 1.55556 12.0944 1.55556 11.6667V7.77778H5.44444C5.87222 7.77778 6.22222 8.12778 6.22222 8.55556V12.4444ZM5.44444 6.22222H1.55556V2.33333C1.55556 1.90556 1.90556 1.55556 2.33333 1.55556H6.22222V5.44444C6.22222 5.87222 5.87222 6.22222 5.44444 6.22222ZM11.6667 12.4444H7.77778V8.55556C7.77778 8.12778 8.12778 7.77778 8.55556 7.77778H12.4444V11.6667C12.4444 12.0944 12.0944 12.4444 11.6667 12.4444ZM12.4444 6.22222H8.55556C8.12778 6.22222 7.77778 5.87222 7.77778 5.44444V1.55556H11.6667C12.0944 1.55556 12.4444 1.90556 12.4444 2.33333V6.22222Z" class="fill-[#767676] group-hover:fill-[#FF8030] duration-75" :class="active ? 'fill-[#FF8030]' : ''"/>
                        </svg>
                        همه کار ها
                    </label>
                </div>

                <div class="font-YekanM text-lg hover:text-[#FF8030] border-b-4 border-transparent hover:border-[#FF8030] duration-75 cursor-pointer pb-5 w-28">
                    <label class="cursor-pointer"><input type="radio" class="invisible" v-model="selectedCategory" value="Site" /> طراحی سایت</label>
                </div>

                <div class="font-YekanM text-lg hover:text-[#FF8030] cursor-pointer border-b-4 border-transparent hover:border-[#FF8030] duration-75 pb-5 w-32">
                    <label class="cursor-pointer"><input type="radio" class="invisible" v-model="selectedCategory" value="App" /> طراحی اپلیکیشن</label>
                </div>
                
                <div class="font-YekanM text-lg hover:text-[#FF8030] cursor-pointer border-b-4 border-transparent hover:border-[#FF8030] duration-75 pb-5 w-28">
                    <label class="cursor-pointer"><input type="radio" class="invisible" v-model="selectedCategory" value="Graphics" /> طراحی گرافیک</label>
                </div>
                
                <div class="font-YekanM text-lg hover:text-[#FF8030] cursor-pointer border-b-4 border-transparent hover:border-[#FF8030] duration-75 pb-5 w-32">
                    <label class="cursor-pointer"><input type="radio" class="invisible" v-model="selectedCategory" value="Digital" /> بازاریابی دیجیتال</label>
                </div>
                
                <div class="font-YekanM text-lg hover:text-[#FF8030] cursor-pointer border-b-4 border-transparent hover:border-[#FF8030] duration-75 pb-5 w-28">
                    <label class="cursor-pointer"><input type="radio" class="invisible" v-model="selectedCategory" value="software" /> نرم افزار نارنج</label>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-6 md:px-12 xl:mb-52 mb-20" dir="rtl">
            <div class="grid grid-cols-12 items-start gap-7 xl:pt-24 pt-16">
                <div
                    v-for="event, index in filteredPeople"
                    :key="index"
                    :class="[ `xl:col-span-4 col-span-12 acpect-[1/1.2]` , '[&:nth-of-type(3n-1)]:xl:translate-y-24' ]"
                >
                    <div class="relative w-full h-[532px] rounded-lg group cursor-pointer overflow-hidden">
                        <img :src="event.img" class="absolute object-cover -z-20 w-full h-[532px] object-center rounded-lg grayscale group-hover:grayscale-0 group-hover:scale-110 duration-200 transition-all" :alt="event.alt"/>
                        <img :src="event.logo" class="xl:mr-9 mr-2 pt-24" :alt="event.altLogo"/>
                        <p class="text-white font-YekanM text-3xl xl:mr-14 mr-7 mt-8">{{ event.title }}</p>
                        <p class="font-YekanL text-white text-lg xl:mr-14 mr-7 mt-2 w-3/4 sm:w-1/2">{{ event.text }}</p>
                        <div class="flex justify-center items-center">
                            <button type="button" class="font-YekanM text-center py-4 px-10 mt-36 rounded-md bg-white invisible group-hover:visible group-hover:duration-300 group-hover:-translate-y-24">مشاهده پروژه</button>
                        </div>
                        <p class="font-YekanL text-white text-lg xl:mr-14 mr-7 absolute bottom-8">{{ event.type }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import img from "@/assets/Group 228.png";
    import img2 from "@/assets/Rectangle 83.png";
    import logo from "@/assets/Group 229.png";

    export default {
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
                        img : 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'توس راوین سازه',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / بازاریابی دیجیتال',
                        category : 'Digital'
                    },
                    {
                        img : 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
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
                        img : 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
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
                        img : 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'توس راوین سازه',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / بازاریابی دیجیتال',
                        category : 'software'
                    },
                    {
                        img : img,
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'بنای آرمانی',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / طراحی کاتالوگ',
                        category : 'software'
                    },
                    {
                        img : 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
                        alt : 'image',
                        logo : logo,
                        altLogo : 'logo',
                        title : 'توس راوین سازه',
                        text : 'شرکت طراحی و ساخت خانه های لوکس و مبلمان شده با لوکس ترین اکسسوری ها',
                        type : 'طراحی سایت / بازاریابی دیجیتال',
                        category : 'Digital'
                    }
                ],
                selectedCategory: "All",
                swiperOptions : {
                    breakpoints: {
                        150: {
                            slidesPerView: 2.2
                        },
                        700: {
                            slidesPerView: 4.2
                        }
                    },
                    loop: false
                },
                active: false
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