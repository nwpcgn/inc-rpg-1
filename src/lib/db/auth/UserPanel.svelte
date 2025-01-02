<script>
	import { fade, fly } from 'svelte/transition'
	import { _user, signIn, signOut } from '../'
	import { sleep } from '../../'
	let email = $state('')
	let password = $state('')

	const submitForm = async (e) => {
		e.preventDefault()
		const data = await signIn({ email, password })
		if (data) {
			console.log({ login: data })
			return data
		}
	}
</script>

{#key $_user}
	{#await sleep(400) then _}
		{#if !$_user}
			<section
				class="layer nwp middle"
				transition:fly={{ y: 200, duration: 2000 }}>
				<article
					class="content"
					style="--page-width: 420px;"
					transition:fade={{ duration: 400 }}>
					<div class="rounded-box bg-base-100 w-full shadow-xl">
						<form onsubmit={submitForm} class="flex flex-col gap-4 p-8">
							<h2 class="text-center text-xl font-extrabold">Anmelden</h2>
							<input
								type="email"
								bind:value={email}
								required
								placeholder="email"
								class="input input-bordered" />
							<input
								type="password"
								bind:value={password}
								required
								placeholder="password"
								class="input input-bordered" />
							<button type="submit" class="btn btn-neutral">Anmelden</button>
						</form>
					</div>
				</article>
			</section>
		{:else}
			<section
				class="layer nwp middle"
				transition:fly={{ y: 200, duration: 2000 }}>
				<article class="content" style="--page-width: 460px;">
					<div class="rounded-box bg-base-100 w-full shadow-xl">
						<div class="flex flex-col gap-4 p-8">
							<h2 class="text-center text-xl font-extrabold">User Panel</h2>
							<input
								type="text"
								value={$_user.email}
								readonly
								class="input input-bordered" />
							<input
								type="text"
								value={$_user.id}
								readonly
								class="input input-bordered" />
							<button onclick={signOut} class="btn btn-neutral">Logout</button>
						</div>
					</div>
				</article>
			</section>
		{/if}
	{/await}
{/key}
