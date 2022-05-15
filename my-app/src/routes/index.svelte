<script context="module" lang="ts">
  import type { LoadOutput } from "@sveltejs/kit";
  import { base } from "$app/paths";
  export function load(): LoadOutput {
    return {
      status: 302,
      redirect: `${base}/introduction/welcome`,
    };
  }
</script>
