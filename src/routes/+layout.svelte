<script lang="ts">
  import "../app.scss";
  import Terminal from "#components/Terminal.svelte";

  let { children } = $props();
</script>

<Terminal>
  {@render children()}
</Terminal>
