<script lang="ts">
  import { gameReport } from "./game/state";
  import Game from "./views/Game.svelte";
  import Gathering from "./views/gathering.svelte";
  import { Moon } from "svelte-loading-spinners";
</script>

<main>
  <div class="header">LESOCKI</div>
  <div class="content">
    {#if $gameReport && $gameReport.status === "GATHERING"}
      <Gathering />
    {:else if $gameReport && $gameReport.status === "GAME"}
      <Game />
    {:else}
      <Moon size="60" color="#FF3E00" unit="px" duration="1s" />
    {/if}
  </div>
  <div class="footer">
    <!--<pre> {JSON.stringify($gameReport, null, 2)} </pre> -->
    <!-- <FieldGrid fields={[null, [-1, 1, 2, 3], null, null]} /> -->
  </div>
</main>

<style>
  main {
    margin: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }
  .header,
  .footer {
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
  }

  .content {
    flex: 1 1 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: linear-gradient(to bottom, lightblue, white, lightgreen);
  }
</style>
