migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wwmvxef0plhgip6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmrsitww",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wwmvxef0plhgip6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmrsitww",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
