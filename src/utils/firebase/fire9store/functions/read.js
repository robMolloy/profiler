export default async (collection, id) => {
  const response = await new Promise((res, rej) => {
    collection
      .doc(id)
      .get()
      .then((doc) => res(doc.exists ? doc.data() : null))
      .catch((e) => rej(e));
  });

  return response;
};
