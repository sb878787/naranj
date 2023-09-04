<template>
    <div>
        <p class="text-[#7A74FC] font-YekanB text-lg">{{ dataPosts.title }}</p>
                            
        <router-link :to="`/blog/datail/page/${dataPosts.id}`">
            <p @click="scrollToTop" class="font-YekanB text-3xl xl:w-9/12 w-10/12 mt-4 leading-10 hover:underline transition-all">{{ dataPosts.text }}</p>
        </router-link>
    
        <div class="flex flex-col xl:flex-row mt-6 xl:mt-9 gap-x-8 gap-y-3">
            <div class="flex">
                <svg width="20" height="22" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9H6V11H4V9ZM4 13H6V15H4V13ZM8 9H10V11H8V9ZM8 13H10V15H8V13ZM12 9H14V11H12V9ZM12 13H14V15H12V13Z" fill="#BBBBBB"/>
                    <path d="M2 20H16C17.103 20 18 19.103 18 18V4C18 2.897 17.103 2 16 2H14V0H12V2H6V0H4V2H2C0.897 2 0 2.897 0 4V18C0 19.103 0.897 20 2 20ZM16 6L16.001 18H2V6H16Z" fill="#BBBBBB"/>
                </svg>

                <p class="text-[#ACACAC] font-YekanM text-lg mr-3">
                    {{ dataPosts.date }}
                </p>
            </div>

            <div class="flex">
                <svg width="20" height="20" class="mt-[2px]" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0C4.0374 0 0 4.0374 0 9C0 13.9626 4.0374 18 9 18C13.9626 18 18 13.9626 18 9C18 4.0374 13.9626 0 9 0ZM9 16.2C5.0301 16.2 1.8 12.9699 1.8 9C1.8 5.0301 5.0301 1.8 9 1.8C12.9699 1.8 16.2 5.0301 16.2 9C16.2 12.9699 12.9699 16.2 9 16.2Z" fill="#BBBBBB"/>
                    <path d="M9.9001 4.5H8.1001V9.9H13.5001V8.1H9.9001V4.5Z" fill="#BBBBBB"/>
                </svg>

                <p class="text-[#ACACAC] font-YekanM text-lg mr-3">
                    زمان مطالعه {{ dataPosts.time }} دقیقه
                </p>
            </div>
        </div>

        <router-link :to="`/blog/datail/page/${dataPosts.id}`">
            <div @click="scrollToTop" class="relative overflow-hidden xl:w-full xl:h-[400px] h-52 mt-6 xl:mt-8 rounded-xl">
                <img :src="require(`../../assets/${dataPosts.ImagePostSrc}.png`)" class="absolute object-cover xl:w-full xl:h-[400px] h-52 object-center rounded-xl hover:scale-110 duration-300 transition-all" alt="ImagePostBlog">
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            dataPosts: {
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