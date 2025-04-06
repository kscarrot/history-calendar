import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const 年份范围 = Array.from({ length: 2100 - 1901 + 1 }, (_, i) => 1901 + i)

export type T_节气数据 = {
  日期: string
  农历: string
  星期: string
  节气名: string
}

const 每年节气数据: Record<number, T_节气数据[]> = {}

年份范围.forEach((年份: number) => {
  const 文件路径 = path.join(__dirname, 'HKO', `${年份}.txt`)
  const 数据 = fs.readFileSync(文件路径, 'utf-8')

  const 当年节气数据 = 数据
    .replace(/\r/g, '')
    .split('\n')
    .filter((line) => {
      const 正式数据正则 = new RegExp(/^\d{4}年\d{1,2}月\d{1,2}日.*$/)
      return 正式数据正则.test(line)
    })
    .map((line) => {
      const [日期, 农历, 星期, 节气名] = line.trim().split(/\s+/)
      const 日期数据 = 日期.replace(/年|月/g, '-').replace('日', '')
      return {
        日期: 日期数据,
        农历,
        星期,
        节气名,
      }
    })
    .filter(({ 节气名 }) => 节气名)

  if (当年节气数据.length !== 24) {
    throw new Error(`${年份}年节气数据不正确, 共${当年节气数据.length}条`)
  } else {
    每年节气数据[年份] = 当年节气数据
  }
})
const 输出路径 = path.join(__dirname, '节气数据.json')
fs.writeFileSync(输出路径, JSON.stringify(每年节气数据, null, 2))
console.log('节气数据已写入:', 输出路径)
