<script>
  const formElements = ['navn', 'email', 'nummer', 'beskrivelse'];
</script>

<form
  name="Contact"
  method="POST"
  data-netlify="true"
  action="/success"
  subject="Nogen vil i kontakt med Storyflight"
>
  {#each formElements as elm}
    <div class={elm}>
      {#if elm === 'email'}
        <input type="email" id={elm} name={elm} required placeholder=" " />
      {:else}
        <input type="text" id={elm} name={elm} required placeholder=" " />
      {/if}
      <label class="subtitle" for={elm}>{elm.charAt(0).toUpperCase()}{elm.slice(1)}</label>
    </div>
  {/each}

  <button class="filled-button-hover" type="submit" id="submit">Lad mig høre mere</button>
</form>

<style lang="scss">
  form {
    div {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 35px;
    }
    input {
      border: none;
      outline: none;
      border-bottom: 1px solid var(--clr-white);
      background: none;
      color: var(--clr-white);
      width: 100%;
      height: 50px;
      @media (min-width: 992px) {
        border-bottom: 1px solid var(--clr-secondary);
        color: var(--clr-secondary);
      }

      &:focus ~ label,
      &:valid ~ label,
      &:not(:placeholder-shown) ~ label {
        transform: translate(-12%, -100%) scale(0.75);
        opacity: 0.6;
      }
    }
    label {
      color: var(--clr-white);
      position: absolute;
      left: 0;
      transition: 0.2s;
      @media (min-width: 992px) {
        color: var(--clr-secondary);
      }
    }
    button {
      width: 100%;
      margin: 3rem 0 0;
      background: var(--clr-white);
      @media (max-width: 768px) {
        max-width: 300px;
      }
      @media (min-width: 992px) {
        background: var(--clr-secondary);
        color: var(--clr-white);
      }
    }
  }
</style>
