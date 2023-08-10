<template>
    <div>
        <div class="relative xl:w-[650px] xl:h-[92vh] h-screen w-full">
            <img class="absolute object-cover -z-20 xl:w-[650px] xl:h-[92vh] h-screen w-full object-center" src="../../assets/image 67.png" alt="logo"/>

            <button type="button" @click="openModal">
                <div class="absolute xl:bottom-36 xl:-right-[152px] bottom-80 right-12 z-30 hover:rotate-[360deg] transition-all duration-1000 origin-center">
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
            
            <TheResponsiveHeader class="-mt-6 xl:-mt-0"></TheResponsiveHeader>

            <p dir="ltr" class="text-white font-light text-5xl ml-8 pb-8 absolute bottom-0 z-40 block xl:hidden">Every new <br> idea is <br> just a <br> mashup</p>
        </div>

        <transition name="translateY">
            <div v-show="inModalOpen" @click="closeModal" class="fixed top-0 z-50 w-full h-screen bg-black bg-opacity-[0.5] flex items-center justify-center">
                <button type="button" @click="closeModal" class="text-white bg-[#FF6300] rounded-lg p-5 px-6 absolute xl:top-24 xl:right-96 top-44 right-8 text-xl">&#10005;</button>
                
                <div>
                    <video id="videoElement" width="100%" controls>
                        <source src="../../assets/video/047f812ca27807257a076707913a5fc938923532-480p.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
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
            openModal() {
                this.inModalOpen = true
                document.body.classList.add('over');
            },
            closeModal() {
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