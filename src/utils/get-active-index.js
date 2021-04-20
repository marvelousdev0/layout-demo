export default function getActiveIndex({ top, dimensions }) {
  const { y: firstTop } = dimensions[0];
  if (top <= firstTop) return 0;

  const count = dimensions.length;
  const { y: lastTop } = dimensions[count - 1];
  if (top >= lastTop) return count - 1;

  for (let idx = 1; idx < dimensions.length - 1; idx++) {
    const { y: currentY } = dimensions[idx];
    const nextIdx = idx + 1;
    const { y: nextY } = dimensions[nextIdx];
    console.log(idx, nextIdx, top, currentY, nextY, dimensions[idx], dimensions[nextIdx]);
    if (top >= currentY - 24 && top < nextY) return idx;
  }

  return 0;
}
