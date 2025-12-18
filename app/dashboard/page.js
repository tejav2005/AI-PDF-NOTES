// "use client"
// import { api } from '@/convex/_generated/api';
// import { useUser } from '@clerk/nextjs'
// import { useQuery } from 'convex/react';
// import { Image, Link } from 'next/image';
// import React from 'react'

// function Dashboard() {
//   const {user}=useUser();

//   const fileList=useQuery(api.fileStorage.GetUserFiles,{
//     userEmail:user?.primaryEmailAddress?.emailAddress
//   });

//   console.log(fileList);


//   return (
//     <div>
//       <h2 className='font-medium text-3xl'>Workspace</h2>
      
//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
//       xl:grid-cols-5 gap-5 mt-10'>
//         {fileList?.length>0?fileList?.map((file,index)=>(
//           <Link href={'/workspace/'+file.fileId}>
//           <div key={index} className='flex p-5 shadow-md flex-col
//            items-center justify-center border cursor-pointer hover:scale-105 transition-all'>
//             <Image src={'/pdf.png'} alt='file' width={50} height={50}/>
//             <h2 className='mt-3 font-medium text-lg'>{file?.fileName}</h2>
//             {/* <h2>{file._creationTime}</h2> */}
//             </div>
//             </Link>
//         ))
//       : [1,2,3,4,5,6,7].map((item,index)=>(
//         <div key={index} className='bg-slate-200 rounded-md h-[150px] animate-pulse'></div>
//       ))
//       }
//       </div>
//     </div>
//   )
// }

// export default Dashboard


// "use client"
// import { api } from '@/convex/_generated/api';
// import { useUser } from '@clerk/nextjs';
// import { useQuery } from 'convex/react';
// import React from 'react';

// function Dashboard() {
//   const { user } = useUser();

//   // Use a dummy object or undefined if user isn't ready
//   const fileList = useQuery(
//     api.fileStorage.GetUserFiles,
//     user?.primaryEmailAddress?.emailAddress
//       ? { userEmail: user.primaryEmailAddress.emailAddress }
//       : undefined
//   );

//   return (
//     <div>
//       <h2 className='font-medium text-3xl'>Workspace</h2>
//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10'>
//         {fileList?.length > 0
//           ? fileList.map((file) => (
//               <a key={file.fileId} href={`/workspace/${file.fileId}`}>
//                 <div className='flex p-5 shadow-md flex-col items-center justify-center border cursor-pointer hover:scale-105 transition-all'>
//                   <img src="/pdf.png" alt="file" width={50} height={50} />
//                   <h2 className='mt-3 font-medium text-lg'>{file?.fileName}</h2>
//                 </div>
//               </a>
//             ))
//           : [1,2,3,4,5,6,7].map((item) => (
//               <div key={item} className='bg-slate-200 rounded-md h-[150px] animate-pulse'></div>
//             ))
//         }
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



// "use client"
// import { api } from '@/convex/_generated/api';
// import { useUser } from '@clerk/nextjs';
// import { useQuery } from 'convex/react';
// import React from 'react';

// function Dashboard() {
//   const { user } = useUser();

//   // Use a dummy object or undefined if user isn't ready
//   const fileList = useQuery(
//     api.fileStorage.GetUserFiles,
//     user?.primaryEmailAddress?.emailAddress
//       ? { userEmail: user.primaryEmailAddress.emailAddress }
//       : undefined
//   );

//   return (
//     <div className="p-8">
//       <h2 className='font-medium text-3xl'>Workspace</h2>
//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10'>
//         {fileList?.length > 0
//           ? fileList.map((file) => (
//               <a key={file.fileId} href={`/workspace/${file.fileId}`}>
//                 <div className='flex p-5 shadow-md flex-col items-center justify-center border cursor-pointer hover:scale-105 transition-all'>
//                   <img src="/pdf.png" alt="file" width={50} height={50} />
//                   <h2 className='mt-3 font-medium text-lg'>{file?.fileName}</h2>
//                 </div>
//               </a>
//             ))
//           : [1,2,3,4,5,6,7].map((item) => (
//               <div key={item} className='bg-slate-200 rounded-md h-[150px] animate-pulse'></div>
//             ))
//         }
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// "use client"
// import { useState } from 'react'
// import { api } from '@/convex/_generated/api'
// import { useUser } from '@clerk/nextjs'
// import { useQuery, useMutation } from 'convex/react'
// import React from 'react'
// import { toast } from 'sonner'
// import { Trash2 } from 'lucide-react'

