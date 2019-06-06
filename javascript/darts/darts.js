export function solve (x, y) {
  const circleEquation = Math.pow(x, 2) + Math.pow(y, 2)
  return circleEquation <= 100
    ? (
      circleEquation <= 25
        ? (
          circleEquation <= 1
            ? 10
            : 5
        ) : 1
    )
    : 0
}
