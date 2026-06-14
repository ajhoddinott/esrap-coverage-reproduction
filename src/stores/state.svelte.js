const files = import.meta.glob('../../package.json')

let state = $state(null)

export function read () {
  return state?.name || 'empty'
}

export async function load () {
  const loaded = await files['../../package.json']()
  state = loaded.default
}
