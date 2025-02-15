enum 阳干 {
  甲 = '甲',
  丙 = '丙',
  戊 = '戊',
  庚 = '庚',
  壬 = '壬',
}

enum 阴干 {
  乙 = '乙',
  丁 = '丁',
  己 = '己',
  辛 = '辛',
  癸 = '癸',
}

enum 阳支 {
  子 = '子',
  辰 = '辰',
  寅 = '寅',
  午 = '午',
  戌 = '戌',
  申 = '申',
}

enum 阴支 {
  丑 = '丑',
  卯 = '卯',
  巳 = '巳',
  未 = '未',
  酉 = '酉',
  亥 = '亥',
}

const 天干 = { ...阳干, ...阴干 } as const
type 天干 = keyof typeof 天干
const 地支 = { ...阳支, ...阴支 } as const
type 地支 = keyof typeof 地支

export type 干支 = `${阳干}${阳支}` | `${阴干}${阴支}`

enum 天干序数映射 {
  甲 = 1,
  乙 = 2,
  丙 = 3,
  丁 = 4,
  戊 = 5,
  己 = 6,
  庚 = 7,
  辛 = 8,
  壬 = 9,
  癸 = 10,
}

enum 地支序数映射 {
  子 = 1,
  丑 = 2,
  寅 = 3,
  卯 = 4,
  辰 = 5,
  巳 = 6,
  午 = 7,
  未 = 8,
  申 = 9,
  酉 = 10,
  戌 = 11,
  亥 = 12,
}

const 一至六十序数 = Array.from({ length: 60 }, (_, i) => i + 1)
const 干支排列表 = 一至六十序数.map((i) => `${天干序数映射[i % 10 || 10]}${地支序数映射[i % 12 || 12]}` as 干支)

/**
 *
 * @param 年偏移 任意整数
 * @param 基准年干支 公元1年为基准年 此年为辛酉年
 * @returns
 */
export const 求年干支 = (年偏移: number, 基准年干支: 干支 = '辛酉'): 干支 => {
  const 基准年偏移 = 干支排列表.indexOf(基准年干支)
  const 目标年偏移 = (年偏移 + 基准年偏移) % 60
  return 干支排列表[目标年偏移]
}

/**
 *
 * @param 月偏移 1-12月份序数分别对应 0-11的偏移
 * @param 年干
 * @returns
 */
export const 求月干支 = (月偏移: number, 年干: 天干): 干支 => {
  const 年干偏移 = 天干序数映射[年干] - 1
  /** 以丙寅作为开始 */
  const 基准月偏移 = 干支排列表.indexOf('丙寅')
  const 目标月偏移 = (年干偏移 * 12 + 月偏移 + 基准月偏移) % 60
  return 干支排列表[目标月偏移]
}

/**
 *
 * @param 日偏移 任意整数
 * @param 基准日干支 默认以甲子作为基准
 * @returns
 */
export const 求日干支 = (日偏移: number, 基准日干支: 干支 = '甲子'): 干支 => {
  const 基准日偏移 = 干支排列表.indexOf(基准日干支)
  const 目标日偏移 = (日偏移 + 基准日偏移) % 60
  return 干支排列表[目标日偏移]
}

/**
 * @param 时偏移 相对于前一日子时的偏移量 范围 0-23
 * @param 当日的日干
 */
export const 求时干支 = (时偏移: number, 日干: 天干): 干支 => {
  const 日干偏移 = 天干序数映射[日干] - 1
  /** 以甲子作为开始 */
  const 基础时偏移 = 干支排列表.indexOf('甲子')
  const 目标时偏移 = (日干偏移 * 12 + 时偏移 + 基础时偏移) % 60
  return 干支排列表[目标时偏移]
}
