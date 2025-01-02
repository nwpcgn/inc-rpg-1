import { writable, derived } from 'svelte/store'

export const el = writable()
export const game = derived(el, ($el, set) => {
	if (!$el) return
	const ro = new ResizeObserver(([entry]) => {
		set({
			width: entry.contentRect.width,
			height: entry.contentRect.height
		})
	})
	ro.observe($el)
	return () => ro.disconnect()
})

export default game
