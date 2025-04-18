import dayjs from 'dayjs'
import { 求年干支, 求日干支, 求月干支, 求时干支 } from 'src/constant/ganzhi'
import type { 天干 } from 'src/constant/ganzhi'
import 节气数据 from 'src/数据/节气数据.json' assert { type: 'json' }
import type { T_节气数据 } from 'src/数据/节气生成'
import { 节气, 获取节气月偏移 } from 'src/constant/jieqi'

export const 时间转八字 = (时间: dayjs.Dayjs) => {
  /**
   * 干支日以前一日的23点为子时起点
   */
  const 回溯时间 = 时间.add(1, 'hour')
  // 如果是1月1日的 则回溯到上一年
  const 公历年 = 回溯时间.year()

  const 当年节气数据 = (节气数据 as Record<number, T_节气数据[]>)[公历年]
  /** Js月是偏移,从0开始 */
  const 公历月 = 回溯时间.month()
  const 公历日 = 回溯时间.date()
  // 找到第一个月份相等的节气 若日期小于节气
  let 当前节气: T_节气数据
  let 节气在上一年 = false

  当年节气数据.some((每月节气数据, 索引) => {
    /** 节气公历月是序数 从1开始 */
    const { 公历月: 节气公历月, 公历日: 节气公历日 } = 每月节气数据
    if (节气公历月 === 公历月 + 1) {
      if (公历日 < 节气公历日) {
        const 前一个节气 = 当年节气数据[索引 - 1]

        //前一个节气在上一年
        if (!前一个节气) {
          const 上一年节气数据 = (节气数据 as Record<number, T_节气数据[]>)[公历年 - 1]
          当前节气 = { ...(上一年节气数据.at(-1) as T_节气数据) }
          节气在上一年 = true
        } else {
          当前节气 = { ...前一个节气 }
        }
        return true
      } else {
        当前节气 = 每月节气数据
      }
    }
  })

  const 立春节气 = 当年节气数据.find(({ 节气名 }) => 节气名 === 节气.立春)

  if (!当前节气 || !立春节气) {
    throw new Error(`获取当年对应节气数据失败`)
  }

  const 是否在立春之前 =
    节气在上一年 ||
    当前节气.公历月 < 立春节气.公历月 ||
    (当前节气.公历月 === 立春节气.公历月 && 当前节气.公历日 < 立春节气.公历日)

  //干支年以春分为岁首   如果月/日在立春之前，则年份减一
  let 公历年序数 = 是否在立春之前 ? 公历年 - 1 : 公历年
  // 交节日为月首 按区间取对应的节气月
  let 节气月序数 = 获取节气月偏移(当前节气.节气名)

  // 日偏移
  let 日偏移 = 回溯时间.diff(dayjs('1949-10-01'), 'day')
  //时偏移直接余2即可
  let 时偏移 = Math.floor(回溯时间.hour() / 2)

  const 年柱 = 求年干支(公历年序数 - 1)

  const 月柱 = 求月干支(节气月序数, 年柱[0] as 天干)

  const 日柱 = 求日干支(日偏移)

  const 时柱 = 求时干支(时偏移, 日柱[0] as 天干)

  return {
    年柱,
    月柱,
    日柱,
    时柱,
    八字: `${年柱}-${月柱}-${日柱}-${时柱}`,
  }
}
