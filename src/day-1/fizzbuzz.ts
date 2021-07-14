//to run it use `npx ts-node .\src\day-1\fizzbuzz.ts`

const FIZZ = 'fizz'
const BUZZ = 'buzz'
const FIZZ_BUZZ = `${FIZZ}${BUZZ}`
/**
 * @description return 'fizz' when divisible by 3
 * return 'buzz' when divisible  by 5
 * return 'fizzbuzz' when divisible by 15
 * else return undefined 
 */
export default function fizzBuzz(arg: number) {
  if (arg % 15 === 0) return FIZZ_BUZZ
  if (arg % 3 === 0) return FIZZ
  if (arg % 5 === 0) return BUZZ
}
