module.exports = () => {
  const chars = "ABCDEF0123456789";
  let result = "";
  let colors = [];

  for (let i = 0; i < 6; i++) {
    for(let i = 0; i < 6; i++) {
      result += chars[Math.floor(Math.random() * chars.length)]
    }
    colors.push(result);
    result = "";
  }

  return colors;
}