// function Dashboard() {
//   const { user } = useUser()
//   const [isDeleting, setIsDeleting] = useState(false)

//   // Query for user info to check if paid
//   const GetUserInfo = useQuery(api.user.GetUserInfo, {
//     userEmail: user?.primaryEmailAddress?.emailAddress,
//   })

//   // Query user files
//   const fileList = useQuery(
//     api.fileStorage.GetUserFiles,
//     user?.primaryEmailAddress?.emailAddress
//       ? { userEmail: user.primaryEmailAddress.emailAddress }
//       : undefined
//   )

//   // Delete file mutation
//   const deleteFile = useMutation(api.fileStorage.deleteFile)

//   // Handle deleting a file with confirmation
//   const handleDelete = async (file) => {
//     if (!confirm(`Are you sure you want to delete '${file.fileName}'?`)) return
//     try {
//       setIsDeleting(true)
//       await deleteFile({
//         storageId: file.storageId,
//         fileId: file.fileId,
//         userEmail: user.primaryEmailAddress.emailAddress,
//       })
//       toast.success('File deleted successfully')
//     } catch (err) {
//       toast.error(err.message || 'Failed to delete file')
//     } finally {
//       setIsDeleting(false)
//     }
//   }

//   return (
//     <div className="p-8">
//       <h2 className="font-medium text-3xl">Workspace</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
//         {fileList?.length > 0
//           ? fileList.map((file) => (
//               <div
//                 key={file.fileId}
//                 className="relative flex p-5 shadow-md flex-col items-center justify-center border cursor-pointer hover:scale-105 transition-all"
//               >
//                 {GetUserInfo?.upgrade && (
//                   <button
//                     onClick={() => handleDelete(file)}
//                     disabled={isDeleting}
//                     title="Delete PDF"
//                     className="absolute top-2 right-2 p-1 rounded hover:bg-red-100"
//                   >
//                     <Trash2 className="text-red-600 w-5 h-5" />
//                   </button>
//                 )}
//                 <a href={`/workspace/${file.fileId}`} className='flex flex-col items-center'>
//                   <img src="/pdf.png" alt="file" width={50} height={50} />
//                   <h2 className="mt-3 font-medium text-lg">{file.fileName}</h2>
//                 </a>
//               </div>
//             ))
//           : [1, 2, 3, 4, 5, 6, 7].map((item) => (
//               <div key={item} className="bg-slate-200 rounded-md h-[150px] animate-pulse"></div>
//             ))}
//       </div>
//     </div>
//   )
// }

// export default Dashboard



// "use client"
// import { useState } from 'react'
// import { api } from '@/convex/_generated/api'
// import { useUser } from '@clerk/nextjs'
// import { useQuery, useMutation } from 'convex/react'
// import React from 'react'
// import { toast } from 'sonner'
// import { Trash2, FileText, Plus, Folder, ArrowRight } from 'lucide-react'

// function Dashboard() {
//   const { user } = useUser()
//   const [isDeleting, setIsDeleting] = useState(false)

//   // Query for user info to check if paid
//   const GetUserInfo = useQuery(api.user.GetUserInfo, {
//     userEmail: user?.primaryEmailAddress?.emailAddress,
//   })

//   // Query user files
//   const fileList = useQuery(
//     api.fileStorage.GetUserFiles,
//     user?.primaryEmailAddress?.emailAddress
//       ? { userEmail: user.primaryEmailAddress.emailAddress }
//       : undefined
//   )

//   // Delete file mutation
//   const deleteFile = useMutation(api.fileStorage.deleteFile)

//   // Handle deleting a file with confirmation
//   const handleDelete = async (file, e) => {
//     e.preventDefault() // Prevent navigation when clicking delete
//     e.stopPropagation()
    
//     if (!confirm(`Are you sure you want to delete '${file.fileName}'?`)) return
//     try {
//       setIsDeleting(true)
//       await deleteFile({
//         storageId: file.storageId,
//         fileId: file.fileId,
//         userEmail: user.primaryEmailAddress.emailAddress,
//       })
//       toast.success('File deleted successfully')
//     } catch (err) {
//       toast.error(err.message || 'Failed to delete file')
//     } finally {
//       setIsDeleting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tl from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
//       </div>

