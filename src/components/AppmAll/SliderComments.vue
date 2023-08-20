<template>
    <div>
        <div class="p-5">
            <div class="bg-white rounded-lg shadow-md xl:p-16 p-8">
                <div class="flex xl:items-start items-center justify-start xl:gap-x-7 gap-x-3">
                    <div class="xl:border-b-[3px] xl:border-[#FF8030] xl:pb-6">
                        <div class="relative overflow-hidden w-16 h-16 rounded-full">
                            <img :src="sliderProfileImage" class="absolute object-cover object-center w-16 h-16" alt="profile">
                        </div>
                    </div>

                    <div class="flex flex-col xl:gap-y-2 gap-y-1" dir="rtl">
                        <p class="font-YekanB xl:text-2xl text-lg">{{ data.name }}</p>

                        <p class="font-YekanM xl:text-lg text-sm text-[#767676]">{{ data.title }}</p>
                    </div>
                </div>

                <div class="flex flex-col xl:flex-row gap-x-10 gap-y-5 items-center justify-between">
                    <div class="xl:w-1/2 w-full">
                        <p class="text-[#4C4C4C] font-YekanM xl:text-lg leading-relaxed xl:pt-3 pt-6">
                            {{ data.text }}
                        </p>
                    </div>

                    <div class="relative xl:w-1/2 w-full">
                        <div class="relative overflow-hidden w-full xl:h-52 h-32 rounded-xl flex items-center justify-center">
                            <img :src="sliderImage" class="absolute object-cover object-center w-full xl:h-52 h-32 z-10" alt="image">
                            
                            <button @click="playVideo" class="bg-[#FF8030] rounded-full w-14 h-14 flex items-center justify-center absolute z-40">
                                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1.17272C0 0.973437 0.0462501 0.778009 0.133751 0.603154C0.421252 0.0374444 1.07126 -0.166983 1.58751 0.148015L14.4501 7.97537C14.6251 8.08209 14.7688 8.24023 14.8651 8.4318C15.1526 8.99751 14.9651 9.71107 14.4501 10.0248L1.58751 17.8521C1.43063 17.9484 1.25144 17.9995 1.06876 18C0.478753 18 0 17.4754 0 16.8287V1.17272Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
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
        emits: ["openModal"],
        data() {
            return {}
        },
        methods: {
            playVideo() {
                console.log("test1");
                this.$emit("openModal" , "1");
            }
        },
        computed: {
            sliderProfileImage(){
                return require(`@/assets/${this.data.profile}.png`);
            },
            sliderImage(){
                return require(`@/assets/${this.data.image}.png`);
            }
        }
    }
</script>