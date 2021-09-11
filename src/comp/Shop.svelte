<script>
    import Card from './Card.svelte'
    import ShopItem from './ShopItem.svelte'
    import { ShopItems, Worth } from '../stores/Store'

    function handlePurchase(e) {
        let item = e.detail;
        Worth.set($Worth - item.price)
    }
</script>

<div class="container ml-2">
    <Card>
        <h3 class="flex justify-start text-purple-400 mb-2 border-b-2 border-gray-200 p-1 text-xs">Shop:</h3>
        <div class="shop grid grid-cols-6 justify-items-center">
            {#each $ShopItems as item}
            <ShopItem {item} on:buy={handlePurchase}/>
            {/each}       
        </div>
    </Card>
</div>