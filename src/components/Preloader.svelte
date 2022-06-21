<script>
import { onMount } from 'svelte';
let windowIsLoaded;
let animationEnd;

	onMount(() => {
        checkLocalStorage();
	});

function checkLocalStorage(){
        if(!localStorage.getItem("visited")){
        runPreloader();
        localStorage.setItem("visited",true);
    }
}

function runPreloader(){
    document.querySelector('.preloader').style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
    getAnimationStatus();
    setWindowLoadState();
}   

function getAnimationStatus(){
        const animated = document.querySelector('.logo-color-change');
        animated.onanimationend = () => {
        animationEnd = true;
    }
}

function removePreloader(){
   document.querySelector(".preloader").classList.add("remove-preloader");
   document.querySelector('body').style.overflow = 'visible';
}

function setWindowLoadState(){
    window.addEventListener('load', (event) => {
        windowIsLoaded = true;
    });
}

$: if (windowIsLoaded && animationEnd) {
    removePreloader();
} 

</script>

<div class="preloader">
    <div class="underlay-container">
        <div class="underlay-wrap">
            <span class="logo-underlay"></span>
            <span class="logo-color-change"></span>
        </div>
    </div>
    <span class="loading-text subtitle">Indlæser...</span>
        <div class="logo-wrap">
        <div>
        <div class="svg-wrapper">
            <svg  viewBox="0 0 68.49 39.32">
            <defs>
            <mask id="mask" x="0" y="0" width="400" height="400">
                <rect id="rec" x="0" y="0" width="400" height="400" fill="#fff" opacity="1"/>
                    <path fill="currentColor" d="M61.23,7.84H50.92V9.46H61.23Z" />
                    <g>
                        <path fill="currentColor" fill-rule="evenodd" d="M26.54,23.45a7.69,7.69,0,1,1,7.69,7.65A7.66,7.66,0,0,1,26.54,23.45Zm9.93-5.59-6.85,9.5a6,6,0,1,0,6.85-9.5Z" />
                        <path fill="currentColor" fill-rule="evenodd" d="M61.23,11.9h-54v1.63H28.61a11.45,11.45,0,1,0,11.24,0H61.23ZM24.41,23.45a9.82,9.82,0,1,1,9.82,9.76A9.79,9.79,0,0,1,24.41,23.45Z" />
                        <path fill="currentColor" d="M7.23,7.84H17.7V9.46H7.23Z" />
                    </g>
            </mask>
            </defs>
            <rect id="base" x="0" y="0" width="400" height="400" fill="#000217" mask="url(#mask)"/>
            </svg>
        </div>
        </div>
    </div>
</div>
