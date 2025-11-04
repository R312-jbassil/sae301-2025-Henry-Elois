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
        "hidden": false,
        "id": "json1819170229",
        "maxSize": 1,
        "name": "nom",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json1288298548",
        "maxSize": 1,
        "name": "couleur_lunettes",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
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
    "id": "pbc_3397958528",
    "indexes": [],
    "listRule": null,
    "name": "lunettes_populaires",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n    l.id AS id,\n    l.nom,\n    l.couleur_lunettes,\n    COUNT(l.id) AS nb_creations\nFROM lunettes l\nGROUP BY l.nom, l.couleur_lunettes, l.id\nORDER BY nb_creations DESC;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3397958528");

  return app.delete(collection);
})
