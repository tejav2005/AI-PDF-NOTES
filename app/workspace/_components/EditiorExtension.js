// import React, { useEffect, useState } from "react";
// import { 
//   Bold, 
//   Highlighter, 
//   Italic, 
//   Minus, 
//   Underline, 
//   Heading1, 
//   Heading2, 
//   Heading3, 
//   List, 
//   Sparkles
// } from "lucide-react";
// import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";
// import { useAction, useMutation } from "convex/react";
// import { query } from "@/convex/_generated/server";
// import { useParams } from "next/navigation";
// import { api } from "@/convex/_generated/api";
// import { chatSession } from "@/configs/AIModel";
// import { toast } from "sonner";
// import { useUser } from "@clerk/nextjs";


// function EditiorExtension({ editor }) {
//     const {fileId}=useParams();
//     const SearchAI=useAction(api.myAction.search)
//     const saveNotes=useMutation(api.notes.AddNotes)
//     const {user}=useUser();
//     const onAiClick=async()=>{
//         toast("AI is getting your answer...")
//         const selectedText=editor.state.doc.textBetween(
//             editor.state.selection.from,
//             editor.state.selection.to,
//             ' '
//     );
//         console.log("selectedText", selectedText);

//         const result=await SearchAI({
//             query:selectedText,
//             fileId:fileId
//         })

//         const UnformattedAns=JSON.parse(result);
//         let AllUnformattedAns='';
//        UnformattedAns&&UnformattedAns.forEach(item=>{
//                AllUnformattedAns=AllUnformattedAns+item.pageContent
//        });

//        const PROMT="For question :"+selectedText+" and with the given content as answer,"+
//        " please give appropriate answer in HTML format. The answer content is: "+AllUnformattedAns;


//        const AiModelResult=await chatSession.sendMessage(PROMT);
//        console.log(AiModelResult.response.text());
//        const FinalAns=AiModelResult.response.text().replace('```','').replace('html','').replace('```','');

//        const AllText=editor.getHTML();
//        editor.commands.setContent(AllText+'<p> <strong>Answer: </strong>'+FinalAns+' </p>');

//        saveNotes({
//         notes:editor.getHTML(),
//         fileId:fileId,
//         createdBy:user?.primaryEmailAddress?.emailAddress
//        })


//     }

//   const [update, setUpdate] = useState(0);

//   // Force re-render on editor updates
//   useEffect(() => {
//     if (!editor) return;
//     const handler = () => setUpdate(u => u + 1);
//     editor.on("update", handler);
//     editor.on("selectionUpdate", handler);
//     return () => {
//       editor.off("update", handler);
//       editor.off("selectionUpdate", handler);
//     };
//   }, [editor]);

//   if (!editor) return null;

//   return (
//     <div className="p-5">
//       <div className="control-group">
//         <div className="button-group flex gap-3">

//           {/* Bold */}
//           <button
//             onClick={() => editor.chain().focus().toggleBold().run()}
//             className={editor.isActive("bold") ? "text-blue-500" : ""}
//           >
//             <Bold />
//           </button>

//           {/* Italic */}
//           <button
//             onClick={() => editor.chain().focus().toggleItalic().run()}
//             className={editor.isActive("italic") ? "text-blue-500" : ""}
//           >
//             <Italic />
//           </button>

//           {/* Underline */}
//           <button
//             onClick={() => editor.chain().focus().toggleUnderline().run()}
//             className={editor.isActive("underline") ? "text-blue-500" : ""}
//           >
//             <Underline />
//           </button>

//           {/* Highlight */}
//           <button
//             onClick={() => editor.chain().focus().toggleHighlight().run()}
//             className={editor.isActive("highlight") ? "text-blue-500" : ""}
//           >
//             <Highlighter />
//           </button>

//           {/* Headings */}
//           <button
//             onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//             className={editor.isActive("heading", { level: 1 }) ? "text-blue-500" : ""}
//           >
//             <Heading1 />
//           </button>

//           <button
//             onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//             className={editor.isActive("heading", { level: 2 }) ? "text-blue-500" : ""}
//           >
//             <Heading2 />
//           </button>

