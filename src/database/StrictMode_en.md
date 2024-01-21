# \<StrictMode>

### `<StrictMode>`

Use `StrictMode` to enable additional development behaviors and warnings for the component tree inside:

``` js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Strict Mode enables the following development-only behaviors:

* Your components will re-render an extra time to find bugs caused by impure rendering.

* Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.

* Your components will be checked for usage of deprecated APIs.

### Props

`StrictMode` accepts no props.

### Caveats

* There is no way to opt out of Strict Mode inside a tree wrapped in `<StrictMode>`. This gives you confidence that all components inside `<StrictMode>` are checked. If two teams working on a product disagree whether they find the checks valuable, they need to either reach consensus or move `<StrictMode>` down in the tree.
