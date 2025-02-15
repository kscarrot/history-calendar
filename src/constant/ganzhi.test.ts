import { 干支, 求年干支, 求月干支, 求日干支, 求时干支 } from 'src/constant/ganzhi'

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
  test('甲己之年丙作初', () => {
    expect(求月干支(0, '甲')).toEqual('丙寅')
    expect(求月干支(0, '己')).toEqual('丙寅')
  })

  test('乙庚之岁戊为头', () => {
    expect(求月干支(0, '乙')).toEqual('戊寅')
    expect(求月干支(0, '庚')).toEqual('戊寅')
  })

  test('丙辛岁首从庚起', () => {
    expect(求月干支(0, '丙')).toEqual('庚寅')
    expect(求月干支(0, '辛')).toEqual('庚寅')
  })

  test('丁壬壬位顺流行', () => {
    expect(求月干支(0, '丁')).toEqual('壬寅')
    expect(求月干支(0, '壬')).toEqual('壬寅')
  })

  test('若问戊癸何方法，甲寅之上好推求', () => {
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
