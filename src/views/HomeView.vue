<template>
  <div class="home overflow-x-hidden">
    <HomeHeader />
    
    <div class="bg-silver h-screen pb-14 w-full hidden xl:block">

      <div class="absolute top-52 right-96">
        <svg width="305" height="424" viewBox="0 0 305 424" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M167.529 423.575C221.511 401.431 264.486 358.75 286.999 304.92C309.512 251.091 309.719 190.523 287.575 136.54C265.431 82.5581 222.749 39.5835 168.92 17.0706C115.09 -5.44235 54.5221 -5.64953 0.539821 16.4946L46.8336 129.348C70.8853 119.482 97.8712 119.574 121.855 129.605C145.838 139.635 164.855 158.782 174.721 182.834C184.588 206.886 184.495 233.872 174.465 257.855C164.434 281.839 145.287 300.855 121.235 310.722L167.529 423.575Z" fill="#CFCFCF"/>
        </svg>
      </div>

      <div class="absolute top-[50%] right-80">
        <svg width="108" height="106" viewBox="0 0 108 106" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M107.291 19.6443C95.9045 7.78535 80.2732 0.935501 63.8361 0.601589C47.399 0.267685 31.5024 6.47708 19.6435 17.8638C7.78462 29.2505 0.93476 44.8817 0.600851 61.3188C0.26694 77.756 6.47633 93.6525 17.863 105.511L38.9757 85.2395C32.9654 78.98 29.6879 70.5893 29.8642 61.9133C30.0404 53.2373 33.656 44.9866 39.9155 38.9764C46.175 32.9662 54.5656 29.6887 63.2416 29.8649C71.9176 30.0412 80.1683 33.6567 86.1785 39.9162L107.291 19.6443Z" fill="#0A3BC9" fill-opacity="0.85"/>
        </svg>
      </div>

      <div class="absolute top-[25%] right-[20%]">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_316_5)">
            <path d="M21.3476 8.16382L16.3854 12.9964L11.5529 8.03413C9.6894 6.12066 6.72191 9.01059 8.58538 10.9241L13.4179 15.8863L8.45568 20.7188C6.5427 22.5818 9.43263 25.5493 11.3456 23.6863L16.3079 18.8538L21.1404 23.816C23.0039 25.7295 25.9714 22.8396 24.1079 20.9261L19.2753 15.9639L24.2376 11.1313C26.1508 9.26807 23.2609 6.30059 21.3476 8.16382Z" fill="#0A3BC9" fill-opacity="0.62"/>
          </g>
          <defs>
            <clipPath id="clip0_316_5">
              <rect width="22" height="22" fill="white" transform="translate(0.788635 15.7192) rotate(-44.2414)"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <p class="text-white text-[45px] font-YekanB font-bold absolute top-[260px] right-44 text-right">
        ما خدمات گسترده ای <br> به مشتریان ارایه می دهیم
      </p>

      <p class="text-white text-2xl font-YekanL absolute top-[395px] right-44">
        هر ایده جدید فقط یک اشتباه است
      </p>

      <HomeSocial />
      <HonorsUs />
    </div>

    <div class="bg-responsive-hrader bg-cover	bg-no-repeat bg-center block xl:hidden w-full h-screen relative">
      <TheResponsiveHeader />
      <p dir="ltr" class="text-white font-light text-5xl ml-4 pb-16 absolute bottom-0">Every new <br> idea is <br> just a <br> mashup</p>
    </div>

    <ClientCompanies />

    <TopCompanies />
    
    <p class="text-[#FF6300] xl:mt-24 mt-16 text-right text-xl font-YekanM px-8 xl:px-44">خدمات نارنج</p>
    <p class="text-right xl:text-4xl text-2xl font-semibold font-YekanB pt-3 xl:pt-5 px-8 xl:px-44 text-[#4D4D4D] xl:text-black">ما خدمات گسترده ای <br> به مشتریان ارائه می دهیم</p>
    
    <ServiceView />
    
    <DigitalExperiences />

    <div dir="rtl" class="pr-14 pt-7 hidden xl:block">
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39 19.5C39 30.2696 30.2696 39 19.5 39C8.73045 39 0 30.2696 0 19.5C0 8.73045 8.73045 0 19.5 0C30.2696 0 39 8.73045 39 19.5ZM10.4665 19.5C10.4665 24.489 14.511 28.5335 19.5 28.5335C24.489 28.5335 28.5335 24.489 28.5335 19.5C28.5335 14.511 24.489 10.4665 19.5 10.4665C14.511 10.4665 10.4665 14.511 10.4665 19.5Z" fill="#FF8030" fill-opacity="0.59"/>
      </svg>
    </div>

    <CustomersComments />

    <HomeFooter />

    <TheFooter class="block xl:hidden"></TheFooter>
  </div>
</template>

<script>
  import HomeFooter from "@/components/Footers/HomeFooter.vue";
  import TheFooter from "@/components/Footers/TheFooter.vue";
  import TheResponsiveHeader from "@/components/Headers/TheResponsiveHeader.vue";
  import HomeHeader from "@/components/Headers/HomeHeader.vue";
  import HomeSocial from "@/components/Social/HomeSocial.vue";
  import HonorsUs from "@/components/HonorsUs.vue";
  import ClientCompanies from "@/components/Companies/ClientCompanies.vue";
  import TopCompanies from "@/components/Companies/TopCompanies.vue";
  import ServiceView from "@/components/Services/ServiceView.vue"
  import DigitalExperiences from "@/components/DigitalExperiences.vue";
  import CustomersComments from "@/components/CustomersComments.vue";
  
  export default {
    components: {
      HomeFooter,
      TheFooter,
      TheResponsiveHeader,
      HomeHeader,
      HomeSocial,
      HonorsUs,
      ClientCompanies,
      TopCompanies,
      ServiceView,
      DigitalExperiences,
      CustomersComments
    },
    data() {
      return {}
    }
  }
</script>