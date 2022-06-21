<script>
  export let filter;
  export let filterTypes = [];

  function setFilter(id) {
    filter = id;
  }
</script>

<nav class="filter">
  <div class="filter__wrapper">
    {#each filterTypes as { name, slug, id }}
      <button
        class="filter__button a"
        on:click={() => setFilter(id)} 
        class:selected={id === filter}>
        {name}
      </button>
    {/each}
  </div>
</nav>

<style lang="scss">

.filter {
  padding-bottom: var(--gutter);
  position: relative;

  @media (min-width: 992px) {
    padding-bottom: 0;
  }

  &::before {
      content: '';
      position: absolute;
      left: calc(var(--gutter) * -1);
      bottom: calc(var(--gutter));
      height: calc(100% - 2rem);
      width: var(--gutter);
      background: linear-gradient(90deg, var(--clr-grey) 0%, rgba(249, 249, 249, 0.3) 100%);
      z-index: 1;
  }

  &::after {
      content: '';
      position: absolute;
      right: calc(var(--gutter) * -1);
      bottom: calc(var(--gutter));
      height: calc(100% - 2rem);
      width: var(--gutter);
      background: linear-gradient(-90deg, var(--clr-grey) 0%, rgba(249, 249, 249, 0.3) 100%);
      z-index: 1;
  }

  &__wrapper {
    white-space: nowrap;
    overflow-y: auto;
    padding: 1rem var(--gutter);
    margin-left: calc(var(--gutter) * -1);
    margin-right: calc(var(--gutter) * -1);
    margin-bottom: -1rem;
  }

  &__button {
    background: none;
    opacity: 0.3;
    transition: .3s ease-in opacity;
    color: var(--clr-secondary);

    &:hover {
      opacity: 0.6;
    }


    &.selected {
      opacity: 1;
    }

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: var(--gutter);

      @media (min-width: 992px) {
        padding-right: 0;
      }
    }


  }
}

</style>
