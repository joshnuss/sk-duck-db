<script lang="ts">
  export let data
</script>

<h1>Products</h1>

{#each data.products as product}
  <article>
    <h2>{product.name}</h2>
    <p>${product.price / 100}</p>
  </article>
{/each}
