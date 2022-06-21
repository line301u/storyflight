<script>
  import Filter from './Filter.svelte';
  import Case from './Case.svelte';
  import { staggerAnimation } from '../helpers/animation.js';
  import { onMount } from 'svelte';

  export let cases;
  export let videoTypes;
  export let canonicalURL;
  export let title;

  let filter = 11; // 11 is the ID of "alle videoer" videotype from WP
  $: filteredCases = cases.filter((item) => item.videotypes.find((id) => id === filter));

  onMount(() => {
    staggerAnimation('.case');
  });
</script>

<section>
  <div class="header container container--fluid">
    <h1>{title}</h1>
    <Filter bind:filter filterTypes={videoTypes} />
  </div>

  <div class="case-grid container container--fluid">
    {#each filteredCases as { case_title: title, case_image: { guid: image }, videotypes: type, slug }}
      <Case {title} imageSrc={image} type={type.find((id) => id !== 11)} {videoTypes} {slug} {canonicalURL}/>
    {/each}
  </div>
</section>

<style lang="scss">
  .case-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));
    gap: var(--gutter);
    grid-auto-rows: 360px;

    @media (min-width: 1112px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  h1 {
    color: var(--clr-secondary);
  }

  @media (min-width: 992px) {
    .header {
      display: flex;
      margin-bottom: 3rem;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
</style>
