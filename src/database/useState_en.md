# useState

### useState(initialState)

Call useState at the top level of your component to declare a state variable.

``` js
import { useState } from 'react';
function MyComponent() {
	const [age, setAge] = useState(28);
	const [name, setName] = useState('Taylor');
	const [todos, setTodos] = useState(() => createTodos());
	// ...
```

The convention is to name state variables like [something, setSomething] using array destructuring.

See more examples below.

### Parameters

initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.

If you pass a function as initialState, it will be treated as an initializer function. It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state. See an example below.

### Returns 

useState returns an array with exactly two values:

The current state. During the first render, it will match the initialState you have passed.

The set function that lets you update the state to a different value and trigger a re-render.