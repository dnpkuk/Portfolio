<script lang="ts">
  import { page } from "$app/state";
  import Command from "#components/Command.svelte";

  const path = $derived(page.url.pathname.slice(1));
  const pathString = $derived.by(() => {
    const s = decodeURIComponent(path);
    return s.includes(" ") ? `"${s}"` : s;
  });
</script>

<svelte:head>
  <title>{page.status} - Dan Peak</title>
</svelte:head>

<Command
  command={{
    request: "./" + pathString,
    response: {
      text: `zsh: ${page.error?.message}: ./${decodeURIComponent(path)}`,
      links: [],
    },
  }}
/>
