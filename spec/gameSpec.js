describe("Game", () => {

  beforeEach(() => {
    arr = new arrayCreation(10, 10)
  })

  it("returns a 2D array with given length", () => {
    expect(arr.length).toEqual(10)
  })

  it("is an array with an expected number of values in a 2d format", () => {
    expect(arr.cells.length).toEqual(100)
  })

})
