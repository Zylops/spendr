<script>
    import Card from './Card.svelte'
    import Button from './Button.svelte'
    import { ShopItems } from '../stores/Store'

    // let link = '';
    // let pageSource;
    let icon, name, price;

    function addItem() {
        ShopItems.set([item, ...$ShopItems])
    }
</script>

<Card>
    <div class="text-center">
        <h3 class="w-full text-purple-500 mb-2">Add shop items</h3> <!-- <span class="text-purple-400">(wallmart link)</span> -->
        <!-- <input type="text" bind:value={link} class="rounded-sm w-full m-2 p-2"> -->
        <h3 class="text-xs text-left">URL To Image of Item:</h3>
        <input type="text" class="rounded-sm w-full m-2 p-2" bind:value={icon}>

        <h3 class="text-xs text-left">Name of Item:</h3>
        <input type="text" class="rounded-sm w-full m-2 p-2" bind:value={name}>

        <h3 class="text-xs text-left">Price of Item:</h3>
        <input type="text" class="rounded-sm w-full m-2 p-2" bind:value={price}>
        <Button on:click={addItem}>Add</Button>
    </div>
</Card>

