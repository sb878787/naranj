<template>
    <div>
        <div dir="rtl" class="flex xl:flex-row flex-col-reverse gap-x-20 xl:px-44 px-8 xl:mt-52 mb-32 xl:mb-0 mt-16">
            <div class="flex-1 relative mb-10">
                <form>
                    <label class="block">
                        <input type="text" placeholder="نام و نام خانوادگی" class="w-full bg-[#F8F8F8] rounded-md border-none outline-none font-YekanM placeholder-[#767676] text-[#767676] xl:p-5 p-4 xl:pr-8 pr-6 xl:text-lg text-md shadow-sm
                            focus:outline-none focus:border-[#FF6300] focus:bg-[#fffaf7] focus:ring-2 focus:ring-[#FF6300]
                            invalid:border-red-500 invalid:text-red-600
                            focus:invalid:border-red-500 focus:invalid:ring-red-500
                        "/>
                    </label>

                    <label class="block">
                        <input type="number" placeholder="شماره تماس *" class="w-full bg-[#F8F8F8] rounded-md border-none outline-none font-YekanM placeholder-[#767676] text-[#767676] xl:p-5 p-4 xl:pr-8 pr-6 xl:text-lg text-md shadow-sm mt-5
                            focus:outline-none focus:border-[#FF6300] focus:bg-[#fffaf7] focus:ring-2 focus:ring-[#FF6300]
                            invalid:border-red-500 invalid:text-red-600
                            focus:invalid:border-red-500 focus:invalid:ring-red-500
                        "/>
                    </label>

                    <label class="block">
                        <input type="email" placeholder="ایمیل *" class="w-full bg-[#F8F8F8] rounded-md border-none outline-none font-YekanM placeholder-[#767676] text-[#767676] xl:p-5 p-4 xl:pr-8 pr-6 xl:text-lg text-md shadow-sm mt-5
                            focus:outline-none focus:border-[#FF6300] focus:bg-[#fffaf7] focus:ring-2 focus:ring-[#FF6300]
                            invalid:border-red-500 invalid:text-red-600
                            focus:invalid:border-red-500 focus:invalid:ring-red-500
                        "/>
                    </label>

                    <label class="block">
                        <input type="text" placeholder="موضوع مشاوره" class="w-full bg-[#F8F8F8] rounded-md border-none outline-none font-YekanM placeholder-[#767676] text-[#767676] xl:p-5 p-4 xl:pr-8 pr-6 xl:text-lg text-md shadow-sm mt-5
                            focus:outline-none focus:border-[#FF6300] focus:bg-[#fffaf7] focus:ring-2 focus:ring-[#FF6300]
                            invalid:border-red-500 invalid:text-red-600
                            focus:invalid:border-red-500 focus:invalid:ring-red-500
                        "/>
                    </label>

                    <label class="block">
                        <textarea rows="8" placeholder="توضیحات خود را ارائه کنید..." class="w-full bg-[#F8F8F8] rounded-md border-none outline-none font-YekanM placeholder-[#767676] text-[#767676] xl:p-5 p-4 xl:pr-8 pr-6 xl:text-lg text-md shadow-sm mt-5
                            focus:outline-none focus:border-[#FF6300] focus:bg-[#fffaf7] focus:ring-2 focus:ring-[#FF6300]
                            invalid:border-red-500 invalid:text-red-600
                            focus:invalid:border-red-500 focus:invalid:ring-red-500
                        "></textarea>
                    </label>

                    <button class="font-YekanM text-white bg-[#FF6300] rounded-md xl:text-xl text-lg xl:mt-8 mt-6 xl:p-5 p-3 xl:px-9 px-7 absolute left-0">ارسال</button>
                </form>
            </div>

            <div class="flex-1 relative">
                <p class="font-YekanM xl:text-xl text-lg text-[#FF6300]">آنچه انجام می دهیم</p>
                
                <p class="font-YekanB xl:text-5xl text-2xl xl:pt-7 pt-2 text-[#4D4D4D] xl:text-black xl:leading-tight">همکاری مشترک برای کشف چیز هایی که <br class="hidden xl:block"> ما هنوز نمی دانیم ، اغلب بهترین راه برای <br class="hidden xl:block"> طراحی راهی جدید برای پیشبرد است.</p>
                
                <p class="font-YekanM xl:text-xl text-[#383838] pt-5 xl:pt-10 xl:leading-8 leading-7">ما به مشتریان کمک می کنیم تا نیاز های انها و گزینه های دیدار با آنها را از طریق <br class="hidden xl:block"> مشارکت مشورتی که شفاف سازی شرایط گیج کننده است ، درک کنند.</p>
                
                <div class="flex flex-row-reverse xl:flex-row">
                    <div>
                        <button class="font-YekanM text-white bg-[#FF6300] rounded-md xl:text-xl text-md xl:mt-28 xl:mb-0 mt-6 mb-12 xl:p-5 p-3 xl:px-9 px-7">چطوره با هم گفتگو کنیم ! </button>
                    </div>

                    <div></div>
                </div>

                <div class="absolute left-[15%] hidden xl:block">
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46 46C35.5066 56.4934 18.4934 56.4934 8 46C-2.49341 35.5066 -2.49341 18.4934 8 8C18.4934 -2.49341 35.5066 -2.49341 46 8C56.4934 18.4934 56.4934 35.5066 46 46ZM16.2369 16.2369C10.2926 22.1812 10.2926 31.8188 16.2369 37.7631C22.1812 43.7074 31.8188 43.7074 37.7631 37.7631C43.7074 31.8188 43.7074 22.1812 37.7631 16.2369C31.8188 10.2926 22.1812 10.2926 16.2369 16.2369Z" fill="#F2F2F2"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>