//           <button
//             onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//             className={editor.isActive("heading", { level: 3 }) ? "text-blue-500" : ""}
//           >
//             <Heading3 />
//           </button>

//           {/* Horizontal Rule */}
//           <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
//             <Minus />
//           </button>

//           {/* Bullet List */}
//           <button
//             onClick={() => editor.chain().focus().toggleBulletList().run()}
//             className={editor.isActive("bulletList") ? "text-blue-500" : ""}
//           >
//             <List />
//           </button>

//           {/* Alignments */}
//           <button
//             onClick={() => editor.chain().focus().setTextAlign("left").run()}
//             className={editor.isActive({ textAlign: "left" }) ? "text-blue-500" : ""}
//           >
//             <AlignLeft />
//           </button>

//           <button
//             onClick={() => editor.chain().focus().setTextAlign("center").run()}
//             className={editor.isActive({ textAlign: "center" }) ? "text-blue-500" : ""}
//           >
//             <AlignCenter />
//           </button>

//           <button
//             onClick={() => editor.chain().focus().setTextAlign("right").run()}
//             className={editor.isActive({ textAlign: "right" }) ? "text-blue-500" : ""}
//           >
//             <AlignRight />
//           </button>

//           <button
//             onClick={() => editor.chain().focus().setTextAlign("justify").run()}
//             className={editor.isActive({ textAlign: "justify" }) ? "text-blue-500" : ""}
//           >
//             <AlignJustify />
//           </button>

//           <button
//             onClick={() => onAiClick()}
//             className={"hover:text-blue-500"}
//           >
//             <Sparkles />
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditiorExtension;



// import React, { useEffect, useState } from "react";
// import { 
//   Bold, 
//   Highlighter, 
//   Italic, 
//   Minus, 
//   Underline, 
//   Heading1, 
//   Heading2, 
//   Heading3, 
//   List, 
//   Sparkles
// } from "lucide-react";
// import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";
// import { useAction, useMutation } from "convex/react";
// import { useParams } from "next/navigation";
// import { api } from "@/convex/_generated/api";
// import { chatSession } from "@/configs/AIModel";
// import { toast } from "sonner";
// import { useUser } from "@clerk/nextjs";

// function EditiorExtension({ editor }) {
//     const {fileId}=useParams();
//     const SearchAI=useAction(api.myAction.search)
//     const saveNotes=useMutation(api.notes.AddNotes)
//     const {user}=useUser();
    
//     const onAiClick=async()=>{
//         toast("AI is getting your answer...")
//         const selectedText=editor.state.doc.textBetween(
//             editor.state.selection.from,
//             editor.state.selection.to,
//             ' '
//         );
//         console.log("selectedText", selectedText);

//         const result=await SearchAI({
//             query:selectedText,
//             fileId:fileId
//         })

//         const UnformattedAns=JSON.parse(result);
//         let AllUnformattedAns='';
//        UnformattedAns&&UnformattedAns.forEach(item=>{
//                AllUnformattedAns=AllUnformattedAns+item.pageContent
//        });

//        const PROMT="For question :"+selectedText+" and with the given content as answer,"+
//        " please give appropriate answer in HTML format. The answer content is: "+AllUnformattedAns;

//        const AiModelResult=await chatSession.sendMessage(PROMT);
//        console.log(AiModelResult.response.text());
//        const FinalAns=AiModelResult.response.text().replace('``````','');

//        const AllText=editor.getHTML();
//        editor.commands.setContent(AllText+'<p> <strong>Answer: </strong>'+FinalAns+' </p>');

//        saveNotes({
//         notes:editor.getHTML(),
//         fileId:fileId,
//         createdBy:user?.primaryEmailAddress?.emailAddress
//        })
//     }

//     // Auto-save functionality
//     useEffect(() => {
//         if (!editor) return;

//         let timeoutId;
        
//         const handleUpdate = () => {
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 const content = editor.getHTML();
//                 if (content && fileId) {
//                     saveNotes({
//                         notes: content,
//                         fileId: fileId,
//                         createdBy: user?.primaryEmailAddress?.emailAddress
//                     });
//                 }
//             }, 2000);
//         };

//         editor.on("update", handleUpdate);

