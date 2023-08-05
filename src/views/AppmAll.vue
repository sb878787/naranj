<template>
    <div class="contact overflow-x-hidden">
        <Header class="hidden xl:block"></Header>

        <div class="relative xl:w-[650px] xl:h-[92vh] h-screen w-full">
            <img class="absolute object-cover -z-20 xl:w-[650px] xl:h-[92vh] h-screen w-full object-center" src="../assets/image 67.png" alt="logo"/>

            <button type="button" @click="$vm2.open('modal-1')">
                <div class="absolute bottom-36 -right-[152px] z-30">
                    <svg width="304" height="325" viewBox="0 0 304 325" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M249.296 26.1898C244.494 31.05 236.661 31.0973 231.801 26.2954C226.94 21.4934 226.893 13.6606 231.695 8.80032C236.497 3.94004 244.33 3.89276 249.19 8.69472C254.05 13.4967 254.098 21.3295 249.296 26.1898ZM236.602 13.6488C234.478 15.7988 234.499 19.2638 236.649 21.388C238.799 23.5122 242.264 23.4913 244.388 21.3413C246.512 19.1913 246.491 15.7263 244.341 13.6021C242.191 11.4779 238.727 11.4988 236.602 13.6488Z" fill="#F2F2F2"/>
                        <path d="M227.358 96.4803C207.096 76.4617 179.712 65.3119 151.229 65.4839L151.878 172.877L227.358 96.4803Z" fill="#7A74FC" fill-opacity="0.56"/>
                        <circle cx="152.329" cy="171.329" r="76.4131" transform="rotate(24.101 152.329 171.329)" stroke="#F2F2F2"/>
                        <g filter="url(#filter0_d_253_3)">
                            <circle cx="152.329" cy="171.329" r="53.8357" transform="rotate(24.101 152.329 171.329)" fill="white"/>
                            <circle cx="152.329" cy="171.329" r="53.8357" transform="rotate(24.101 152.329 171.329)" fill="white"/>
                        </g>
                        <path d="M145 160.564C145 160.298 145.062 160.037 145.178 159.804C145.562 159.05 146.428 158.777 147.117 159.197L164.267 169.634C164.5 169.776 164.692 169.987 164.82 170.242C165.203 170.997 164.953 171.948 164.267 172.366L147.117 182.803C146.908 182.931 146.669 182.999 146.425 183C145.638 183 145 182.301 145 181.438V160.564Z" fill="#FF8030"/>
                        <defs>
                            <filter id="filter0_d_253_3" x="48.48" y="67.48" width="207.698" height="207.698" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="25"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_253_3"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_253_3" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </button>

            <modal-vue
                @on-close="$vm2.close('modal-1')"
                name="modal-1"
                :headerOptions="{
                    title: ' ',
                }"
                noFooter
                modalSize="xl"
                class="z-50"
                >
                <div>
                    <video class="w-full" controls autoplay>
                        <source src="../assets/video/047f812ca27807257a076707913a5fc938923532-480p.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </modal-vue>
            
            <ResponsiveHeader class="-mt-6 xl:-mt-0"></ResponsiveHeader>

            <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
        </div>

        <SocialPages class="hidden xl:block"></SocialPages>

        <div dir="rtl" class="xl:absolute xl:top-[25%] xl:right-0 xl:px-44 static px-8 mt-8 xl:mt-0">
            <p class="font-YekanM text-[#FF6300] xl:text-xl text-lg">نرم افزار کاربردی ریتیل</p>
            <p class="font-YekanB xl:text-4xl text-2xl xl:pt-6 pt-3 xl:text-[#000] text-[#4D4D4D]">اپلیکیشن مراکز خرید نارنج</p>
            <p class="font-YekanM text-[#4D4D4D] xl:text-xl xl:pt-12 pt-7 xl:leading-loose">شرکت نارنج این افتخار را دارد که طی چند سال تحقیق و بررسی بر روی تمام نرم افزار های <br> مراکز خرید دنیا محصولی فراهم کند که به سیستم پاخور مراکز خرید و ریتیل کشور <br> همچنین به حفظ و وفادار سازی مشتری کمک می کند که شامل ویژگی هایی می باشد <br> که در اینجا به آن اشاره کرده ایم.</p>
        </div>

        <div class="flex flex-col gap-3 xl:absolute xl:top-[69%] xl:right-0 xl:px-44 static px-8">
            <div class="flex gap-7 items-center relative border-2 border-dotted w-[650px] p-5 rounded-xl" dir="rtl">
                <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.53453 25.3601C8.16653 25.3601 7.91853 25.3961 7.79053 25.4321V27.7881C7.94253 27.8241 8.13253 27.8341 8.39453 27.8341C9.35253 27.8341 9.94253 27.3501 9.94253 26.5321C9.94253 25.8001 9.43453 25.3601 8.53453 25.3601ZM15.5085 25.3841C15.1085 25.3841 14.8485 25.4201 14.6945 25.4561V30.6761C14.8485 30.7121 15.0965 30.7121 15.3205 30.7121C16.9545 30.7241 18.0185 29.8241 18.0185 27.9201C18.0305 26.2601 17.0605 25.3841 15.5085 25.3841Z" fill="#BBBBBB"/>
                    <path d="M20 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4V36C0 37.0609 0.421427 38.0783 1.17157 38.8284C1.92172 39.5786 2.93913 40 4 40H28C29.0609 40 30.0783 39.5786 30.8284 38.8284C31.5786 38.0783 32 37.0609 32 36V12L20 0ZM10.996 28.38C10.378 28.96 9.466 29.22 8.404 29.22C8.19808 29.2222 7.99226 29.2102 7.788 29.184V32.036H6V24.164C6.80691 24.0436 7.62224 23.9888 8.438 24C9.552 24 10.344 24.212 10.878 24.638C11.386 25.042 11.73 25.704 11.73 26.484C11.728 27.268 11.468 27.93 10.996 28.38ZM18.61 31.09C17.77 31.788 16.492 32.12 14.93 32.12C13.994 32.12 13.332 32.06 12.882 32V24.166C13.6892 24.0482 14.5043 23.9927 15.32 24C16.834 24 17.818 24.272 18.586 24.852C19.416 25.468 19.936 26.45 19.936 27.86C19.936 29.386 19.378 30.44 18.61 31.09ZM26 25.54H22.936V27.362H25.8V28.83H22.936V32.038H21.124V24.06H26V25.54ZM20 14H18V4L28 14H20Z" fill="#BBBBBB"/>
                </svg>

                <p class="font-YekanB text-xl">دریافت کاتالوگ اپلیکیشن <br> مراکز خرید نارنج</p>

                <a href="/930947611amozesh ghoran-nohom.pdf" download class="flex gap-5 items-center p-3 px-11 rounded-xl bg-[#FF8030] text-white font-YekanM absolute left-5">
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8.30125L11.4013 6.90125C11.6368 6.67338 11.9525 6.54716 12.2803 6.54977C12.608 6.55239 12.9216 6.68363 13.1535 6.91523C13.3855 7.14682 13.5172 7.46025 13.5202 7.788C13.5233 8.11574 13.3975 8.43159 13.17 8.6675L9.63375 12.2037C9.51793 12.3202 9.38023 12.4127 9.22857 12.4757C9.0769 12.5388 8.91426 12.5713 8.75 12.5713C8.58574 12.5713 8.4231 12.5388 8.27143 12.4757C8.11977 12.4127 7.98207 12.3202 7.86625 12.2037L4.33 8.6675C4.21394 8.55128 4.12192 8.41334 4.05917 8.26155C3.99642 8.10977 3.96419 7.94711 3.9643 7.78287C3.96454 7.45116 4.09653 7.13314 4.33125 6.89875C4.56597 6.66436 4.88418 6.53282 5.21588 6.53306C5.54759 6.53329 5.86561 6.66528 6.1 6.9L7.5 8.30125V1.25C7.5 0.918479 7.6317 0.600537 7.86612 0.366117C8.10054 0.131696 8.41848 0 8.75 0C9.08152 0 9.39946 0.131696 9.63388 0.366117C9.8683 0.600537 10 0.918479 10 1.25V8.30125ZM1.25 15H16.25C16.5815 15 16.8995 15.1317 17.1339 15.3661C17.3683 15.6005 17.5 15.9185 17.5 16.25C17.5 16.5815 17.3683 16.8995 17.1339 17.1339C16.8995 17.3683 16.5815 17.5 16.25 17.5H1.25C0.918479 17.5 0.600537 17.3683 0.366117 17.1339C0.131696 16.8995 0 16.5815 0 16.25C0 15.9185 0.131696 15.6005 0.366117 15.3661C0.600537 15.1317 0.918479 15 1.25 15Z" fill="white"/>
                        </svg>
                    </div>
                    <div><p>دانلود کاتالوگ</p></div>
                </a>
            </div>

            <div class="flex gap-7 items-center relative border-2 border-dotted w-[650px] p-7 rounded-xl" dir="rtl">
                <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.4054 0H2.59459C1.16351 0 0 1.15313 0 2.57143V33.4286C0 34.8469 1.16351 36 2.59459 36H21.4054C22.8365 36 24 34.8469 24 33.4286V2.57143C24 1.15313 22.8365 0 21.4054 0ZM21.0811 33.1071H2.91892V2.89286H21.0811V33.1071ZM10.3784 29.0089C10.3784 29.4352 10.5492 29.844 10.8533 30.1454C11.1575 30.4467 11.5699 30.6161 12 30.6161C12.4301 30.6161 12.8425 30.4467 13.1467 30.1454C13.4508 29.844 13.6216 29.4352 13.6216 29.0089C13.6216 28.5827 13.4508 28.1739 13.1467 27.8725C12.8425 27.5711 12.4301 27.4018 12 27.4018C11.5699 27.4018 11.1575 27.5711 10.8533 27.8725C10.5492 28.1739 10.3784 28.5827 10.3784 29.0089Z" fill="#BBBBBB"/>
                </svg>

                <p class="font-YekanB text-xl">دریافت نسخه بتا اپلیکیشن</p>

                <a href="/930947611amozesh ghoran-nohom.pdf" download class="flex gap-5 items-center p-3 px-11 rounded-xl bg-[#FF8030] text-white font-YekanM absolute left-5">
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8.30125L11.4013 6.90125C11.6368 6.67338 11.9525 6.54716 12.2803 6.54977C12.608 6.55239 12.9216 6.68363 13.1535 6.91523C13.3855 7.14682 13.5172 7.46025 13.5202 7.788C13.5233 8.11574 13.3975 8.43159 13.17 8.6675L9.63375 12.2037C9.51793 12.3202 9.38023 12.4127 9.22857 12.4757C9.0769 12.5388 8.91426 12.5713 8.75 12.5713C8.58574 12.5713 8.4231 12.5388 8.27143 12.4757C8.11977 12.4127 7.98207 12.3202 7.86625 12.2037L4.33 8.6675C4.21394 8.55128 4.12192 8.41334 4.05917 8.26155C3.99642 8.10977 3.96419 7.94711 3.9643 7.78287C3.96454 7.45116 4.09653 7.13314 4.33125 6.89875C4.56597 6.66436 4.88418 6.53282 5.21588 6.53306C5.54759 6.53329 5.86561 6.66528 6.1 6.9L7.5 8.30125V1.25C7.5 0.918479 7.6317 0.600537 7.86612 0.366117C8.10054 0.131696 8.41848 0 8.75 0C9.08152 0 9.39946 0.131696 9.63388 0.366117C9.8683 0.600537 10 0.918479 10 1.25V8.30125ZM1.25 15H16.25C16.5815 15 16.8995 15.1317 17.1339 15.3661C17.3683 15.6005 17.5 15.9185 17.5 16.25C17.5 16.5815 17.3683 16.8995 17.1339 17.1339C16.8995 17.3683 16.5815 17.5 16.25 17.5H1.25C0.918479 17.5 0.600537 17.3683 0.366117 17.1339C0.131696 16.8995 0 16.5815 0 16.25C0 15.9185 0.131696 15.6005 0.366117 15.3661C0.600537 15.1317 0.918479 15 1.25 15Z" fill="white"/>
                        </svg>
                    </div>
                    <div><p>دانلود نسخه بتا</p></div>
                </a>
            </div>
        </div>

        <p class="font-YekanB xl:text-4xl text-2xl xl:pt-6 pt-3 xl:text-[#000] text-[#4D4D4D] text-right pr-44 mt-24">کاربرد اپلیکیشن</p>

        <div class="absolute left-[31%]">
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.4048 36.2245C28.3425 44.3848 15.1342 44.4076 6.90329 36.2755C-1.32761 28.1433 -1.46424 14.9357 6.59811 6.77548C14.6605 -1.38479 27.8687 -1.40761 36.0996 6.72452C44.3305 14.8567 44.4672 28.0643 36.4048 36.2245ZM14.9088 14.9864C11.3423 18.5962 11.4027 24.4388 15.0438 28.0361C18.6848 31.6335 24.5277 31.6234 28.0942 28.0136C31.6607 24.4038 31.6002 18.5612 27.9592 14.9639C24.3181 11.3665 18.4753 11.3766 14.9088 14.9864Z" fill="#F2F2F2"/>
            </svg>
        </div>

        <div dir="rtl" class="flex justify-between px-44 -mt-12">
            <div class="flex flex-col gap-y-12 items-center">
                <img src="../assets/Group 234.png" alt="image">
                <p class="text-[#4D4D4D] font-YekanB text-xl pl-10 text-center">مراکز خرید سراسر ایران</p>
            </div>
            
            <div class="flex flex-col gap-y-12 items-center">
                <img src="../assets/Group 233.png" alt="image">
                <p class="text-[#4D4D4D] font-YekanB text-xl pl-8 text-center leading-relaxed">برند ها و فروشگاه های <br> چند شعبه ای</p>
            </div>

            <div class="flex flex-col gap-y-12 items-center">
                <img src="../assets/Group 2352.png" alt="image">
                <p class="text-[#4D4D4D] font-YekanB text-xl text-center">هایپر مارکت ها</p>
            </div>
        </div>

        <div class="flex gap-x-24 mt-44" dir="rtl">
            <div class="relative w-1/2">
                <div class="absolute z-30 -top-20 right-32">
                    <svg width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 152.735 76.3676)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 136.723 92.3801)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 120.71 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.698 124.405)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.6851 140.418)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 144.729 84.3738)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 128.717 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.704 116.399)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.6914 132.411)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.679 148.424)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 144.729 68.3613)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 128.717 84.3738)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.704 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.6914 116.399)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.679 132.411)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 136.723 76.3676)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 120.71 92.3801)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.698 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.6851 124.405)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.6726 140.418)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 136.723 60.355)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 120.71 76.3676)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.698 92.3801)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.6851 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.6726 124.405)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 128.717 68.3613)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.704 84.3738)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.6914 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.679 116.399)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.6663 132.411)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 128.717 52.3488)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.704 68.3613)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.6914 84.3738)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.679 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.6663 116.399)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 120.71 60.355)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.698 76.3676)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.6851 92.3801)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.6726 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.6602 124.405)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 120.71 44.3424)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.698 60.355)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.6851 76.3676)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.6726 92.3801)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.6602 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.704 52.3488)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.6914 68.3613)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.679 84.3738)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.6663 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.6538 116.399)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.704 36.3362)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.6914 52.3488)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.679 68.3613)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.6663 84.3738)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.6538 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.698 44.3424)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.6851 60.355)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.6726 76.3676)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.6602 92.3801)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 40.6475 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.698 28.33)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.6851 44.3424)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.6726 60.355)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.6602 76.3676)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 40.6475 92.3801)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.6914 36.3362)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.679 52.3488)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.6663 68.3613)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.6538 84.3738)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 32.6414 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.6914 20.3236)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.679 36.3362)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.6663 52.3488)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.6538 68.3613)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 32.6414 84.3738)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.6851 28.33)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.6726 44.3424)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.6602 60.355)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 40.6475 76.3676)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.635 92.3801)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.6851 12.3174)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.6726 28.33)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.6602 44.3424)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 40.6475 60.355)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.635 76.3676)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.679 20.3236)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.6663 36.3362)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.6538 52.3488)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 32.6414 68.3613)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.6287 84.3738)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.679 4.31104)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.6663 20.3236)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.6538 36.3362)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 32.6414 52.3488)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.6287 68.3613)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.6726 12.3174)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.6602 28.33)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 40.6475 44.3424)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.635 60.355)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 8.62231 76.3676)" fill="#CFCFCF"/>
                    </svg>
                </div>

                <swiper :options="swiperOptions" class="-z-50" dir="rtl">
                    <swiper-slide>
                        <img src="../assets/Rectangle 165.png" alt="image" class="w-full h-screen object-cover">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Rectangle 165.png" alt="image" class="w-full h-screen object-cover">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Rectangle 165.png" alt="image" class="w-full h-screen object-cover">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Rectangle 165.png" alt="image" class="w-full h-screen object-cover">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Rectangle 165.png" alt="image" class="w-full h-screen object-cover">
                    </swiper-slide>
                </swiper>

                <div class="flex items-center justify-center -mt-12 z-30 mr-20 gap-x-4 bg-white shadow-md w-52 h-24 p-5 pt-9 px-12 rounded-lg absolute left-20" dir="rtl">
                    <div class="swiper-button-prev static">
                        <svg width="28" height="21" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8L22 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 15L22 8L15 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div class="swiper-button-next static">
                        <svg width="28" height="21" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 8L1 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 15L1 8L8 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="h-screen pb-8 overflow-y-scroll">
                <p class="font-YekanB text-4xl leading-tight">ویژگی های <br> اپلیکیشن مراکز خرید</p>
                
                <div class="flex flex-col gap-y-4 mt-12">
                    <div class="flex items-center gap-x-9">
                        <p class="text-[#ACACAC] text-center bg-[#F2F2F2] p-2 px-4 rounded-full">1</p>
                        <p @click="[none = !none , ff8030 = !ff8030]" class="text-[#4D4D4D] font-YekanM text-xl hover:text-[#FF8030] transition-all cursor-pointer" :class="{title:ff8030}">فروشگاه اینترنتی</p>
                    </div>

                    <div class="flex flex-col gap-y-4 mt-7 mr-20 pb-8 border-b border-[#E5E5E5] w-[500px] transition-all" :class="{ability:none}">
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان خرید با امتیاز های باشگاه</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">خرید مستقیم با کارت بانکی</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان تخفیف ویژه اعضای باشگاه مشتریان</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-x-9">
                        <p class="text-[#ACACAC] text-center bg-[#F2F2F2] p-2 px-4 rounded-full">2</p>
                        <p @click="[none2 = !none2 , ff80302 = !ff80302]" class="text-[#4D4D4D] font-YekanM text-xl hover:text-[#FF8030] transition-all cursor-pointer" :class="{title2:ff80302}">رزرواسیون</p>
                    </div>

                    <div class="flex flex-col gap-y-4 mt-7 mr-20 pb-8 border-b border-[#E5E5E5] w-[500px] transition-all" :class="{ability2:none2}">
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان خرید با امتیاز های باشگاه</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">خرید مستقیم با کارت بانکی</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان تخفیف ویژه اعضای باشگاه مشتریان</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-x-9">
                        <p class="text-[#ACACAC] text-center bg-[#F2F2F2] p-2 px-4 rounded-full">3</p>
                        <p @click="[none3 = !none3 , ff80303 = !ff80303]" class="text-[#4D4D4D] font-YekanM text-xl hover:text-[#FF8030] transition-all cursor-pointer" :class="{title3:ff80303}">قرعه کشی های فصلی یا مناسبتی</p>
                    </div>

                    <div class="flex flex-col gap-y-4 mt-7 mr-20 pb-8 border-b border-[#E5E5E5] w-[500px] transition-all" :class="{ability3:none3}">
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان خرید با امتیاز های باشگاه</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">خرید مستقیم با کارت بانکی</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان تخفیف ویژه اعضای باشگاه مشتریان</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-x-9">
                        <p class="text-[#ACACAC] text-center bg-[#F2F2F2] p-2 px-4 rounded-full">4</p>
                        <p @click="[none4 = !none4 , ff80304 = !ff80304]" class="text-[#4D4D4D] font-YekanM text-xl hover:text-[#FF8030] transition-all cursor-pointer" :class="{title4:ff80304}">پلان طبقاتی به صورت سه بعدی 3D</p>
                    </div>

                    <div class="flex flex-col gap-y-4 mt-7 mr-20 pb-8 border-b border-[#E5E5E5] w-[500px] transition-all" :class="{ability4:none4}">
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان خرید با امتیاز های باشگاه</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">خرید مستقیم با کارت بانکی</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان تخفیف ویژه اعضای باشگاه مشتریان</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-x-9">
                        <p class="text-[#ACACAC] text-center bg-[#F2F2F2] p-2 px-4 rounded-full">5</p>
                        <p @click="[none5 = !none5 , ff80305 = !ff80305]"  class="text-[#4D4D4D] font-YekanM text-xl hover:text-[#FF8030] transition-all cursor-pointer" :class="{title5:ff80305}">ارسال نوتیفیکیشن فردی و گروهی</p>
                    </div>

                    <div class="flex flex-col gap-y-4 mt-7 mr-20 pb-8 border-b border-[#E5E5E5] w-[500px] transition-all" :class="{ability5:none5}">
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان خرید با امتیاز های باشگاه</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">خرید مستقیم با کارت بانکی</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان تخفیف ویژه اعضای باشگاه مشتریان</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-x-9">
                        <p class="text-[#ACACAC] text-center bg-[#F2F2F2] p-2 px-4 rounded-full">6</p>
                        <p @click="[none6 = !none6 , ff80306 = !ff80306]"  class="text-[#4D4D4D] font-YekanM text-xl hover:text-[#FF8030] transition-all cursor-pointer" :class="{title6:ff80306}">راحت خرید کنید Hands - Free</p>
                    </div>

                    <div class="flex flex-col gap-y-4 mt-7 mr-20 pb-8 border-b border-[#E5E5E5] w-[500px] transition-all" :class="{ability6:none6}">
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان خرید با امتیاز های باشگاه</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">خرید مستقیم با کارت بانکی</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان تخفیف ویژه اعضای باشگاه مشتریان</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-x-9">
                        <p class="text-[#ACACAC] text-center bg-[#F2F2F2] p-2 px-4 rounded-full">7</p>
                        <p @click="[none7 = !none7 , ff80307 = !ff80307]"  class="text-[#4D4D4D] font-YekanM text-xl hover:text-[#FF8030] transition-all cursor-pointer" :class="{title7:ff80307}">مقیاس پذیر</p>
                    </div>

                    <div class="flex flex-col gap-y-4 mt-7 mr-20 pb-8 border-b border-[#E5E5E5] w-[500px] transition-all" :class="{ability7:none7}">
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان خرید با امتیاز های باشگاه</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">خرید مستقیم با کارت بانکی</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان تخفیف ویژه اعضای باشگاه مشتریان</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-x-9">
                        <p class="text-[#ACACAC] text-center bg-[#F2F2F2] p-2 px-4 rounded-full">8</p>
                        <p @click="[none8 = !none8 , ff80308 = !ff80308]"  class="text-[#4D4D4D] font-YekanM text-xl hover:text-[#FF8030] transition-all cursor-pointer" :class="{title8:ff80308}">تجربه کاربری متفاوت</p>
                    </div>
                    
                    <div class="flex flex-col gap-y-4 mt-7 mr-20 pb-8 border-b border-[#E5E5E5] w-[500px] transition-all" :class="{ability8:none8}">
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان خرید با امتیاز های باشگاه</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">خرید مستقیم با کارت بانکی</p>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                            </svg>
                            <p class="font-YekanM text-[#767676] text-lg">امکان تخفیف ویژه اعضای باشگاه مشتریان</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-60" dir="rtl">
            <div>
                <p class="font-YekanB xl:text-4xl text-2xl xl:text-[#000] text-[#4D4D4D] mt-24">مزایای اپلیکیشن</p>
                <div class="flex flex-col gap-y-2 mt-6 px-3">
                    <div class="flex items-center gap-x-7">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                        </svg>
                        <p class="font-YekanM text-[#4D4D4D] text-lg">امکان پرداخت غیر حضوری</p>
                    </div>
                    <div class="flex items-center gap-x-7">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                        </svg>
                        <p class="font-YekanM text-[#4D4D4D] text-lg">امکان پرداخت راحت و آسان با QR code</p>
                    </div>
                    <div class="flex items-start gap-x-7">
                        <svg width="5" height="5" class="mt-3" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                        </svg>
                        <p class="font-YekanM text-[#4D4D4D] text-lg leading-loose">ارسال پیام های گروهی برای کاربران <br> به صورت رایگان</p>
                    </div>
                </div>
            </div>

            <div>
                <img src="../assets/Group 235.png" alt="image">
            </div>

            <div class="flex flex-col justify-end">
                <p class="font-YekanB xl:text-4xl text-2xl xl:text-[#000] text-[#4D4D4D] mt-24">پنل مدیریتی <br> اپلیکیشن</p>
                <div class="flex flex-col gap-y-2 mt-6 px-3">
                    <div class="flex items-center gap-x-7">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                        </svg>
                        <p class="font-YekanM text-[#4D4D4D] text-lg">نمایش گزارشات مدیریتی</p>
                    </div>
                    <div class="flex items-center gap-x-7">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                        </svg>
                        <p class="font-YekanM text-[#4D4D4D] text-lg">نمایش گزارشات فروش</p>
                    </div>
                    <div class="flex items-center gap-x-7">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                        </svg>
                        <p class="font-YekanM text-[#4D4D4D] text-lg">امکان مدیریت کاربران</p>
                    </div>
                    <div class="flex items-center gap-x-7">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#A596FF"/>
                        </svg>
                        <p class="font-YekanM text-[#4D4D4D] text-lg">ارسال پیام های گروهی و تکی</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute left-[45%] mt-32">
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.4048 36.2245C28.3425 44.3848 15.1342 44.4076 6.90329 36.2755C-1.32761 28.1433 -1.46424 14.9357 6.59811 6.77548C14.6605 -1.38479 27.8687 -1.40761 36.0996 6.72452C44.3305 14.8567 44.4672 28.0643 36.4048 36.2245ZM14.9088 14.9864C11.3423 18.5962 11.4027 24.4388 15.0438 28.0361C18.6848 31.6335 24.5277 31.6234 28.0942 28.0136C31.6607 24.4038 31.6002 18.5612 27.9592 14.9639C24.3181 11.3665 18.4753 11.3766 14.9088 14.9864Z" fill="#F2F2F2"/>
            </svg>
        </div>

        <DivBlue></DivBlue>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "@/components/HeaderView.vue";
    import Footer from "@/components/FooterView.vue";
    import SocialPages from "@/components/SocialPages.vue";
    import DivBlue from "@/components/DivBlue.vue";
    import ResponsiveHeader from "@/components/ResponsiveHeader.vue";

    export default {
        components: {
            Footer,
            ResponsiveHeader,
            Header,
            SocialPages,
            DivBlue
        },
        data() {
            return {
                limitPosition: 1,
                scrolled: false,
                lastPosition: 0,
                background: false,
                swiperOptions : {
                    slidesPerView: 1,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        slidesPerGroupAuto: true
                    },
                },
                none: true,
                none2: true,
                none3: true,
                none4: true,
                none5: true,
                none6: true,
                none7: true,
                none8: true,
                ff8030: false,
                ff80302: false,
                ff80303: false,
                ff80304: false,
                ff80305: false,
                ff80306: false,
                ff80307: false,
                ff80308: false
            }
        },
        methods: {
            handleScroll() {
                if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
                    this.scrolled = true;
                    this.background = true;
                    // move up!
                } 
                
                if (this.lastPosition > window.scrollY) {
                    this.scrolled = false;
                    // move down
                }
                
                this.lastPosition = window.scrollY;
                // this.scrolled = window.scrollY > 250;
                this.background = window.scrollY > 10;
            }
        },
        created() {
            window.addEventListener("scroll", this.handleScroll);
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        }
    }
