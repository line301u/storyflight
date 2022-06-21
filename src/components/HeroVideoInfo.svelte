<script>
import CircleWithArrow from '../assets/icons/CircleWithArrow.svelte';
export let singleCase;
export let videoTypes;
export let heroSwiper;
export let activeSlideIndex;

const videoTypeId = singleCase.videotypes.filter(id => id !== 11);
const videoType = videoTypes.find(type => type.id === videoTypeId[0])["name"];

function changeVideo(){
    if (activeSlideIndex === 2){
           setTimeout(function () {
                heroSwiper.slideTo(0);
        }, 175);
    }
}
</script>

<div class="video-information">
    <div class="info">
    <p class="subtitle">{videoType}</p>
    <h3>{singleCase.case_title}</h3>
        <a href={`/cases/${singleCase.slug}`} class="link links-hover">
            <span class="a link-text">Gå til projektet</span>
            <span class="arrow_icon"><CircleWithArrow /></span>
        </a>
    </div>
        <button class="timer-button" on:click={changeVideo}>
            <svg class="border" height="128" width="128">
                <circle cx="64" cy="64" r="63" stroke="white" stroke-width="1" fill="none" />
              </svg>
            <svg class="timer-border" height="128" width="128">
                <circle cx="64" cy="64" r="63" stroke="white" stroke-width="1" fill="none" />
              </svg>
            <span class="a button-text">Næste <br> video</span>
        </button>
    </div>


<style lang="scss">
    h3, p, a {
        color: var(--clr-white);
    }
    .timer-button {
        position:relative;
        border-radius: 50%;
        background: none;
        height: 128px;
        padding: 8px;
        width: 128px;
        transition: opacity 0.3s;
            &:hover{
                opacity: 0.5;
                transition: opacity 0.3s;
            }

        .button-text {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--clr-white);
            height: 100%;
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            
        }
        .timer-border{
        opacity: 1;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(-90deg);
        stroke-dasharray: 400;
        stroke-dashoffset: 400;
        }
   
        .border{
        opacity: 0.2;
        position: absolute;
        top: 0;
        left: 0;
        }
    }

    .video-information{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        .info{
            margin-left: 1.5rem;
            @media (min-width: 500px) {
                margin-left: 2.5rem;
            }
        }
        .link{
        display:flex;
        align-items: center;
        margin-top: 0.5rem
        }
    }

    .arrow_icon {
        display: flex;
        color: var(--clr-primary);
        margin-left: 1em;
    }

    :global(.hero-content-wrap){
        .swiper-slide-active{
            opacity: 1 !important;
            .video-info-wrap{
                .video-information{
                    .timer-button{
                        .timer-border{
                            animation: timer-animation 8s linear forwards;
                        }
                    }
                }
            }
        }
    }

    @keyframes timer-animation {
            to {
                stroke-dashoffset: 0;
            }
        }
</style>
