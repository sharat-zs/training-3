/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
interface IPoint {
  getLocation: () => number[]
}

export class Point implements IPoint {
  constructor(private readonly x: number, private readonly y: number) { }

  getLocation() {
    return [this.x, this.y, 9]
  }

  getName() {
    return 'harry'
  }
}

type PointType = {
  x: number
  y: number
  getPoint: () => [number, number]
}

// intersectio type
type Point3DType = PointType & { z: number }

// union type
type NumOrStr = number | string

const n: NumOrStr = '5'

type PointTypeCopy = {
  x: number
  y: number
  getPoint: () => [number, number]
}

const p: PointType = {
  x: 1,
  y: 2,
  getPoint() {
    return [this.x, this.y]
  }
}

const pCopy: PointTypeCopy = {
  x: 1,
  y: 2,
  getPoint() {
    return [this.x, this.y]
  }
}

const p3d: Point3DType = {
  x: 1,
  y: 2,
  z: 100,
  getPoint() {
    return [this.x, this.y]
  }
}

function pointSum(p: PointType) {
  return p.x + p.y
}

pointSum(p)
pointSum(pCopy)
pointSum({
  x: 10,
  y: 10,
  getPoint() {
    return [7, 8]
  }
})

const s: PointType = {
  x: 10,
  y: 10,
  getPoint() {
    return [7, 8]
  }
}
pointSum(p3d)

type Pet = {
  name: string
}

type Dog = Pet & {
  bark: () => string
}

type Cat = Pet & {
  meow: () => string
}

type Zipcode = {
  zipcode: number
}

type LatLng = {
  lat: number
  long: number
}

function getAddress(input: Zipcode | LatLng) {
  if (isZipcode(input)) {
    // do somehting
  }
  // doSomething else
}
/**
 *
 * @description should return bark if dog or meow if cat
 */
// location: zipcode, {lat: long}
function speak(animal: Dog | Cat) {
  if (isCat(animal)) {
    return animal.meow()
  }
  return animal.bark()
}

// typeguard
function isCat(animal: unknown): animal is Cat {
  if ((animal as Cat).meow && (animal as Cat).name) return true
  return false
}

// typeguard
function isZipcode(input: unknown): input is Zipcode {
  if ((input as Zipcode).zipcode) return true
  return false
}

type BaseAddress = {
  locality: string
  city: string
  state: string
}

type WithZipCode = BaseAddress & Zipcode
type FullAddress = WithZipCode & LatLng
