describe("Game", () => {

  beforeEach(() => {
    arr = new arrayCreation(10, 10)
  })

  it("returns a 2D array with given length", () => {
    expect(arr.length).toEqual(10)
  })

})
