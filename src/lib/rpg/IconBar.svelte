<script lang="ts">
	let { menu = [], current, layer = false, secondary = false } = $props()
</script>

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}
{#snippet icon2T(name)}
	<svg width="80" height="80" viewBox="0 0 100 100"
		><use xlink:href="#{name}"></use></svg>
{/snippet}
{#snippet menuT()}
	<nav class="grid divide-y divide-slate-100 border-b border-slate-100" class:h-full={secondary}>
		{#each menu as { name, href, icon, image }}
			{#if secondary}
				<a
					{href}
					class="grid place-content-center transition-colors duration-200 delay-100 ease-in relative overflow-hidden"
					class:bg-blue-500={current === href}>
					<span class="sr-only">{name}</span>
					{@render icon2T(image)}
				</a>
			{:else}
				<a
					{href}
					class="flex items-center gap-4 px-4 py-3 transition-colors duration-300 ease-in relative overflow-hidden"
					class:bg-slate-200={current === href}>
					<span class="text-emerald-500">{@render iconT(icon)}</span>
					<span class="font-medium">{name}</span>
				</a>
			{/if}
		{/each}
	</nav>
{/snippet}

{#if layer}
	<section class="layer nwp">{@render menuT()}</section>
{:else}
	{@render menuT()}
{/if}
