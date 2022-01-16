<script lang="ts">
  import { goods } from "../game/goods";
  import Good from "./Good.svelte";
</script>

<div class="container">
  {#each goods as good, index}
    <Good {index} />
  {/each}
</div>

<style>
  .container {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>
