# \<Fragment> (<>...</>)

### `<Fragment>`

Wrap elements in `<Fragment>` to group them together in situations where you need a single element. Grouping elements in Fragment has no effect on the resulting DOM; it is the same as if the elements were not grouped. The empty JSX tag `<></>` is shorthand for `<Fragment></Fragment>` in most cases.

### Props

* optional `key`: Fragments declared with the explicit `<Fragment>` syntax may have keys.

### Caveats

* If you want to pass `key` to a Fragment, you can’t use the `<>...</>` syntax. You have to explicitly import `Fragment` from `'react'` and render `<Fragment key={yourKey}>...</Fragment>`.

* React does not reset state when you go from rendering `<><Child /></>` to `[<Child />]` or back, or when you go from rendering `<><Child /></>` to `<Child />` and back. This only works a single level deep: for example, going from `<><><Child /></></>` to `<Child />` resets the state.
