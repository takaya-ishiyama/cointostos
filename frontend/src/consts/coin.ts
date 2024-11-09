

export const frontAndBack = {
  front: '表',
  back: '裏'
} as const

export type FrontAndBack = typeof frontAndBack[keyof typeof frontAndBack]
