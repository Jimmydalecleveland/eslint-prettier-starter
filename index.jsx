import React, { useState, useEffect } from 'react'

const EslintTest = ({ someProp }) =>
{
  const [state, setState] = useState()
  useEffect(() => {
    setState(someProp)
  }, [])
  let neverReassigned
  neverReassigned = "initial value"
  console.log(shouldBeLet)

  const shouldBeLet = ''
  shouldBeLet = "trying to reassign const"

  const pointlessArrayOperation = [4, 1, 3, 0].map((num) =>  num + 1).filter(num => num > 0).sort()
  console.info(pointlessArrayOperation, shouldBeLet)

  return (
    <main>
    <h1>{shouldBeLet}</h1>
      <h2>{someProp}</h2>
    </main>
  )
}

export default EslintTest
