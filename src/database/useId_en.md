# useId

### `useId()`

Call `useId` at the top level of your component to generate a unique ID:

``` js
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  // ...
```

### Parameters

`useId` does not take any parameters.

### Returns

`useId` returns a unique ID string associated with this particular `useId` call in this particular component.

### Caveats

* `useId` is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.

* `useId` should not be used to generate keys in a list. Keys should be generated from your data.
