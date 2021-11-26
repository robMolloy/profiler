export const creater = {
  beforeUpdate(doc) {
    Object.assign(doc, { id: this.uuid(), createdAt: Date.now() });
  },

  async update(...props) {
    const fn = this.isManyDocs(props.docs) ? this.updateMany : this.updateOne;
    return await fn(...props);
  },

  async updateOne({ collectionName, doc }) {
    this.beforeUpdate(doc);

    const ref = this.getRef({ collectionName, doc });
    return await this.updateDoc(ref, doc);
  },

  async updateMany({ collectionName, docs }) {
    const batch = this.writeBatch(this.db);

    docs.forEach((doc) => {
      this.beforeUpdate(doc);

      const ref = this.getRef({ collectionName, doc });
      batch.update(ref, doc);
    });

    return await batch.commit();
  },
};
