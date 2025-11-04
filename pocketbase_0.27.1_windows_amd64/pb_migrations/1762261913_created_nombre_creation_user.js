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
        "id": "json1396272600",
        "maxSize": 1,
        "name": "largeur_pont",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json438371369",
        "maxSize": 1,
        "name": "taille_verres",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json232433428",
        "maxSize": 1,
        "name": "genere_IA",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json3949269562",
        "maxSize": 1,
        "name": "code_svg",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_qlhu",
        "max": 255,
        "min": 0,
        "name": "utilisateur_nom",
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
        "id": "_clone_TeUx",
        "max": 0,
        "min": 0,
        "name": "utilisateur_prenom",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      }
    ],
    "id": "pbc_3391969005",
    "indexes": [],
    "listRule": null,
    "name": "nombre_creation_user",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n    l.id AS id, \n    l.nom,\n    l.couleur_lunettes,\n    l.largeur_pont,\n    l.taille_verres,\n    l.genere_IA,\n    l.code_svg,\n    u.name AS utilisateur_nom,\n    u.prenom AS utilisateur_prenom\nFROM lunettes l\nJOIN users u ON l.id_client = u.id;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3391969005");

  return app.delete(collection);
})
