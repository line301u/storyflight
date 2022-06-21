<script>
  export let imageSrc;
  export let title;
  export let type;
  export let videoTypes;
  export let slug;
  export let canonicalURL;

  const caseVideoType = videoTypes.find((videoType) => videoType.id === type);
</script>

<article class="case">
  <a class="case__link" href={canonicalURL.pathname + slug}>
    <img class="case__image" src={imageSrc} alt="alt text" loading="lazy" />
    <div class="case__overlay">
      <p class="case__subtitle [ subtitle ]">{caseVideoType.name}</p>
      <h2 class="case__title [ h3 ]">{title}</h2>
    </div>
  </a>
</article>

<style lang="scss">
  .case {
    position: relative;
    height: 100%;
    overflow: hidden;
    opacity: 0;

    @media (min-width: 800px) and (max-width: 1111px) {
      &:last-child:nth-child(2n - 1) {
        grid-column: span 2;
      }

      &:last-child:nth-child(4n - 4) {
        grid-column: span 2;
      }

      &:last-child:nth-child(12n - 12) {
        grid-column: span 1;
      }

      &:last-child:nth-child(5n - 5) {
        grid-column: span 1;
      }

      &:last-child:nth-child(10n + 2) {
        grid-row: span 1;
      }

      &:last-child:nth-child(10n + 3) {
        grid-column: span 1;
      }

      &:nth-child(10n + 2) {
        grid-row: span 2;
      }

      &:nth-child(10n + 6) {
        grid-row: span 2;
      }

      &:last-child:nth-child(10n + 6) {
        grid-row: span 1;
        grid-column: span 2;
      }

      &:last-child:nth-child(10n + 8) {
        grid-column: span 1;
      }

      &:last-child:nth-child(10n + 7) {
        grid-column: span 1;
      }

      &:nth-last-child(2):nth-child(10n + 6) {
        grid-row: span 1;
      }

      &:last-child:nth-child(10n + 14) {
        grid-column: span 2;
      }
    }

    @media (min-width: 1112px) {
      &:last-child:nth-child(3n - 1) {
        grid-column: span 2;
      }

      &:last-child:nth-child(3n - 2) {
        grid-column: span 3;
      }

      &:nth-last-child(2):nth-child(12n + 4) {
        grid-row: span 2;
      }

      &:last-child:nth-child(12n + 11) {
        grid-row: span 2;
        grid-column: span 1;
      }

      &:nth-child(12n + 5) {
        grid-column-start: span 2;
        grid-column-end: 4;
        grid-row: span 2;
      }

      &:nth-child(12n + 10) {
        grid-row-start: 1;
        grid-row: span 2;
        grid-column: span 2;
      }
    }

    &__link {
      display: block;
      height: 100%;

      &:hover,
      &:focus {
        .case__image {
          transform: scale(3);
          filter: brightness(100%);
        }
      }
    }

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      color: var(--clr-white);
      padding: 1rem 1rem 0.5rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    &__image {
      height: 100%;
      width: 100%;
      transform-origin: 50% 50%;
      transition: transform 24s ease-in-out, filter 0.5s ease-in-out;
      filter: brightness(50%);
      object-fit: cover;
    }
  }
</style>
