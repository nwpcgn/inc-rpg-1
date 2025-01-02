<script lang="ts">
	import Sector1 from './_game/Sector1.svelte'
	let { title = 'Game' } = $props()
</script>

<div class="layer nwp">
	<div class="content">
		<h1>{title}</h1>
	</div>
	<Sector1></Sector1>
</div>
