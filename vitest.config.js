import { svelte } from '@sveltejs/vite-plugin-svelte'

export default {
  plugins: [svelte()],
  test: {
    include: ['tests/*.spec.js'],
    coverage: {
      include: ['src/stores/state.svelte.js']
    }
  }
}