//       <div className="relative z-10">
//         {/* Header Section */}
//         <div className="mb-8">
//           <div className="flex items-center gap-3 mb-2">
//             <Folder className="w-8 h-8 text-indigo-400" />
//             <h2 className="text-4xl font-bold text-white">Workspace</h2>
//           </div>
//           <p className="text-gray-400 text-lg">
//             Manage your PDF documents and AI-generated notes
//           </p>
//         </div>

//         {/* Files Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
//           {fileList?.length > 0
//             ? fileList.map((file) => (
//                 <a
//                   key={file.fileId}
//                   href={`/workspace/${file.fileId}`}
//                   className="group relative block"
//                 >
//                   <div className="h-48 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 hover:bg-white/10 cursor-pointer overflow-hidden">
//                     {/* Delete Button for Paid Users */}
//                     {GetUserInfo?.upgrade && (
//                       <button
//                         onClick={(e) => handleDelete(file, e)}
//                         disabled={isDeleting}
//                         title="Delete PDF"
//                         className="absolute top-3 right-3 p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-all opacity-0 group-hover:opacity-100 z-10"
//                       >
//                         <Trash2 className="text-red-400 w-4 h-4" />
//                       </button>
//                     )}

//                     {/* PDF Icon */}
//                     <div className="flex justify-center mb-4">
//                       <div className="w-16 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
//                         <FileText className="w-8 h-8 text-white" />
//                       </div>
//                     </div>

//                     {/* File Name */}
//                     <h3 className="text-white font-semibold text-center text-sm line-clamp-2 mb-2 group-hover:text-indigo-300 transition-colors">
//                       {file.fileName}
//                     </h3>

//                     {/* File Badge */}
//                     <div className="flex justify-center">
//                       <span className="text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full">
//                         PDF Document
//                       </span>
//                     </div>

//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
//                       <div className="flex items-center gap-2 text-white font-semibold">
//                         <span>Open</span>
//                         <ArrowRight className="w-4 h-4" />
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               ))
//             : // Loading Skeletons
//               [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//                 <div
//                   key={item}
//                   className="h-48 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl animate-pulse"
//                 >
//                   <div className="flex justify-center mb-4">
//                     <div className="w-16 h-20 bg-gray-700 rounded-lg"></div>
//                   </div>
//                   <div className="space-y-2">
//                     <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
//                     <div className="h-3 bg-gray-700 rounded w-1/2 mx-auto"></div>
//                   </div>
//                 </div>
//               ))}
//         </div>

//         {/* Empty State */}
//         {fileList?.length === 0 && (
//           <div className="text-center py-16">
//             <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-xl">
//               <Plus className="w-12 h-12 text-gray-400" />
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-2">No documents yet</h3>
//             <p className="text-gray-400 mb-6">Upload your first PDF to get started with AI-powered notes</p>
//           </div>
//         )}

//         {/* Stats Cards */}
//         {fileList?.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//             <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-400 text-sm font-medium">Total Documents</p>
//                   <p className="text-3xl font-bold text-indigo-400">{fileList?.length || 0}</p>
//                 </div>
//                 <FileText className="w-8 h-8 text-indigo-400" />
//               </div>
//             </div>

//             <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-400 text-sm font-medium">Storage Used</p>
//                   <p className="text-3xl font-bold text-purple-400">{Math.round((fileList?.length || 0) * 2.5)}MB</p>
//                 </div>
//                 <Folder className="w-8 h-8 text-purple-400" />
//               </div>
//             </div>

//             <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-400 text-sm font-medium">Account Status</p>
//                   <p className="text-3xl font-bold text-green-400">{GetUserInfo?.upgrade ? 'Pro' : 'Free'}</p>
//                 </div>
//                 <div className={`w-8 h-8 rounded-full ${GetUserInfo?.upgrade ? 'bg-green-400' : 'bg-gray-400'}`}></div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }
//         @keyframes float {
//           0%, 100% { 
//             transform: translateY(0) rotate(0deg);
//           }
//           50% { 
//             transform: translateY(-30px) rotate(180deg);
//           }
//         }
//         .shadow-3xl {
//           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//         }
//       `}</style>
//     </div>
//   )
// }

// export default Dashboard



// "use client"
// import { useState } from 'react'
// import { api } from '@/convex/_generated/api'
// import { useUser } from '@clerk/nextjs'
// import { useQuery, useMutation } from 'convex/react'
// import React from 'react'
// import { toast } from 'sonner'
// import { Trash2, FileText, Plus, Folder, ArrowRight, TrendingUp, Database, Shield } from 'lucide-react'

