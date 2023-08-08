<template>
    <div>
        <div class="xl:px-44 px-8 xl:mt-44 mt-8" dir="rtl">
            <p class="font-YekanB xl:text-4xl text-2xl">معرفی همکاران نارنج</p>
        </div>

        <div class="flex flex-col">
            <div class="flex xl:flex-row flex-col xl:px-44 px-8 justify-between gap-10 mt-10" dir="rtl">
                <div v-for="partner in partners" class="flex-1">
                    <div class="relative overflow-hidden w-full xl:h-[400px] h-80 sm:h-[500px]">
                        <img :src="partner.img" class="absolute object-cover object-center w-full xl:h-[400px] h-80 sm:h-[500px] rounded-md" :alt="partner.alt"/>
                    </div>

                    <p class="font-YekanM xl:text-2xl text-xl pt-8 text-[#383838]">{{ partner.name }}</p>

                    <p class="text-[#767676] pt-2">{{ partner.text }}</p>
                </div>
            </div>

            <div class="flex xl:flex-row flex-col xl:px-44 px-8 justify-between gap-10 mt-16" dir="rtl">
                <div v-for="partner2 in partners2" class="flex-1">
                    <div class="relative overflow-hidden w-full xl:h-[400px] h-80 sm:h-[500px]">
                        <img :src="partner2.img" class="absolute object-cover object-center w-full xl:h-[400px] h-80 sm:h-[500px] rounded-md" :alt="partner2.alt"/>
                    </div>

                    <p class="font-YekanM xl:text-2xl text-xl pt-8 text-[#383838]">{{ partner2.name }}</p>

                    <p class="text-[#767676] pt-2">{{ partner2.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Man1 from "@/assets/Man1.jpg";
    import Man2 from "@/assets/Man2.jpg";
    import Man3 from "@/assets/Man3.jpg";
    import Man4 from "@/assets/Man4.jpg";
    import Man5 from "@/assets/Man5.jpg";
    import Man6 from "@/assets/Man6.jpg";

    export default {
        data() {
            return {
                partners : [
                    {
                        img : Man1,
                        alt : 'profile',
                        name : 'امیر هوشنگ پورالبرزی',
                        text : 'CEO'
                    },
                    {
                        img : Man2,
                        alt : 'profile',
                        name : 'حمید واحدی با عفت',
                        text : 'CTO'
                    },
                    {
                        img : Man3,
                        alt : 'profile',
                        name : 'احمد آذرنیا',
                        text : 'Senior Android Developer'
                    }
                ],
                partners2 : [
                    {
                        img : Man4,
                        alt : 'profile',
                        name : 'هومن شیرکوبی',
                        text : 'Creative Director'
                    },
                    {
                        img : Man5,
                        alt : 'profile',
                        name : 'آسا بهرامی',
                        text : 'PR'
                    },
                    {
                        img : Man6,
                        alt : 'profile',
                        name : 'بهار بانژاد',
                        text : 'Sales Team'
                    }
                ]
            }
        }
    }
</script>