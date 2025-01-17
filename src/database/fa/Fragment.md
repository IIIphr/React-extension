# \<Fragment> (<>...</>)

### `<Fragment>`

::: rtl
اگر در شرایطی نیاز به تنها یک المنت (element) دارید، المنت‌های خود را در `<Fragment>` بپیچانید (wrap) تا آن‌ها را با یکدیگر در یک گروه قرار دهید. قرار دادن المنت‌ها در یک گروه با استفاده از فرگمنت (Fragment) تأثیری روی DOM نهایی نخواهد داشت و دقیقا مانند حالتی است که المنت‌ها در یک گروه قرار نگرفته بودند. تگ خالی JSX (`<></>`) در اکثر مواقع کوتاه شده‌ی `<Fragment></Fragment>` است.

### ویژگی‌ها

* اختیاری `key: کلید`: فرگمنت‌هایی که با نوشتار صریح `<Fragment>` تعریف شده اند می‌توانند کلید داشته باشند.

### هشدارها

* اگر می‌خواهید `کلید` (`key`) به یک فرگمنت تحویل بدهید (pass)، نمی‌توانید از نوشتار `<>...</>` استفاده کنید. باید صریحا `Fragment` را از `'react'` وارد (import) کنید و `<Fragment key={yourKey}>...</Fragment>` را نمایش  دهید (render).

* ری‌اکت وضعیت (state) را هنگامی که گروه بندی المنت‌ها از `<><Child /></>` به `[<Child />]` و از `<><Child /></>` به `<Child />` (و برعکس هر دو مورد) تغییر می‌کند، بازنشانی (reset) نخواهد کرد. البته این مورد صرفا تا یک درجه از عمق صادق است. به عنوان مثال، تغییر گروه بندی از `<><><Child /></></>` به `<Child />` وضعیت را بازنشانی خواهد کرد.
:::
