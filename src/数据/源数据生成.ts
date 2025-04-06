import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const 请求 = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}

const 地址 = (年份: number) => {
  // 香港天文台数据
  return `https://www.hko.gov.hk/tc/gts/time/calendar/text/files/T${年份}c.txt`
}

// 1901-2100
const 年份范围 = Array.from({ length: 2100 - 1901 + 1 }, (_, i) => 1901 + i)

await Promise.all(
  年份范围.map(async (年份) => {
    try {
      const 文件夹路径 = path.join(__dirname, 'HKO')
      const 文件路径 = path.join(文件夹路径, `${年份}.txt`)

      if (fs.existsSync(文件路径)) {
        console.log(`${年份}年数据已存在,跳过请求`)
      } else {
        console.log(`开始请求${年份}年数据`)
        const 数据 = await 请求(地址(年份))
        console.log(`${年份}年数据请求完成 正在写入${文件路径}`)
        fs.writeFileSync(文件路径, 数据)
      }
    } catch (error) {
      console.error(`获取${年份}年数据失败:`, error)
    }
  }),
)

console.log('完成')
// 执行 node src/数据/源数据生成.ts
