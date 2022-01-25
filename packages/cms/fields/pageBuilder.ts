import { ArrayField } from '../types'

export const pageBuilder = (): ArrayField => {
  return {
    name: 'pageBuilder',
    type: 'array',
    title: 'Page builder',
    of: [{ type: 'hero' }],
  }
}
