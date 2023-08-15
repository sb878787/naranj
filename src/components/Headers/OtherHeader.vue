<template>
    <div>
        <header
            :class="[
                {'headroom--unpinned': scrolled},
                background ? 'blue-theme' : ''
            ]"
            class="headroom fixed pt-12 text-lg font-YekanM font-semibold z-50 px-44 w-full hidden xl:block transition-all"
            dir="rtl"
        >
            <div class="flex justify-between items-center">
                <div>
                    <router-link class="pl-9" to="/">صفحه نخست </router-link>
                    <router-link class="pl-9" to="/about">درباره ما </router-link>
                    <router-link class="pl-9" to="/">خدمات نارنج </router-link>
                    <router-link class="pl-9" to="/">وبلاگ نارنجی شو </router-link>
                    <router-link class="pl-9" to="/">فرصت های شغلی </router-link>
                    <router-link to="/contact">تماس با ما </router-link>
                </div>
                
                <div dir="ltr">
                    <router-link to="/">
                        <svg width="55" height="55" viewBox="0 0 631 631" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M315.5 631C489.746 631 631 489.746 631 315.5C631 141.254 489.746 0 315.5 0C141.254 0 0 141.254 0 315.5C0 489.746 141.254 631 315.5 631Z" fill="#FF6300"/>
                            <path d="M387.25 244.142C360.786 217.813 325.707 204.648 282.013 204.648C251.948 204.648 225.941 210.849 204.18 223.25C202.954 223.949 202.213 225.26 202.213 226.671V288.165C202.213 292.517 209.468 294.37 212.204 290.985C213.879 288.913 215.677 286.941 217.598 285.075C232.779 270.059 254.319 262.448 282.013 262.448C309.912 262.448 331.451 270.059 346.427 285.075C362.017 300.708 369.813 322.511 369.813 350.485V497.876C369.813 500.085 371.603 501.876 373.813 501.876H425.479C426.608 501.876 427.684 501.399 428.443 500.563L456.994 469.072C457.656 468.341 458.03 467.461 458.014 466.475C457.275 420.827 413.832 270.999 387.25 244.142Z" fill="#E75A01"/>
                            <path d="M315.6 168.649C279.24 168.649 248.731 178.026 224.358 196.681C224.096 196.882 223.673 196.813 223.488 196.484C213.758 179.193 195.833 167.373 175.029 166.641C173.042 166.571 171.477 168.186 171.477 170.104V302.249C171.477 304.182 173.044 305.749 174.977 305.749H227.736C229.568 305.749 231.067 304.342 231.237 302.549C233.273 280.984 240.569 263.759 253.209 250.93C267.762 236.364 288.487 228.887 315.399 228.887C342.519 228.887 363.238 236.367 377.585 250.926C392.548 266.109 400.118 287.358 400.118 314.879V463.332C400.118 465.265 401.685 466.832 403.618 466.832H456.023C457.956 466.832 459.523 465.265 459.523 463.332V314.879C459.523 271.017 446.322 235.25 419.61 208.143C393.893 181.84 358.829 168.649 315.6 168.649Z" fill="white" stroke="white" stroke-width="3"/>
                        </svg>
                    </router-link>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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