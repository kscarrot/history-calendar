import { 干支排列表 } from '@/constant/ganzhi'

function App() {
  const chunk = (arr: string[], size: number) => {
    const result = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  }
  return (
    <>
      <div className="card">
        <p>
          {chunk(干支排列表, 10).map((单行) => (
            <tr>
              {单行.map((单列) => (
                <td>{单列}</td>
              ))}
            </tr>
          ))}{' '}
        </p>
        <p>
          {chunk(干支排列表, 12).map((单行) => (
            <tr>
              {单行.map((单列) => (
                <td>{单列}</td>
              ))}
            </tr>
          ))}{' '}
        </p>
      </div>
    </>
  )
}

export default App
