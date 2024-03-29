export const deleteOne = async ({ db, collectionName, id }) => {
  const response = await new Promise((res, rej) => {
    db.collection(collectionName)
      .doc(id)
      .delete()
      .then(() => res(true))
      .catch((e) => rej(e));
  });

  return response;
};

export const delete = async ({ db, collectionName, id }) => {
  if(Array.isArray(id)) deleteOne({ db, collectionName, id })
};
