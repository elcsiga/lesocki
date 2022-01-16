<script lang="ts">
  import type {
    ApplyCommand,
    StartCommand,
    QuitCommand,
    QuitNotConnectedPlayersCommand,
  } from "../shared/types";
  import { gameConfig } from "../shared/config";
  import IoIosAddCircle from "svelte-icons/io/IoIosAddCircle.svelte";
  import Pawn from "../compnents/Pawn.svelte";
  import { gameReport, send, me } from "../game/state";
  const { min, max } = gameConfig.numOfPlayers;

  function apply() {
    const storageKey = "lesocki-name";
    const name = prompt(
      "Mi a neved?",
      window.sessionStorage.getItem(storageKey) || ""
    );
    if (name) {
      window.sessionStorage.setItem(storageKey, name);
      send<ApplyCommand>({
        command: "apply",
        name,
      });
    }
  }

  function quit() {
    send<QuitCommand>({
      command: "quit",
    });
  }

  function start() {
    send<StartCommand>({
      command: "start",
    });
  }

  function quitNotConnectedPlayers() {
    send<QuitNotConnectedPlayersCommand>({
      command: "quitNotConnectedPlayers",
    });
  }
</script>

<h1>Gyülekező</h1>

<section class="list">
  {#each $gameReport.players as player}
    <Pawn {player} />
  {/each}

  {#if !$me && $gameReport.players.length < max}
    <div class="add bumpy" on:click={apply}>
      <IoIosAddCircle />
    </div>
  {/if}
</section>

<section>
  <p>A játékot {min}-{max} játékos játszhatja.</p>
</section>

<section>
  {#if $gameReport.players.length >= min && $gameReport.players.length <= max}
    {#if $gameReport.players.every((player) => player.connected)}
      <p>
        Itt van mindenki?
      </p>
      <p>
        <button on:click={start}> Kezdjük! </button>
      </p>
    {/if}
  {/if}
</section>

<section>
  {#if !$gameReport.players.every((player) => player.connected)}
    <p>
      Úgy tűnik valaki nem elérhető.
      <button class="link" on:click={quitNotConnectedPlayers}>
        Kiléptetem őket.
      </button>
    </p>
  {/if}
</section>

<div>
  {#if $me}
    <button class="link" on:click={quit}> Mégsem játszom</button>
  {/if}
</div>

<style>
  .list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }

  .add {
    box-sizing: border-box;
    width: 5em;
    height: 7em;
    margin: 0.5em;
    border-radius: 0.5em;
    border: 0.2rem solid white;
    background: linear-gradient(to top, lightgrey, white, lightgrey);

    padding-top: 1em;
    color: rgba(0, 128, 0, 0.5);
    cursor: pointer;
  }
</style>
