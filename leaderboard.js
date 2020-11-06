const Database = require("@replit/database");
const db = new Database();

module.exports = {
  addPoints(username, points) {
    let user = username.replace("#", "_")

    db.get(user)
      .then(value => {
        return db.set(user, (points+value));
      });
  },

  async getLeaderboard() {
    return await db.list()
      .then(async keys => {
        let output = [];
        for (const key of keys) {
          output.push({
            name: key,
            score: await db.get(key)
          });
        }
        return output;
      }) 
      .then(value => {
        value.sort((a, b) => b.score - a.score);
        return value;
      })
      .catch(err => {
        console.log(err)
      })
  }
}