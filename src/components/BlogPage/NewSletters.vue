<template>
    <div class="xl:px-44 xl:pl-72">
        <div class="flex flex-col xl:flex-row bg-[#2C56CF] w-full xl:h-96 xl:mt-28 mt-20 mb-5 xl:mb-0 xl:rounded-xl xl:p-16 p-8 xl:pr-24" dir="rtl">
            <div class="relative flex-1 flex-col">
                <p class="font-YekanB xl:text-5xl text-4xl text-white xl:leading-tight leading-snug">آیا میخواهید مطالب ما <br> را دنبال کنید</p>

                <p class="text-white font-YekanM xl:text-2xl text-lg mt-3 xl:mt-0 xl:absolute xl:bottom-0 leading-relaxed">فقط کافیه ایمیل خود را اینجا وارد کنید <br> تا ما شما را از آخرین اخبار تکنولوژی و نسخه های <br> آپدیت وب سایت و اپلیکیشن با خبر کنیم</p>
            </div>

            <div class="relative flex-1 flex-col">
                <div class="flex w-full bg-white h-20 mt-5 rounded-xl xl:pr-12 pr-6 pl-3">
                    <form action="/blog" class="flex justify-between items-center w-full">
                        <input type="email" name="email" class="font-YekanM text-[#BBBBBB] placeholder:text-[#BBBBBB] xl:text-xl outline-none w-3/5" placeholder="لطفا ایمیل خود را وارد کنید..."/>
                    
                        <input type="submit" class="font-YekanB text-white text-lg bg-[#FF8030] w-1/4 h-14 rounded-lg cursor-pointer hover:bg-[#ff6e30] transition-all" value="ارسال">
                    </form>
                </div>

                <div class="xl:absolute xl:bottom-0 mt-8 xl:mt-0">
                    <form action="/" class="flex flex-col items-start xl:w-[430px] xl:gap-y-8 gap-y-5">
                        <div class="xl:flex space-y-5 xl:space-y-0">
                            <div class="flex items-center">
                                <input type="radio" name="option" id="site" class="outline-none relative h-5 w-5 appearance-none rounded-full border-none before:absolute before:h-5 before:w-5 before:scale-0 before:rounded-full before:bg-[#FF8030] bg-[#0737C0] before:content-[''] after:absolute after:z-[1] after:block after:h-5 after:w-5 after:rounded-full after:content-[''] checked:after:absolute checked:after:bg-[#FF8030] checked:after:rounded-full checked:after:content-[''] checked:after:[transform:translate(0%,0%)] hover:cursor-pointer focus:shadow-none focus:before:scale-100 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]" checked>
                                <label for="site" class="text-white font-YekanM text-xl mr-4 cursor-pointer">سایت و اپلیکیشن</label>
                            </div>

                            <div class="flex items-center">
                                <input type="radio" name="option" id="admin" class="outline-none relative h-5 w-5 appearance-none rounded-full border-none before:absolute before:h-5 before:w-5 before:scale-0 before:rounded-full before:bg-[#FF8030] bg-[#0737C0] before:content-[''] after:absolute after:z-[1] after:block after:h-5 after:w-5 after:rounded-full after:content-[''] checked:after:absolute checked:after:bg-[#FF8030] checked:after:rounded-full checked:after:content-[''] checked:after:[transform:translate(0%,0%)] hover:cursor-pointer focus:shadow-none focus:before:scale-100 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] xl:mr-28">
                                <label for="admin" class="text-white font-YekanM text-xl mr-4 cursor-pointer">پنل های ادمین</label>
                            </div>
                        </div>

                        <div class="xl:flex space-y-5 xl:space-y-0">
                            <div class="flex items-center">
                                <input type="radio" name="option" id="software" class="outline-none relative h-5 w-5 appearance-none rounded-full border-none before:absolute before:h-5 before:w-5 before:scale-0 before:rounded-full before:bg-[#FF8030] bg-[#0737C0] before:content-[''] after:absolute after:z-[1] after:block after:h-5 after:w-5 after:rounded-full after:content-[''] checked:after:absolute checked:after:bg-[#FF8030] checked:after:rounded-full checked:after:content-[''] checked:after:[transform:translate(0%,0%)] hover:cursor-pointer focus:shadow-none focus:before:scale-100 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]">
                                <label for="software" class="text-white font-YekanM text-xl mr-4 cursor-pointer">نرم افزارها</label>
                            </div>
                            
                            <div class="flex items-center">
                                <input type="radio" name="option" id="educational" class="outline-none relative h-5 w-5 appearance-none rounded-full border-none before:absolute before:h-5 before:w-5 before:scale-0 before:rounded-full before:bg-[#FF8030] bg-[#0737C0] before:content-[''] after:absolute after:z-[1] after:block after:h-5 after:w-5 after:rounded-full after:content-[''] checked:after:absolute checked:after:bg-[#FF8030] checked:after:rounded-full checked:after:content-[''] checked:after:[transform:translate(0%,0%)] hover:cursor-pointer focus:shadow-none focus:before:scale-100 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] xl:mr-[165px]">
                                <label for="educational" class="text-white font-YekanM text-xl mr-4 cursor-pointer">مطالب آموزشی</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>