/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_gFac",
        "max": 255,
        "min": 0,
        "name": "name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_OvVX",
        "max": 0,
        "min": 0,
        "name": "prenom",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number1344867136",
        "max": null,
        "min": null,
        "name": "nb_creations",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_3568838547",
    "indexes": [],
    "listRule": null,
    "name": "nbr_creation_par_user",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n    u.id AS id,\n    u.name,\n    u.prenom,\n    COUNT(l.id) AS nb_creations\nFROM users u\nLEFT JOIN lunettes l ON u.id = l.id_client\nGROUP BY u.id, u.name, u.prenom\nORDER BY nb_creations DESC;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3568838547");

  return app.delete(collection);
})
