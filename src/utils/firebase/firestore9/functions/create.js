import uuid from 'uuid/v4';

export const addOne = async (collection, data) => {
  const id = uuid();
  Object.assign(data, { id, createdAt: Date.now() });

  const response = await new Promise((res, rej) => {
    collection.doc(id)
      .set(data)
      .then(() => res(data))
      .catch((e) => rej(e));
  });

  return response;
};

export const addBatch = async (collection, data) => {
  const id = uuid();
  data.forEach((x) => Object.assign(x, { id: uuid(), createdAt: Date.now() }));
  const refs = data.map(({ id }) => collection.doc(id));

  const response = await new Promise((res, rej) => {
    collection.doc(id)
      .set(data)
      .then(() => res(data))
      .catch((e) => rej(e));
  });

  return response;
};
