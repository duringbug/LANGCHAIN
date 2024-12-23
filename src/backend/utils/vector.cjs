const { BaseMemory } = require('@langchain/core/memory');
const { Embeddings } = require('@langchain/core/embeddings');
const { CohereClient } = require('cohere-ai');

// MemoryVectorStore 类
class MemoryVectorStore extends BaseMemory {
  constructor() {
    super();
    this.memoryStore = new Map();
  }

  get memoryKeys() {
    return Array.from(this.memoryStore.keys());
  }

  async loadMemoryVariables(values) {
    return {};
  }

  async saveContext(inputValues, outputValues) {}

  async addDocuments(docs, embeddings) {
    for (const doc of docs) {
      const vector = await embeddings.embedQuery(doc.text);
      this.memoryStore.set(doc.text, { text: doc.text, vector });
    }
  }

  async similaritySearch(query, k, embeddings) {
    const queryVector = await embeddings.embedQuery(query);
    const similarity = (vec1, vec2) =>
      vec1.reduce((sum, val, idx) => sum + val * vec2[idx], 0);

    return Array.from(this.memoryStore.values())
      .map(doc => ({ ...doc, score: similarity(queryVector, doc.vector) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, k);
  }

  async getVector(text) {
    const doc = this.memoryStore.get(text);
    if (doc) {
      return doc.vector;
    }
    return undefined;
  }
}

// CohereEmbeddings 类
class CohereEmbeddings extends Embeddings {
  constructor(apiKey) {
    super({});
    this.cohereClient = new CohereClient({ token: apiKey });
  }

  async embedDocuments(documents) {
    const response = await this.cohereClient.embed({ texts: documents });

    if (Array.isArray(response.embeddings) && Array.isArray(response.embeddings[0])) {
      return response.embeddings;
    } else {
      throw new Error('Unexpected embeddings format');
    }
  }

  async embedQuery(query) {
    const response = await this.cohereClient.embed({ texts: [query] });

    if (Array.isArray(response.embeddings) && Array.isArray(response.embeddings[0])) {
      return response.embeddings[0];
    } else {
      throw new Error('Unexpected embeddings format');
    }
  }
}

// CacheEmbeddings 类
class CacheEmbeddings extends Embeddings {
  constructor(apiKey, vectors) {
    super({});
    this.vectors = vectors;
    this.cohereClient = new CohereClient({ token: apiKey });
  }

  async embedDocuments(documents) {
    return documents.map(doc => {
      const vectorInfo = this.vectors.find(item => item.text === doc);
      if (vectorInfo) {
        return vectorInfo.vector;
      } else {
        throw new Error(`向量未找到: ${doc}`);
      }
    });
  }

  async embedQuery(query) {
    const vectorInfo = this.vectors.find(item => item.text === query);
    if (vectorInfo) {
      return vectorInfo.vector;
    } else {
      const response = await this.cohereClient.embed({ texts: [query] });
      if (Array.isArray(response.embeddings) && Array.isArray(response.embeddings[0])) {
        return response.embeddings[0];
      } else {
        throw new Error('Unexpected embeddings format');
      }
    }
  }
}

// 导出类
module.exports = {
  MemoryVectorStore,
  CohereEmbeddings,
  CacheEmbeddings,
};