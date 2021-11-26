export const reader = {
  async read(...props) {
    const fn = this.isManyDocs(props.docs) ? this.readMany : this.readOne;
    return await fn(...props);
  },

  // async readOne({ collectionName, data }) {
  //   const ref = this.getRef({ collectionName, data });

  //   const docSnap = await this.getDoc(ref);
  //   return docSnap.exists() ? docSnap.data() : null;
  // },

  async readAll({ collectionName }) {
    const collection = this.getCollection({ collectionName });
    const querySnapshot = await this.getDocs(collection);
    return querySnapshot.map((doc) => doc.data());
  },
};
