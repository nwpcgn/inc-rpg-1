<script>
	import { _user, signIn } from './'

	let items = $state([
		{ label: 'Email', value: 1, icon: 'tab-mail' },
		{ label: 'Password', value: 2, icon: 'tab-key' },
		{ label: 'Process', value: 3, icon: 'tab-process' }
	])
	let current = $state(1)
	let email = $state('')
	let password = $state('')
	const submitForm = async () => {
		const data = await signIn({ email, password })
		if (data) {
			console.log({ login: data })
			return data
		}
	}
</script>

<svg
	width="0"
	height="0"
	fill="none"
	style="visibility: hidden; position: absolute;"
	aria-hidden="true">
	<symbol
		id="arrow-left"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor">
		<path fill="none" d="M0 0h24v24H0z"></path>
		<path
			d="M8.3685 12L13.1162 3.03212L14.8838 3.9679L10.6315 12L14.8838 20.0321L13.1162 20.9679L8.3685 12Z"
		></path>
	</symbol>
	<symbol
		id="arrow-right"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor">
		<path fill="none" d="M0 0h24v24H0z"></path>
		<path
			d="M15.6315 12L10.8838 3.03212L9.11622 3.9679L13.3685 12L9.11622 20.0321L10.8838 20.9679L15.6315 12Z"
		></path>
	</symbol>
	<symbol
		id="tab-key"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor">
		<path fill="none" d="M0 0h24v24H0z"></path>
		<path
			d="M17 14H12.6586C11.8349 16.3304 9.61244 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.61244 6 11.8349 7.66962 12.6586 10H23V14H21V18H17V14ZM7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z"
		></path>
	</symbol>
	<symbol
		id="tab-mail"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor">
		<path fill="none" d="M0 0h24v24H0z"></path>
		<path
			d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"
		></path>
	</symbol>
	<symbol
		id="tab-process"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor">
		<path fill="none" d="M0 0h24v24H0z"></path>
		<path
			d="M10 11H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V13H10V16L15 12L10 8V11Z"
		></path>
	</symbol>
</svg>

{#snippet iconEl(name)}
	<svg class="nwp-icon">
		<use xlink:href="#{name}"></use>
	</svg>
{/snippet}

<section class="layer center nwp">
	<div
		class="rounded-box flex aspect-square h-96 w-96 flex-col gap-2 overflow-hidden shadow-xl">
		<ul class="steps">
			{#each items as { label, value, icon }}
				<li class="step" class:step-info={current >= value}>
					<span>{label}</span>
				</li>
			{/each}
		</ul>
		<hr class="my-2" />
		<div class="relative flex-1 overflow-hidden">
			<selection
				class="layer nwp left flex flex-col justify-between p-4"
				class:active={current == 1}>
				<h1 class="text-center text-2xl">Email</h1>
				<div class="input input-bordered flex items-center gap-2">
					{@render iconEl('tab-mail')}
					<input
						type="email"
						bind:value={email}
						placeholder="Email"
						class="grow" />
				</div>
				<div class="flex justify-between">
					<span></span>
					<button
						class="btn btn-info"
						onclick={() => {
							current = 2
						}}
						disabled={!email || email.length <= 2}>
						<span>Next</span>
						<svg class="nwp-icon">
							<use xlink:href="#arrow-right"></use>
						</svg>
					</button>
				</div>
			</selection>
			<selection
				class="layer nwp flex flex-col justify-between p-4 {current > 1
					? 'left'
					: 'right'}"
				class:active={current == 2}>
				<h1 class="text-center text-2xl">Password</h1>
				<div class="input input-bordered flex items-center gap-2">
					{@render iconEl('tab-key')}
					<input
						type="password"
						bind:value={password}
						placeholder="***"
						class="grow"
						required />
				</div>
				<div class="flex justify-between">
					<button
						class="btn"
						onclick={() => {
							current = 1
						}}>
						<svg class="nwp-icon">
							<use xlink:href="#arrow-left"></use>
						</svg> <span class="sr-only">Rev</span>
					</button>
					<button
						class="btn btn-info"
						onclick={() => {
							current = 3
						}}
						disabled={!password}>
						<span class="">Next</span>
						<svg class="nwp-icon">
							<use xlink:href="#arrow-right"></use>
						</svg>
					</button>
				</div>
			</selection>
			<selection
				class="layer nwp right flex flex-col justify-between p-4"
				class:active={current == 3}>
				<h1 class="text-center text-2xl">Siign In</h1>
				<div class="flex justify-center" style="--fs: 6rem;">
					{@render iconEl('tab-process')}
				</div>
				<div class="flex justify-between">
					<button
						class="btn"
						onclick={() => {
							current = 1
						}}>
						<svg class="nwp-icon">
							<use xlink:href="#arrow-left"></use>
						</svg> <span class="sr-only">Rev</span>
					</button>
					<button
						class="btn btn-info"
						onclick={submitForm}
						disabled={!password}>
						<span>Login</span>
						<svg class="nwp-icon">
							<use xlink:href="#arrow-right"></use>
						</svg>
					</button>
				</div>
			</selection>
		</div>
	</div>
</section>
