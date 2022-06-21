<script>
  import LogoType from '../assets/LogoWithType.svelte';
  import FooterLogo from '../assets/FooterLogo.svelte';
  import SoMeIcons from './SoMeIcons.svelte';
  export let footerData;
</script>

<div class="">
  <div class="footer-logo" onclick="window.location.href='/'">
    <svelte:component this={LogoType} class="footer-svg" />
  </div>
  <SoMeIcons {footerData} />
  <div class="footer-bg-logo">
    <svelte:component this={FooterLogo} />
  </div>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }

    .footer-logo {
      max-width: 300px;
      margin: var(--gutter);
    }

    .footer-bg-logo {
      position: absolute;
      right: -107px;
      top: -1px;
      display: none;
      @media (min-width: 1024px) {
        display: block;
      }
    }
  }
  :global(.footer-svg) {
    width: 100%;
  }
</style>
