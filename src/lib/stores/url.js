import { derived, writable } from 'svelte/store'

function urlStore(ssrUrl) {
	if (typeof window === 'undefined') {
		return writable(new URL(ssrUrl))
	}

	const href = writable(window.location.href)

	const originalPushState = history.pushState
	const originalReplaceState = history.replaceState

	const updateHref = () => href.set(window.location.href)

	history.pushState = function () {
		originalPushState.apply(this, arguments)
		updateHref()
	}

	history.replaceState = function () {
		originalReplaceState.apply(this, arguments)
		updateHref()
	}

	window.addEventListener('popstate', updateHref)
	window.addEventListener('hashchange', updateHref)

	return derived(href, ($href) => new URL($href))
}

export default urlStore()

function setUrl(newUrl) {
	if (!newUrl) return
	history.pushState({}, '', newUrl)
}

function setHash(newHash = '') {
	if (!newHash) return
	window.location.hash = newHash
}
function changeUrl(str) {
	if (!str) return
	window.location.href = str
}

export { setUrl, setHash, changeUrl }
/* 

<script>
  import urlStore from './path/to/store';
</script>

<p>Aktuelle URL: {@urlStore.href}</p>
<p>Pfad: {@urlStore.pathname}</p>




*/

/* 

<script>
  import urlStore from './path/to/store';
</script>

{#if @urlStore.pathname === '/home'}
  <p>Willkommen auf der Startseite!</p>
{/if}



*/
