<script>
  export let customerLogos;

  let middle = Math.floor(customerLogos.length / 2);
  // split in half
  let logosFirstHalf = customerLogos.slice(0, middle);
  let logosSecondHalf = customerLogos.slice(middle, customerLogos.length);

  let third = Math.floor(customerLogos.length / 3);

  let logosFirstThird = customerLogos.slice(0, third);

  let logosTwoThirds = customerLogos.slice(third, customerLogos.length);

  let logosSecondThird = logosTwoThirds.slice(0, third);
  let logosLastThird = logosTwoThirds.slice(third, customerLogos.length);
</script>

<div class="first-half logos-mobile">
  {#each logosFirstHalf as logo}
    <div class="first-half">
      <img width="100" height="100" src={logo.customer_logo.guid} alt={logo.customer_logo.post_title}/>
    </div>
  {/each}
</div>

<div class="second-half logos-mobile">
  {#each logosSecondHalf as logo}
    <div>

      <img width="100" height="100" src={logo.customer_logo.guid} alt={logo.customer_logo.post_title}/>

    </div>
  {/each}
</div>

<div class="logos-first-third logos-desktop">
  {#each logosFirstThird as logo}
    <div>
      <img width="100" height="100" src={logo.customer_logo.guid} alt={logo.customer_logo.post_title} />
    </div>
  {/each}
</div>

<div class="logos-second-third logos-desktop">
  {#each logosSecondThird as logo}
    <div>
      <img width="100" height="100" src={logo.customer_logo.guid} alt={logo.customer_logo.post_title} />
    </div>
  {/each}
</div>

<div class="logos-last-third logos-desktop">
  {#each logosLastThird as logo}
    <div>

      <img width="100" height="100" src={logo.customer_logo.guid} alt={logo.customer_logo.post_title} />
    </div>
  {/each}
</div>

<style lang="scss">
  .logos-mobile,
  .logos-desktop {
    height: 50%;
    display: flex;
    position: absolute;
    align-items: center;
    @media (min-width: 992px) {
      height: 33.3%;
    }
    div {
      // display: inline-block;
      margin: 0 20px;
      width: 100px;
    }
  }
  .second-half {
    bottom: 0;
  }
  .logos-desktop {
    display: none;
  }
  @media (min-width: 992px) {
    .logos-mobile {
      display: none;
    }
    .logos-desktop {
      display: flex;
      justify-content: space-between;
      width: 100%;
      &.logos-second-third {
        top: 33.3%;
      }
      &.logos-last-third {
        bottom: 0;
      }
      img:hover {
        filter: none;
        opacity: 1;
      }
    }
  }

  img {
    filter: grayscale(100%);
    // height: 70px;
    width: 100%;
    // max-width: 200px;
    opacity: 0.5;
    transition: 0.5s;
  }
</style>
