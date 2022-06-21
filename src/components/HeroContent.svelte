<script>
import HeroVideoInfo from './HeroVideoInfo.svelte';
import ArrowDown from "../assets/icons/ArrowDown.svelte";
import HeroVideo from './HeroVideo.svelte';

export let cases;
export let videoTypes;
let activeSlideIndex = 0;
let heroSwiper;

//Get random cases
cases = cases.sort(() => Math.random() - 0.5);

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/svelte';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade"
import 'swiper/scss/navigation';

import SwiperCore, {
  EffectFade, Autoplay, Controller
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade, Autoplay]);

const getCurrentSlideIndex = (e) => {
      const [slide] = e.detail;
      const activeIndex = slide[0].activeIndex;
      activeSlideIndex = activeIndex;
    }

    const setSwiper = (e) => {
      const [swiper] = e.detail;
      setTimeout(() => {
        heroSwiper = swiper;
      });
    };

</script>

<div class="hero-content-wrap">
    <div class="scroll-indicator-wrap">
        <a href="#text-block" class="scroll-indicator links-hover">
            <span class="a scroll-text">Scroll</span>
            <span class="scroll-arrow">
                    <ArrowDown />
            </span>
        </a>
    </div>
    <Swiper
    loop="{false}"
    slidesPerView="{1}"
    effect="{'fade'}"
    speed="{300}"
    noSwiping="{'true'}"
    allowTouchMove="{'false'}"
    keyboard="{'false'}"
    autoplay='{{
        "delay": 8000,
        disableOnInteraction: false
      }}'
    navigation='{{
        nextEl: ".timer-button"
     }}'
      on:swiper={setSwiper}
      on:snapIndexChange={getCurrentSlideIndex}>
    {#each cases as singleCase, index}
        {#if index <= 2}
        <SwiperSlide data-swiper-slide-index={index} class="swiper-no-swiping">
            <div class="video-overlay"></div>
                <HeroVideo bind:activeSlideIndex={activeSlideIndex} videoIndex={index} previewVideoSource={singleCase.preview_video.guid} caseImage={singleCase.case_image.guid}/>
            <div class="video-info-wrap container container--fluid">
                <HeroVideoInfo bind:activeSlideIndex={activeSlideIndex} {singleCase} {videoTypes} bind:heroSwiper={heroSwiper}/>
            </div>
        </SwiperSlide>
        {/if}
    {/each}
</Swiper>
</div>

<style lang="scss">
.video-info-wrap {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    height: 80vh;
    padding-bottom: 1.5rem;
        @media (min-width: 992px) {
            height: 100vh;
        }
}

.hero-content-wrap {
    position: relative;
    .scroll-indicator-wrap {
        position: absolute;
        z-index:2;
        bottom: 1.5rem;
        right:1.5rem;
        display:flex;
        .scroll-indicator {
            color: var(--clr-white);
            writing-mode: vertical-rl;
            display: flex;
            @media (max-width: 668px) {
                display: none;
            }
            .scroll-text {
            margin-left:4px;
            margin-bottom: 0.5rem;
        }
        .scroll-arrow {
                animation: bounce 2s ease-in 4s infinite alternate;
            }
            @keyframes bounce {
                20%, 100% {
                    transform: translateY(0px);
                }
                0% {
                    transform: translateY(5px);

                }
                10% {
                    transform: translateY(0px);
                }
            }
        }
    }

    .video-overlay{
        height: 80vh;
        width: 100vw;
        position: absolute;
        top: 0;
        background: var(--clr-secondary);
        opacity: 0.4;
            @media (min-width: 992px) {
                height: 100vh;
            }
        }
}
</style>
