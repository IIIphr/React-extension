# lazy

### `lazy(load)`

Call `lazy` outside your components to declare a lazy-loaded React component:

``` jsx
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```

### Parameters

* `load`: A function that returns a Promise or another thenable (a Promise-like object with a `then` method). React will not call `load` until the first time you attempt to render the returned component. After React first calls `load`, it will wait for it to resolve, and then render the resolved value’s `.default` as a React component. Both the returned Promise and the Promise’s resolved value will be cached, so React will not call `load` more than once. If the Promise rejects, React will `throw` the rejection reason for the nearest Error Boundary to handle.

### Returns

`lazy` returns a React component you can render in your tree. While the code for the lazy component is still loading, attempting to render it will suspend. Use `<Suspense>` to display a loading indicator while it’s loading.

***

### `load` function

### Parameters

`load` receives no parameters.

### Returns

You need to return a Promise or some other thenable (a Promise-like object with a `then` method). It needs to eventually resolve to an object whose `.default` property is a valid React component type, such as a function, `memo`, or a `forwardRef` component.