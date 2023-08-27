<template>
    <div class="relative overflow-hidden w-full h-[650px] xl:rounded-xl">
        <img :src="require(`../../assets/${data.ImageSrc}.png`)" class="absolute object-cover -z-20 w-full h-[650px] xl:rounded-xl object-center" alt="imageSlide">
        
        <div class="xl:p-32 p-10 pt-28 xl:pt-32">
            <p class="text-white font-YekanB text-lg bg-[#0A3BC9] text-center py-3 rounded-xl w-40">{{ data.title }}</p>
            
            <p class="text-white font-YekanB xl:text-5xl text-[28px] xl:w-1/2 mt-5 xl:leading-tight">{{ data.text }}</p>
            
            <div class="flex flex-col xl:flex-row text-white font-YekanM mt-7 text-lg gap-y-4">
                <span class="h-5">{{ data.date }}</span>
                <span class="xl:border-x xl:px-5 xl:mx-5 h-5">نویسنده {{ data.writer }}</span>
                <span class="h-5">زمان مطالعه {{ data.time }} دقیقه</span>
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