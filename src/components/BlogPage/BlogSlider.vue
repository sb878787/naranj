<template>
    <div>
        <div class="relative overflow-hidden w-full h-[650px] rounded-xl">
            <img :src="require(`../../assets/${data.ImageSrc}.png`)" class="absolute object-cover -z-20 w-full h-[650px] rounded-xl object-center" alt="imageSlide">
            
            <div class="p-32">
                <p class="text-white font-YekanB text-lg bg-[#0A3BC9] text-center py-3 rounded-xl w-40">{{ data.title }}</p>
                
                <p class="text-white font-YekanB text-5xl w-1/2 mt-5 leading-tight">{{ data.text }}</p>
                
                <div class="flex text-white font-YekanM mt-7 text-lg">
                    <span class="h-5">{{ data.date }}</span>
                    <span class="border-x px-5 mx-5 h-5">نویسنده {{ data.writer }}</span>
                    <span class="h-5">زمان مطالعه {{ data.time }} دقیقه</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: Object
            }
        },
        data() {
            return {}
        }
    }
</script>