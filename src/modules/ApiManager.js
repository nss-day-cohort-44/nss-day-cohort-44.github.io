const remoteURL = "https://nss-cohort-36-json-server-api.herokuapp.com"

export default {
  get(tableName, id) {
    return fetch(`${remoteURL}/${tableName}/${id}`).then(result => result.json())
  },
  getAll(tableName) {
    return fetch(`${remoteURL}/${tableName}`).then(result => result.json())
  },
  delete(tableName, id) {
    return fetch(`http://localhost:5002/${tableName}/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(tableName, newObject) {
    return fetch(`${remoteURL}/${tableName}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
    }).then(data => data.json())
  },
  update(tableName, editedObject) {
    return fetch(`${remoteURL}/${tableName}/${editedObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedObject)
    }).then(data => data.json());
  },
  getEmployeesWithAnimals(id) {
    return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
            .then(result => result.json())
}
}