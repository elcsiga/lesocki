<script lang="ts">
  import { goods } from "../shared/config";
  export let index = 0;
  const good = goods[index];
</script>

<div>
  <img src="/assets/goods/{good.name}.png" alt={good.name} />
  <span>{good.name}</span>
</div>

<style>
  div {
    display: inline-block;
    position: relative;
    width: 6em;
    height: 6em;

    border-radius: 3em;

    transition: all 0.3s ease-in-out;

    box-shadow: /* 0 0 0 2px rgb(255, 255, 255),*/ 0.3em 0.3em 1em
      rgba(0, 0, 0, 0.3);
  }
  div:hover {
    transform: scale(1.1);
    box-shadow: /* 0 0 0 2px rgb(255, 255, 255),*/ 1em 1em 1em
      rgba(0, 0, 0, 0.3);
  }
  span {
    font-size: 1em;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    padding-bottom: 3px;

    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    text-align: center;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 6em;
    height: 6em;
    border-radius: 3em;
    object-fit: cover;
  }
</style>
