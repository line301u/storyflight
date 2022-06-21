<script>
  export let servicesData;

  import { staggerAnimation } from '../helpers/animation.js';
  import { onMount } from 'svelte';

  onMount(() => {
    staggerAnimation('.services-item');
  });
</script>

<div class="services-wrap">
  {#each servicesData as item}
    <div class="services-item container">
      <svg
        class="services-line"
        width="55"
        height="70"
        viewBox="0 0 55 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line stroke="currentColor" stroke-width="5" x1="52.3262" y1="0.915831" x2="2.32621" y2="127.916" />
      </svg>
      <h2><span class="subtitle">{item.subtitle}</span>{item.services_title}</h2>
      <p>{item.text}</p>
    </div>
  {/each}
</div>

<style lang="scss">
  .services-item {
    padding: 3rem 4rem;
    position: relative;
    opacity: 0;

    @media (min-width: 1000px) {
      display: grid;
      grid-template-columns: 50% 50%;
    }
    h2 {
      position: relative;
      margin-bottom: 1rem;
      .subtitle {
        color: var(--clr-primary);
        position: absolute;
        top: -20px;
        text-transform: capitalize;
      }
      @media (min-width: 1000px) {
        margin-bottom: 0rem;
      }
    }
    .services-line {
      position: absolute;
      left: 15px;
      opacity: 0.1;
      top: 12px;
    }
  }
  .services-wrap {
    padding-bottom: 3rem;
    @media (min-width: 768px) {
      padding-bottom: 6rem;
    }
  }
</style>