// function Dashboard() {
//   const { user } = useUser()
//   const [isDeleting, setIsDeleting] = useState(false)

//   const GetUserInfo = useQuery(api.user.GetUserInfo, {
//     userEmail: user?.primaryEmailAddress?.emailAddress,
//   })

//   const fileList = useQuery(
//     api.fileStorage.GetUserFiles,
//     user?.primaryEmailAddress?.emailAddress
//       ? { userEmail: user.primaryEmailAddress.emailAddress }
//       : undefined
//   )

//   const deleteFile = useMutation(api.fileStorage.deleteFile)

//   const handleDelete = async (file, e) => {
//     e.preventDefault()
//     e.stopPropagation()
    
//     if (!confirm(`Are you sure you want to delete '${file.fileName}'?`)) return
//     try {
//       setIsDeleting(true)
//       await deleteFile({
//         storageId: file.storageId,
//         fileId: file.fileId,
//         userEmail: user.primaryEmailAddress.emailAddress,
//       })
//       toast.success('Document deleted successfully!')
//     } catch (err) {
//       toast.error(err.message || 'Failed to delete document')
//     } finally {
//       setIsDeleting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-8 relative">
//       {/* Subtle background pattern */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-blue-100/20 via-indigo-50/10 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-100/20 via-pink-50/10 to-transparent rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10">
//         {/* Premium Header */}
//         <div className="mb-10">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
//               <Folder className="w-8 h-8 text-white" />
//             </div>
//             <div>
//               <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
//                 Document Workspace
//               </h1>
//               <p className="text-xl text-gray-600 font-medium mt-1">
//                 Manage and organize your intelligent PDF documents
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Stats Overview */}
//         {fileList?.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//             <div className="bg-gradient-to-br from-blue-50 to-indigo-100/50 rounded-3xl p-6 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-blue-800 font-bold text-lg">Total Documents</p>
//                   <p className="text-4xl font-black text-blue-600 mt-1">{fileList?.length}</p>
//                   <p className="text-sm text-blue-700 mt-1">Active files</p>
//                 </div>
//                 <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
//                   <FileText className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-emerald-50 to-teal-100/50 rounded-3xl p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-emerald-800 font-bold text-lg">Storage Used</p>
//                   <p className="text-4xl font-black text-emerald-600 mt-1">{Math.round((fileList?.length || 0) * 2.5)}MB</p>
//                   <p className="text-sm text-emerald-700 mt-1">Cloud storage</p>
//                 </div>
//                 <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center">
//                   <Database className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-purple-50 to-pink-100/50 rounded-3xl p-6 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-purple-800 font-bold text-lg">Plan Status</p>
//                   <p className="text-4xl font-black text-purple-600 mt-1">{GetUserInfo?.upgrade ? 'Pro' : 'Free'}</p>
//                   <p className="text-sm text-purple-700 mt-1">Current tier</p>
//                 </div>
//                 <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
//                   <Shield className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Documents Grid */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
//             <FileText className="w-7 h-7 text-blue-600" />
//             Your Documents
//             <span className="text-base font-normal text-gray-500">({fileList?.length || 0} files)</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
//           {fileList?.length > 0
//             ? fileList.map((file) => (
//                 <a
//                   key={file.fileId}
//                   href={`/workspace/${file.fileId}`}
//                   className="group relative block"
//                 >
//                   <div className="h-56 bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 rounded-3xl p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-300/50 cursor-pointer overflow-hidden relative">
//                     {/* Premium Delete Button */}
//                     {GetUserInfo?.upgrade && (
//                       <button
//                         onClick={(e) => handleDelete(file, e)}
//                         disabled={isDeleting}
//                         title="Delete Document"
//                         className="absolute top-4 right-4 w-10 h-10 bg-red-50 hover:bg-red-100 border-2 border-red-200 hover:border-red-300 rounded-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10 hover:scale-110"
//                       >
//                         <Trash2 className="text-red-600 w-5 h-5" />
//                       </button>
//                     )}

//                     {/* Document Icon */}
//                     <div className="flex justify-center mb-4">
//                       <div className="w-20 h-24 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 relative">
//                         <FileText className="w-10 h-10 text-white drop-shadow-lg" />
//                         <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
//                       </div>
//                     </div>

//                     {/* File Information */}
//                     <div className="text-center">
//                       <h3 className="text-gray-800 font-bold text-base line-clamp-2 mb-2 group-hover:text-blue-700 transition-colors min-h-[3rem] flex items-center justify-center">
//                         {file.fileName}
//                       </h3>
                      
