describe("cellState", () => {

  beforeEach(() => {
    cell = new cellState()
  })

  it("Returns a 1 if alive", () => {
    expect(cell.alive).toEqual(1)
  })

  it("Returns a 0 if dead", () => {
    expect(cell.dead).toEqual(0)
  })

})
