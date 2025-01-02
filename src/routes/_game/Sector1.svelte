<script lang="ts">
	import { resourcen, buildings, worker, meta } from './rpg-game.svelte.ts'
	import gameNav from './rpg-nav.json'
</script>

<div class="content">
	<nav class="divide-y divide-slate-100">
		<div class="px-4 py-3 text-4xl font-bold text-slate-700">
			<span>Resourcen</span>
		</div>
		{#each Object.values(resourcen) as { slug, name, description, action, total, clickIncrement, autoIncrement, max, storage } (slug)}
			<div class="flex items-start gap-4 px-4 py-3">
				<div class="flex items-center text-emerald-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
						aria-label="Dashboard icon"
						role="graphics-symbol">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
					</svg>
				</div>
				<div
					class="flex w-full min-w-0 flex-col items-start justify-center gap-0">
					<h4 class="text-base text-slate-700">{name}</h4>
					<p class="w-full truncate text-sm text-slate-500">
						{description}
					</p>
				</div>
				<div class="flex items-center gap-2">
					<span>{total}</span>

					<span class="text-xs">/{max}</span>
				</div>
			</div>
		{/each}
		<div></div>
	</nav>
</div>
