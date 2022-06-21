<script>
    export let previewVideoSource;
    export let videoIndex;
    export let activeSlideIndex;
    export let caseImage;
    import { onMount } from 'svelte';

    let time = 0;
    let paused = true;
    let muted = true;

    // Play first video on mount
    onMount(() => {
        document.querySelector('[data-swiper-slide-index="0"] > video').play();
    });

    // play video if video index is same as active index else pause and reload
	$: isSlideActive(activeSlideIndex);

    // isSlideActive();
    function isSlideActive(value) {
		if (activeSlideIndex === videoIndex){
            paused = false;
        } else {
            paused = true;
            time = 0;
        }
	}

// funtion skal checks if is on last slide 
// if activeslide is 5 swipeto(0)

</script>

<video
src={previewVideoSource}
bind:currentTime={time}
bind:paused={paused}
bind:muted={muted}
playsinline
preload="auto"
poster={caseImage}
>
<track kind="captions">
</video>

<style lang="scss">
    video {
        height: 100vh;
        width: 100vw;
        object-fit: cover;
    }
</style>