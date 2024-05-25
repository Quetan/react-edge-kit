# Features layer

**`Features`** — user interactions, actions that bring business value to the user. (e.g. SendComment, AddToCart, UsersSearch).

> **`Features`** (фичи) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя. (например, SendComment, AddToCart, UsersSearch).

Then there are slices, which partition the code by business domain. This makes your codebase easy to navigate by keeping logically related modules close together. Slices cannot use other slices on the same layer, and that helps with high cohesion and low coupling.

> Затем есть слайсы, разделяющие код по предметной области. Они группируют логически связанные модули, что облегчает навигацию по кодовой базе. Слайсы не могут использовать другие слайсы на том же слое, что обеспечивает высокий уровень связности (cohesion) при низком уровне зацепления (coupling).

Each slice, in turn, consists of segments. These are tiny modules that are meant to help with separating code within a slice by its technical purpose. The most common segments are ui, model (store, actions), api and lib (utils/hooks), but you can omit some or add more, as you see fit.

> В свою очередь, каждый слайс состоит из сегментов. Это маленькие модули, главная задача которых — разделить код внутри слайса по техническому назначению. Самые распространенные сегменты — ui, model (store, actions), api и lib (utils/hooks), но в вашем слайсе может не быть каких-то сегментов, могут быть другие, по вашему усмотрению.
