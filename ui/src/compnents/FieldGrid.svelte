<script lang="ts">
  import Field from "./Field.svelte";

  export let fields: number[][] = [null, null, null, null];
</script>

<div class="container">
  {#each fields as fileld}
    <Field goods={fileld} />
  {/each}
</div>

<style>
  .container {
    margin: auto;
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
