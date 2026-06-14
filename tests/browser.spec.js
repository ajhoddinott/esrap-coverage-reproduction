// @vitest-environment jsdom
import { expect, test } from 'vitest'
import { read } from '../src/stores/state.svelte.js'

test('reads the default', () => {
  expect(read()).toBe('empty')
})
