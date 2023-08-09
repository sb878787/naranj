<template>
    <div>
        <swiper :options="swiperOptions" dir="rtl" class="flex xl:hidden mr-8">
    	    <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../../assets/java.png" class="h-[55px] object-cover" alt="image" />

                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Java</p>
                </div>
	        </swiper-slide>

            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../../assets/kotlin.png" class="h-[55px] object-cover" alt="image" />

                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Kotlin</p>
                </div>
	        </swiper-slide>

            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../../assets/swift.png" class="h-[55px] object-cover" alt="image" />

                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Swift</p>
                </div>
	        </swiper-slide>

            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../../assets/android-studio.png" class="h-[55px] object-cover" alt="image" />

                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Android Studio</p>
                </div>
	        </swiper-slide>

            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../../assets/android.png" class="h-[55px] object-cover" alt="image" />

                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Android Jetpack</p>
                </div>
	        </swiper-slide>

            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../../assets/Test Flight.png" class="h-[55px] object-cover" alt="image" />

                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Test Flight</p>
                </div>
	        </swiper-slide>

            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../../assets/Flinto.png" class="h-[55px] object-cover" alt="image" />

                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Flinto</p>
                </div>
	        </swiper-slide>

            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../../assets/IntelliJ IDEA.png" class="h-[55px] object-cover" alt="image" />

                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">IntelliJ IDEA</p>
                </div>
	        </swiper-slide>

            <swiper-slide>
                <div class="flex flex-col items-center justify-center">
                    <img src="../../assets/Flutter.png" class="h-[55px] object-cover" alt="image" />

                    <p class="text-[#4D4D4D] text-center mt-7 xl:text-xl text-md font-medium">Flutter</p>
                </div>
	        </swiper-slide>
  	    </swiper>

        <div dir="rtl" class="xl:flex hidden px-64 justify-between items-center">
            <div class="flex flex-col items-center justify-center">
                <img src="../../assets/java.png" class="h-[75px] object-cover" alt="image" />

                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Java</p>
            </div>

            <div class="flex flex-col items-center justify-center">
                <img src="../../assets/kotlin.png" class="h-[75px] object-cover" alt="image" />
                
                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Kotlin</p>
            </div>

            <div class="flex flex-col items-center justify-center">
                <img src="../../assets/swift.png" class="h-[75px] object-cover" alt="image" />

                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Swift</p>
            </div>

            <div class="flex flex-col items-center justify-center">
                <img src="../../assets/android-studio.png" class="h-[75px] object-cover" alt="image" />

                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Android Studio</p>
            </div>

            <div class="flex flex-col items-center justify-center">
                <img src="../../assets/android.png" class="h-[75px] object-cover" alt="image" />

                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Android Jetpack</p>
            </div>
        </div>

        <div dir="rtl" class="xl:flex hidden px-96 justify-between items-center mt-28 space-x-14">
            <div class="flex flex-col items-center justify-center">
                <img src="../../assets/Test Flight.png" class="h-[75px] object-cover" alt="image" />

                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Test Flight</p>
            </div>

            <div class="flex flex-col items-center justify-center">
                <img src="../../assets/Flinto.png" class="h-[75px] object-cover" alt="image" />

                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Flinto</p>
            </div>

            <div class="flex flex-col items-center justify-center">
                <img src="../../assets/IntelliJ IDEA.png" class="h-[75px] object-cover" alt="image" />

                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">IntelliJ IDEA</p>
            </div>

            <div class="flex flex-col items-center justify-center">
                <img src="../../assets/Flutter.png" class="h-[75px] object-cover" alt="image" />
                
                <p class="text-[#4D4D4D] text-center mt-7 text-xl font-medium">Flutter</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                }
            }
        }
    }
</script>