//                       <div className="flex justify-center mb-4">
//                         <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
//                           PDF Document
//                         </span>
//                       </div>
//                     </div>

//                     {/* Hover Effect */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center">
//                       <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
//                         <span className="text-blue-700 font-bold">Open Document</span>
//                         <ArrowRight className="w-4 h-4 text-blue-700 group-hover:translate-x-1 transition-transform" />
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               ))
//             : // Premium Loading Skeletons
//               [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//                 <div
//                   key={item}
//                   className="h-56 bg-white/60 backdrop-blur-sm border-2 border-gray-200/50 rounded-3xl p-6 shadow-lg animate-pulse"
//                 >
//                   <div className="flex justify-center mb-4">
//                     <div className="w-20 h-24 bg-gray-300 rounded-2xl"></div>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="h-5 bg-gray-300 rounded-lg w-3/4 mx-auto"></div>
//                     <div className="h-4 bg-gray-300 rounded-lg w-1/2 mx-auto"></div>
//                     <div className="h-6 bg-gray-200 rounded-full w-2/3 mx-auto"></div>
//                   </div>
//                 </div>
//               ))}
//         </div>

//         {/* Premium Empty State */}
//         {fileList?.length === 0 && (
//           <div className="text-center py-20">
//             <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
//               <Plus className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
//             </div>
//             <h3 className="text-3xl font-bold text-gray-800 mb-3">Welcome to your Workspace</h3>
//             <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
//               Start by uploading your first PDF document to unlock the power of AI-driven insights and notes.
//             </p>
//             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 max-w-lg mx-auto border border-blue-200/50">
//               <p className="text-blue-800 font-semibold">
//                 💡 Pro Tip: Drag and drop PDF files directly into the upload area for faster processing!
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Dashboard



// "use client"
// import { useState, useRef } from 'react'
// import { api } from '@/convex/_generated/api'
// import { useUser } from '@clerk/nextjs'
// import { useQuery, useMutation } from 'convex/react'
// import React from 'react'
// import { toast } from 'sonner'
// import { Trash2, FileText, Plus, Folder, ArrowRight, TrendingUp, Database, Shield, Upload } from 'lucide-react'
// import UploadPdfDialog from './_components/UploadPdfDialog'

// function Dashboard() {
//   const { user } = useUser()
//   const [isDeleting, setIsDeleting] = useState(false)
//   const uploadRef = useRef(null)

//   const GetUserInfo = useQuery(api.user.GetUserInfo, {
//     userEmail: user?.primaryEmailAddress?.emailAddress,
//   })

//   const fileList = useQuery(
//     api.fileStorage.GetUserFiles,
//     user?.primaryEmailAddress?.emailAddress
//       ? { userEmail: user.primaryEmailAddress.emailAddress }
//       : undefined
//   )

//   const deleteFile = useMutation(api.fileStorage.deleteFile)

//   const handleDelete = async (file, e) => {
//     e.preventDefault()
//     e.stopPropagation()
    
//     if (!confirm(`Are you sure you want to delete '${file.fileName}'?`)) return
//     try {
//       setIsDeleting(true)
//       await deleteFile({
//         storageId: file.storageId,
//         fileId: file.fileId,
//         userEmail: user.primaryEmailAddress.emailAddress,
//       })
//       toast.success('Document deleted successfully!')
//     } catch (err) {
//       toast.error(err.message || 'Failed to delete document')
//     } finally {
//       setIsDeleting(false)
//     }
//   }

