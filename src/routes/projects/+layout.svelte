<script lang="ts">
  import Command from "#components/Command.svelte";
  import projects from "./projects.json";
  import { page } from "$app/state";

  let { children } = $props();

  const base = $derived({
    request: "ls projects",
    response: {
      text: "",
      equal_columns: true,
      links: Object.values(projects)
        .map(project => {
          const href = "/projects/" + project.title;
          return {
            text: project.title,
            handler: href,
            active: href === page.url.pathname,
          };
        })
        .sort((a, b) => a.text.localeCompare(b.text)),
    },
  });
</script>

<Command command={base} />
{@render children()}
