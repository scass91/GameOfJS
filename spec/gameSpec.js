describe("Game", () => {

  beforeEach(() => {
    arr = new arrayCreation(10, 10)
  })

  it("returns a 2D array with given length", () => {
    expect(arr.length).toEqual(10)
  })

  it("contains an expected number of cells", () => {
    expect(cellCount(arr)).toEqual(100)
  })

//Logic here is that the max value can be a 1 in every cell
  it("contains only the integers 0 or 1 in cells", () => {
    expect(arrSum(arr)).not.toBeGreaterThan(cellCount(arr));
  })
})