</script>

<style>
    .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
        display : none !important;
    }
    .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
        display : none !important;
    }
    .swiper-button-next, .swiper-button-prev {
        stroke: #B0B0B0 !important;
    }
    .swiper-button-next:hover, .swiper-button-prev:hover {
        stroke: #FF6300 !important;
        transition-property: all !important;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
        transition-duration: 150ms !important;
        transform: scaleX(1.5);
        margin-right: 5px;
        margin-left: 5px;
    }
    .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
        opacity: 0.4 !important;
    }
    .headroom {
        will-change: transform;
        transition: transform 200ms linear;
    }
    .headroom--pinned {
        transform: translateY(0%);
    }
    .headroom--unpinned {
        transform: translateY(-100%);
    }
    .blue-theme {
        background-color: white;
        color: black !important;
        box-shadow: 0px 2px 2px #C9C9C9;
    }
    .text-color:hover {
        background-color: transparent !important;
        color: black !important;
    }
    .ability {
        display: none !important;
    }
    .ability2 {
        display: none !important;
    }
    .ability3 {
        display: none !important;
    }
    .ability4 {
        display: none !important;
    }
    .ability5 {
        display: none !important;
    }
    .ability6 {
        display: none !important;
    }
    .ability7 {
        display: none !important;
    }
    .ability8 {
        display: none !important;
    }
    .title {
        color: #ff8030 !important;
    }
    .title2 {
        color: #ff8030 !important;
    }
    .title3 {
        color: #ff8030 !important;
    }
    .title4 {
        color: #ff8030 !important;
    }
    .title5 {
        color: #ff8030 !important;
    }
    .title6 {
        color: #ff8030 !important;
    }
    .title7 {
        color: #ff8030 !important;
    }
    .title8 {
        color: #ff8030 !important;
    }
    .vm2__close[data-v-a2527186] {
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 20px;
        z-index: 5000;
    }
    .vm2__hr[data-v-a2527186] {
        margin-top: 0.4rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        display: none;
    }
    .vm2__header[data-v-a2527186] {
        padding: 0px 0px 0px 0px !important;
        display: flex;
        justify-content: space-between;
    }
    h4[data-v-a2527186] {
        display: none !important;
    }
</style>