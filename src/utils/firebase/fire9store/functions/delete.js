export default async (collection, id) => {
  const response = await new Promise((res, rej) => {
    collection
      .doc(id)
      .delete()
      .then(() => res(true))
      .catch((e) => rej(e));
  });

  return response;
};
