### useState(initialState)

Call useState at the top level of your component to declare a state variable.

::: rtl
این تابع را برای تعریف یک متغیر حالت (state variable) در بالاترین لایه‌ی کامپوننت (component) خود صدا بزنید.
:::
	
	import { useState } from 'react';
	function MyComponent() {
		const [age, setAge] = useState(28);
		const [name, setName] = useState('Taylor');
		const [todos, setTodos] = useState(() => createTodos());
		// ...

The convention is to name state variables like [something, setSomething] using array destructuring.

::: rtl
بهتر است متغیر حالت خود را با استفاده از جداسازی آرایه‌ای (array deconstructing) به شکل [name, setname] نامگذاری کنید.
:::

See more examples below.

::: rtl
مثال‌های بیشتری در ادامه خواهیم آورد.
:::

### Parameters

::: rtl
### پارامترها
:::

initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.

::: rtl
initialState: مقداری که می‌خواهید متغیر حالت شما در ابتدا داشته باشد. این مقدار می‌تواند از هر جنسی باشد، ولی در صورت استفاده از توابع، رفتار خاصی انجام خواهد شد. به این آرگومان بعد از نمایش (render) اولیه توجهی نخواهد شد.
:::

If you pass a function as initialState, it will be treated as an initializer function. It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state. See an example below.

::: rtl
اگر به جای این پارامتر یک تابع قرار دهید، با این تابع به عنوان یک تابع مقدار دهی اولیه (initializer function) رفتار خواهد شد. این تابع باید مطلق (pure) باشد، هیچ آرگومانی نگیرد و باید یک مقدار (از هر نوعی) برگردارند. ری‌اکت تابع مقدار دهی اولیه‌ی شما را زمانی که کامپوننت را برای اولین بار راه اندازی می‌کند (initializing) فراخوانی می‌کند، و مقدار خروجی آن را به عنوان وضعیت اولیه نگهداری می‌کند. یک مثال از پایین مشاهده کنید.
:::

### Returns 

::: rtl
### خروجی تابع
:::

useState returns an array with exactly two values:

:::rtl
useState یک آرایه با دقیقا دو عضو برمی‌گرداند:
:::

The current state. During the first render, it will match the initialState you have passed.

::: rtl
وضعیت فعلی. در نمایش اولیه، این مقدار برابر است با initialState ای که شما به آن تحویل (pass) داده اید.
:::

The set function that lets you update the state to a different value and trigger a re-render.

::: rtl
تابع مقدار دهی‌ای (set function) که به شما امکان به روز رسانی متغیر وضعیت را خواهد داد، و باعث یک بازنمایش (re-render) خواهد شد.
:::