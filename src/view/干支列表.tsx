import React from 'react'
import { 干支排列表 } from '@/constant/ganzhi'

const 分割 = (列表: string[], 容量: number) => {
  const 结果 = []
  for (let i = 0; i < 列表.length; i += 容量) {
    结果.push(列表.slice(i, i + 容量))
  }
  return 结果
}

export const 干支列表: React.FC<{
  每行个数: number
}> = ({ 每行个数 = 10 }) => {
  return (
    <>
      {分割(干支排列表, 每行个数).map((单行) => (
        <tr>
          {单行.map((单列) => (
            <td>{单列}</td>
          ))}
        </tr>
      ))}
    </>
  )
}
