import { expect, test } from 'vitest'
import { load, read } from '../src/stores/state.svelte.js'

test('loads', async () => {
  expect(read()).toBe('empty')
  await load()
  expect(read()).toBe('esrap-coverage-reproduction')
})
