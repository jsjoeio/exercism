class Triangle {
  constructor (side1, side2, side3) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
  }
  isTriangle () {
    // All sides must be positive integers
    // And the sum of any two sides must be >= length of the third
    return (this.side1 > 0 && this.side2 > 0 && this.side3 > 0) && (
      this.side3 + this.side2 >= this.side1 &&
      this.side1 + this.side3 >= this.side2 &&
      this.side1 + this.side2 >= this.side3
    )
  }
  kind () {
    // Verify it's a valid triangle
    if (this.isTriangle()) {
      // All three sides must be equal
      if (this.side1 === this.side2 && this.side1 === this.side3) {
        return 'equilateral'
      }
      // At least two sides must be equal
      if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
        return 'isosceles'
      }
      // If no sides are equal
      return 'scalene'
    }

    // Not a valid triangle
    throw Error('Invalid triangle.')
  }
}

export {
  Triangle
}
