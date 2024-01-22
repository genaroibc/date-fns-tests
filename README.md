# format-tests

Install the dependencies:

```bash
yarn install
```

Run the tests:

```bash
yarn test
```

## Testing both implementations

Change imports in the tests files to test the `date-fns` implementation. Tests are re-run automatically.

> formatDistance.test.ts
```diff
- import { formatDistance } from "./formatDistance"
+ import { formatDistance } from "date-fns"
```

> formatTransactionHistoryDate.test.ts
```diff
- import { formatTransactionHistoryDate } from "./formatTransactionHistoryDate"
+ import { formatTransactionHistoryDateFns as formatTransactionHistoryDate } from "./formatTransactionHistoryDate"
```
