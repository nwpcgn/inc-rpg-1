export interface Building {
	slug: string
	name: string
	description: string
	total: number
	residents: number
	cost: Cost
	costIncrease: number
}

export interface Cost {
	wood?: number
	stone?: number
	iron?: number
	food?: number
}

export interface Meta {
	city: string
	name: string
	population: number
	maxPopulation: number
	tick: number
	saveGameInterval: number
}

export interface Resourcen {
	slug: string
	name: string
	description: string
	action: string
	total: number
	clickIncrement?: number
	autoIncrement: number
	max: number
	storage: Storage
	chanceIncrement?: number
}

export interface Storage {
	total: number
	max: number
	cost: Cost
	costIncrease: number
}

export interface Worker {
	slug: string
	name: string
	description: string
	resourcen: string
	total: number
	autoIncrement: number
	cost: Cost
	costIncrease: number
}
export interface Meta {
	city: string
	name: string
	population: number
	maxPopulation: number
	tick: number
	saveGameInterval: number
}

// export {Resourcen,Storage,Building,Worker,Cost}
