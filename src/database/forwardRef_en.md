# forwardRef

### `forwardRef(render)`

Call `forwardRef()` to let your component receive a ref and forward it to a child component:

``` jsx
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  // ...
});
```

### Parameters

* `render`: The render function for your component. React calls this function with the props and `ref` that your component received from its parent. The JSX you return will be the output of your component.

### Returns

`forwardRef` returns a React component that you can render in JSX. Unlike React components defined as plain functions, a component returned by `forwardRef` is also able to receive a `ref` prop.

### Caveats

* In Strict Mode, React will call your render function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your render function is pure (as it should be), this should not affect the logic of your component. The result from one of the calls will be ignored.

***

### `render` function

`forwardRef` accepts a render function as an argument. React calls this function with props and `ref`:

``` jsx
const MyInput = forwardRef(function MyInput(props, ref) {
  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  );
});
```

### Parameters

* `props`: The props passed by the parent component.

* `ref`:  The `ref` attribute passed by the parent component. The `ref` can be an object or a function. If the parent component has not passed a ref, it will be `null`. You should either pass the `ref` you receive to another component, or pass it to `useImperativeHandle`.

### Returns

`forwardRef` returns a React component that you can render in JSX. Unlike React components defined as plain functions, the component returned by `forwardRef` is able to take a `ref` prop.