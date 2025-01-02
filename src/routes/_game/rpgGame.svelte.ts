const rawData = {
	res: [
		{
			slug: 'wood',
			name: 'Wood',
			description: 'Brown stuff that grows on trees.',
			action: 'Chop',
			total: 0,
			clickIncrement: 1,
			autoIncrement: 0,
			max: 100,
			storage: {
				total: 1,
				max: 100,
				cost: { wood: 50, stone: 50, iron: 0, food: 0 },
				costIncrease: 1.1
			}
		},
		{
			slug: 'stone',
			name: 'Stone',
			description: 'Hard stuff.',
			action: 'Mine',
			total: 0,
			clickIncrement: 1,
			autoIncrement: 0,
			max: 100,
			storage: {
				total: 1,
				max: 100,
				cost: { wood: 50, stone: 50 },
				costIncrease: 1.1
			}
		},
		{
			slug: 'iron',
			name: 'Iron',
			description: 'Even harder stuff. Bit rusty.',
			action: 'Mine',
			total: 0,
			autoIncrement: 0,
			max: 100,
			storage: {
				total: 1,
				max: 100,
				cost: { wood: 100, stone: 100 },
				costIncrease: 1.1
			}
		},
		{
			slug: 'food',
			name: 'Food',
			description: 'Can be cooked to provide nutrition.',
			action: 'Hunt',
			total: 0,
			clickIncrement: 1,
			autoIncrement: 0,
			max: 100,
			storage: {
				total: 1,
				max: 100,
				cost: { wood: 50, stone: 50 },
				costIncrease: 1.1
			}
		}
	],
	bui: [
		{
			slug: 'tent',
			name: 'Tent',
			description: 'Just like a house but way smaller and made out of fabric.',
			total: 0,
			residents: 1,
			cost: { wood: 30, stone: 0, iron: 0 },
			costIncrease: 1.1
		},
		{
			slug: 'house',
			name: 'House',
			description:
				'Just like a tent but way bigger and not made out of fabric.',
			total: 0,
			residents: 4,
			cost: { wood: 75, stone: 50, iron: 10, food: 0 },
			costIncrease: 1.1
		},
		{
			slug: 'hostel',
			name: 'Hostel',
			description: 'A bit like a house but not as nice and not as private.',
			total: 0,
			residents: 10,
			cost: { wood: 200, stone: 30, iron: 30 },
			costIncrease: 1.1
		}
	],
	wor: [
		{
			slug: 'lumberjack',
			name: 'Lumberjack',
			description: 'A person who likes to chop wood.',
			resourcen: 'wood',
			total: 0,
			autoIncrement: 1,
			cost: { food: 10 },
			costIncrease: 1.1
		},
		{
			slug: 'miner',
			name: 'Miner',
			description: 'Not a young person.',
			resourcen: 'stone',
			total: 0,
			autoIncrement: 1,
			cost: { wood: 0, stone: 0, iron: 0, food: 10 },
			costIncrease: 1.1
		},
		{
			slug: 'scraper',
			name: 'Scraper',
			description: "Isn't it obvious?",
			resourcen: 'iron',
			total: 0,
			autoIncrement: 1,
			cost: { stone: 1, food: 10 },
			costIncrease: 1.2
		},
		{
			slug: 'hunter',
			name: 'Hunter',
			description: 'The opposite to a gatherer.',
			resourcen: 'food',
			total: 0,
			autoIncrement: 1,
			cost: { food: 10 },
			costIncrease: 1.1
		}
	]
}
import type { Resourcen, Storage, Building, Worker, Meta } from './types'
let resourcen: Resourcen = $state({})
let buildings: Building = $state({})
let worker: Worker = $state({})
let meta: Meta = $state({
	city: 'Gotham City',
	name: 'Bruce Wayne',
	population: 0,
	maxPopulation: 0,
	tick: 1000,
	saveGameInterval: 30000
})

class Resource {
	slug = $state('')
	name = $state('')
	description = $state('')
	action = $state('Action')
	total = $state(0)
	clickIncrement? = $state(1)
	autoIncrement? = $state(0)
	max = $state(100)
	storage: Storage = $state({})

	constructor(
		slug,
		name,
		description,
		action,
		total,
		clickIncrement,
		autoIncrement,
		max,
		storage
	) {
		this.slug = slug
		this.name = name
		this.description = description
		this.action = action
		this.total = total
		this.clickIncrement = clickIncrement
		this.autoIncrement = autoIncrement
		this.max = max
		this.storage = storage
	}
}

class Building {
	slug = $state('')
	name = $state('')
	description = $state('')
	total = $state(0)
	residents = $state(0)
	cost: Cost = $state({})
	costIncrease = $state(1.1)
	constructor(slug, name, description, total, residents, cost, costIncrease) {
		this.slug = slug
		this.name = name
		this.description = description
		this.total = total
		this.residents = residents
		this.cost = cost
		this.costIncrease = costIncrease
	}
}

class Worker {
	slug = $state('')
	name = $state('')
	description = $state('')
	resourcen = $state('')
	total = $state(0)
	autoIncrement = $state(0)
	cost: Cost = $state({})
	costIncrease = $state(0)
	constructor(
		slug,
		name,
		description,
		resourcen,
		total,
		autoIncrement,
		cost,
		costIncrease
	) {
		this.slug = slug
		this.name = name
		this.description = description
		this.resourcen = resourcen
		this.total = total
		this.autoIncrement = autoIncrement
		this.cost = cost
		this.costIncrease = costIncrease
	}
}

rawData.res.forEach(
	({
		slug,
		name,
		description,
		action,
		total,
		clickIncrement,
		autoIncrement,
		max,
		storage
	}) => {
		resourcen[slug] = new Resource(
			slug,
			name,
			description,
			action,
			total,
			clickIncrement,
			autoIncrement,
			max,
			storage
		)
	}
)

rawData.bui.forEach(
	({ slug, name, description, total, residents, cost, costIncrease }) => {
		buildings[slug] = new Building(
			slug,
			name,
			description,
			total,
			residents,
			cost,
			costIncrease
		)
	}
)

rawData.wor.forEach(
	({
		slug,
		name,
		description,
		resourcen,
		total,
		autoIncrement,
		cost,
		costIncrease
	}) => {
		worker[slug] = new Building(
			slug,
			name,
			description,
			resourcen,
			total,
			autoIncrement,
			cost,
			costIncrease
		)
	}
)

export { resourcen, buildings, worker, meta }