//   const handleUploadClick = () => {
//     uploadRef.current?.click()
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-8 relative">
//       {/* Subtle background pattern */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-blue-100/20 via-indigo-50/10 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-100/20 via-pink-50/10 to-transparent rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10">
//         {/* Premium Header */}
//         <div className="mb-10">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
//               <Folder className="w-8 h-8 text-white" />
//             </div>
//             <div>
//               <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
//                 Document Workspace
//               </h1>
//               <p className="text-xl text-gray-600 font-medium mt-1">
//                 Manage and organize your intelligent PDF documents
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Stats Overview */}
//         {fileList?.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//             <div className="bg-gradient-to-br from-blue-50 to-indigo-100/50 rounded-3xl p-6 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-blue-800 font-bold text-lg">Total Documents</p>
//                   <p className="text-4xl font-black text-blue-600 mt-1">{fileList?.length}</p>
//                   <p className="text-sm text-blue-700 mt-1">Active files</p>
//                 </div>
//                 <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
//                   <FileText className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-emerald-50 to-teal-100/50 rounded-3xl p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-emerald-800 font-bold text-lg">Storage Used</p>
//                   <p className="text-4xl font-black text-emerald-600 mt-1">{Math.round((fileList?.length || 0) * 2.5)}MB</p>
//                   <p className="text-sm text-emerald-700 mt-1">Cloud storage</p>
//                 </div>
//                 <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center">
//                   <Database className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-purple-50 to-pink-100/50 rounded-3xl p-6 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-purple-800 font-bold text-lg">Plan Status</p>
//                   <p className="text-4xl font-black text-purple-600 mt-1">{GetUserInfo?.upgrade ? 'Pro' : 'Free'}</p>
//                   <p className="text-sm text-purple-700 mt-1">Current tier</p>
//                 </div>
//                 <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
//                   <Shield className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Documents Grid */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
//             <FileText className="w-7 h-7 text-blue-600" />
//             Your Documents
//             <span className="text-base font-normal text-gray-500">({fileList?.length || 0} files)</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
//           {/* Add Upload Card for existing users */}
//           {fileList?.length > 0 && (
//             <div 
//               onClick={handleUploadClick}
//               className="h-56 bg-gradient-to-br from-indigo-50 to-blue-100 border-2 border-dashed border-indigo-300 rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer group flex items-center justify-center"
//             >
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
//                   <Plus className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-indigo-700 font-bold text-lg mb-2">Add New PDF</h3>
//                 <p className="text-indigo-600 text-sm">Click to upload another document</p>
//               </div>
//             </div>
//           )}

//           {fileList?.length > 0
//             ? fileList.map((file) => (
//                 <a
//                   key={file.fileId}
//                   href={`/workspace/${file.fileId}`}
//                   className="group relative block"
//                 >
//                   <div className="h-56 bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 rounded-3xl p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-300/50 cursor-pointer overflow-hidden relative">
//                     {/* Premium Delete Button */}
//                     {GetUserInfo?.upgrade && (
//                       <button
//                         onClick={(e) => handleDelete(file, e)}
//                         disabled={isDeleting}
//                         title="Delete Document"
//                         className="absolute top-4 right-4 w-10 h-10 bg-red-50 hover:bg-red-100 border-2 border-red-200 hover:border-red-300 rounded-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10 hover:scale-110"
//                       >
//                         <Trash2 className="text-red-600 w-5 h-5" />
//                       </button>
//                     )}

//                     {/* Document Icon */}
//                     <div className="flex justify-center mb-4">
//                       <div className="w-20 h-24 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 relative">
//                         <FileText className="w-10 h-10 text-white drop-shadow-lg" />
//                         <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
//                       </div>
//                     </div>

//                     {/* File Information */}
//                     <div className="text-center">
//                       <h3 className="text-gray-800 font-bold text-base line-clamp-2 mb-2 group-hover:text-blue-700 transition-colors min-h-[3rem] flex items-center justify-center">
//                         {file.fileName}
//                       </h3>
                      
//                       <div className="flex justify-center mb-4">
//                         <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
//                           PDF Document
//                         </span>
//                       </div>
//                     </div>

//                     {/* Hover Effect */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center">
//                       <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
//                         <span className="text-blue-700 font-bold">Open Document</span>
//                         <ArrowRight className="w-4 h-4 text-blue-700 group-hover:translate-x-1 transition-transform" />
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               ))
//             : // Premium Loading Skeletons
//               [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//                 <div
//                   key={item}
//                   className="h-56 bg-white/60 backdrop-blur-sm border-2 border-gray-200/50 rounded-3xl p-6 shadow-lg animate-pulse"
//                 >
//                   <div className="flex justify-center mb-4">
//                     <div className="w-20 h-24 bg-gray-300 rounded-2xl"></div>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="h-5 bg-gray-300 rounded-lg w-3/4 mx-auto"></div>
//                     <div className="h-4 bg-gray-300 rounded-lg w-1/2 mx-auto"></div>
//                     <div className="h-6 bg-gray-200 rounded-full w-2/3 mx-auto"></div>
//                   </div>
//                 </div>
//               ))}
//         </div>

