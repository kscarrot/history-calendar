import dayjs from 'dayjs'
import { 时间转八字 } from 'src/历法/干支历/八字'
import { 节气, 获取节气月偏移 } from 'src/constant/jieqi'

test('获取节气月偏移', () => {
  expect(获取节气月偏移(节气.立春)).toEqual(0)
  expect(获取节气月偏移(节气.雨水)).toEqual(0)

  expect(获取节气月偏移(节气.惊蛰)).toEqual(1)
  expect(获取节气月偏移(节气.春分)).toEqual(1)

  expect(获取节气月偏移(节气.清明)).toEqual(2)
  expect(获取节气月偏移(节气.谷雨)).toEqual(2)

  expect(获取节气月偏移(节气.立夏)).toEqual(3)
  expect(获取节气月偏移(节气.小满)).toEqual(3)

  expect(获取节气月偏移(节气.芒种)).toEqual(4)
  expect(获取节气月偏移(节气.夏至)).toEqual(4)

  expect(获取节气月偏移(节气.小暑)).toEqual(5)
  expect(获取节气月偏移(节气.大暑)).toEqual(5)

  expect(获取节气月偏移(节气.立秋)).toEqual(6)
  expect(获取节气月偏移(节气.处暑)).toEqual(6)

  expect(获取节气月偏移(节气.白露)).toEqual(7)
  expect(获取节气月偏移(节气.秋分)).toEqual(7)

  expect(获取节气月偏移(节气.寒露)).toEqual(8)
  expect(获取节气月偏移(节气.霜降)).toEqual(8)

  expect(获取节气月偏移(节气.立冬)).toEqual(9)
  expect(获取节气月偏移(节气.小雪)).toEqual(9)

  expect(获取节气月偏移(节气.大雪)).toEqual(10)
  expect(获取节气月偏移(节气.冬至)).toEqual(10)

  expect(获取节气月偏移(节气.小寒)).toEqual(11)
  expect(获取节气月偏移(节气.大寒)).toEqual(11)
})

test('时间转八字', () => {
  const 时间 = dayjs('2025-04-07 12:00:00')
  const { 八字 } = 时间转八字(时间)
  expect(八字).toEqual('乙巳-庚辰-丙午-甲午')
  // 当年年首
  const 当年年首 = dayjs('2025-01-01 00:00:00')
  const { 八字: 当年年首八字 } = 时间转八字(当年年首)
  expect(当年年首八字).toEqual('甲辰-丙子-庚午-丙子')

  // 当前10月1日
  const 十月一日 = dayjs('2025-10-01 12:00:00')
  const { 八字: 十月一日八字 } = 时间转八字(十月一日)
  expect(十月一日八字).toEqual('乙巳-乙酉-癸卯-戊午')
})
