<template>
    <div>
        <transition name="translateY">
            <div v-show="isShowModal" class="fixed top-0 xl:pt-56 pt-80 z-50 w-full flex items-center justify-center">
                <div class="absolute top-0 left-0 -z-20 w-full h-screen bg-black bg-opacity-[0.5]" @click.stop.prevent="closeModal"></div>
                
                <div>
                    <button type="button" @click.stop.prevent="closeModal" class="text-white bg-[#FF6300] rounded-lg p-4 px-5 absolute xl:top-24 xl:right-96 top-44 right-8 text-xl">&#10005;</button>
                
                    <div>
                        <video id="videoElement2" class="w-full xl:w-[850px]" controls :key="modalVideoSrc">
                            <source :src="modalVideoSrc" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            isPlayVideo : {
                type: Boolean,
                default: false,
            },
            videoSrc : {
                type: String,
                default: "",
            }
        },
        data() {
            return {
                isShowModal: false
            }
        },
        watch: {
            isPlayVideo: {
                handler() {
                    console.log(this.videoSrc)
                    this.playVideo();
                }
            }
        },
        methods: {
            playVideo() {
                const video = document.getElementById('videoElement2');
                video.play()
                this.isShowModal = true;
                document.body.classList.add('over');
            },
            closeModal() {
                const video = document.getElementById('videoElement2');
                video.currentTime = 0;
                video.pause();
                this.isShowModal = false;
                document.body.classList.remove('over');
            }
        },
        computed: {
            modalVideoSrc(){
                console.log(this.videoSrc)
                return require(`@/assets/video/${this.videoSrc}.mp4`);
            }
        }
    }
</script>