<script>
    export let singleVideoData;
    let previewImage;
    
    function playVideo(e) {
        e.target.load();
        e.target.play();
        previewImage.style.opacity = 0;
    }
    function pauseVideo(e){
        e.target.pause();
        previewImage.style.opacity = 1;
    }
</script>

<div class="case-wrap">
    <a href={`/cases/${singleVideoData.slug}`} class="video-wrap">
        <img bind:this={previewImage} class="preview-image" src={singleVideoData.case_image.guid} alt={singleVideoData.case_image.post_title} loading="lazy">
        <video class="preview-video" loading="lazy" poster={singleVideoData.case_image.guid} src={singleVideoData.preview_video.guid} on:mouseenter={playVideo} on:mouseout={pauseVideo} muted={'true'} preload='metadata' playsinline loop>
          </video>
    </a>
    <h3>{singleVideoData.case_title}</h3>
</div>


<style lang="scss">
    h3 {
    color: var(--clr-white);
    margin-top: 0.8rem;
    z-index: -1;
    }

    .case-wrap{
        width: 400px !important;
        @media (min-width: 700px) {
            width: 700px !important;
        }
        @media (min-width: 1500px) {
            width: 900px !important;
        }
    }
    .video-wrap {
    display: block;
    position:relative;
    clip-path: polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%);
    height: 50vh;
    width: 400px !important;
    @media (min-width: 700px) {
    width: 700px !important;
  }
    @media (min-width: 1500px) {
                width: 900px !important;
            }
        .preview-image{
            position: absolute;
            height: 50vh;
            object-fit: cover;
            width: 100%;
            display: block;
            z-index: 1;
            pointer-events: none;
            transition: opacity 0.3s;
        }
        .preview-video{
            position: absolute;
            height: 50vh;
            object-fit: cover;
            width: 100%;
            display: block;
        }
    }
</style>