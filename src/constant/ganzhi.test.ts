import { 干支, 求年干支, 求月干支, 求日干支, 求时干支 } from 'src/constant/ganzhi'
import dayjs from 'dayjs'

describe('求公元年份干支', () => {
  const 求公元年份干支 = (公元年序数: number): 干支 => 求年干支(公元年序数 - 1)

  test('公元一年对应 汉平帝 元始元年 辛酉年', () => {
    expect(求公元年份干支(1)).toEqual('辛酉')
  })

  test('公元四年对应 汉平帝 元始四年 甲子年', () => {
    expect(求公元年份干支(4)).toEqual('甲子')
  })

  test('公元一八四年对应 汉灵帝 中平四年 甲子年', () => {
    expect(求公元年份干支(184)).toEqual('甲子')
  })

  test('公元一〇八二年年对应 北宋元丰五年 壬戌年', () => {
    expect(求公元年份干支(1082)).toEqual('壬戌')
  })

  test('公元一八九四年年对应 清光绪二十年 甲午年', () => {
    expect(求公元年份干支(1894)).toEqual('甲午')
  })

  test('公元一九一一年年对应 清宣统三年 辛亥年', () => {
    expect(求公元年份干支(1911)).toEqual('辛亥')
  })

  test('公元一九四九年对应 新中国元年 己丑年', () => {
    expect(求公元年份干支(1949)).toEqual('己丑')
  })

  test('公元二〇二五对应  乙巳年', () => {
    expect(求公元年份干支(2025)).toEqual('乙巳')
  })
})

describe('求月干支', () => {
  test('五虎遁月歌\n甲己之年丙作初，乙庚之岁戊为头。\n丙辛岁首从庚起，丁壬壬位顺流行。\n若问戊癸何方法，甲寅之上好推求。', () => {
    expect(求月干支(0, '甲')).toEqual('丙寅')
    expect(求月干支(0, '己')).toEqual('丙寅')

    expect(求月干支(0, '乙')).toEqual('戊寅')
    expect(求月干支(0, '庚')).toEqual('戊寅')

    expect(求月干支(0, '丙')).toEqual('庚寅')
    expect(求月干支(0, '辛')).toEqual('庚寅')

    expect(求月干支(0, '丁')).toEqual('壬寅')
    expect(求月干支(0, '壬')).toEqual('壬寅')

    expect(求月干支(0, '戊')).toEqual('甲寅')
    expect(求月干支(0, '癸')).toEqual('甲寅')
  })

  test('单年干份月份排布', () => {
    expect(求月干支(0, '甲')).toEqual('丙寅')
    expect(求月干支(1, '甲')).toEqual('丁卯')
    expect(求月干支(2, '甲')).toEqual('戊辰')
    expect(求月干支(3, '甲')).toEqual('己巳')
    expect(求月干支(4, '甲')).toEqual('庚午')
    expect(求月干支(5, '甲')).toEqual('辛未')
    expect(求月干支(6, '甲')).toEqual('壬申')
    expect(求月干支(7, '甲')).toEqual('癸酉')
    expect(求月干支(8, '甲')).toEqual('甲戌')
    expect(求月干支(9, '甲')).toEqual('乙亥')
    expect(求月干支(10, '甲')).toEqual('丙子')
    expect(求月干支(11, '甲')).toEqual('丁丑')
  })

  test('单月份分年干排布', () => {
    expect(求月干支(0, '甲')).toEqual('丙寅')
    expect(求月干支(0, '乙')).toEqual('戊寅')
    expect(求月干支(0, '丙')).toEqual('庚寅')
    expect(求月干支(0, '丁')).toEqual('壬寅')
    expect(求月干支(0, '戊')).toEqual('甲寅')
    expect(求月干支(0, '己')).toEqual('丙寅')
    expect(求月干支(0, '庚')).toEqual('戊寅')
    expect(求月干支(0, '辛')).toEqual('庚寅')
    expect(求月干支(0, '壬')).toEqual('壬寅')
    expect(求月干支(0, '癸')).toEqual('甲寅')
  })

  test('丙寅前推两月回归', () => {
    expect(求月干支(10, '癸')).toEqual('甲子')
    expect(求月干支(11, '癸')).toEqual('乙丑')
  })
})

describe('求日干支', () => {
  test('序数映射', () => {
    expect(求日干支(0)).toEqual('甲子')
    expect(求日干支(59)).toEqual('癸亥')
  })
})

