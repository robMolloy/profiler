export const creater = {
  beforeCreate(doc) {
    Object.assign(doc, { id: this.uuid(), createdAt: Date.now() });
  },

  async create(...props) {
    const fn = this.isManyDocs(props.docs) ? this.createMany : this.createOne;
    return await fn(...props);
  },

  async createOne({ collectionName, doc }) {
    this.beforeCreate(doc);

    const ref = this.getRef({ collectionName, doc });
    return await this.setDoc(ref, doc);
  },

  async createMany({ collectionName, docs }) {
    const batch = this.writeBatch(this.db);

    docs.forEach((doc) => {
      this.beforeCreate(doc);

      const ref = this.getRef({ collectionName, doc });
      batch.set(ref, doc);
    });

    return await batch.commit();
  },
};
