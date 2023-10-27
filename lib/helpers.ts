import { eFilterOperator } from '@/types/search'

type FilterOperator =
  | 'eq'
  | 'neq'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'like'
  | 'ilike'
  | 'is'
  | 'not.is'
  | 'in'
  | 'cs'
  | 'cd'
  | 'sl'
  | 'sr'
  | 'nxl'
  | 'nxr'
  | 'adj'
  | 'ov'
  | 'fts'
  | 'plfts'
  | 'phfts'
  | 'wfts'

export function getEqOperator(op: eFilterOperator): FilterOperator {
  switch (op) {
    case eFilterOperator.BeginsWith:
      return 'not.is'
    case eFilterOperator.Contains:
      return 'like'

    case eFilterOperator.EqualsTo:
      return 'eq'
    case eFilterOperator.EqualsToList:
      return 'in'

    case eFilterOperator.GreaterThanOrEquals:
      return 'gte'
    case eFilterOperator.GreaterThan:
      return 'gt'
    case eFilterOperator.LessThan:
      return 'lt'
    case eFilterOperator.LessThanOrEquals:
      return 'lte'

    default:
      return 'eq'
  }
}

export function formatBytes(a: any, b = 2) {
  if (!+a) return '0 Bytes'
  const c = 0 > b ? 0 : b,
    d = Math.floor(Math.log(a) / Math.log(1024))
  return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'][d]}`
}
