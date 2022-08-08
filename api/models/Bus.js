const db = require("../dbConfig");

class Bus {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.capacity = data.capacity;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const busData = await db.query("SELECT * FROM bus;");
        const buses = busData.rows.map((b) => new Bus(b));
        resolve(buses);
      } catch (err) {
        console.error(err);
        reject(err);
      }
    });
  }

  static async create(name, capacity) {
    try {
      // important query for posts
      const newBus = await db.query(
        "INSERT INTO bus (name, capacity) VALUES ($1, $2) RETURNING *",
        [name, capacity]
      );
      const bus = new Bus(newBus.rows[0]);

      return bus;
    } catch (err) {
      // write error more friendly for client, console.log(err), for yourself
      console.log(err);
      throw new Error(err); // ?? is that right?
    }
  }
}

module.exports = Bus;
