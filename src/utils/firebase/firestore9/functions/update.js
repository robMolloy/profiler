export default async (collection, data, id) => {
  Object.assign(data, { updatedAt: Date.now() });

  const response = await new Promise((res, rej) => {
    collection
      .doc(id)
      .update(data)
      .then(() => res(data))
      .catch((e) => rej(e));
  });

  return response;
};
