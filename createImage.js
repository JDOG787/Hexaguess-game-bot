module.exports = async (color) => {
  const replaceColor = require('replace-color');
  try {
    const jimpObject = await replaceColor({
      image: './base.png',
      colors: {
        type: 'hex',
        targetColor: '#FFFFFF',
        replaceColor: color,
      },
      deltaE: 20,
    });

    await new Promise((resolve, reject) => {
      jimpObject.write('./color.png', (err) => {
        if (err) {
          reject(err);
        }

        resolve();
      });
    });
  } catch (err) {
    console.log(err);
  }
};