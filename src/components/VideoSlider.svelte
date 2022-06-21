<script>
  import SliderSingleVideo from './SliderSingleVideo.svelte';
  import ArrowLeft from '../assets/icons/ArrowLeft.svelte';
  import ArrowRight from '../assets/icons/ArrowRight.svelte';
  import { animation } from '../helpers/animation.js';
  import { onMount } from 'svelte';

  // import Swiper core and required modules
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

  // import Swiper core and required modules
  import SwiperCore, { Navigation } from 'swiper';

  // install Swiper modules
  SwiperCore.use([Navigation]);

  export let chosenCasesData;

  onMount(() => {
    animation();
  });
</script>

<div class="swiper-wrap">
  <Swiper
    slidesPerView={'auto'}
    centeredSlides={true}
    loop={false}
    navigation={true}
    spaceBetween={-45}
    speed={1000}
    initialSlide={2}
    breakpoints={{
      700: {
        spaceBetween: -90,
      },
    }}
  >
    {#each chosenCasesData as item}
      <SwiperSlide>
        <SliderSingleVideo singleVideoData={item} />
      </SwiperSlide>
    {/each}
  </Swiper>
  <div class="swiper-overlay">
    <div class="arrow-wrap container container--fluid">
      <button class="prev-element-unique">
        <span class="visually-hidden"> Go left</span>
        <ArrowLeft />
      </button>
      <button class="next-element-unique">
        <span class="visually-hidden"> Go right</span>
        <ArrowRight />
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  .swiper-wrap {
    position: relative;

    .swiper-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 26px;
      background: rgb(0, 2, 23);
      background: linear-gradient(
        90deg,
        rgba(0, 2, 23, 1) 3%,
        rgba(0, 2, 23, 0) 13%,
        rgba(0, 2, 23, 0) 50%,
        rgba(0, 2, 23, 0) 87%,
        rgba(0, 2, 23, 1) 97%
      );

      z-index: 1;
      pointer-events: none;

      @media (min-width: 768px) {
        height: 46px;
        background: linear-gradient(
          90deg,
          rgba(0, 2, 23, 1) 3%,
          rgba(0, 2, 23, 0) 13%,
          rgba(0, 2, 23, 0) 50%,
          rgba(0, 2, 23, 0) 87%,
          rgba(0, 2, 23, 1) 97%
        );
      }
      .arrow-wrap {
        width: 100vw;
        height: 26px;
        @media (min-width: 768px) {
          height: 46px;
        }
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      button {
        padding: 0;
        background: none;
      }
    }
  }
</style>
