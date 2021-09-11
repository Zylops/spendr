<script>
	import Header from './comp/Header.svelte'
	import Stats from './comp/Stats.svelte'
	import Shop from './comp/Shop.svelte'
	import AddPrompt from './comp/AddPrompt.svelte'
</script>

<Header/>

<main>
	<div class="statContainer flex justify-center mt-2">
		<Stats/>
		<Shop/>
	</div>
	<AddPrompt/>
</main>

<style>

</style>