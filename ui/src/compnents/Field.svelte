<script lang="ts">
  import Good from "./Good.svelte";
  import IoIosAddCircle from "svelte-icons/io/IoIosAddCircle.svelte";
  import GiSpade from "svelte-icons/gi/GiSpade.svelte";
  export let goods = null; //[-1, 1, 2, 3];
</script>

{#if goods}
  <div class="fields">
    {#each goods as good}
      <div class="field" class:empty={good < 0}>
        {#if good >= 0}
          <Good index={good} />
        {:else}
          <span class="add">
            <IoIosAddCircle />
          </span>
        {/if}
      </div>
    {/each}
  </div>
{:else}
  <div class="unused">
    <span class="add">
      <GiSpade />
    </span>
  </div>
{/if}

<style>
  .fields {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
  }
  .field {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 12em;
    height: 8em;
    border-radius: .5em;
    background: linear-gradient(to bottom, lightblue, green);
    margin: .5em;
  }
  .empty {
    background: linear-gradient(to bottom, lightblue, lightgreen);
  }
  .add {
    padding-top: .5em;
    opacity: 0.1;
    width: 6em;
    color: green;
    transition: all 0.3s ease-in-out;

    cursor: pointer;
  }
  .add:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }
  .unused {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 25em;
    height: 17em;
    border-radius: .5em;
    margin: .5em;
    background: linear-gradient(to bottom, lightblue, lightgrey);
  }
</style>
