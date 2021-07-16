import axios from 'axios'

function samplePromise() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve('some data'), 1000)
  })
}

// samplePromise()
//   .then((data: string) => data.toUpperCase())
//   .then((data) => console.log(data))
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err))

async function syntacticSugar() {
  try {
    // const res = await samplePromise()
    // res.toUpperCase()
    // do anything else
    // console.log(res.toUpperCase())
    // const httpRes = await axios.get(
    //   'https://jsonplaceholder.typicode.com/todos/1'
    // // )
    // console.log(httpRes.data)
    const res = await Promise.allSettled([
      samplePromise(),
      axios.get('https://x.typicode.com/todos/1'),
      async () => 'immediate promise'
    ])
    console.log(res)
  } catch (error) {
    console.error(error)
  } finally {
    console.log('finally')
  }
}

syntacticSugar()
