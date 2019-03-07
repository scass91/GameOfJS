describe("cellState", () => {

  beforeEach(() => {
    cell = new cellState()
  })

  it("Returns a 1 if alive", () => {
    expect(cell.alive).toEqual(1)
  })

})
