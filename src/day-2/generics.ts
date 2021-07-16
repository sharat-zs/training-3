function getFirstElement<T>(arg: T[]) {
  if (arg.length > 0) return arg[0]
}

const arr = [12, 3, 4, 55]
const x = getFirstElement<number>(arr)

const strArr = ['a', 'b', 'c']
const y = getFirstElement<string>(strArr)

type Schema = {
  validate: (obj: unknown) => boolean
}

function validator<T>(obj: unknown, schema: Schema): obj is T {
  return schema.validate(obj)
}

function doSomeStuff(x: any, y: unknown) {
  const res2 = (y as any).validate()
}
