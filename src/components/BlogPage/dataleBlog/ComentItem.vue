<template>
    <div>
        <div class="xl:w-[64%]">
            <form @submit.prevent="onSubmit">
                <input 
                    type="text"
                    name="name"
                    placeholder="نام خود را وارد کنید ..."
                    v-model="name"
                    class="w-full outline-none border-2 border-[#BBBBBB] rounded-md mt-9 p-3 pr-5 font-YekanM text-[#C4C4C4] placeholder:text-[#C4C4C4] text-lg focus:border-[#FF8030] focus:text-[#FF8030] placeholder:focus:text-[#FF8030]"
                >
                <input
                    type="email" 
                    name="email"
                    placeholder="ایمیل خود را وارد کنید ..."
                    v-model="email"
                    class="w-full outline-none border-2 border-[#BBBBBB] rounded-md mt-5 p-3 pr-5 font-YekanM text-[#C4C4C4] placeholder:text-[#C4C4C4] text-lg focus:border-[#FF8030] focus:text-[#FF8030] placeholder:focus:text-[#FF8030]"
                >
                <input
                    type="text"
                    maxlength="11"
                    name="number"
                    placeholder="شماره موبایل خود را وارد کنید ..."
                    v-model="phone"
                    class="w-full outline-none border-2 border-[#BBBBBB] rounded-md mt-5 p-3 pr-5 font-YekanM text-[#C4C4C4] placeholder:text-[#C4C4C4] text-lg focus:border-[#FF8030] focus:text-[#FF8030] placeholder:focus:text-[#FF8030]"
                >
                <textarea
                    rows="8"
                    placeholder="نظر شما در درباره مقاله ..."
                    v-model="coment" 
                    class="mt-5 font-YekanM border-2 border-[#BBBBBB] rounded-md w-full text-[#C4C4C4] pt-4 pr-5 outline-none placeholder:text-[#C4C4C4] text-lg focus:border-[#FF8030] focus:text-[#FF8030] placeholder:focus:text-[#FF8030]"
                ></textarea>

                <button type="button" @click="onClickTop" :disabled="isDisabled" class="mt-5 bg-[#FF8030] font-YekanB text-white xl:w-48 w-36 text-lg py-3 rounded hover:bg-[#ff6b30] transition-all cursor-pointer">ارسال</button>
            </form>
        </div>

        <notificationGroup group="top">
            <div class="fixed z-50 inset-0 flex px-4 py-6 pointer-events-none p-6 items-start justify-start">
                <div class="max-w-sm w-full">
                    <notification v-slot="{notifications}">

                        <div
                            class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4"
                            v-for="notification in notifications"
                            :key="notification.id"
                        >
                            <div class="flex justify-center items-center w-12 bg-green-500">
                                <svg class="h-6 w-6 fill-current text-white" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path>
                                </svg>
                            </div>

                            <div class="-mx-3 py-2 px-4">
                                <div class="mx-3">
                                    <span class="text-green-500 font-YekanB text-2xl font-semibold">{{notification.title}}</span>

                                    <p class="text-gray-600 font-YekanM text-md">{{notification.text}}</p>
                                </div>
                            </div>
                        </div>

                    </notification>
                </div>
            </div>
        </notificationGroup>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name : "",
                coment: "",
                email: "",
                phone: ""
            }
        },
        methods: {
            onClickTop() {
                this.$notify(
                    {
                        group: "top",
                        title: "تبریک",
                        text: "نظر شما با موفقیت ارسال شد!"
                    }, 
                    4000
                );
                this.name = ""
                this.coment = ""
                this.email = ""
                this.phone = ""
            }
        },
        computed: {
            isDisabled() {
                return !/^[A-z\sa-z\sA-Z]{1,30}$/.test(this.name , this.coment),!/^[0-9]{8,10}$/.test(this.phone),!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)
            }
        }
    }
</script>