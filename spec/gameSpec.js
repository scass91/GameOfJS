describe("Game", () => {

  beforeEach(() => {
    arr = new Array(10, 10)
  })

  it("returns a 2D array with given x length", () => {
    expect(arr.x).toEqual(10)
  })

})
