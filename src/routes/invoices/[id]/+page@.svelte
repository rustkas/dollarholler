<script lang="ts">
  import Dashboard from "$lib/layouts/Dashboard.svelte";
  export let data;
  console.log(data);
</script>

<Dashboard>
  <h1>Invoice</h1>
  <p>{data.id}</p>
</Dashboard>