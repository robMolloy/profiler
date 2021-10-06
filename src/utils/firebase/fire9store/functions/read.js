export const readOne = async ({ db, collectionName, id }) => {
  const response = await new Promise((res, rej) => {
    db
      .collection(collectionName)
      .doc(id)
      .get()
      .then((doc) => res(doc.exists ? doc.data() : null))
      .catch((e) => rej(e));
  });

  return response;
};
