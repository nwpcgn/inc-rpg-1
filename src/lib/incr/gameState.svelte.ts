export const gameState = $state({
	meta: {
		devmode: false,
		versionNumber: 'alpha 0.10.2',
		fps: 100,
		tick: 1000,
		saveGameInterval: 30000,
		maxPopulation: 0,
		population: 0
	},
	resources: {
		wood: {
			slug: 'wood',
			name: 'Wood',
			description: 'Brown stuff that grows on trees.',
			action: 'Chop',
			total: 0,
			clickIncrement: 1,
			autoIncrement: 0,
			chanceIncrement: 1,
			max: 100,
			storage: {
				total: 1,
				max: 100,
				cost: {
					wood: 50,
					stone: 50
				},
				costIncrease: 1.1
			}
		},
		stone: {
			slug: 'stone',
			name: 'Stone',
			description: 'Hard stuff.',
			action: 'Mine',
			total: 0,
			clickIncrement: 1,
			autoIncrement: 0,
			chanceIncrement: 1,
			max: 100,
			storage: {
				total: 1,
				max: 100,
				cost: {
					wood: 50,
					stone: 50
				},
				costIncrease: 1.1
			},
			chance: {
				iron: 30,
				silver: 10,
				gold: 5
			}
		}
		// ... other resources here
	},
	workers: {
		lumberjack: {
			slug: 'lumberjack',
			name: 'Lumberjack',
			description: 'A person who likes to chop wood.',
			resource: 'wood',
			total: 0,
			autoIncrement: 1,
			cost: {
				meat: 10
			},
			costIncrease: 1.1
		},
		miner: {
			slug: 'miner',
			name: 'Miner',
			description: 'Not a young person.',
			resource: 'stone',
			total: 0,
			autoIncrement: 1,
			cost: {
				meat: 10
			},
			costIncrease: 1.1
		}
		// ... other workers here
	},
	buildings: {
		tent: {
			slug: 'tent',
			name: 'Tent',
			description: 'Just like a house but way smaller and made out of fabric.',
			total: 0,
			residents: 1,
			cost: {
				wood: 30
			},
			costIncrease: 1.1
		},
		house: {
			slug: 'house',
			name: 'House',
			description:
				'Just like a tent but way bigger and not made out of fabric.',
			total: 0,
			residents: 4,
			cost: {
				wood: 75,
				stone: 10,
				iron: 10,
				brick: 50
			},
			costIncrease: 1.1
		}
		// ... other buildings here
	}
})

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
