/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3397958528")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    l.id,\n    l.nom,\n    l.couleur_lunettes,\n    l.code_svg,\n    COUNT(l.id) AS nb_creations\nFROM lunettes l\nGROUP BY l.nom, l.couleur_lunettes, l.id, l.code_svg\nORDER BY nb_creations DESC;\n"
  }, collection)

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "json3949269562",
    "maxSize": 1,
    "name": "code_svg",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3397958528")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    l.id AS id,\n    l.nom,\n    l.couleur_lunettes,\n    COUNT(l.id) AS nb_creations\nFROM lunettes l\nGROUP BY l.nom, l.couleur_lunettes, l.id\nORDER BY nb_creations DESC;"
  }, collection)

  // remove field
  collection.fields.removeById("json3949269562")

  return app.save(collection)
})
