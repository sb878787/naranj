<template>
    <div>
        <div class="flex flex-col xl:flex-row gap-x-24 xl:mt-44 mt-24" dir="rtl">
            <div class="relative xl:w-1/2 hidden xl:block">
                <Slider />
            </div>

            <div class="xl:h-screen h-[75vh] pb-8 overflow-y-scroll overflow-x-hidden">
                <p class="font-YekanB text-4xl xl:text-3xl px-8 xl:px-0 xl:text-[#000] text-[#4D4D4D] leading-tight">ویژگی های <br> اپلیکیشن مراکز خرید</p>
                
                <div class="flex flex-col gap-y-2 mt-12 px-8 xl:px-0">
                    <div class="flex items-center xl:gap-x-9 gap-x-6 group cursor-pointer">
                        <p @click="[ability = !ability , isActive = !isActive]" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="isActive ? 'text-[#FF8030]' : ''">1</p>
                        <p @click="[ability = !ability , isActive = !isActive]" class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="isActive ? 'text-[#FF8030]' : ''">فروشگاه اینترنتی</p>
                    </div>

                    <OptionApp :ability="ability"/>

                    <div class="flex items-center xl:gap-x-9 gap-x-6 group cursor-pointer">
                        <p @click="[ability2 = !ability2 , isActive2 = !isActive2]" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="isActive2 ? 'text-[#FF8030]' : ''">2</p>
                        <p @click="[ability2 = !ability2 , isActive2 = !isActive2]" class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="isActive2 ? 'text-[#FF8030]' : ''">رزرواسیون</p>
                    </div>

                   <OptionApp :ability="ability2"/>

                    <div class="flex items-center xl:gap-x-9 gap-x-6 group cursor-pointer">
                        <p @click="[ability3 = !ability3 , isActive3 = !isActive3]" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="isActive3 ? 'text-[#FF8030]' : ''">3</p>
                        <p @click="[ability3 = !ability3 , isActive3 = !isActive3]" class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="isActive3 ? 'text-[#FF8030]' : ''">قرعه کشی های فصلی یا مناسبتی</p>
                    </div>

                   <OptionApp :ability="ability3"/>

                    <div class="flex items-center xl:gap-x-9 gap-x-6 group cursor-pointer">
                        <p @click="[ability4 = !ability4 , isActive4 = !isActive4]" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="isActive4 ? 'text-[#FF8030]' : ''">4</p>
                        <p @click="[ability4 = !ability4 , isActive4 = !isActive4]" class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="isActive4 ? 'text-[#FF8030]' : ''">پلان طبقاتی به صورت سه بعدی 3D</p>
                    </div>

                   <OptionApp :ability="ability4"/>

                    <div class="flex items-center xl:gap-x-9 gap-x-6 group cursor-pointer">
                        <p @click="[ability5 = !ability5 , isActive5 = !isActive5]" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="isActive5 ? 'text-[#FF8030]' : ''">5</p>
                        <p @click="[ability5 = !ability5 , isActive5 = !isActive5]"  class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="isActive5 ? 'text-[#FF8030]' : ''">ارسال نوتیفیکیشن فردی و گروهی</p>
                    </div>

                   <OptionApp :ability="ability5"/>

                    <div class="flex items-center xl:gap-x-9 gap-x-6 group cursor-pointer">
                        <p @click="[ability6 = !ability6 , isActive6 = !isActive6]" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="isActive6 ? 'text-[#FF8030]' : ''">6</p>
                        <p @click="[ability6 = !ability6 , isActive6 = !isActive6]"  class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="isActive6 ? 'text-[#FF8030]' : ''">راحت خرید کنید Hands - Free</p>
                    </div>

                   <OptionApp :ability="ability6"/>

                    <div class="flex items-center xl:gap-x-9 gap-x-6 group cursor-pointer">
                        <p @click="[ability7 = !ability7 , isActive7 = !isActive7]" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="isActive7 ? 'text-[#FF8030]' : ''">7</p>
                        <p @click="[ability7 = !ability7 , isActive7 = !isActive7]"  class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="isActive7 ? 'text-[#FF8030]' : ''">مقیاس پذیر</p>
                    </div>

                   <OptionApp :ability="ability7"/>

                    <div class="flex items-center xl:gap-x-9 gap-x-6 group cursor-pointer">
                        <p @click="[ability8 = !ability8 , isActive8 = !isActive8]" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="isActive8 ? 'text-[#FF8030]' : ''">8</p>
                        <p @click="[ability8 = !ability8 , isActive8 = !isActive8]"  class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="isActive8 ? 'text-[#FF8030]' : ''">تجربه کاربری متفاوت</p>
                    </div>
                    
                   <OptionApp :ability="ability8"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import OptionApp from './OptionApp.vue';
    import Slider from './Slider.vue';

    export default {
        components: {
            Slider,
            OptionApp
        },
        data() {
            return {
                ability: false,
                ability2: false,
                ability3: false,
                ability4: false,
                ability5: false,
                ability6: false,
                ability7: false,
                ability8: false,
                isActive: false,
                isActive2: false,
                isActive3: false,
                isActive4: false,
                isActive5: false,
                isActive6: false,
                isActive7: false,
                isActive8: false,
            };
        }
    }
</script>