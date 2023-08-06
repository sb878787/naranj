<template>
    <div class="contact">
        <Header class="hidden xl:block"></Header>

        <div class="relative xl:w-[650px] xl:h-[92vh] h-screen w-full">
            <img class="absolute object-cover -z-20 xl:w-[650px] xl:h-[92vh] h-screen w-full object-center" src="../assets/image 67.png" alt="logo"/>

            <button type="button" @click="openModal">
                <div class="absolute bottom-36 -right-[152px] z-30 hover:rotate-[360deg] transition-all duration-1000 origin-center">
                    <svg width="304" height="325" viewBox="0 0 304 325" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            
            <ResponsiveHeader class="-mt-6 xl:-mt-0"></ResponsiveHeader>

            <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
        </div>

        <transition name="translateX">
            <div v-show="inModalOpen" class="absolute top-0 z-50 w-full h-screen bg-black bg-opacity-[0.5] flex items-center justify-center">
                <button type="button" @click="closeModal" class="text-white bg-[#FF6300] rounded-lg p-5 px-6 absolute top-24 right-96 text-xl">&#10005;</button>
                <div>
                    <video id="videoElement" class="w-full" controls>
                        <source src="../assets/video/047f812ca27807257a076707913a5fc938923532-480p.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </transition>

        <SocialPages class="hidden xl:block"></SocialPages>

        <div dir="rtl" class="xl:absolute xl:top-[25%] xl:right-0 xl:px-44 static px-8 mt-8 xl:mt-0">
            <p class="font-YekanM text-[#FF6300] xl:text-xl text-lg">نرم افزار کاربردی ریتیل</p>
            <p class="font-YekanB xl:text-4xl text-2xl xl:pt-6 pt-3 xl:text-[#000] text-[#4D4D4D]">اپلیکیشن مراکز خرید نارنج</p>
            <p class="font-YekanM text-[#4D4D4D] xl:text-xl xl:pt-12 pt-7 xl:leading-loose">شرکت نارنج این افتخار را دارد که طی چند سال تحقیق و بررسی بر روی تمام نرم افزار های <br> مراکز خرید دنیا محصولی فراهم کند که به سیستم پاخور مراکز خرید و ریتیل کشور <br> همچنین به حفظ و وفادار سازی مشتری کمک می کند که شامل ویژگی هایی می باشد <br> که در اینجا به آن اشاره کرده ایم.</p>
            
            <div class="absolute top-32 -left-56">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2956 21.1898C16.4936 26.05 8.66081 26.0973 3.80053 21.2954C-1.05976 16.4934 -1.10703 8.6606 3.69493 3.80032C8.49689 -1.05996 16.3297 -1.10724 21.19 3.69472C26.0502 8.49668 26.0975 16.3295 21.2956 21.1898ZM8.6023 8.64881C6.47809 10.7988 6.499 14.2638 8.64902 16.388C10.799 18.5122 14.264 18.4913 16.3882 16.3413C18.5124 14.1913 18.4915 10.7263 16.3415 8.6021C14.1915 6.47788 10.7265 6.4988 8.6023 8.64881Z" fill="#F2F2F2"/>
                </svg>
            </div>
        </div>

        <div class="flex flex-col gap-3 xl:absolute xl:top-[69%] xl:right-0 xl:px-44 static px-8">
            <div class="flex gap-7 items-center relative border-2 border-dotted w-[650px] p-5 rounded-xl" dir="rtl">
                <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.53453 25.3601C8.16653 25.3601 7.91853 25.3961 7.79053 25.4321V27.7881C7.94253 27.8241 8.13253 27.8341 8.39453 27.8341C9.35253 27.8341 9.94253 27.3501 9.94253 26.5321C9.94253 25.8001 9.43453 25.3601 8.53453 25.3601ZM15.5085 25.3841C15.1085 25.3841 14.8485 25.4201 14.6945 25.4561V30.6761C14.8485 30.7121 15.0965 30.7121 15.3205 30.7121C16.9545 30.7241 18.0185 29.8241 18.0185 27.9201C18.0305 26.2601 17.0605 25.3841 15.5085 25.3841Z" fill="#BBBBBB"/>
                    <path d="M20 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4V36C0 37.0609 0.421427 38.0783 1.17157 38.8284C1.92172 39.5786 2.93913 40 4 40H28C29.0609 40 30.0783 39.5786 30.8284 38.8284C31.5786 38.0783 32 37.0609 32 36V12L20 0ZM10.996 28.38C10.378 28.96 9.466 29.22 8.404 29.22C8.19808 29.2222 7.99226 29.2102 7.788 29.184V32.036H6V24.164C6.80691 24.0436 7.62224 23.9888 8.438 24C9.552 24 10.344 24.212 10.878 24.638C11.386 25.042 11.73 25.704 11.73 26.484C11.728 27.268 11.468 27.93 10.996 28.38ZM18.61 31.09C17.77 31.788 16.492 32.12 14.93 32.12C13.994 32.12 13.332 32.06 12.882 32V24.166C13.6892 24.0482 14.5043 23.9927 15.32 24C16.834 24 17.818 24.272 18.586 24.852C19.416 25.468 19.936 26.45 19.936 27.86C19.936 29.386 19.378 30.44 18.61 31.09ZM26 25.54H22.936V27.362H25.8V28.83H22.936V32.038H21.124V24.06H26V25.54ZM20 14H18V4L28 14H20Z" fill="#BBBBBB"/>
                </svg>

                <p class="font-YekanB text-xl">دریافت کاتالوگ اپلیکیشن <br> مراکز خرید نارنج</p>

                <a href="/930947611amozesh ghoran-nohom.pdf" download class="flex gap-5 items-center p-3 px-11 rounded-xl bg-[#FF8030] hover:bg-[#ff6d1f] text-white font-YekanM absolute left-5 transition-all">
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

                <a href="/930947611amozesh ghoran-nohom.pdf" download class="flex gap-5 items-center p-3 px-11 rounded-xl bg-[#FF8030] hover:bg-[#ff6d1f] text-white font-YekanM absolute left-5 transition-all">
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8.30125L11.4013 6.90125C11.6368 6.67338 11.9525 6.54716 12.2803 6.54977C12.608 6.55239 12.9216 6.68363 13.1535 6.91523C13.3855 7.14682 13.5172 7.46025 13.5202 7.788C13.5233 8.11574 13.3975 8.43159 13.17 8.6675L9.63375 12.2037C9.51793 12.3202 9.38023 12.4127 9.22857 12.4757C9.0769 12.5388 8.91426 12.5713 8.75 12.5713C8.58574 12.5713 8.4231 12.5388 8.27143 12.4757C8.11977 12.4127 7.98207 12.3202 7.86625 12.2037L4.33 8.6675C4.21394 8.55128 4.12192 8.41334 4.05917 8.26155C3.99642 8.10977 3.96419 7.94711 3.9643 7.78287C3.96454 7.45116 4.09653 7.13314 4.33125 6.89875C4.56597 6.66436 4.88418 6.53282 5.21588 6.53306C5.54759 6.53329 5.86561 6.66528 6.1 6.9L7.5 8.30125V1.25C7.5 0.918479 7.6317 0.600537 7.86612 0.366117C8.10054 0.131696 8.41848 0 8.75 0C9.08152 0 9.39946 0.131696 9.63388 0.366117C9.8683 0.600537 10 0.918479 10 1.25V8.30125ZM1.25 15H16.25C16.5815 15 16.8995 15.1317 17.1339 15.3661C17.3683 15.6005 17.5 15.9185 17.5 16.25C17.5 16.5815 17.3683 16.8995 17.1339 17.1339C16.8995 17.3683 16.5815 17.5 16.25 17.5H1.25C0.918479 17.5 0.600537 17.3683 0.366117 17.1339C0.131696 16.8995 0 16.5815 0 16.25C0 15.9185 0.131696 15.6005 0.366117 15.3661C0.600537 15.1317 0.918479 15 1.25 15Z" fill="white"/>
                        </svg>
                    </div>
                    <div><p>دانلود نسخه بتا</p></div>
                </a>
            </div>
        </div>

        <p class="font-YekanB xl:text-4xl text-2xl xl:text-[#000] text-[#4D4D4D] text-right pr-44 mt-28">کاربرد اپلیکیشن</p>

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
                    <div class="flex items-center gap-x-9 group cursor-pointer">
                        <p @click="none = !none" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="{title:ff8030}">1</p>
                        <p @click="[none = !none , ff8030 = !ff8030]" class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="{title:ff8030}">فروشگاه اینترنتی</p>
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

                    <div class="flex items-center gap-x-9 group cursor-pointer">
                        <p @click="none2 = !none2" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="{title2:ff80302}">2</p>
                        <p @click="[none2 = !none2 , ff80302 = !ff80302]" class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="{title2:ff80302}">رزرواسیون</p>
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

                    <div class="flex items-center gap-x-9 group cursor-pointer">
                        <p @click="none3 = !none3" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="{title3:ff80303}">3</p>
                        <p @click="[none3 = !none3 , ff80303 = !ff80303]" class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="{title3:ff80303}">قرعه کشی های فصلی یا مناسبتی</p>
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

                    <div class="flex items-center gap-x-9 group cursor-pointer">
                        <p @click="none4 = !none4" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="{title4:ff80304}">4</p>
                        <p @click="[none4 = !none4 , ff80304 = !ff80304]" class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="{title4:ff80304}">پلان طبقاتی به صورت سه بعدی 3D</p>
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

                    <div class="flex items-center gap-x-9 group cursor-pointer">
                        <p @click="none5 = !none5" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="{title5:ff80305}">5</p>
                        <p @click="[none5 = !none5 , ff80305 = !ff80305]"  class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="{title5:ff80305}">ارسال نوتیفیکیشن فردی و گروهی</p>
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

                    <div class="flex items-center gap-x-9 group cursor-pointer">
                        <p @click="none6 = !none6" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="{title6:ff80306}">6</p>
                        <p @click="[none6 = !none6 , ff80306 = !ff80306]"  class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="{title6:ff80306}">راحت خرید کنید Hands - Free</p>
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

                    <div class="flex items-center gap-x-9 group cursor-pointer">
                        <p @click="none7 = !none7" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="{title7:ff80307}">7</p>
                        <p @click="[none7 = !none7 , ff80307 = !ff80307]"  class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="{title7:ff80307}">مقیاس پذیر</p>
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

                    <div class="flex items-center gap-x-9 group cursor-pointer">
                        <p @click="none8 = !none8" class="text-[#ACACAC] group-hover:text-[#FF8030] text-center bg-[#F2F2F2] p-2 px-4 rounded-full" :class="{title8:ff80308}">8</p>
                        <p @click="[none8 = !none8 , ff80308 = !ff80308]"  class="text-[#4D4D4D] font-YekanM text-xl group-hover:text-[#FF8030] transition-all" :class="{title8:ff80308}">تجربه کاربری متفاوت</p>
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

        <div class="absolute left-[43%] mt-32">
            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.4048 36.2245C28.3425 44.3848 15.1342 44.4076 6.90329 36.2755C-1.32761 28.1433 -1.46424 14.9357 6.59811 6.77548C14.6605 -1.38479 27.8687 -1.40761 36.0996 6.72452C44.3305 14.8567 44.4672 28.0643 36.4048 36.2245ZM14.9088 14.9864C11.3423 18.5962 11.4027 24.4388 15.0438 28.0361C18.6848 31.6335 24.5277 31.6234 28.0942 28.0136C31.6607 24.4038 31.6002 18.5612 27.9592 14.9639C24.3181 11.3665 18.4753 11.3766 14.9088 14.9864Z" fill="#F2F2F2"/>
            </svg>
        </div>

        <div class="pl-44 mt-52">
            <div class="bg-[#2F58D1] w-full pb-12 relative rounded-tl-[140px] z-20">
                <div class="absolute left-2 top-2">
                    <svg width="259" height="259" viewBox="0 0 259 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="129.639" cy="129.639" r="129.149" transform="rotate(45.4105 129.639 129.639)" fill="url(#paint0_linear_1_2371)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1_2371" x1="129.639" y1="0.490372" x2="129.639" y2="258.787" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0A3BC9"/>
                                <stop offset="1" stop-color="#0A3BC9" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div class="flex items-end justify-end">
                    <div class="flex flex-col justify-end w-1/3 pr-44 pt-60" dir="rtl">
                        <p class="font-semibold text-[42px] text-white">XRM</p>
                        <p class="font-YekanB text-white text-[42px] ">باشگاه مشتریان</p>
                        <ul class="font-YekanM text-[#E5E5E5] text-xl pt-5 space-y-2">
                            <li>مدیریت ارتباط با مشتری</li>
                            <li>مدیریت الگوه های رفتار مشتری</li>
                            <li>حفظ و وفادار سازی مشتری</li>
                        </ul>
                        <div class="flex items-end justify-end w-full">
                            <button type="button" class="bg-[#FF8030] rounded-xl text-white p-4 font-YekanM w-1/2 mt-28 cursor-pointer hover:bg-[#ff6d1f] transition-all">مشاهده دموی پنل</button>
                        </div>
                    </div>
                </div>

                <div class="absolute -bottom-20 -left-20">
                    <img src="../assets/ass.png" alt="image" width="900">
                </div>

                <div class="absolute top-12 right-1/3">
                    <svg width="102" height="101" viewBox="0 0 102 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50.8417" cy="50.5974" r="50.3672" transform="rotate(-78.2218 50.8417 50.5974)" fill="url(#paint0_linear_1_2372)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1_2372" x1="50.8417" y1="0.230278" x2="50.8417" y2="100.965" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0A3BC9"/>
                                <stop offset="1" stop-color="#0A3BC9" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div class="absolute top-32 right-20 -z-10">
                    <svg width="450" height="450" viewBox="0 0 357 357" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="178.622" cy="178.622" r="177.928" transform="rotate(45.4105 178.622 178.622)" fill="url(#paint0_linear_1_2370)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1_2370" x1="105.868" y1="16.5044" x2="247.166" y2="294.806" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0A3BC9"/>
                                <stop offset="0.989114" stop-color="#0A3BC9" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div class="absolute top-20 left-96 -z-10">
                    <svg width="195" height="195" viewBox="0 0 195 195" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="96.8698" cy="96.8698" r="96.8698" transform="matrix(0.204123 -0.978945 -0.978945 -0.204123 172.66 212.207)" fill="url(#paint0_linear_1_2374)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1_2374" x1="96.8698" y1="-1.85761e-06" x2="34.5387" y2="222.393" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0A3BC9"/>
                                <stop offset="0.828768" stop-color="#0A3BC9" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div class="absolute bottom-20 right-32">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22.5723" cy="22.5722" r="21.7413" transform="rotate(141.109 22.5723 22.5722)" fill="url(#paint0_linear_1_2376)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1_2376" x1="22.5723" y1="0.830893" x2="22.5723" y2="44.3135" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0A3BC9"/>
                                <stop offset="1" stop-color="#0A3BC9" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>

        <div class="absolute right-1/4 mt-24">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7427 1.3295L7.73077 5.33179L3.72861 1.31997C2.18535 -0.227022 -0.213865 2.16641 1.3294 3.7134L5.33156 7.72523L1.31959 11.7275C-0.227057 13.2704 2.16629 15.6696 3.71294 14.1267L7.72491 10.1244L11.7271 14.1362C13.2703 15.6832 15.6695 13.2897 14.1263 11.7427L10.1241 7.73092L14.1361 3.72863C15.6829 2.18551 13.2896 -0.213623 11.7427 1.3295Z" fill="#E5E5E5"/>
            </svg>
        </div>

        <p class="font-YekanB xl:text-4xl text-2xl xl:text-[#000] text-[#4D4D4D] text-right pr-44 mt-60">سرویس های ویژه</p>

        <div class="flex flex-col items-center justify-center px-[360px]">
            <div class="flex items-center justify-center border-b-2 border-[#E5E5E5] w-4/5 pr-16">
                <div class="border-r-2 border-[#E5E5E5] pb-12 h-96 flex items-end justify-end">
                    <div class="mr-44">
                        <svg width="218" height="225" viewBox="0 0 218 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M107.5 200C107.5 208.284 114.248 215.107 122.451 213.955C131.427 212.695 140.228 210.301 148.638 206.817C161.681 201.415 173.532 193.496 183.514 183.514C193.496 173.532 201.415 161.681 206.817 148.638C210.301 140.228 212.695 131.427 213.955 122.451C215.107 114.248 208.284 107.5 200 107.5L122.5 107.5C114.216 107.5 107.5 114.216 107.5 122.5L107.5 200Z" fill="#FF8030" fill-opacity="0.59"/>
                            <path d="M189 159C172.977 159 160 165.563 160 173.667C160 181.77 172.977 188.333 189 188.333C205.022 188.333 218 181.77 218 173.667C218 165.563 205.022 159 189 159ZM160 181V192C160 200.103 172.977 206.667 189 206.667C205.022 206.667 218 200.103 218 192V181C218 189.103 205.022 195.667 189 195.667C172.977 195.667 160 189.103 160 181ZM160 199.333V210.333C160 218.437 172.977 225 189 225C205.022 225 218 218.437 218 210.333V199.333C218 207.437 205.022 214 189 214C172.977 214 160 207.437 160 199.333Z" fill="#4C4C4C"/>
                            <path d="M168.378 142.33L138.682 172L135 168.318L164.67 138.622L168.378 142.33ZM180.162 134.729L181.714 133.177L179.636 131.099L181.32 129.415L177.585 125.68L175.901 127.364L173.823 125.286L172.271 126.838C167.695 123.103 162.539 120.104 157.016 118L154.832 122.708C159.435 125.128 163.67 128.048 167.616 131.493L166.301 132.809L174.191 140.699L175.507 139.384C178.952 143.33 181.872 147.565 184.292 152.168L189 149.984C186.896 144.461 183.897 139.305 180.162 134.729Z" fill="#4C4C4C"/>
                        </svg>
                        <p class="text-[#4D4D4D] font-YekanB text-lg pt-12 -mr-12" dir="rtl">دیتا ماینینگ &nbsp;<b>Data Mining</b></p>
                    </div>
                </div>

                <div class="pb-12 h-96 flex items-end justify-end">
                    <div class="ml-20">
                        <svg width="226" height="228" viewBox="0 0 226 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M107.5 200C107.5 208.284 114.248 215.107 122.451 213.955C131.427 212.695 140.228 210.301 148.638 206.817C161.681 201.415 173.532 193.496 183.514 183.514C193.496 173.532 201.415 161.681 206.817 148.638C210.301 140.228 212.695 131.427 213.955 122.451C215.107 114.248 208.284 107.5 200 107.5L122.5 107.5C114.216 107.5 107.5 114.216 107.5 122.5L107.5 200Z" fill="#FF8030" fill-opacity="0.59"/>
                            <path d="M204.125 219.25H147.25C142.609 219.25 138.158 217.406 134.876 214.124C131.594 210.842 129.75 206.391 129.75 201.75C129.75 197.109 131.594 192.658 134.876 189.376C138.158 186.094 142.609 184.25 147.25 184.25H150.356C153.244 174.144 162.562 166.75 173.5 166.75C179.882 166.75 186.002 169.285 190.515 173.798C195.027 178.31 197.562 184.431 197.562 190.813V193H204.125C207.606 193 210.944 194.383 213.406 196.844C215.867 199.306 217.25 202.644 217.25 206.125C217.25 209.606 215.867 212.944 213.406 215.406C210.944 217.867 207.606 219.25 204.125 219.25ZM205.656 184.381C204.178 176.942 200.164 170.246 194.3 165.435C188.436 160.624 181.085 157.996 173.5 158C160.856 158 149.875 165.175 144.406 175.631C137.972 176.336 132.025 179.392 127.706 184.212C123.386 189.032 120.998 195.278 121 201.75C121 208.712 123.766 215.389 128.688 220.312C133.611 225.234 140.288 228 147.25 228H204.125C206.998 228 209.842 227.434 212.496 226.335C215.15 225.236 217.562 223.624 219.593 221.593C221.624 219.562 223.236 217.15 224.335 214.496C225.434 211.842 226 208.998 226 206.125C226 194.575 217.031 185.213 205.656 184.381Z" fill="#4C4C4C"/>
                            <path d="M128 138.903L131.455 142.376C140.039 133.747 153.961 133.747 162.545 142.376L166 138.903C155.515 128.366 138.502 128.366 128 138.903ZM141.818 152.792L147 158L152.182 152.792C151.502 152.107 150.694 151.563 149.805 151.192C148.916 150.821 147.963 150.63 147 150.63C146.037 150.63 145.084 150.821 144.195 151.192C143.306 151.563 142.498 152.107 141.818 152.792ZM134.909 145.848L138.364 149.32C140.655 147.019 143.761 145.726 147 145.726C150.239 145.726 153.345 147.019 155.636 149.32L159.091 145.848C152.424 139.146 141.594 139.146 134.909 145.848Z" fill="#4C4C4C"/>
                            <path d="M156.664 190.744V187.224H160.184V190.744H156.664ZM156.696 211V194.68H160.152V211H156.696ZM169.972 211.256C167.817 211.256 166.281 210.947 165.364 210.328C164.446 209.688 163.87 208.653 163.636 207.224C163.401 205.773 163.284 203.363 163.284 199.992C163.284 196.621 163.401 194.221 163.636 192.792C163.87 191.341 164.446 190.307 165.364 189.688C166.281 189.048 167.817 188.728 169.972 188.728C172.126 188.728 173.662 189.048 174.58 189.688C175.497 190.307 176.073 191.341 176.308 192.792C176.564 194.243 176.692 196.643 176.692 199.992C176.692 203.341 176.564 205.741 176.308 207.192C176.073 208.643 175.497 209.688 174.58 210.328C173.662 210.947 172.126 211.256 169.972 211.256ZM169.972 207.96C171.017 207.96 171.732 207.832 172.116 207.576C172.5 207.299 172.745 206.659 172.852 205.656C172.98 204.632 173.044 202.744 173.044 199.992C173.044 197.24 172.98 195.363 172.852 194.36C172.745 193.336 172.5 192.696 172.116 192.44C171.732 192.163 171.017 192.024 169.972 192.024C168.926 192.024 168.212 192.163 167.828 192.44C167.465 192.696 167.22 193.325 167.092 194.328C166.985 195.331 166.932 197.219 166.932 199.992C166.932 202.765 166.985 204.653 167.092 205.656C167.22 206.659 167.465 207.299 167.828 207.576C168.212 207.832 168.926 207.96 169.972 207.96ZM182.925 211V192.376H178.509V188.984H190.957V192.376H186.573V211H182.925Z" fill="#4C4C4C"/>
                        </svg>
                        <p class="text-[#4D4D4D] font-YekanB text-lg pt-12 -mr-1" dir="rtl">اینترنت اشیاء &nbsp;<b>iOT</b></p>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center w-4/5 pr-16">
                <div class="border-r-2 border-[#E5E5E5] h-96">
                    <div class="mr-40 pr-[2px] -mt-11">
                        <svg width="221" height="240" viewBox="0 0 221 240" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M107.5 200C107.5 208.284 114.248 215.107 122.451 213.955C131.427 212.695 140.228 210.301 148.638 206.817C161.681 201.415 173.532 193.496 183.514 183.514C193.496 173.532 201.415 161.681 206.817 148.638C210.301 140.228 212.695 131.427 213.955 122.451C215.107 114.248 208.284 107.5 200 107.5L122.5 107.5C114.216 107.5 107.5 114.216 107.5 122.5L107.5 200Z" fill="#FF8030" fill-opacity="0.59"/>
                            <rect x="135" y="137" width="86" height="103" fill="url(#pattern0)"/>
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_280_7" transform="matrix(0.00304752 0 0 0.00254453 -0.0028404 0)"/>
                                </pattern>
                                <image id="image0_280_7" width="330" height="393" xlink:href="data:image/png;base64,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"/>
                            </defs>
                        </svg>
                        <p class="text-[#4D4D4D] font-YekanB text-lg pt-12 -mr-14" dir="rtl">واقعیت مجازی &nbsp;&nbsp;<b>Virtual Reality</b></p>
                    </div>
                </div>
                
                <div class="h-96">
                    <div class="ml-20 -mt-11">
                        <svg width="215" height="265" viewBox="0 0 215 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M166.744 251L165.688 246.008H160.056L159.032 251H155.352L160.28 228.984H165.56L170.488 251H166.744ZM162.968 232.6H162.776L160.728 242.744H164.984L162.968 232.6ZM181.884 251L179.516 242.968H176.38V251H172.732V228.984H179.836C181.372 228.984 182.524 229.251 183.292 229.784C184.081 230.317 184.604 231.075 184.86 232.056C185.137 233.037 185.276 234.339 185.276 235.96C185.276 237.539 185.116 238.851 184.796 239.896C184.497 240.941 183.878 241.709 182.94 242.2L185.724 251H181.884ZM178.972 239.672C179.782 239.672 180.369 239.576 180.732 239.384C181.094 239.171 181.329 238.819 181.436 238.328C181.564 237.816 181.628 237.027 181.628 235.96C181.628 234.893 181.564 234.115 181.436 233.624C181.329 233.133 181.094 232.792 180.732 232.6C180.369 232.387 179.782 232.28 178.972 232.28H176.38V239.672H178.972Z" fill="#4C4C4C"/>
                            <path d="M193.876 241.372V236.584H189.088V233.236H193.876V228.448H197.224V233.236H202.012V236.584H197.224V241.372H193.876Z" fill="#4C4C4C"/>
                            <path d="M107.5 200C107.5 208.284 114.248 215.107 122.451 213.955C131.427 212.695 140.228 210.301 148.638 206.817C161.681 201.415 173.532 193.496 183.514 183.514C193.496 173.532 201.415 161.681 206.817 148.638C210.301 140.228 212.695 131.427 213.955 122.451C215.107 114.248 208.284 107.5 200 107.5L122.5 107.5C114.216 107.5 107.5 114.216 107.5 122.5L107.5 200Z" fill="#FF8030" fill-opacity="0.59"/>
                            <path d="M204 188.175C204 189.752 203.125 191.121 201.792 191.827L168.875 210.253C168.208 210.751 167.375 211 166.5 211C165.625 211 164.792 210.751 164.125 210.253L131.208 191.827C130.54 191.477 129.981 190.952 129.592 190.308C129.203 189.664 128.998 188.927 129 188.175V150.825C129 149.248 129.875 147.878 131.208 147.173L164.125 128.747C164.792 128.249 165.625 128 166.5 128C167.375 128 168.208 128.249 168.875 128.747L201.792 147.173C203.125 147.878 204 149.248 204 150.825V188.175ZM166.5 136.923L141.667 150.825L166.5 164.728L191.333 150.825L166.5 136.923ZM137.333 185.727L162.333 199.754V171.907L137.333 157.922V185.727ZM195.667 185.727V157.922L170.667 171.907V199.754L195.667 185.727Z" fill="#4C4C4C"/>
                        </svg>
                        <p class="text-[#4D4D4D] font-YekanB text-lg pt-7 -mr-24" dir="rtl">واقعیت افزوده &nbsp;&nbsp;<b>Agumented Reality</b></p>
                    </div>
                </div>
            </div>
        </div>

        <p class="font-YekanB xl:text-4xl text-2xl xl:text-[#000] text-[#4D4D4D] text-right pr-44 mt-20">قابلیت توسعه در پلتفرم های</p>

        <div class="flex justify-between px-72 w-full mt-28" dir="rtl">
            <div class="flex flex-col items-center justify-center space-y-4">
                <div class="bg-[#F2F2F2] rounded-full w-[85px] h-[85px] flex items-center justify-center">
                    <img src="../assets/Vector (3).png" class="w-8" alt="Vector">
                </div>
                <p class="font-medium text-lg">Website</p>
            </div>

            <div class="flex flex-col items-center justify-center space-y-4">
                <div class="bg-[#F2F2F2] rounded-full w-[85px] h-[85px] flex items-center justify-center">
                    <img src="../assets/Vector (2).png" class="w-6" alt="Vector">
                </div>
                <p class="font-medium text-lg">Android</p>
            </div>

            <div class="flex flex-col items-center justify-center space-y-4">
                <div class="bg-[#F2F2F2] rounded-full w-[85px] h-[85px] flex items-center justify-center">
                    <img src="../assets/Vector (1).png" class="w-6" alt="Vector">
                </div>
                <p class="font-medium text-lg">iOS</p>
            </div>

            <div class="flex flex-col items-center justify-center space-y-4">
                <div class="bg-[#F2F2F2] rounded-full w-[85px] h-[85px] flex items-center justify-center">
                    <img src="../assets/Group 146.png" class="w-6" alt="Vector">
                </div>
                <p class="font-medium text-lg">WebApp</p>
            </div>

            <div class="flex flex-col items-center justify-center space-y-4">
                <div class="bg-[#F2F2F2] rounded-full w-[85px] h-[85px] flex items-center justify-center">
                    <img src="../assets/Vector2.png" class="w-8" alt="Vector">
                </div>
                <p class="font-medium text-lg">Smart TV</p>
            </div>
            
            <div class="flex flex-col items-center justify-center space-y-4">
                <div class="bg-[#F2F2F2] rounded-full w-[85px] h-[85px] flex items-center justify-center">
                    <img src="../assets/Vector.png" class="w-6" alt="Vector">
                </div>
                <p class="font-medium text-lg">Apple Watch</p>
            </div>
        </div>

        <p class="font-YekanB xl:text-4xl text-2xl xl:text-[#000] text-[#4D4D4D] text-right pr-44 mt-48 xl:leading-snug">نظر مدیران مراکز خرید <br> درباره خدمات اپلیکیشن نارنج</p>
        <p class="font-YekanM xl:text-xl text-[#4D4D4D] text-right pr-44 mt-5 xl:leading-loose" dir="rtl">ببینید مشتریان ما در مورد روشی که خدمات توسعه اپلیکیشن نارنج به آنها <br> در بهره گیری از فناوری های پیشرفته کمک می کند می گویند.</p>

        <div class="px-44 mt-20">
            <swiper :options="swiperOptions2" dir="rtl">
                <swiper-slide>
                    <div class="p-5">
                        <div class="bg-white rounded-lg shadow-md p-16">
                            <div class="flex items-start justify-start gap-x-7">
                                <div class="border-b-[3px] border-[#FF8030] pb-6">
                                    <div class="relative overflow-hidden w-16 h-16 rounded-full">
                                        <img src="../assets/image 64.png" class="absolute object-cover object-center w-16 h-16" alt="profile">
                                    </div>
                                </div>
                                <div class="flex flex-col gap-y-2" dir="rtl">
                                    <p class="font-YekanB text-2xl">شهرام حدادی ابیانه</p>
                                    <p class="font-YekanM text-lg text-[#767676]">مدیر عامل شرکت بنای آرمانی</p>
                                </div>
                            </div>
                            <div class="flex gap-x-10 items-center justify-between">
                                <div class="w-1/2">
                                    <p class="text-[#4C4C4C] font-YekanM text-lg leading-relaxed pt-3">
                                        آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی
                                    </p>
                                </div>
                                <div class="relative w-1/2">
                                    <div class="relative overflow-hidden w-full h-52 rounded-xl flex items-center justify-center">
                                        <img src="../assets/image 68.png" class="absolute object-cover object-center w-full h-52 z-10" alt="profile">
                                        <div class="bg-[#FF8030] rounded-full w-14 h-14 flex items-center justify-center absolute z-40">
                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.17272C0 0.973437 0.0462501 0.778009 0.133751 0.603154C0.421252 0.0374444 1.07126 -0.166983 1.58751 0.148015L14.4501 7.97537C14.6251 8.08209 14.7688 8.24023 14.8651 8.4318C15.1526 8.99751 14.9651 9.71107 14.4501 10.0248L1.58751 17.8521C1.43063 17.9484 1.25144 17.9995 1.06876 18C0.478753 18 0 17.4754 0 16.8287V1.17272Z" fill="white"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="p-5">
                        <div class="bg-white rounded-lg shadow-md p-16">
                            <div class="flex items-start justify-start gap-x-7">
                                <div class="border-b-[3px] border-[#FF8030] pb-6">
                                    <div class="relative overflow-hidden w-16 h-16 rounded-full">
                                        <img src="../assets/image 64.png" class="absolute object-cover object-center w-16 h-16" alt="profile">
                                    </div>
                                </div>
                                <div class="flex flex-col gap-y-2" dir="rtl">
                                    <p class="font-YekanB text-2xl">شهرام حدادی ابیانه</p>
                                    <p class="font-YekanM text-lg text-[#767676]">مدیر عامل شرکت بنای آرمانی</p>
                                </div>
                            </div>
                            <div class="flex gap-x-10 items-center justify-between">
                                <div class="w-1/2">
                                    <p class="text-[#4C4C4C] font-YekanM text-lg leading-relaxed pt-3">
                                        آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی
                                    </p>
                                </div>
                                <div class="relative w-1/2">
                                    <div class="relative overflow-hidden w-full h-52 rounded-xl flex items-center justify-center">
                                        <img src="../assets/image 68.png" class="absolute object-cover object-center w-full h-52 z-10" alt="profile">
                                        <div class="bg-[#FF8030] rounded-full w-14 h-14 flex items-center justify-center absolute z-40">
                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.17272C0 0.973437 0.0462501 0.778009 0.133751 0.603154C0.421252 0.0374444 1.07126 -0.166983 1.58751 0.148015L14.4501 7.97537C14.6251 8.08209 14.7688 8.24023 14.8651 8.4318C15.1526 8.99751 14.9651 9.71107 14.4501 10.0248L1.58751 17.8521C1.43063 17.9484 1.25144 17.9995 1.06876 18C0.478753 18 0 17.4754 0 16.8287V1.17272Z" fill="white"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="p-5">
                        <div class="bg-white rounded-lg shadow-md p-16">
                            <div class="flex items-start justify-start gap-x-7">
                                <div class="border-b-[3px] border-[#FF8030] pb-6">
                                    <div class="relative overflow-hidden w-16 h-16 rounded-full">
                                        <img src="../assets/image 64.png" class="absolute object-cover object-center w-16 h-16" alt="profile">
                                    </div>
                                </div>
                                <div class="flex flex-col gap-y-2" dir="rtl">
                                    <p class="font-YekanB text-2xl">شهرام حدادی ابیانه</p>
                                    <p class="font-YekanM text-lg text-[#767676]">مدیر عامل شرکت بنای آرمانی</p>
                                </div>
                            </div>
                            <div class="flex gap-x-10 items-center justify-between">
                                <div class="w-1/2">
                                    <p class="text-[#4C4C4C] font-YekanM text-lg leading-relaxed pt-3">
                                        آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی
                                    </p>
                                </div>
                                <div class="relative w-1/2">
                                    <div class="relative overflow-hidden w-full h-52 rounded-xl flex items-center justify-center">
                                        <img src="../assets/image 68.png" class="absolute object-cover object-center w-full h-52 z-10" alt="profile">
                                        <div class="bg-[#FF8030] rounded-full w-14 h-14 flex items-center justify-center absolute z-40">
                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.17272C0 0.973437 0.0462501 0.778009 0.133751 0.603154C0.421252 0.0374444 1.07126 -0.166983 1.58751 0.148015L14.4501 7.97537C14.6251 8.08209 14.7688 8.24023 14.8651 8.4318C15.1526 8.99751 14.9651 9.71107 14.4501 10.0248L1.58751 17.8521C1.43063 17.9484 1.25144 17.9995 1.06876 18C0.478753 18 0 17.4754 0 16.8287V1.17272Z" fill="white"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="p-5">
                        <div class="bg-white rounded-lg shadow-md p-16">
                            <div class="flex items-start justify-start gap-x-7">
                                <div class="border-b-[3px] border-[#FF8030] pb-6">
                                    <div class="relative overflow-hidden w-16 h-16 rounded-full">
                                        <img src="../assets/image 64.png" class="absolute object-cover object-center w-16 h-16" alt="profile">
                                    </div>
                                </div>
                                <div class="flex flex-col gap-y-2" dir="rtl">
                                    <p class="font-YekanB text-2xl">شهرام حدادی ابیانه</p>
                                    <p class="font-YekanM text-lg text-[#767676]">مدیر عامل شرکت بنای آرمانی</p>
                                </div>
                            </div>
                            <div class="flex gap-x-10 items-center justify-between">
                                <div class="w-1/2">
                                    <p class="text-[#4C4C4C] font-YekanM text-lg leading-relaxed pt-3">
                                        آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی
                                    </p>
                                </div>
                                <div class="relative w-1/2">
                                    <div class="relative overflow-hidden w-full h-52 rounded-xl flex items-center justify-center">
                                        <img src="../assets/image 68.png" class="absolute object-cover object-center w-full h-52 z-10" alt="profile">
                                        <div class="bg-[#FF8030] rounded-full w-14 h-14 flex items-center justify-center absolute z-40">
                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.17272C0 0.973437 0.0462501 0.778009 0.133751 0.603154C0.421252 0.0374444 1.07126 -0.166983 1.58751 0.148015L14.4501 7.97537C14.6251 8.08209 14.7688 8.24023 14.8651 8.4318C15.1526 8.99751 14.9651 9.71107 14.4501 10.0248L1.58751 17.8521C1.43063 17.9484 1.25144 17.9995 1.06876 18C0.478753 18 0 17.4754 0 16.8287V1.17272Z" fill="white"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="p-5">
                        <div class="bg-white rounded-lg shadow-md p-16">
                            <div class="flex items-start justify-start gap-x-7">
                                <div class="border-b-[3px] border-[#FF8030] pb-6">
                                    <div class="relative overflow-hidden w-16 h-16 rounded-full">
                                        <img src="../assets/image 64.png" class="absolute object-cover object-center w-16 h-16" alt="profile">
                                    </div>
                                </div>
                                <div class="flex flex-col gap-y-2" dir="rtl">
                                    <p class="font-YekanB text-2xl">شهرام حدادی ابیانه</p>
                                    <p class="font-YekanM text-lg text-[#767676]">مدیر عامل شرکت بنای آرمانی</p>
                                </div>
                            </div>
                            <div class="flex gap-x-10 items-center justify-between">
                                <div class="w-1/2">
                                    <p class="text-[#4C4C4C] font-YekanM text-lg leading-relaxed pt-3">
                                        آرزوی بهترین ها برای این گروه منسجم ... با کیفیت و در زمان تعیین شده آماده شود. گروه بوده همیشه تلاش کرده تا تمامی کارها که تمام خدمات دیجیتال شرکت در اختیار این تیم نارنج در طول سال هایی
                                    </p>
                                </div>
                                <div class="relative w-1/2">
                                    <div class="relative overflow-hidden w-full h-52 rounded-xl flex items-center justify-center">
                                        <img src="../assets/image 68.png" class="absolute object-cover object-center w-full h-52 z-10" alt="profile">
                                        <div class="bg-[#FF8030] rounded-full w-14 h-14 flex items-center justify-center absolute z-40">
                                            <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.17272C0 0.973437 0.0462501 0.778009 0.133751 0.603154C0.421252 0.0374444 1.07126 -0.166983 1.58751 0.148015L14.4501 7.97537C14.6251 8.08209 14.7688 8.24023 14.8651 8.4318C15.1526 8.99751 14.9651 9.71107 14.4501 10.0248L1.58751 17.8521C1.43063 17.9484 1.25144 17.9995 1.06876 18C0.478753 18 0 17.4754 0 16.8287V1.17272Z" fill="white"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
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
                inModalOpen: false,
                swiperOptions : {
                    slidesPerView: 1,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        slidesPerGroupAuto: true
                    },
                },
                swiperOptions2 : {
                    slidesPerView:1.5,
                    breakpoints: {
                        1366: {
                            slidesPerView:1.5,
                        },
                        150: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        }
                    }
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
                ff80308: false,
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
            },
            openModal() {
                this.inModalOpen = !this.inModalOpen
            },
            closeModal() {
                let video = document.getElementById('videoElement')
                video.pause()
                this.inModalOpen = !this.inModalOpen
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
    body{
        overflow-x: hidden !important;
    }
    .translateX-enter{
        transform:translateY(-200px);
        opacity: 0;
    }
    .translateX-enter-active,.translateX-leave-active{
        transform-origin: top left 0;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
    }
    .translateX-leave-to{
        transform: translateY(-200px);
        opacity: 0;
    }
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
</style>