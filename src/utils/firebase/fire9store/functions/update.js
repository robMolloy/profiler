export const updateOne = async ({ db, collectionName, data, id }) => {
  Object.assign(data, { updatedAt: Date.now() });

  const response = await new Promise((res, rej) => {
    db.collection(collectionName)
      .doc(id)
      .update(data)
      .then(() => res(data))
      .catch((e) => rej(e));
  });

  return response;
};
