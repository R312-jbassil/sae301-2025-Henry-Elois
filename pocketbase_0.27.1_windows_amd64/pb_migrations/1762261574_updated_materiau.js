/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1486587212")

  // remove field
  collection.fields.removeById("text2765490009")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select2765490009",
    "maxSelect": 1,
    "name": "libelle",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Metal",
      "Tetane",
      "Aluminium"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1486587212")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2765490009",
    "max": 0,
    "min": 0,
    "name": "libelle",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select2765490009")

  return app.save(collection)
})
