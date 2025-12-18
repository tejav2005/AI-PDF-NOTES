// import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
// import { action } from "./_generated/server.js";
// import { v } from "convex/values";
// import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
// import { TaskType } from "@google/generative-ai";

// // Hardcoded embeddings instance
// const embeddings = new GoogleGenerativeAIEmbeddings({
//   apiKey: "AIzaSyASUG6TvtGfKEAcidx5ZcgGtzn5wZ6kFow",
//   model: "text-embedding-004",
//   taskType: TaskType.RETRIEVAL_DOCUMENT,
//   title: "Document title",
// });

// // -------------------- INGEST --------------------
// export const ingest = action({
//   args: {
//     splitText: v.array(v.string()), // Array of text chunks
//     fileId: v.string(),             // File identifier
//   },
//   handler: async (ctx, args) => {
//     // Create metadata array for each chunk
//     const metadatas = args.splitText.map(() => ({
//       fileId: args.fileId
//     }));

//     await ConvexVectorStore.fromTexts(
//       args.splitText,
//       metadatas,  // ✅ must be array of objects
//       embeddings,
//       { ctx }
//     );

//     return "Ingest completed ✅";
//   },
// });

// // -------------------- SEARCH --------------------
// export const search = action({
//   args: {
//     query: v.string(),
//     fileId: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const vectorStore = new ConvexVectorStore(embeddings, { ctx });

//     // Get top 5 similar results
//     const results = await vectorStore.similaritySearch(args.query, 5);

//     // Filter by fileId
//     const filtered = results.filter(r => r.metadata?.fileId === args.fileId);

//     console.log("Raw results:", results);
//     console.log("Filtered results:", filtered);

//     return filtered;
//   },
// });


import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "./_generated/server.js";
import { v } from "convex/values";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { api } from "./_generated/api.js";

export const ingest = action({
  args: {
    splitText:v.any(),
    fileId:v.string()  
  },
  handler: async (ctx,args) => {

   
    await ConvexVectorStore.fromTexts(
      args.splitText, //Array
      args.fileId,  //String
    
      new GoogleGenerativeAIEmbeddings({
        apiKey:"AIzaSyASUG6TvtGfKEAcidx5ZcgGtzn5wZ6kFow",
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }

    );
     return "Completed.."
  },
});

export const search = action({
  args: {
    query: v.string(),
    fileId:v.string()
  },
  handler: async (ctx, args) => {
    const vectorStore = new ConvexVectorStore(
         new GoogleGenerativeAIEmbeddings({
        apiKey:"AIzaSyASUG6TvtGfKEAcidx5ZcgGtzn5wZ6kFow",
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
         { ctx });

    const resultOne =  await(await vectorStore.similaritySearch(args.query, 1))
        .filter(q => q.metadata.fileId == args.fileId)
    console.log(resultOne);

    return JSON.stringify(resultOne);
  },
});







