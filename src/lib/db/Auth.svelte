<script lang="ts">
	import Anmeldung from './Anmeldung.svelte'

	import supabase from './supabase'
	import _user from './_user'
	import SignIn from './auth/SignIn.svelte'
	let { children } = $props()
	supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_IN') {
			_user.set(session.user)
		} else {
			_user.set(null)
		}
	})

	const init = async () => {
		try {
			const {
				data: { user }
			} = await supabase.auth.getUser()
			if (user) {
				_user.set(user)
			}
		} catch (error) {
			console.log({ error })
		}
	}
</script>

{#await init()}
	<section class="layer nwp center">
		<article class="p-4">
			<span class="loading loading-spinner loading-lg"></span>
		</article>
	</section>
{:then _}
	{#if $_user}
		{@render children()}
	{:else}
		<SignIn></SignIn>
	{/if}
{/await}
