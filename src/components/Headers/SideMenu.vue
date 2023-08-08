<template>
    <div>
        <div dir="rtl">
            <div id="sidemenu">
                <button class="sidemenu__btn" @click="isNavOpen=!isNavOpen" :class="{active:isNavOpen}">
                    <span class="top" :class="menu ? 'menubar' : ''"></span>
                    <span class="mid" :class="menu ? 'menubar' : ''"></span>
                    <span class="bottom" :class="menu ? 'menubar' : ''"></span>
                </button>

                <transition name="translateX">
                    <nav v-show="isNavOpen" class="min-h-full relative">
                        <div class="sidemenu__wrapper">
                            <div class="h-72 sm:h-96 py-5 overflow-y-scroll">
                                <ul class="sidemenu__list">
                                    <SideMenuList />
                                </ul>
                            </div>

                            <SideMenuSocial />

                            <div class="flex mt-16 absolute bottom-0 w-full">
                                <div class="flex-1">
                                    <button class="text-white font-medium text-center text-sm w-full bg-[#FF8030] py-5">
                                        PERSIAN
                                    </button>
                                </div>
                                
                                <div class="flex-1">
                                    <button class="text-[#383838] font-bold text-center text-sm w-full bg-[#C4C4C4] py-5">
                                        ENGLISH
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import SideMenuList from "./SideMenuList.vue";
    import SideMenuSocial from "./SideMenuSocial.vue"

    export default {
        components: {
            SideMenuList,
            SideMenuSocial
        },
        data() {
            return {
                isNavOpen: false,
                menu: false,
                limitPosition: 1,
                scrolled: false,
                lastPosition: 0
            }
        },
        watch: {
            isNavOpen(newVal) {
                if (newVal == true) {
                    document.body.classList.add('over');
                } else {
                    document.body.classList.remove('over');
                }
            }
        },
        methods: {
            handleScroll() {
                if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
                    this.scrolled = true;
                    this.menu = true;
                    // move up!
                } 
                
                if (this.lastPosition > window.scrollY) {
                    this.scrolled = false;
                    // move down
                }
                
                this.lastPosition = window.scrollY;
                // this.scrolled = window.scrollY > 250;
                this.menu = window.scrollY > 10;
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

<style lang="scss">
    #sidemenu {
        nav {
            width: 100%;
            height: 100vh;
            // height: calc(100% - #{$headerHeight} - #{$footerHeight});
            background: #fff;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99;
            // box-shadow: 2px 0 3px$grey-6;
            // overflow-y: scroll;
        }
        .sidemenu {
            &__btn {
                display: block;
                width: 80px;
                height: 80px;
                border: none;
                position: relative;
                z-index: 100;
                appearance: none;
                cursor: pointer;
                outline: none;

                span {
                    display: block;
                    width: 30px;
                    height: 3px;
                    margin: auto;
                    background: #fff;
                    border-radius: 5px;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    transition: all .4s ease;

                    &.top {
                        transform: translateY(-8px);
                    }

                    &.bottom {
                        transform: translateY(8px);
                    }
                }
                &.active{
                    .top {
                        transform: rotate(-45deg);
                        background: #CFCFCF;
                        height: 4px;
                        width: 25px;
                        border-radius: 10%;
                    }
                    .mid{
                        transform: translateX(-20px) rotate(360deg);
                        opacity: 0;
                    }
                    .bottom {
                        transform: rotate(45deg);
                        background: #CFCFCF;
                        height: 4px;
                        width: 25px;
                        border-radius: 10%;
                    }
                }

            }
            &__wrapper {
                padding-top: 105px;
            }
            &__list {
                padding-top: 50px;
                list-style:none;
                padding: 0;
                margin: 0;
            }
        }
    }
</style>

<style>
    .translateX-enter{
        transform:translateX(200px);
        opacity: 0;
    }
    .translateX-enter-active,.translateX-leave-active{
        transform-origin: top left 0;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
    }
    .translateX-leave-to{
        transform: translateX(200px);
        opacity: 0;
    }
    .over {
        overflow-y: hidden;
    }
    .menubar {
        background-color: black !important;
    }
    .active .top {
        background-color: #CFCFCF !important;
    }
    .active .bottom {
        background-color: #CFCFCF !important;
    }
</style>