//         return () => {
//             clearTimeout(timeoutId);
//             editor.off("update", handleUpdate);
//         };
//     }, [editor, fileId, saveNotes, user]);

//     const [update, setUpdate] = useState(0);

//     // Force re-render on editor updates
//     useEffect(() => {
//         if (!editor) return;
//         const handler = () => setUpdate(u => u + 1);
//         editor.on("update", handler);
//         editor.on("selectionUpdate", handler);
//         return () => {
//             editor.off("update", handler);
//             editor.off("selectionUpdate", handler);
//         };
//     }, [editor]);

//     if (!editor) return null;

//     return (
//         <div className="p-5">
//             <div className="control-group">
//                 <div className="button-group flex gap-3">

//                     {/* Bold */}
//                     <button
//                         onClick={() => editor.chain().focus().toggleBold().run()}
//                         className={editor.isActive("bold") ? "text-blue-500" : ""}
//                     >
//                         <Bold />
//                     </button>

//                     {/* Italic */}
//                     <button
//                         onClick={() => editor.chain().focus().toggleItalic().run()}
//                         className={editor.isActive("italic") ? "text-blue-500" : ""}
//                     >
//                         <Italic />
//                     </button>

//                     {/* Underline */}
//                     <button
//                         onClick={() => editor.chain().focus().toggleUnderline().run()}
//                         className={editor.isActive("underline") ? "text-blue-500" : ""}
//                     >
//                         <Underline />
//                     </button>

//                     {/* Highlight */}
//                     <button
//                         onClick={() => editor.chain().focus().toggleHighlight().run()}
//                         className={editor.isActive("highlight") ? "text-blue-500" : ""}
//                     >
//                         <Highlighter />
//                     </button>

//                     {/* Headings */}
//                     <button
//                         onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
//                         className={editor.isActive("heading", { level: 1 }) ? "text-blue-500" : ""}
//                     >
//                         <Heading1 />
//                     </button>

//                     <button
//                         onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//                         className={editor.isActive("heading", { level: 2 }) ? "text-blue-500" : ""}
//                     >
//                         <Heading2 />
//                     </button>

//                     <button
//                         onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
//                         className={editor.isActive("heading", { level: 3 }) ? "text-blue-500" : ""}
//                     >
//                         <Heading3 />
//                     </button>

//                     {/* Horizontal Rule */}
//                     <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
//                         <Minus />
//                     </button>

//                     {/* Bullet List */}
//                     <button
//                         onClick={() => editor.chain().focus().toggleBulletList().run()}
//                         className={editor.isActive("bulletList") ? "text-blue-500" : ""}
//                     >
//                         <List />
//                     </button>

//                     {/* Alignments */}
//                     <button
//                         onClick={() => editor.chain().focus().setTextAlign("left").run()}
//                         className={editor.isActive({ textAlign: "left" }) ? "text-blue-500" : ""}
//                     >
//                         <AlignLeft />
//                     </button>

//                     <button
//                         onClick={() => editor.chain().focus().setTextAlign("center").run()}
//                         className={editor.isActive({ textAlign: "center" }) ? "text-blue-500" : ""}
//                     >
//                         <AlignCenter />
//                     </button>

//                     <button
//                         onClick={() => editor.chain().focus().setTextAlign("right").run()}
//                         className={editor.isActive({ textAlign: "right" }) ? "text-blue-500" : ""}
//                     >
//                         <AlignRight />
//                     </button>

//                     <button
//                         onClick={() => editor.chain().focus().setTextAlign("justify").run()}
//                         className={editor.isActive({ textAlign: "justify" }) ? "text-blue-500" : ""}
//                     >
//                         <AlignJustify />
//                     </button>

//                     <button
//                         onClick={() => onAiClick()}
//                         className={"hover:text-blue-500"}
//                     >
//                         <Sparkles />
//                     </button>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EditiorExtension;



