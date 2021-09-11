<script>
    export let fullWidth = true;
</script>

<button on:click class="button bg-purple-600 text-white rounded-md p-2 flex justify-center transition hover:bg-purple-500" class:w-full={fullWidth}>
    <slot></slot>
</button>