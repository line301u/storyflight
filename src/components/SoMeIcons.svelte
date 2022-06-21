<script>
  import Instagram from '../assets/icons/Instagram.svelte';
  import Facebook from '../assets/icons/Facebook.svelte';
  import LinkedIn from '../assets/icons/LinkedIn.svelte';

  export let footerData;
  export let SoMeIcons;

  let footerItems = footerData.items;
  const icons = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: LinkedIn,
  };
</script>

<div class="soMe-icons">
  {#each footerItems as footerItem}
    {#if footerItem.url !== '#'}
      <a target="_blank links-hover" rel="noopener" href={footerItem.url}>
        <span class="visually-hidden ">SoMe icon</span>
        <svelte:component this={icons[footerItem.title.toLowerCase()]} />
      </a>
    {/if}
  {/each}
</div>

{#each footerItems as footerItem}
  {#if footerItem.url === '#'}
    <p>{footerItem.title}</p>
  {/if}
{/each}

<style lang="scss">
  .soMe-icons {
    margin: var(--gutter);
    display: flex;
  }

  p {
    color: var(--clr-white);
    text-align: center;
    margin: var(--gutter);
    @media (min-width: 1024px) {
      margin: 0;
    }
  }

  a {
    display: block;
    color: var(--clr-primary);
    margin: 0 15px;
  }
</style>
