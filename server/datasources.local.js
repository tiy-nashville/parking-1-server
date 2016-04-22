var postgresURI = process.env.DATABASE_URL;

var config = {
  "db": {
    "name": "db",
    "connector": "memory"
  }
}

if (postgresURI) {
  config.db = {
    connector: "postgresql",
    url: postgresURI,
  };
}

module.exports = config;
