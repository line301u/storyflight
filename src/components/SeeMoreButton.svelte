<script>
  import Arrow from '../assets/icons/CircleWithArrow.svelte';
  export let pageData;
</script>

<a class="links-hover container container--fluid" href="{pageData.acf.button_link} "
  >{pageData.acf.button_text} <span class="arrow_icon"><Arrow /></span></a
>

<style lang="scss">
  a {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    color: white;
    padding-bottom: 1.5rem;
    .arrow_icon {
      color: var(--clr-primary);
      height: 28px;
      width: 28px;
      margin-left: 1em;
      padding-top: 0px;
    }
  }
</style>
