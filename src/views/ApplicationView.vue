<template>
    <div class="application overflow-x-hidden">
        <Header class="hidden xl:block"></Header>
        <div class="relative overflow-hidden w-full h-screen block xl:hidden">
            <img class="absolute object-cover -z-20 w-full h-screen object-center" src="../assets/Rectangle 94.png" alt="logo"/>
            <ResponsiveHeader></ResponsiveHeader>
            <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
        </div>
        <div>
            <img src="../assets/Rectangle 94.png" alt="logo" class="absolute hidden xl:block left-0 top-0 h-[800px] w-[550px]" />
            <SocialWhite class="hidden xl:block"></SocialWhite>
            <div class="absolute left-[28%] -z-50 top-[35%] hidden xl:block">
                <svg width="57" height="114" viewBox="0 0 57 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-3.93352e-06 0.431468C7.42869 0.431468 14.7846 1.89466 21.6479 4.73749C28.5111 7.58033 34.7471 11.7471 40 17C45.2529 22.2529 49.4197 28.489 52.2625 35.3522C55.1054 42.2154 56.5686 49.5713 56.5686 57C56.5686 64.4287 55.1054 71.7847 52.2625 78.6479C49.4197 85.5111 45.2529 91.7472 40 97.0001C34.7471 102.253 28.5111 106.42 21.6479 109.263C14.7846 112.105 7.42869 113.569 -1.01186e-06 113.569L-5.73198e-07 89.045C4.2082 89.045 8.37519 88.2161 12.2631 86.6057C16.1509 84.9953 19.6835 82.6349 22.6592 79.6592C25.6348 76.6836 27.9952 73.151 29.6056 69.2631C31.2161 65.3752 32.0449 61.2082 32.0449 57C32.0449 52.7918 31.2161 48.6248 29.6056 44.737C27.9952 40.8491 25.6348 37.3165 22.6592 34.3409C19.6835 31.3652 16.1509 29.0048 12.2631 27.3944C8.37519 25.784 4.2082 24.9551 -2.22826e-06 24.9551L-3.93352e-06 0.431468Z" fill="#F2F2F2"/>
                </svg>
            </div>
            <div class="absolute left-[36%] top-[23%] hidden xl:block">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M95.4662 70.5205C84.3146 95.449 55.0659 106.617 30.1374 95.4658C5.20888 84.3143 -5.95952 55.0656 5.19206 30.1371C16.3436 5.20855 45.5923 -5.95986 70.5208 5.19173C95.4494 16.3433 106.618 45.592 95.4662 70.5205ZM26.5044 39.671C20.6183 52.829 26.5133 68.2673 39.6713 74.1535C52.8293 80.0396 68.2677 74.1446 74.1538 60.9866C80.04 47.8286 74.1449 32.3902 60.9869 26.5041C47.8289 20.6179 32.3906 26.513 26.5044 39.671Z" fill="#7A74FC"/>
                </svg>
            </div>
            <div dir="rtl" class="xl:px-44 px-8 xl:mt-56 mt-8">
                <p class="font-YekanM xl:text-xl text-lg text-[#FF6300]">طراحی موبایل اپلیکیشن</p>
                <p class="font-YekanB xl:text-5xl text-2xl xl:pt-10 pt-2 leading-tight text-[#4D4D4D] xl:text-black">تجارت خود را با راه حل های مناسب <br> اپلیکیشن موبایل رشد دهید.</p>
                <p class="font-YekanM xl:text-xl text-[#4D4D4D] xl:pt-14 pt-5 leading-relaxed">یک برنامه موفقیت آمیز همراه سه جنبه را با روشی هوشمدانه ترکیب می کند: <br> بازار ، کاربر و خود محصول. همه این عوامل باید با هم کار کنند تا به کاربران <br class="hidden xl:block"> یک ارزش منحصر به فرد ، قابلیت استفاده عالی و عملکرد خوب ارائه دهند. <br class="hidden xl:block"> با استفاده از ابزارها و رشهای صحیح می توانید اطمینان حاصل ک که <br class="hidden xl:block"> محصول شما به خوبی مورد نیاز بازار ساخته شده و به خوبی تکمیل شده است.</p>
            </div>
        </div>
        <div dir="rtl" class="w-full xl:pt-80 pt-12 px-8 xl:px-0">
            <p class="text-center font-YekanB xl:text-4xl text-2xl font-black leading-tight">با توسعه برنامه تلفن همراه به <br> اهداف تجاری خود برسید</p>
            <p class="text-center font-YekanM xl:text-xl text-lg text-[#4D4D4D] pt-3 leading-relaxed">برای دستیابی به نتیج بهتر ، اهداف تجاری و راه حل های فناوری را <br class="hidden xl:block"> به روشی هوشمدانه <br class="block xl:hidden"> ترکیب کنید.</p>
        </div>
        <div dir="rtl" class="flex xl:flex-row flex-col xl:pt-32 pt-16 xl:px-48 px-8 justify-between gap-x-24 gap-y-12">
            <div v-for="system in systems" class="flex flex-col items-center justify-center xl:space-y-9 space-y-6">
                <img :src="system.img" :alt="system.alt" />
                <p class="text-xl text-center font-bold">{{ system.title }}</p>
                <p class="font-YekanM xl:text-xl text-lg text-[#4D4D4D] text-center xl:leading-9 sm:px-52 lg:px-0">{{ system.text }}</p>
            </div>
        </div>
        <div dir="rtl" class="flex xl:px-44 px-8 xl:mt-36 mt-5 items-center">
            <div class="flex-1 relative hidden xl:block">
                <div class="absolute left-28">
                    <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 66C0 102.451 29.5492 132 66 132C102.451 132 132 102.451 132 66C132 29.5492 102.451 0 66 0C29.5492 0 0 29.5492 0 66ZM106.481 66C106.481 88.357 88.357 106.481 66 106.481C43.643 106.481 25.5191 88.357 25.5191 66C25.5191 43.643 43.643 25.5191 66 25.5191C88.357 25.5191 106.481 43.643 106.481 66Z" fill="#767676"/>
                    </svg>
                </div>
                <div class="absolute -right-[75px] z-40 mt-44">
                    <svg width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 153 76.3677)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 136.987 92.3802)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 120.975 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.962 124.405)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.9498 140.418)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 144.994 84.3739)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 128.981 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.969 116.399)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.9561 132.412)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.9435 148.424)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 144.994 68.3615)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 128.981 84.3739)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.969 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.9561 116.399)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.9435 132.412)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 136.987 76.3677)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 120.975 92.3802)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.962 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.9498 124.405)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.9373 140.418)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 136.987 60.3551)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 120.975 76.3677)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.962 92.3802)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.9498 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.9373 124.405)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 128.981 68.3615)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.969 84.3739)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.9561 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.9435 116.399)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.931 132.412)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 128.981 52.3489)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.969 68.3615)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.9561 84.3739)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.9435 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.931 116.399)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 120.975 60.3551)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.962 76.3677)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.9498 92.3802)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.9373 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.9247 124.405)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 120.975 44.3425)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.962 60.3551)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.9498 76.3677)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.9373 92.3802)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.9247 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.969 52.3489)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.9561 68.3615)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.9435 84.3739)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.931 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.9185 116.399)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 112.969 36.3363)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.9561 52.3489)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.9435 68.3615)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.931 84.3739)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.9185 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.962 44.3425)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.9498 60.3551)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.9373 76.3677)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.9247 92.3802)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 40.9122 108.393)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 104.962 28.3301)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.9498 44.3425)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.9373 60.3551)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.9247 76.3677)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 40.9122 92.3802)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.9561 36.3363)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.9435 52.3489)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.931 68.3615)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.9185 84.3739)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 32.9059 100.386)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 96.9561 20.3237)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.9435 36.3363)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.931 52.3489)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.9185 68.3615)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 32.9059 84.3739)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.9498 28.3301)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.9373 44.3425)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.9247 60.3551)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 40.9122 76.3677)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.8996 92.3802)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 88.9498 12.3175)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.9373 28.3301)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.9247 44.3425)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 40.9122 60.3551)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.8997 76.3677)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.9435 20.3237)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.931 36.3363)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.9185 52.3489)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 32.9059 68.3615)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.8934 84.3739)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 80.9435 4.31116)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 64.931 20.3237)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 48.9185 36.3363)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 32.9059 52.3489)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.8934 68.3615)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 72.9373 12.3175)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 56.9247 28.3301)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 40.9122 44.3425)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.8996 60.3551)" fill="#CFCFCF"/>
                        <circle cx="3.04839" cy="3.04839" r="3.04839" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 8.88708 76.3677)" fill="#CFCFCF"/>
                    </svg>
                </div>
                <div class="absolute -right-[65px] z-40 -bottom-12">
                    <svg width="242" height="121" viewBox="0 0 242 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0C0 15.89 3.12976 31.6243 9.21057 46.3047C15.2914 60.9851 24.2042 74.324 35.4401 85.5599C46.676 96.7958 60.0149 105.709 74.6953 111.789C89.3757 117.87 105.11 121 121 121C136.89 121 152.624 117.87 167.305 111.789C181.985 105.709 195.324 96.7958 206.56 85.5599C217.796 74.324 226.709 60.9851 232.789 46.3047C238.87 31.6243 242 15.8899 242 -7.62939e-06H176.392C176.392 7.27419 174.959 14.4771 172.176 21.1976C169.392 27.9181 165.312 34.0245 160.168 39.1681C155.024 44.3117 148.918 48.3919 142.198 51.1756C135.477 53.9593 128.274 55.392 121 55.392C113.726 55.392 106.523 53.9593 99.8024 51.1756C93.0819 48.3919 86.9755 44.3117 81.8319 39.1681C76.6883 34.0245 72.6081 27.9181 69.8244 21.1976C67.0407 14.4771 65.608 7.27419 65.608 0H0Z" fill="#FF8030"/>
                    </svg>
                </div>
                <img src="../assets/Rectangle 102.png" alt="image" class="w-3/4 relative z-30 mt-16" />
            </div>
            <div class="flex-1">
                <p class="font-YekanM text-[#FF6300] xl:text-xl text-lg pt-8">طراحی موبایل اپلیکیشن</p>
                <p class="font-YekanM xl:text-4xl text-2xl leading-10 xl:mt-6 mt-3 font-black text-[#4D4D4D] xl:text-black">برنامه های بصری و کاربردی بسازید <br class="hidden xl:block"> که توجه کاربران را به خود جلب کرده <br class="hidden xl:block"> و حفظ کنند</p>
                <p class="font-YekanM xl:text-xl text-[#4D4D4D] xl:leading-10 leading-8 xl:mt-8 mt-5">توسعه تلفن همراه یک فرآیند مداوم و تلاشی مداوم برای بهتر و بهتر شدن <br class="hidden xl:block"> محصول شما است. دستگاه ها و فناوری هایی که کاربران از طرسق انها در <br class="hidden xl:block"> تعامل با محصول شما هستند ، به عنوان کاربران ، نیاز ها و رفتار آنها تغییر <br class="hidden xl:block"> می کنند. برای مقابله با این چالش ها ، از ابزار های مناسب و روشهای <br class="hidden xl:block"> آزمایش شده از نبرد اطمینان حاصل کنید. و هرگز روند را متوقف نکنید.</p>
            </div>
        </div>
        <p class="font-YekanB text-right xl:px-44 px-8 xl:text-4xl text-2xl xl:mt-40 mt-11 xl:mb-28 mb-8">فرآیند توسعه برنامه ما</p>
        <div dir="rtl" class="xl:px-44 px-8 space-y-12">
            <div class="flex xl:flex-row flex-col gap-y-12">
                <div class="flex-1">
                    <div class="flex flex-col xl:flex-row gap-x-9"> 
                        <div>
                            <img src="../assets/ali.png" class="w-24" alt="logo"/>
                        </div>
                        <div>
                            <div class="flex flex-col xl:flex-row space-y-1 gap-x-5 mt-5 xl:mt-0">
                                <p class="font-YekanM xl:text-xl text-lg font-semibold whitespace-nowrap">پژوهش</p>
                                <p class="xl:text-xl text-[#767676] whitespace-nowrap">Research</p>
                            </div>
                            <p class="font-YekanM text-[#4D4D4D] xl:text-xl xl:mt-5 mt-3 xl:leading-9 leading-8">هنگامی که مشتری با ایده برنامه به ما رسید ، ما تجزیه و <br class="hidden xl:block"> تحلیل عمیق را بر اساس آمار جمعیتی ، الگوهای رفتاری و <br class="hidden xl:block"> مخاطبان هدف انجام می دهیم تا ایده را به یک پایه محکم <br class="hidden xl:block"> برای یک برنامه تبدیل کنیم.</p>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="flex flex-col xl:flex-row gap-x-9"> 
                        <div>
                            <img src="../assets/ali2.png" class="w-24" alt="logo" />
                        </div>
                        <div>
                            <div class="flex flex-col xl:flex-row space-y-1 gap-x-5 mt-5 xl:mt-0">
                                <p class="font-YekanM xl:text-xl text-lg font-semibold whitespace-nowrap">وایر فریم</p>
                                <p class="xl:text-xl text-[#767676] whitespace-nowrap">Wireframing</p>
                            </div>
                            <p class="font-YekanM text-[#4D4D4D] xl:text-xl xl:mt-5 mt-3 xl:leading-9 leading-8">هنگامی که مشتری با ایده برنامه به ما رسید ، ما تجزیه و <br class="hidden xl:block"> تحلیل عمیق را بر اساس آمار جمعیتی ، الگوهای رفتاری و <br class="hidden xl:block"> مخاطبان هدف انجام می دهیم تا ایده را به یک پایه محکم <br class="hidden xl:block"> برای یک برنامه تبدیل کنیم.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex xl:flex-row flex-col gap-y-16">
                <div class="flex-1">
                    <div class="flex flex-col xl:flex-row gap-x-9"> 
                        <div>
                            <img src="../assets/ali2.png" class="w-24" alt="logo" />
                        </div>
                        <div>
                            <div class="flex flex-col xl:flex-row space-y-1 gap-x-5 mt-5 xl:mt-0">
                                <p class="font-YekanM xl:text-xl text-lg font-semibold whitespace-nowrap">نمونه سازی</p>
                                <p class="xl:text-xl text-[#767676] whitespace-nowrap">Prototyping</p>
                            </div>
                            <p class="font-YekanM text-[#4D4D4D] xl:text-xl xl:mt-5 mt-3 xl:leading-9 leading-8">هنگامی که مشتری با ایده برنامه به ما رسید ، ما تجزیه و <br class="hidden xl:block"> تحلیل عمیق را بر اساس آمار جمعیتی ، الگوهای رفتاری و <br class="hidden xl:block"> مخاطبان هدف انجام می دهیم تا ایده را به یک پایه محکم <br class="hidden xl:block"> برای یک برنامه تبدیل کنیم.</p>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="flex flex-col xl:flex-row gap-x-9"> 
                        <div>
                            <img src="../assets/ali3.png" class="w-24" alt="logo" />
                        </div>
                        <div>
                            <div class="flex flex-col xl:flex-row space-y-1 gap-x-5 mt-5 xl:mt-0">
                                <p class="font-YekanM xl:text-xl text-lg font-semibold whitespace-nowrap">طراحی و توسعه</p>
                                <p class="xl:text-xl text-[#767676] whitespace-nowrap">Design & Development</p>
                            </div>
                            <p class="font-YekanM text-[#4D4D4D] xl:text-xl xl:mt-5 mt-3 xl:leading-9 leading-8">هنگامی که مشتری با ایده برنامه به ما رسید ، ما تجزیه و <br class="hidden xl:block"> تحلیل عمیق را بر اساس آمار جمعیتی ، الگوهای رفتاری و <br class="hidden xl:block"> مخاطبان هدف انجام می دهیم تا ایده را به یک پایه محکم <br class="hidden xl:block"> برای یک برنامه تبدیل کنیم.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex xl:flex-row flex-col gap-y-16">
                <div class="flex-1">
                    <div class="flex flex-col xl:flex-row gap-x-9"> 
                        <div>
                            <img src="../assets/ali4.png" class="w-24" alt="logo" />
                        </div>
                        <div>
                            <div class="flex flex-col xl:flex-row space-y-1 gap-x-5 mt-5 xl:mt-0">
                                <p class="font-YekanM xl:text-xl text-lg font-semibold whitespace-nowrap">مرحله تست و پرسش و پاسخ</p>
                                <p class="xl:text-xl text-[#767676] whitespace-nowrap">Testing and QA</p>
                            </div>
                            <p class="font-YekanM text-[#4D4D4D] xl:text-xl xl:mt-5 mt-3 xl:leading-9 leading-8">هنگامی که مشتری با ایده برنامه به ما رسید ، ما تجزیه و <br class="hidden xl:block"> تحلیل عمیق را بر اساس آمار جمعیتی ، الگوهای رفتاری و <br class="hidden xl:block"> مخاطبان هدف انجام می دهیم تا ایده را به یک پایه محکم <br class="hidden xl:block"> برای یک برنامه تبدیل کنیم.</p>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="flex flex-col xl:flex-row gap-x-9"> 
                        <div>
                            <img src="../assets/ali5.png" class="w-24" alt="logo" />
                        </div>
                        <div>
                            <div class="flex flex-col xl:flex-row space-y-1 gap-x-5 mt-5 xl:mt-0">
                                <p class="font-YekanM xl:text-xl text-lg font-semibold whitespace-nowrap">قراردادن بر روی سرور</p>
                                <p class="xl:text-xl text-[#767676] whitespace-nowrap">Deployment to Live Server</p>
                            </div>
                            <p class="font-YekanM text-[#4D4D4D] xl:text-xl xl:mt-5 mt-3 xl:leading-9 leading-8">هنگامی که مشتری با ایده برنامه به ما رسید ، ما تجزیه و <br class="hidden xl:block"> تحلیل عمیق را بر اساس آمار جمعیتی ، الگوهای رفتاری و <br class="hidden xl:block"> مخاطبان هدف انجام می دهیم تا ایده را به یک پایه محکم <br class="hidden xl:block"> برای یک برنامه تبدیل کنیم.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="font-YekanB text-right xl:px-44 px-8 xl:text-4xl text-2xl xl:mt-40 mt-11 xl:mb-28 mb-8">فناوری های کاربردی</p>
        <swiper :options="swiperOptions" dir="rtl" class="flex xl:hidden mr-8">
    	    <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../assets/java.png" class="h-[55px] object-cover" alt="image" />
                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Java</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../assets/kotlin.png" class="h-[55px] object-cover" alt="image" />
                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Kotlin</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../assets/swift.png" class="h-[55px] object-cover" alt="image" />
                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Swift</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../assets/android-studio.png" class="h-[55px] object-cover" alt="image" />
                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Android Studio</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../assets/android.png" class="h-[55px] object-cover" alt="image" />
                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Android Jetpack</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../assets/Test Flight.png" class="h-[55px] object-cover" alt="image" />
                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Test Flight</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../assets/Flinto.png" class="h-[55px] object-cover" alt="image" />
                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Flinto</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../assets/IntelliJ IDEA.png" class="h-[55px] object-cover" alt="image" />
                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">IntelliJ IDEA</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../assets/Flutter.png" class="h-[55px] object-cover" alt="image" />
                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Flutter</p>
                </div>
	        </swiper-slide>
  	    </swiper>
        <div dir="rtl" class="xl:flex hidden px-64 justify-between items-center">
            <div class="flex flex-col items-center justify-center">
                <img src="../assets/java.png" class="h-[75px] object-cover" alt="image" />
                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Java</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="../assets/kotlin.png" class="h-[75px] object-cover" alt="image" />
                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Kotlin</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="../assets/swift.png" class="h-[75px] object-cover" alt="image" />
                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Swift</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="../assets/android-studio.png" class="h-[75px] object-cover" alt="image" />
                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Android Studio</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="../assets/android.png" class="h-[75px] object-cover" alt="image" />
                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Android Jetpack</p>
            </div>
        </div>
        <div dir="rtl" class="xl:flex hidden px-96 justify-between items-center mt-28 space-x-14">
            <div class="flex flex-col items-center justify-center">
                <img src="../assets/Test Flight.png" class="h-[75px] object-cover" alt="image" />
                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Test Flight</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="../assets/Flinto.png" class="h-[75px] object-cover" alt="image" />
                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Flinto</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="../assets/IntelliJ IDEA.png" class="h-[75px] object-cover" alt="image" />
                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">IntelliJ IDEA</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="../assets/Flutter.png" class="h-[75px] object-cover" alt="image" />
                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Flutter</p>
            </div>
        </div>
        <p class="font-YekanB text-right xl:px-44 px-8 xl:text-4xl text-2xl xl:mt-40 mt-8 xl:mb-28 mb-8">پوشش صنعتی خدمات نارنج</p>
        <swiper :options="swiperOptions2" dir="rtl" class="flex xl:hidden mr-11 mb-11">
    	    <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 25.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">Healthcare</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 26.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">Finance</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 27.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">IoT</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 28.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">Fitness</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 29.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">Game</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 30.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">Logistics</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 31.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">Retail</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 32.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">Social</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 33.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">Education</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 34.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">AR/ VR</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 35.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">Wellness</p>
                </div>
	        </swiper-slide>
            <swiper-slide>
                <div class="flex flex-col justify-center items-center">
                    <img src="../assets/image 36.png" class="h-16 w-20" alt="logo"/>
                    <p class="font-semibold mt-7 border-2 border-[#EBEBEB] rounded-full p-2 w-32 text-md text-center text-[#4D4D4D]">Travel</p>
                </div>
	        </swiper-slide>
  	    </swiper>
        <div dir="rtl" class="xl:flex hidden px-60 justify-between items-center">
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 25.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">Healthcare</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 26.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">Finance</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 27.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">IoT</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 28.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">Fitness</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 29.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">Game</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 30.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">Logistics</p>
            </div>
        </div>
        <div dir="rtl" class="xl:flex hidden px-60 justify-between items-center mt-28">
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 31.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">Retail</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 32.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">Social</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 33.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">Education</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 34.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">AR/ VR</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 35.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">Wellness</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <img src="../assets/image 36.png" class="h-20 w-24" alt="logo"/>
                <p class="font-semibold mt-10 border-2 border-[#EBEBEB] rounded-full p-2 w-36 text-lg text-center text-[#4D4D4D]">Travel</p>
            </div>
        </div>
        <DivBlue></DivBlue>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "@/components/Headers/TheHeader.vue";
    import Footer from "@/components/Footers/TheFooter.vue";
    import SocialWhite from "@/components/Social/TheSocialWhite.vue";
    import DivBlue from "@/components/DivBlue.vue";
    import ResponsiveHeader from "@/components/Headers/TheResponsiveHeader.vue";
    import android from '@/assets/Group 231.png';
    import ios from '@/assets/Group 232.png';
    import cross from '@/assets/Group 225.png';
    import backend from '@/assets/Group 226.png';

    export default {
        components: {
            Header,
            Footer,
            SocialWhite,
            DivBlue,
            ResponsiveHeader
        },
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
                swiperOptions : {
                    breakpoints: {
                        150: {
                            slidesPerView: 2.5,
                            spaceBetween: 20
                        },
                        700: {
                            slidesPerView: 3.5,
                            spaceBetween: 20
                        }
                    },
                    loop: true
                },
                swiperOptions2 : {
                    breakpoints: {
                        150: {
                            slidesPerView: 1.5,
                        },
                        700: {
                            slidesPerView: 2.5,
                        }
                    },
                    loop: true
                },
                limitPosition: 1,
                scrolled: false,
                lastPosition: 0,
                background: false
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
</style>