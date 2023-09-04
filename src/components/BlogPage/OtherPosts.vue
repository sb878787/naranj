<template>
    <div class="flex xl:flex-row flex-col mx-8 gap-7">
        <router-link :to="`/blog/datail/page/${dataOtherPost.id}`">
            <div class="relative overflow-hidden xl:w-[270px] xl:h-[180px] w-full h-44 rounded-xl">
                <img :src="require(`../../assets/${dataOtherPost.ImagePostSrc}.png`)" class="absolute object-cover xl:w-[270px] xl:h-[180px] w-full h-44 object-center rounded-xl hover:scale-110 duration-300 transition-all" alt="ImagePostBlog">
            </div>
        </router-link>

        <div class="relative">
            <p class="text-[#7A74FC] font-YekanB text-lg">{{ dataOtherPost.title }}</p>

            <router-link :to="`/blog/datail/page/${dataOtherPost.id}`">
                <p @click="scrollToTop" class="font-YekanB text-2xl mt-3 xl:w-[260px] hover:underline transition-all">{{ dataOtherPost.text }}</p>
            </router-link>

            <div class="flex gap-x-5 xl:absolute xl:bottom-0 mt-5 xl:mt-0">
                <svg width="20" height="22" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9H6V11H4V9ZM4 13H6V15H4V13ZM8 9H10V11H8V9ZM8 13H10V15H8V13ZM12 9H14V11H12V9ZM12 13H14V15H12V13Z" fill="#BBBBBB"/>
                    <path d="M2 20H16C17.103 20 18 19.103 18 18V4C18 2.897 17.103 2 16 2H14V0H12V2H6V0H4V2H2C0.897 2 0 2.897 0 4V18C0 19.103 0.897 20 2 20ZM16 6L16.001 18H2V6H16Z" fill="#BBBBBB"/>
                </svg>

                <p class="font-YekanM text-[#ACACAC]">{{ dataOtherPost.date }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            dataOtherPost: {
                type : Object
            }
        },
        data() {
            return {}
        },
        methods: { 
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
    }
</script>