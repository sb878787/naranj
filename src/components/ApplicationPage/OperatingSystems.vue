<template>
    <div>
        <div dir="rtl" class="flex xl:flex-row flex-col xl:pt-32 pt-16 xl:px-48 px-8 justify-between gap-x-24 gap-y-12">
            <div v-for="system in systems" class="flex flex-col items-center justify-center xl:space-y-9 space-y-6">
                <img :src="system.img" :alt="system.alt" />

                <p class="text-xl text-center font-bold">{{ system.title }}</p>
                
                <p class="font-YekanM xl:text-xl text-lg text-[#4D4D4D] text-center xl:leading-9 sm:px-52 lg:px-0">{{ system.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import android from '../../assets/Group 231.png';
    import ios from '../../assets/Group 232.png';
    import cross from '../../assets/Group 225.png';
    import backend from '../../assets/Group 226.png';

    export default {
        data() {
            return {
                systems : [
                    {
                        img : android,
                        alt : 'logo',
                        title : 'Android',
                        text : 'برنامه های تلفن همراه با کیفیت بالا که به زبان جاوایا کاتلین نوشته شده است را در اختیار کاربران خود قرار دهید'
                    },
                    {
                        img : ios,
                        alt : 'logo',
                        title : 'iOS',
                        text : 'برنامه های کاربردی قوی را با استفاده از زبان های برنامه نویسی بومی مانند Swift یا Objective-C توسعه دهید'
                    },
                    {
                        img : cross,
                        alt : 'logo',
                        title : 'Cross-platform',
                        text : 'با استفاده از React Native یا Flutter برنامه هایی ایجاد کنید که بتوانند در سیستم عامل های مختلف دستگاه اجرا شوند'
                    },
                    {
                        img : backend,
                        alt : 'logo',
                        title : 'Backend',
                        text : 'ایجاد تمام زیر ساخت های برنامه تلفن همراه خود ، ایجاد منطق کسب و کار و ارتباط API'
                    },
                ],
            }
        }
    }
</script>