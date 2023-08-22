<template>
    <div>
        <div class="relative xl:w-[650px] xl:h-[92vh] h-screen w-full">
            <img class="absolute object-cover -z-20 xl:w-[650px] xl:h-[92vh] h-screen w-full object-center" src="../../assets/image 67.png" alt="logo"/>

            <button type="button" @click="openModal">
                <div class="absolute xl:bottom-36 xl:-right-[152px] bottom-1/3 right-[11%] sm:bottom-[37%] sm:right-[30%] z-30 hover:rotate-[360deg] transition-all duration-1000 origin-center">
                    <svg width="304" height="304" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M227.397 75.4803C207.135 55.4617 179.751 44.3119 151.269 44.4839L151.917 151.877L227.397 75.4803Z" fill="#7A74FC" fill-opacity="0.56"/>
                        <circle cx="152.801" cy="151.616" r="76.4131" transform="rotate(24.101 152.801 151.616)" stroke="#F2F2F2"/>
                        <g filter="url(#filter0_d_253_2)">
                            <circle cx="152.159" cy="152.126" r="53.8357" transform="rotate(24.101 152.159 152.126)" fill="white"/>
                            <circle cx="152.159" cy="152.126" r="53.8357" transform="rotate(24.101 152.159 152.126)" fill="white"/>
                        </g>
                        <path d="M142 141.564C142 141.298 142.062 141.037 142.178 140.804C142.562 140.05 143.428 139.777 144.117 140.197L161.267 150.634C161.5 150.776 161.692 150.987 161.82 151.242C162.203 151.997 161.953 152.948 161.267 153.366L144.117 163.803C143.908 163.931 143.669 163.999 143.425 164C142.638 164 142 163.301 142 162.438V141.564Z" fill="#FF8030"/>
                        <defs>
                            <filter id="filter0_d_253_2" x="48.3101" y="48.2773" width="207.698" height="207.698" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="25"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_253_2"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_253_2" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </button>
            
            <TheResponsiveHeader class="-mt-6 xl:-mt-0"></TheResponsiveHeader>

            <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
        </div>

        <transition name="translateY">
            <div v-show="inModalOpen" class="fixed top-0 xl:pt-56 pt-80 z-50 w-full flex items-center justify-center">
                <div class="absolute top-0 left-0 -z-20 w-full h-screen bg-black bg-opacity-[0.5]" @click.stop.prevent="closeModal"></div>

                <div>
                    <button type="button" @click.stop.prevent="closeModal" class="text-white bg-[#FF6300] z-50 rounded-lg p-4 px-5 absolute xl:top-24 xl:right-96 top-44 right-8 text-xl">&#10005;</button>
                
                    <div>
                        <video id="videoElement" class="w-full xl:w-[850px]" controls>
                            <source src="../../assets/video/1.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import TheResponsiveHeader from "@/components/Headers/TheResponsiveHeader.vue";

    export default {
        components: {
            TheResponsiveHeader,
        },
        data() {
            return {
                inModalOpen: false
            }
        },
        methods: {
            openModal(e) {
                console.log(e.target);
                this.inModalOpen = true
                document.body.classList.add('over');
            },
            closeModal(e) {
                console.log(e.target);
                let video = document.getElementById('videoElement')
                video.pause()
                this.inModalOpen = false
                document.body.classList.remove('over');
            }
        }
    }
</script>

<style>
    .over {
        overflow-y: hidden;
    }
    .translateY-enter{
        transform:translateY(-200px);
        opacity: 0;
    }
    .translateY-enter-active,.translateY-leave-active{
        transform-origin: top left 0;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
    }
    .translateY-leave-to{
        transform: translateY(-200px);
        opacity: 0;
    }
</style>