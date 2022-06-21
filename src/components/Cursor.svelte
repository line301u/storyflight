<script>
  import { cursorHover } from '../helpers/cursorHover';
  import { onMount } from 'svelte';

  onMount(() => {
    cursorHover();
  });

  function cursorMove(e) {
    let cursor = document.querySelector('#cursor');
    const circleStyle = cursor.style;

    document.addEventListener('mousemove', (e) => {
      window.requestAnimationFrame(() => {
        circleStyle.top = `${e.clientY - cursor.offsetHeight / 3}px`;
        circleStyle.left = `${e.clientX - cursor.offsetWidth / 3}px`;
      });
    });
  }
  function mouseDown() {
    let cursor = document.querySelector('#cursor');
    cursor.style.transform = 'scale(1.5)';
  }
  function mouseUp() {
    let cursor = document.querySelector('#cursor');
    cursor.style.transform = 'scale(1)';
  }
</script>

<svelte:window on:mousemove={cursorMove} on:mousedown={mouseDown} on:mouseup={mouseUp} />

<div id="cursor" />

<style lang="scss">
  #cursor {
    width: 30px;
    height: 30px;
    border: 1px solid var(--clr-primary);
    border-radius: 100%;
    position: fixed;
    /* transition: 0.1s ease-out; */
    transition: transform 0.25s;
    z-index: 999;
    pointer-events: none;
    /* smartphones, touchscreens */
    @media (hover: none) and (pointer: coarse) {
      display: none;
    }
    /* stylus-based screens */
    @media (hover: none) and (pointer: fine) {
      display: none;
    }
  }
</style>
