const eslintTest = () =>
{
  let neverReassigned
  neverReassigned = "initial value"
  console.log(shouldBeLet)

  const shouldBeLet = ''
  shouldBeLet = "trying to reassign const"

  const pointlessArrayOperation = [4, 1, 3, 0].map((num) =>  num + 1).filter(num => num > 0).sort()
  console.info(pointlessArrayOperation, shouldBeLet)
}

export default eslintTest
