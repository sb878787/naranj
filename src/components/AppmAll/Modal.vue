<template>
    <div>
        <transition name="translateY">
            <div v-show="isShowModal" class="fixed top-0 z-50 w-full h-screen bg-black bg-opacity-[0.5] flex items-center justify-center">
                <button type="button" @click="closeModal" class="text-white bg-[#FF6300] rounded-lg p-5 px-6 absolute xl:top-24 xl:right-96 top-44 right-8 text-xl">&#10005;</button>
                
                <div>
                    <video id="videoElement2" width="100%" controls>
                        <source :src="require(`@/assets/video/${videoSrccomputed}.mp4`)" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
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
                default: () => "",
            }
        },
        data() {
            return {
                isShowModal: false
            }
        },
        watch: {
            isPlayVideo: {
                handler(newVal) {
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
            videoSrccomputed () {
                if(this.videoSrc) {
                    return this.videoSrc
                }else {
                    return "1"
                }
            }
        },
    }
</script>