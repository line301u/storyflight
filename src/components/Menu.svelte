<script>
  import Line from '../assets/icons/Line.astro';
  import Facebook from '../assets/icons/Facebook.svelte';
  import Instagram from '../assets/icons/Instagram.svelte';
  import LinkedIn from '../assets/icons/LinkedIn.svelte';
  import Arrow from '../assets/icons/CircleWithArrow.svelte';
  import Menu from '../assets/icons/Menu.svelte';

  let menuActive = false;
  export let menuData;
  export let soMeData;
  const primaryMenu = menuData.items;
  const contactInformation = soMeData.items;

  const icons = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: LinkedIn,
  };

  function colorBlend() {
    document.querySelector('.header').classList.toggle('color-blend');
  }

  function lockBodyScroll() {
    if (menuActive) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'visible';
    }
  }
</script>

<button
  class="burger-wrap"
  on:click={() => (menuActive = !menuActive)}
  on:click={colorBlend}
  on:click={lockBodyScroll}
>
  {#if !menuActive}
    <Menu />
    <span class="visually-hidden ">menu</span>
  {:else}
    <span class="a links-hover close_menu">
      <span class="a go_back">Tilbage</span>
      <span class="arrow_icon"><Arrow /></span>
    </span>
  {/if}
</button>

<div class="menu-container" class:menuActive>
  <div class="menu-wrap container container--small">
    <nav>
      <ul>
        {#each primaryMenu as menuItem}
          <li>
            <a
              class="h1 menu_item"
              href={`/${menuItem.slug}`}
              rel="noopener"
              >{menuItem.title}
            </a>
          </li>
          <!-- Change link in wordpress -->
        {/each}
      </ul>
    </nav>

    <svg
      class="separation_line"
      width="210"
      height="456"
      viewBox="0 0 245 456"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        opacity="0.1"
        x1="240.479"
        y1="2.31822"
        x2="4.42951"
        y2="453.407"
        stroke="#F9F9F9"
        stroke-width="10"
      />
    </svg>

    <div class="contact">
      <h3>Følg os</h3>
      <ul>
        {#each contactInformation as { title, url }, index}
          {#if index <= 2}
            <li>
              <a class="links-hover some_title" href={url} rel="noopener" target="_blank">
                {title}
                <span class="some_icon"><svelte:component this={icons[title.toLowerCase()]} /></span>
              </a>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </div>
</div>

<style lang="scss">
  .menu-container {
    z-index: 2;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--clr-secondary);

    visibility: hidden;
    opacity: 0;
    transition: 0.5s;

    overflow: auto;

    &.menuActive {
      visibility: visible;
      opacity: 1;
      transition: 0.5s;
    }

    .menu-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (min-width: 992px) {
        align-items: center;
        flex-direction: row;
      }
      height: 100%;
      width: 100%;
    }

    h3,
    a {
      color: var(--clr-white);
    }

    nav {
      margin-bottom: 4rem;
      @media (min-width: 992px) {
        margin-bottom: 0;
        flex-grow: 1;
      }
      .menu_item {
        font-weight: 600;
        font-style: italic;
        font-size: 2.7rem; // change - global style?
        transition: 0.3s;
        @media (min-width: 768px) {
          font-size: 3.8rem; // change - globals style?
        }
      }
      ul {
        list-style-type: none;
        li {
          margin-bottom: 0.2rem;
          transition: 0.3s;
          &:hover {
            transform: translateX(5px);
            opacity: 0.2;
            transition: 0.3s;
          }
        }
      }
    }

    .separation_line {
      display: none;
      @media (min-width: 992px) {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .close_menu {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    padding-top: 2px;
    transition: 0.3s;

    .arrow_icon {
      color: var(--clr-primary);
      height: 28px;
      width: 28px;
      margin-left: 1em;
      padding-top: 0px;
      transition: 0.3s;
    }
    .go_back {
      padding-top: 3px;
      transition: 0.3s;
    }
  }

  .burger-wrap {
    background: none;
    border: none;
    cursor: none;
    z-index: 3;
    margin: 0;
    mix-blend-mode: difference;
    color: white;
    transition: 0.3s;
    padding: 0;
  }

  .contact {
    @media (min-width: 992px) {
      flex-grow: 1;
      padding-left: 5rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      max-width: 144px;

      li {
        margin: 0.05rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .some_icon {
        color: var(--clr-primary);
        height: 32px;
        width: 32px;
      }
      .some_title {
        padding-top: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
    }
  }
</style>
