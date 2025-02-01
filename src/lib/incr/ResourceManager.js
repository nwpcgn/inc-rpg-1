export default class ResourceManager {
	// Reaktiver Zustand mit $state

	resources = $state({})

	constructor(initialResources) {
		this.resources = initialResources
	}

	click(resourceKey) {
		const resource = this.$state.resources[resourceKey]
		if (!resource) {
			console.error(`Resource "${resourceKey}" not found.`)
			return
		}

		if (resource.total + resource.clickInc <= resource.max) {
			resource.total += resource.clickInc
		} else {
			console.log(`${resource.name} has reached its maximum capacity.`)
		}
	}

	getResourceTotal(resourceKey) {
		const resource = this.$state.resources[resourceKey]
		if (!resource) {
			console.error(`Resource "${resourceKey}" not found.`)
			return null
		}
		return resource.total
	}
}
