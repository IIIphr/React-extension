# useDebugValue

### `useDebugValue(value, format?)`

Call `useDebugValue` at the top level of your custom Hook to display a readable debug value:

``` jsx
import { useDebugValue } from 'react';

function useOnlineStatus() {
  // ...
  useDebugValue(isOnline ? 'Online' : 'Offline');
  // ...
}
```

### Parameters

* `value`: The value you want to display in React DevTools. It can have any type.

* optional `format`: A formatting function. When the component is inspected, React DevTools will call the formatting function with the `value` as the argument, and then display the returned formatted value (which may have any type). If you don’t specify the formatting function, the original `value` itself will be displayed.

### Returns

`useDebugValue` does not return anything.