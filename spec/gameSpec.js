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

  it("contains the number 1 or 0 in all cells", () => {
    expect(arr).toEqual(jasmine.arrayContaining([0] || [1]))
  })
})