//         {/* Premium Empty State */}
//         {fileList?.length === 0 && (
//           <div className="text-center py-20">
//             <div 
//               onClick={handleUploadClick}
//               className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl cursor-pointer hover:scale-110 transition-transform group"
//             >
//               <Plus className="w-16 h-16 text-blue-600 group-hover:rotate-90 transition-transform duration-300" strokeWidth={1.5} />
//             </div>
//             <h3 className="text-3xl font-bold text-gray-800 mb-3">Welcome to your Workspace</h3>
//             <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
//               Start by uploading your first PDF document to unlock the power of AI-driven insights and notes.
//             </p>
//             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 max-w-lg mx-auto border border-blue-200/50">
//               <p className="text-blue-800 font-semibold">
//                 💡 Pro Tip: Click the + icon above or drag and drop PDF files directly into the upload area for faster processing!
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Hidden UploadPdfDialog */}
//       <div className="hidden">
//         <UploadPdfDialog 
//           isMaxFile={fileList?.length >= 5 && !GetUserInfo?.upgrade}
//           ref={uploadRef}
//         >
//           <div></div>
//         </UploadPdfDialog>
//       </div>
//     </div>
//   )
// }

// export default Dashboard




"use client"
import { useState, useRef } from 'react'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { useQuery, useMutation, useAction } from 'convex/react'
import React from 'react'
import { toast } from 'sonner'
import { Trash2, FileText, Plus, Folder, ArrowRight, Database, Shield, Loader2Icon, Upload } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import uuid4 from 'uuid4'
import axios from 'axios'

