<script>
    import { Worth } from '../stores/Store'
    import { onMount } from 'svelte'
    import Card from './Card.svelte'
    import Button from './Button.svelte'

    let person;

    function getPerson() {
        fetch('https://forbes400.herokuapp.com/api/forbes400?limit=25').then(res => res.json()).then((data) => {
            let actualData = data[Math.floor(Math.random() * data.length)]
            person = actualData.person
            Worth.set(parseFloat(actualData.finalWorth))
        })
    }

    onMount(() => {
        getPerson()
    })
</script>

{#if person}
<Card>
    <h3 class="flex justify-start text-purple-400 mb-2 border-b-2 border-gray-200 p-1 text-xs">Spending as:</h3>
    <div class="justify-center inline-flex items-center">
        <img class="w-16 rounded-full border-2 border-purple-500 overflow-hidden" src="{person.squareImage}" alt="">
        <div class="ml-2">
            <p class="text-xl text-purple-900">{person.name}</p>
            <p class="text-lg text-green-600">${$Worth}</p>
        </div>
    </div>
    <Button on:click={getPerson}>Shuffle</Button>
</Card>
{/if}