import React, { useEffect, useState } from "react";
import { 
  Bold, 
  Highlighter, 
  Italic, 
  Minus, 
  Underline, 
  Heading1, 
  Heading2, 
  Heading3, 
  List, 
  Sparkles
} from "lucide-react";
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";
import { useAction, useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { chatSession } from "@/configs/AIModel";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";

function EditiorExtension({ editor }) {
  const {fileId} = useParams();
  const SearchAI = useAction(api.myAction.search);
  const saveNotes = useMutation(api.notes.AddNotes);
  const {user} = useUser();
  const [update, setUpdate] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  // Auto Save Effect with debounce 2 seconds
  useEffect(() => {
    if (!editor) return;

    let timeoutId;

    const handler = () => {
      setUpdate(u => u + 1);
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const content = editor.getHTML();
        if(content && fileId) {
          setIsSaving(true);
          saveNotes({
            notes: content,
            fileId: fileId,
            createdBy: user?.primaryEmailAddress?.emailAddress
          }).finally(() => {
            setIsSaving(false);
          });
        }
      }, 2000);
    };

    editor.on("update", handler);
    editor.on("selectionUpdate", handler);

    return () => {
      clearTimeout(timeoutId);
      editor.off("update", handler);
      editor.off("selectionUpdate", handler);
    };
  }, [editor, fileId, saveNotes, user]);

  const onAiClick = async () => {
    toast("AI is getting your answer...");
    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      ' '
    );
    console.log("selectedText", selectedText);

    try {
      const result = await SearchAI({
        query: selectedText,
        fileId: fileId
      });

      const UnformattedAns = JSON.parse(result);
      let AllUnformattedAns = '';
      UnformattedAns && UnformattedAns.forEach(item => {
        AllUnformattedAns = AllUnformattedAns + item.pageContent;
      });

      const PROMT="For question :"+selectedText+" and with the given content as answer,"+
        " please give appropriate answer in HTML format. The answer content is: "+AllUnformattedAns;

      const AiModelResult = await chatSession.sendMessage(PROMT);
      console.log(AiModelResult.response.text());
      const FinalAns = AiModelResult.response.text().replace('``````','').replace('html','').replace('```','').replace('```','');

      const AllText = editor.getHTML();
      editor.commands.setContent(AllText + '<p> <strong>Answer: </strong>' + FinalAns + ' </p>');

      saveNotes({
        notes: editor.getHTML(),
        fileId: fileId,
        createdBy: user?.primaryEmailAddress?.emailAddress
      });
    } catch(error) {
      toast.error('Failed to fetch AI answer');
      console.error(error);
    }
  };

  if(!editor) return null;

  return (
    <div className="p-5">
      <div className="control-group">
        <div className="button-group flex gap-3">

          {isSaving && (
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Saving...
            </div>
          )}

          {/* Bold */}
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "text-blue-500" : ""}
          >
            <Bold />
          </button>

          {/* Italic */}
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "text-blue-500" : ""}
          >
            <Italic />
          </button>

          {/* Underline */}
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "text-blue-500" : ""}
          >
            <Underline />
          </button>

          {/* Highlight */}
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive("highlight") ? "text-blue-500" : ""}
          >
            <Highlighter />
          </button>

          {/* Headings */}
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive("heading", { level: 1 }) ? "text-blue-500" : ""}
          >
            <Heading1 />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive("heading", { level: 2 }) ? "text-blue-500" : ""}
          >
            <Heading2 />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive("heading", { level: 3 }) ? "text-blue-500" : ""}
          >
            <Heading3 />
          </button>

          {/* Horizontal Rule */}
          <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <Minus />
          </button>

          {/* Bullet List */}
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "text-blue-500" : ""}
          >
            <List />
          </button>

          {/* Alignments */}
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={editor.isActive({ textAlign: "left" }) ? "text-blue-500" : ""}
          >
            <AlignLeft />
          </button>

          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={editor.isActive({ textAlign: "center" }) ? "text-blue-500" : ""}
          >
            <AlignCenter />
          </button>

          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={editor.isActive({ textAlign: "right" }) ? "text-blue-500" : ""}
          >
            <AlignRight />
          </button>

          <button
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            className={editor.isActive({ textAlign: "justify" }) ? "text-blue-500" : ""}
          >
            <AlignJustify />
          </button>

          <button
            onClick={() => onAiClick()}
            className={"hover:text-blue-500"}
          >
            <Sparkles />
          </button>

        </div>
      </div>
    </div>
  );
}

export default EditiorExtension;
