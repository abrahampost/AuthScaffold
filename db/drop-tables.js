const sequelize = require("./sequelize");

async function dropTables() {
    try {
        await sequelize.drop();
        console.log("Successfully dropped all tables");
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

dropTables();