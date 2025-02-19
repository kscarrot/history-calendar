import React from 'react'
import { 干支排列表 } from '@/constant/ganzhi'

const chunk = (arr: string[], size: number) => {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

export const 干支列表: React.FC<{
  /** 每行数量 */
  chunkNumber: number
}> = ({ chunkNumber = 10 }) => {
  return (
    <>
      {chunk(干支排列表, chunkNumber).map((单行) => (
        <tr>
          {单行.map((单列) => (
            <td>{单列}</td>
          ))}
        </tr>
      ))}
    </>
  )
}