function Dashboard() {
  const { user } = useUser()
  const [isDeleting, setIsDeleting] = useState(false)
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState("")

  const GetUserInfo = useQuery(api.user.GetUserInfo, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  })

  const fileList = useQuery(
    api.fileStorage.GetUserFiles,
    user?.primaryEmailAddress?.emailAddress
      ? { userEmail: user.primaryEmailAddress.emailAddress }
      : undefined
  )

  const deleteFile = useMutation(api.fileStorage.deleteFile)
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl)
  const addFileEntry = useMutation(api.fileStorage.AddFileEntryToDb)
  const getFileUrl = useMutation(api.fileStorage.getFileUrl)
  const embeddDocument = useAction(api.myAction.ingest)

  const handleDelete = async (file, e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!confirm(`Are you sure you want to delete '${file.fileName}'?`)) return
    try {
      setIsDeleting(true)
      await deleteFile({
        storageId: file.storageId,
        fileId: file.fileId,
        userEmail: user.primaryEmailAddress.emailAddress,
      })
      toast.success('Document deleted successfully!')
    } catch (err) {
      toast.error(err.message || 'Failed to delete document')
    } finally {
      setIsDeleting(false)
    }
  }

  const handleUploadClick = () => {
    setShowUploadDialog(true)
  }

  const OnFileSelect = (event) => {
    setFile(event.target.files[0])
  }

  const OnUpload = async () => {
    if (!file || !fileName) {
      toast.error("Please select a file and enter a file name")
      return
    }

    setLoading(true)

    try {
      const postUrl = await generateUploadUrl()
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file?.type },
        body: file,
      })
      const { storageId } = await result.json()
      const fileId = uuid4()
      const fileUrl = await getFileUrl({ storageId })

      await addFileEntry({
        fileId,
        storageId,
        fileName: fileName || "Untitled File",
        fileUrl,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      })

      const ApiResp = await axios.get("/api/pdf-loader?pdfUrl=" + fileUrl)
      await embeddDocument({
        splitText: ApiResp.data.result,
        fileId,
      })

      setLoading(false)
      setShowUploadDialog(false)
      
      // Reset form
      setFile(null)
      setFileName("")

      toast.success("File is ready!")
    } catch (error) {
      console.error("Upload error:", error)
      toast.error("Failed to upload file")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-8 relative">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-blue-100/20 via-indigo-50/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-100/20 via-pink-50/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Premium Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
              <Folder className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Document Workspace
              </h1>
              <p className="text-xl text-gray-600 font-medium mt-1">
                Manage and organize your intelligent PDF documents
              </p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        {fileList?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100/50 rounded-3xl p-6 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-800 font-bold text-lg">Total Documents</p>
                  <p className="text-4xl font-black text-blue-600 mt-1">{fileList?.length}</p>
                  <p className="text-sm text-blue-700 mt-1">Active files</p>
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-100/50 rounded-3xl p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-800 font-bold text-lg">Storage Used</p>
                  <p className="text-4xl font-black text-emerald-600 mt-1">{Math.round((fileList?.length || 0) * 2.5)}MB</p>
                  <p className="text-sm text-emerald-700 mt-1">Cloud storage</p>
                </div>
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100/50 rounded-3xl p-6 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-800 font-bold text-lg">Plan Status</p>
                  <p className="text-4xl font-black text-purple-600 mt-1">{GetUserInfo?.upgrade ? 'Pro' : 'Free'}</p>
                  <p className="text-sm text-purple-700 mt-1">Current tier</p>
                </div>
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Documents Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FileText className="w-7 h-7 text-blue-600" />
            Your Documents
            <span className="text-base font-normal text-gray-500">({fileList?.length || 0} files)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {/* Add Upload Card for existing users */}
          {fileList?.length > 0 && (
            <div 
              onClick={handleUploadClick}
              className="h-56 bg-gradient-to-br from-indigo-50 to-blue-100 border-2 border-dashed border-indigo-300 rounded-3xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer group flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-indigo-700 font-bold text-lg mb-2">Add New PDF</h3>
                <p className="text-indigo-600 text-sm">Click to upload another document</p>
              </div>
            </div>
          )}

          {fileList?.length > 0
            ? fileList.map((file) => (
                <a
                  key={file.fileId}
                  href={`/workspace/${file.fileId}`}
                  className="group relative block"
                >
                  <div className="h-56 bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 rounded-3xl p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-300/50 cursor-pointer overflow-hidden relative">
                    {/* Premium Delete Button */}
                    {GetUserInfo?.upgrade && (
                      <button
                        onClick={(e) => handleDelete(file, e)}
                        disabled={isDeleting}
                        title="Delete Document"
                        className="absolute top-4 right-4 w-10 h-10 bg-red-50 hover:bg-red-100 border-2 border-red-200 hover:border-red-300 rounded-xl flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10 hover:scale-110"
                      >
                        <Trash2 className="text-red-600 w-5 h-5" />
                      </button>
                    )}

                    {/* Document Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-24 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 relative">
                        <FileText className="w-10 h-10 text-white drop-shadow-lg" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                      </div>
                    </div>

                    {/* File Information */}
                    <div className="text-center">
                      <h3 className="text-gray-800 font-bold text-base line-clamp-2 mb-2 group-hover:text-blue-700 transition-colors min-h-[3rem] flex items-center justify-center">
                        {file.fileName}
                      </h3>
                      
                      <div className="flex justify-center mb-4">
                        <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
                          PDF Document
                        </span>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                        <span className="text-blue-700 font-bold">Open Document</span>
                        <ArrowRight className="w-4 h-4 text-blue-700 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              ))
            : // Premium Loading Skeletons
              [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="h-56 bg-white/60 backdrop-blur-sm border-2 border-gray-200/50 rounded-3xl p-6 shadow-lg animate-pulse"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-24 bg-gray-300 rounded-2xl"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-5 bg-gray-300 rounded-lg w-3/4 mx-auto"></div>
                    <div className="h-4 bg-gray-300 rounded-lg w-1/2 mx-auto"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-2/3 mx-auto"></div>
                  </div>
                </div>
              ))}
        </div>

        {/* Premium Empty State */}
        {fileList?.length === 0 && (
          <div className="text-center py-20">
            <div 
              onClick={handleUploadClick}
              className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl cursor-pointer hover:scale-110 transition-transform group"
            >
              <Plus className="w-16 h-16 text-blue-600 group-hover:rotate-90 transition-transform duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Welcome to your Workspace</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Start by uploading your first PDF document to unlock the power of AI-driven insights and notes.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 max-w-lg mx-auto border border-blue-200/50">
              <p className="text-blue-800 font-semibold">
                💡 Pro Tip: Click the + icon above or drag and drop PDF files directly into the upload area for faster processing!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Upload Dialog */}
      <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload PDF File</DialogTitle>
            <DialogDescription asChild>
              <div>
                <h2 className="mt-5">Select a file to Upload</h2>
                <div className="gap-2 p-3 rounded-md border">
                  <input 
                    type="file" 
                    accept="application/pdf" 
                    onChange={OnFileSelect} 
                  />
                </div>
                <div className="mt-2">
                  <label>File Name *</label>
                  <Input 
                    placeholder="File Name" 
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)} 
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button 
              onClick={OnUpload} 
              disabled={loading || !file || !fileName || (fileList?.length >= 5 && !GetUserInfo?.upgrade)}
            >
              {loading ? <Loader2Icon className="animate-spin" /> : "Upload"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Dashboard