describe('求时干支', () => {
  test('五鼠遁日歌\n甲己还加甲，乙庚丙作初。\n丙辛从戊起，丁壬庚子居。\n戊癸何方发，壬子是真途。', () => {
    expect(求时干支(0, '甲')).toEqual('甲子')
    expect(求时干支(0, '己')).toEqual('甲子')

    expect(求时干支(0, '乙')).toEqual('丙子')
    expect(求时干支(0, '庚')).toEqual('丙子')

    expect(求时干支(0, '丙')).toEqual('戊子')
    expect(求时干支(0, '辛')).toEqual('戊子')

    expect(求时干支(0, '丁')).toEqual('庚子')
    expect(求时干支(0, '壬')).toEqual('庚子')

    expect(求时干支(0, '戊')).toEqual('壬子')
    expect(求时干支(0, '癸')).toEqual('壬子')
  })

  test('甲日十二时', () => {
    expect(求时干支(0, '甲')).toEqual('甲子')
    expect(求时干支(1, '甲')).toEqual('乙丑')
    expect(求时干支(2, '甲')).toEqual('丙寅')
    expect(求时干支(3, '甲')).toEqual('丁卯')
    expect(求时干支(4, '甲')).toEqual('戊辰')
    expect(求时干支(5, '甲')).toEqual('己巳')
    expect(求时干支(6, '甲')).toEqual('庚午')
    expect(求时干支(7, '甲')).toEqual('辛未')
    expect(求时干支(8, '甲')).toEqual('壬申')
    expect(求时干支(9, '甲')).toEqual('癸酉')
    expect(求时干支(10, '甲')).toEqual('甲戌')
    expect(求时干支(11, '甲')).toEqual('乙亥')
  })

  test('午时十日干', () => {
    expect(求时干支(6, '甲')).toEqual('庚午')
    expect(求时干支(6, '乙')).toEqual('壬午')
    expect(求时干支(6, '丙')).toEqual('甲午')
    expect(求时干支(6, '丁')).toEqual('丙午')
    expect(求时干支(6, '戊')).toEqual('戊午')
    expect(求时干支(6, '己')).toEqual('庚午')
    expect(求时干支(6, '庚')).toEqual('壬午')
    expect(求时干支(6, '辛')).toEqual('甲午')
    expect(求时干支(6, '壬')).toEqual('丙午')
    expect(求时干支(6, '癸')).toEqual('戊午')
  })
})

describe('校验时间戳计算日干支', () => {
  test('当前开发日干支计算2025-02-20', () => {
    const 从开发日至国庆偏移天数 = dayjs('2025-02-20').diff(dayjs('1949-10-01'), 'day')
    expect(求日干支(从开发日至国庆偏移天数)).toEqual('庚申')

    const 从开发日至乙巳年正月初一偏移天数 = dayjs('2025-02-20').diff(dayjs('2025-01-29'), 'day')
    //2025-02-20 乙巳年正月廿三 偏移22天
    expect(从开发日至乙巳年正月初一偏移天数).toEqual(22)
    expect(求日干支(从开发日至乙巳年正月初一偏移天数, '戊戌')).toEqual('庚申')

    const 从开发日至四癸亥偏移天数 = dayjs('2025-02-20').diff(dayjs('1983-12-01'), 'day')
    expect(求日干支(从开发日至四癸亥偏移天数, '癸亥')).toEqual('庚申')

    const 从一月一日到十二月三十一日偏移天数 = dayjs('2025-01-01').diff(dayjs('2025-12-31'), 'day')
    expect(从一月一日到十二月三十一日偏移天数).toEqual(-364)
    expect(求日干支(Math.abs(从一月一日到十二月三十一日偏移天数), '庚午')).toEqual('甲戌')

    const 从春分到秋分偏移天数 = dayjs('2025-03-20').diff(dayjs('2025-09-23'), 'day')
    expect(从春分到秋分偏移天数).toEqual(-187)
    expect(求日干支(Math.abs(从春分到秋分偏移天数), '戊子')).toEqual('乙未')

    const 从秋分到明年春分偏移天数 = dayjs('2025-09-23').diff(dayjs('2026-03-20'), 'day')
    expect(从秋分到明年春分偏移天数).toEqual(-178)
    expect(求日干支(Math.abs(从秋分到明年春分偏移天数), '乙未')).toEqual('癸巳')

    const 从冬至到夏至偏移天数 = dayjs('2025-12-21').diff(dayjs('2025-06-21'), 'day')
    expect(从冬至到夏至偏移天数).toEqual(183)
    expect(求日干支(从冬至到夏至偏移天数, '辛酉')).toEqual('甲子')

    const 从冬至到明年夏至偏移天数 = dayjs('2025-12-21').diff(dayjs('2026-06-21'), 'day')
    expect(从冬至到明年夏至偏移天数).toEqual(-182)
    expect(求日干支(Math.abs(从冬至到明年夏至偏移天数), '甲子')).toEqual('丙寅')
  })
})
