<script>
    import Card from './Card.svelte'
    import Button from './Button.svelte'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher();

    export let item;
</script>

<div class="">
    <div class="item">
        <img class="w-28 rounded-md" src="{item.icon}" alt="">
        <h3 class="text-center">{item.name}</h3>
        <h3 class="text-center text-green-600">${item.price}</h3>
        <div class="flex justify-center gap-1">
            <Button on:click={() => {dispatch('buy', item)}}>Buy</Button>
        </div>
    </div>
</div>