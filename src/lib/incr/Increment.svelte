<script>
	import resourcen from './resourcen'
	class ResourceManager {
		resources = $state()
		constructor(resources) {
			this.resources = resources
		}

		click(resourceKey) {
			const resource = this.resources[resourceKey]
			if (!resource) {
				console.error(`Resource "${resourceKey}" not found.`)
				return
			}

			if (resource.total + resource.clickInc <= resource.max) {
				resource.total += resource.clickInc
				console.log(`${resource.name}: Total is now ${resource.total}`)
			} else {
				console.log(`${resource.name} has reached its maximum capacity.`)
			}
		}

		getResourceTotal(resourceKey) {
			const resource = this.resources[resourceKey]
			if (!resource) {
				console.error(`Resource "${resourceKey}" not found.`)
				return null
			}
			return resource.total
		}
	}

	let resMan = new ResourceManager(resourcen)

	const resClick = (resourceKey) => {
		resMan.click(resourceKey)
	}
</script>

<main>
	<h1>Clicker Game</h1>
	<div>
		{#each Object.keys(resMan.resources) as resourceKey}
			<div>
				<h2>{resMan.resources[resourceKey].name}</h2>
				<p>{resMan.resources[resourceKey].description}</p>
				<p>Total: {resMan.resources[resourceKey].total}</p>
				<button onclick={() => resClick(resourceKey)}>
					{resMan.resources[resourceKey].action || 'Collect'}
				</button>
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		font-family: Arial, sans-serif;
		max-width: 600px;
		margin: 0 auto;
	}

	button {
		margin: 5px 0;
		padding: 5px 10px;
		background-color: #3498db;
		color: white;
		border: none;
		cursor: pointer;
		border-radius: 5px;
	}

	button:hover {
		background-color: #2980b9;
	}
</style>
