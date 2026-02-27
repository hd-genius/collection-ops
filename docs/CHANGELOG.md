# 0.5.0
- changed the flat operation to flatten
- changed the drop operation to skip
- changed the take operation to limit
- added a function to produce a reusable iterable from a factory function
- added a skipWhile operator
- renamed combineOperators to chain
- renamed sideEffect to effect

# 0.6.0
- changed the results of operations from single run generators to custom iterables that can be repeated
- removed the sum aggregator