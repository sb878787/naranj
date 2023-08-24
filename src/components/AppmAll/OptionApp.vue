<template>
    <div>
        <transition name="translateY2">
            <div v-show="ability" class="flex flex-col gap-y-4 xl:mt-7 mt-2 mr-16 xl:pb-8 pb-5 border-b border-[#E5E5E5] xl:w-[500px] w-full transition-all">
                <div class="flex items-center gap-x-6">
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                    </svg>

                    <p class="font-YekanM text-[#767676] xl:text-lg">امکان خرید با امتیاز های باشگاه</p>
                </div>

                <div class="flex items-center gap-x-6">
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                    </svg>

                    <p class="font-YekanM text-[#767676] xl:text-lg">خرید مستقیم با کارت بانکی</p>
                </div>

                <div class="flex items-center gap-x-6">
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                    </svg>
                    <p class="font-YekanM text-[#767676] xl:text-lg">امکان تخفیف ویژه اعضای باشگاه مشتریان</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            ability: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>


<style>
    .translateY2-enter{
        transform:translateY(-10px);
        opacity: 0;
    }
    .translateY2-enter-active,.translateY2-leave-active{
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 50ms;
    }
    .translateY2-leave-to{
        transform: translateY(-10px);
        opacity: 0;
    }
</style>