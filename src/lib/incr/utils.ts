import { gameState } from './gameState.svelte'

export function tick() {
	Object.values(gameState.resources).forEach(autoIncrementResource)
	Object.values(gameState.workers).forEach((worker) => {
		if (worker.chance) {
			increaseChanceResourcesFromWorker(worker)
		}
	})
}

export function autoIncrementResource(resource) {
	if (resource.autoIncrement > 0) {
		increaseResourceTotal(resource, resource.autoIncrement)
	}
}

export function increaseResourceTotal(resource, amount) {
	const newValue = resource.total + amount

	if (resource.cost) {
		const canAfford = Object.entries(resource.cost).every(([resSlug, cost]) => {
			const res = gameState.resources[resSlug]
			return res.total >= cost
		})

		if (!canAfford) return false

		Object.entries(resource.cost).forEach(([resSlug, cost]) => {
			gameState.resources[resSlug].total -= cost
		})
	}

	if (newValue < resource.max) {
		resource.total += amount
		increaseChanceResources(resource, amount)
		return true
	} else {
		resource.total = resource.max
		return false
	}
}

export function increaseChanceResources(resource, amount) {
	if (resource.chance) {
		Object.entries(resource.chance).forEach(([resSlug, chance]) => {
			for (let i = 0; i < amount; i++) {
				if (Math.random() * 100 <= chance) {
					const chanceRes = gameState.resources[resSlug]
					increaseResourceTotal(chanceRes, chanceRes.chanceIncrement)
				}
			}
		})
	}
}

export function increaseChanceResourcesFromWorker(worker) {
	if (worker.chance) {
		Object.entries(worker.chance).forEach(([resSlug, chance]) => {
			const resource = gameState.resources[resSlug]
			for (let i = 0; i < resource.chanceIncrement; i++) {
				for (let j = 0; j < worker.total; j++) {
					if (Math.random() * 100 <= chance) {
						increaseResourceTotal(resource, resource.chanceIncrement)
					}
				}
			}
		})
	}
}

export function addStorage(resource) {
	const canAfford = Object.entries(resource.storage.cost).every(
		([resSlug, cost]) => {
			const res = gameState.resources[resSlug]
			return res.total >= cost
		}
	)

	if (canAfford) {
		Object.entries(resource.storage.cost).forEach(([resSlug, cost]) => {
			gameState.resources[resSlug].total -= cost
		})
		resource.max += resource.storage.max
		resource.storage.total++
		Object.keys(resource.storage.cost).forEach((resSlug) => {
			resource.storage.cost[resSlug] = Math.floor(
				resource.storage.cost[resSlug] * resource.storage.costIncrease
			)
		})
	}
}

export function buyBuilding(building) {
	const canAfford = Object.entries(building.cost).every(([resSlug, cost]) => {
		const res = gameState.resources[resSlug]
		return res.total >= cost
	})

	if (canAfford) {
		Object.entries(building.cost).forEach(([resSlug, cost]) => {
			gameState.resources[resSlug].total -= cost
		})

		building.total++
		Object.keys(building.cost).forEach((resSlug) => {
			building.cost[resSlug] = Math.floor(
				building.cost[resSlug] * building.costIncrease
			)
		})

		gameState.meta.maxPopulation += building.residents
	}
}

export function buyWorker(worker) {
	if (gameState.meta.population >= gameState.meta.maxPopulation) return

	const canAfford = Object.entries(worker.cost).every(([resSlug, cost]) => {
		const res = gameState.resources[resSlug]
		return res.total >= cost
	})

	if (canAfford) {
		Object.entries(worker.cost).forEach(([resSlug, cost]) => {
			gameState.resources[resSlug].total -= cost
		})

		worker.total++
		Object.keys(worker.cost).forEach((resSlug) => {
			worker.cost[resSlug] = Math.floor(
				worker.cost[resSlug] * worker.costIncrease
			)
		})

		gameState.resources[worker.resource].autoIncrement += worker.autoIncrement
		gameState.meta.population++
	}
}

export function saveGame() {
	localStorage.setItem('gameState', JSON.stringify(gameState))
}

export function loadGame() {
	const savedState = localStorage.getItem('gameState')
	if (savedState) {
		const loadedState = JSON.parse(savedState)
		Object.assign(gameState, loadedState)
	}
}
