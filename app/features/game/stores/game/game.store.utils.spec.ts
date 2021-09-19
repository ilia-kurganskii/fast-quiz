import {calculateScore} from "./game.store.utils"

describe("Game Store Utils", () => {
  describe("Calculating Score", () => {
    it("should calculate first answer [true]]", () => {
      expect(calculateScore([true])).toEqual(10)
    })

    it("should calculate streak:2 [true, true]", () => {
      expect(calculateScore([true, true])).toEqual(30)
    })

    it("should calculate [true, false, true]", () => {
      expect(calculateScore([true, false, true])).toEqual(20)
    })

    it("should calculate streak:5 [true, true, true, true, true]", () => {
      expect(calculateScore([true, true, true, true, true])).toEqual(150)
    })

    it("should calculate streak:6  [true, true, true, true, true, true]", () => {
      expect(calculateScore([true, true, true, true, true, true])).toEqual(200)
    })
  })
})
