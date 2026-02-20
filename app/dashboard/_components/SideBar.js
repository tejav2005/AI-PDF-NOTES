// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { Layout,  Shield } from 'lucide-react'
// import { Progress } from '@/components/ui/progress'
// import UploadPdf from './UploadPdfDialog'
// import UploadPdfDialog from './UploadPdfDialog'
// import { useUser } from '@clerk/nextjs'
// import { useQuery } from 'convex/react'
// import { api } from '@/convex/_generated/api'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'

// function SideBar() {

//   const { user } = useUser();
//   const path=usePathname();
//   const GetUserInfo=useQuery(api.user.GetUserInfo,{
//     userEmail:user?.primaryEmailAddress?.emailAddress
//   })

//   console.log(GetUserInfo);

//   // Use a dummy object or undefined if user isn't ready
//   const fileList = useQuery(
//     api.fileStorage.GetUserFiles,
//     user?.primaryEmailAddress?.emailAddress
//       ? { userEmail: user.primaryEmailAddress.emailAddress }
//       : undefined
//   );

//   return (
//     <div className='shadow-md h-screen p-7'>
//         <Image src={'/logo.svg'} alt='logo' width={190} height={120}/>

//         <div className='mt-10'>  
//           <UploadPdfDialog isMaxFile={(fileList?.length>=5&&!GetUserInfo.upgrade)?true:false}>
//                 <Button className="w-full">+ Upload PDF</Button>
//             </UploadPdfDialog>
//             <Link href={'/dashboard'}>
//             <div className={`flex gap-2 items-center p-3 mt-5
//              hover:bg-slate-100 rounded-lg cursor-pointer 
//              ${path=='/dashboard'&&'bg-slate-200 '}
//             `}>
//                 <Layout/>
//                 <h2>Workspace</h2>
//             </div>
//             </Link>
//             <Link href={'/dashboard/upgrade'}>

//              <div className={`flex gap-2 items-center p-3 mt-1
//              hover:bg-slate-100 rounded-lg cursor-pointer
//              ${path=='/dashboard/upgrade'&&'bg-slate-200'}
//              `}>
//                 <Shield/>
//                 <h2>Upgrade</h2>
//             </div>
//             </Link>
//         </div>

//       {!GetUserInfo?.upgrade &&  <div className='absolute bottom-24 w-[80%]'>
//             <Progress value={(fileList?.length/5)*100}/>
//             <p className='text-sm mt-1'>{fileList?.length} out of 5 Pdf Uploaded</p>

//              <p className='text-sm text-gray-400 mt-2'>Upgrade to Upload more PDF</p>
//         </div>}
//      </div>
//   )
// }

// export default SideBar

// "use client"
// import React, { useState, useEffect } from 'react'
// import { Button } from '@/components/ui/button'
// import { Layout,  Shield } from 'lucide-react'
// import { Progress } from '@/components/ui/progress'
// import UploadPdfDialog from './UploadPdfDialog'
// import { useUser } from '@clerk/nextjs'
// import { useQuery } from 'convex/react'
// import { api } from '@/convex/_generated/api'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'

// function SideBar() {
//   const { user } = useUser();
//   const path=usePathname();
//   const [isClient, setIsClient] = useState(false);
  
//   const GetUserInfo=useQuery(api.user.GetUserInfo,{
//     userEmail:user?.primaryEmailAddress?.emailAddress
//   })

//   console.log(GetUserInfo);

//   // Use a dummy object or undefined if user isn't ready
//   const fileList = useQuery(
//     api.fileStorage.GetUserFiles,
//     user?.primaryEmailAddress?.emailAddress
//       ? { userEmail: user.primaryEmailAddress.emailAddress }
//       : undefined
//   );

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <div className='shadow-md h-screen p-7'>
//         {/* Updated Logo to match homepage with animate-pulse */}
//         <div className="text-2xl font-bold text-indigo-600 flex items-center gap-2 mb-10">
//           <div className={`w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg ${isClient ? 'animate-pulse' : ''}`}>
//             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M9 4.804A7.968 7.968 0 005.5 4c-.979 0-1.907.197-2.75.553v14.6c.828-.403 1.745-.618 2.75-.618s1.922.215 2.75.618V4.804zM11 4.804A7.968 7.968 0 0114.5 4c.979 0 1.907.197 2.75.553v14.6c-.828-.403-1.745-.618-2.75-.618s-1.922.215-2.75.618V4.804z"></path>
//             </svg>
//           </div>
//           <span>PDF AI Notes</span>
//         </div>

//         <div className='mt-10'>  
//           <UploadPdfDialog isMaxFile={(fileList?.length>=5&&!GetUserInfo?.upgrade)?true:false}>
//                 <Button className="w-full">+ Upload PDF</Button>
//             </UploadPdfDialog>
//             <Link href={'/dashboard'}>
//             <div className={`flex gap-2 items-center p-3 mt-5
//              hover:bg-slate-100 rounded-lg cursor-pointer 
//              ${path=='/dashboard'&&'bg-slate-200 '}
//             `}>
//                 <Layout/>
//                 <h2>Workspace</h2>
//             </div>
//             </Link>
//             <Link href={'/dashboard/upgrade'}>

//              <div className={`flex gap-2 items-center p-3 mt-1
//              hover:bg-slate-100 rounded-lg cursor-pointer
//              ${path=='/dashboard/upgrade'&&'bg-slate-200'}
//              `}>
//                 <Shield/>
//                 <h2>Upgrade</h2>
//             </div>
//             </Link>
//         </div>

//       {!GetUserInfo?.upgrade &&  <div className='absolute bottom-24 w-[80%]'>
//             <Progress value={(fileList?.length/5)*100}/>
//             <p className='text-sm mt-1'>{fileList?.length} out of 5 Pdf Uploaded</p>

//              <p className='text-sm text-gray-400 mt-2'>Upgrade to Upload more PDF</p>
//         </div>}
//      </div>
//   )
// }

// export default SideBar


// "use client"
// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Layout, Shield, Upload, Star, Zap, FileText, Crown } from "lucide-react";
// import { Progress } from "@/components/ui/progress";
// import UploadPdfDialog from "./UploadPdfDialog";
// import { useUser } from "@clerk/nextjs";
// import { useQuery } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// function SideBar() {
//   const { user } = useUser();
//   const path = usePathname();
//   const [isClient, setIsClient] = useState(false);

//   const GetUserInfo = useQuery(api.user.GetUserInfo, {
//     userEmail: user?.primaryEmailAddress?.emailAddress,
//   });

//   const fileList = useQuery(
//     api.fileStorage.GetUserFiles,
//     user?.primaryEmailAddress?.emailAddress
//       ? { userEmail: user.primaryEmailAddress.emailAddress }
//       : undefined
//   );

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <div className="h-screen p-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden border-r border-gray-200/50 shadow-2xl">
//       {/* Elegant background patterns */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-100/20 via-indigo-50/10 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-50/20 via-pink-50/10 to-transparent rounded-full blur-3xl"></div>
        
//         {/* Professional geometric pattern */}
//         <div className="absolute inset-0 opacity-[0.02]" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//         }}></div>
//       </div>

//       <div className="relative z-10 h-full flex flex-col">
//         {/* Premium Logo Section */}
//         <div className="mb-8">
//           <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-100/80 hover:shadow-xl transition-all duration-500">
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <div
//                   className={`w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg ${
//                     isClient ? "animate-pulse" : ""
//                   }`}
//                 >
//                   <svg
//                     className="w-8 h-8 text-white drop-shadow-lg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9 4.804A7.968 7.968 0 005.5 4c-.979 0-1.907.197-2.75.553v14.6c.828-.403 1.745-.618 2.75-.618s1.922.215 2.75.618V4.804zM11 4.804A7.968 7.968 0 0114.5 4c.979 0 1.907.197 2.75.553v14.6c-.828-.403-1.745-.618-2.75-.618s-1.922.215-2.75.618V4.804z" />
//                   </svg>
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-bounce"></div>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
//                   PDF AI Notes
//                 </h1>
//                 <p className="text-sm text-gray-600 font-medium">Professional Suite</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Premium Upload Section */}
//         <div className="mb-8">
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-1 shadow-xl">
//             <div className="bg-white/95 rounded-3xl p-5">
//               <UploadPdfDialog isMaxFile={fileList?.length >= 5 && !GetUserInfo?.upgrade}>
//                 <Button className="w-full h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-base rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-98 relative group overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
//                   <Upload className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
//                   <span className="relative z-10">Upload Document</span>
//                 </Button>
//               </UploadPdfDialog>
//             </div>
//           </div>
//         </div>

//         {/* Elegant Navigation */}
//         <nav className="flex-1 space-y-3">
//           <Link href="/dashboard">
//             <div
//               className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
//                 path === "/dashboard"
//                   ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg"
//                   : "hover:bg-white/70 border-2 border-transparent hover:border-gray-200/50 hover:shadow-md"
//               }`}
//             >
//               <div className="relative">
//                 <Layout className={`w-6 h-6 transition-all ${path === "/dashboard" ? "text-blue-600" : "text-gray-600 group-hover:text-blue-600"}`} />
//                 {path === "/dashboard" && (
//                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
//                 )}
//               </div>
//               <span className={`font-semibold text-base transition-all ${path === "/dashboard" ? "text-gray-800" : "text-gray-700 group-hover:text-gray-800"}`}>
//                 Workspace
//               </span>
//               {path === "/dashboard" && (
//                 <div className="ml-auto flex items-center gap-1">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//                   <div className="text-xs text-blue-600 font-bold">ACTIVE</div>
//                 </div>
//               )}
//             </div>
//           </Link>

//           <Link href="/dashboard/upgrade">
//             <div
//               className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
//                 path === "/dashboard/upgrade"
//                   ? "bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 shadow-lg"
//                   : "hover:bg-white/70 border-2 border-transparent hover:border-gray-200/50 hover:shadow-md"
//               }`}
//             >
//               <div className="relative">
//                 <Shield className={`w-6 h-6 transition-all ${path === "/dashboard/upgrade" ? "text-amber-600" : "text-gray-600 group-hover:text-amber-600"}`} />
//                 <Crown className="absolute -top-2 -right-2 w-4 h-4 text-amber-500 animate-bounce" />
//               </div>
//               <span className={`font-semibold text-base transition-all ${path === "/dashboard/upgrade" ? "text-gray-800" : "text-gray-700 group-hover:text-gray-800"}`}>
//                 Premium Plans
//               </span>
//               <div className="ml-auto">
//                 <Star className="w-5 h-5 text-amber-500 animate-pulse" fill="currentColor" />
//               </div>
//             </div>
//           </Link>
//         </nav>

//         {/* Premium Progress Card */}
//         {!GetUserInfo?.upgrade && (
//           <div className="mt-6">
//             <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50/50 rounded-3xl p-6 shadow-xl border border-gray-200/50">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
//                     <Zap className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-gray-800 font-bold">Storage Usage</h3>
//                     <p className="text-sm text-gray-600">Track your usage</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="relative mb-4">
//                 <Progress 
//                   value={(fileList?.length / 5) * 100} 
//                   className="h-3 bg-gray-200/50"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"></div>
//               </div>
              
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2">
//                   <FileText className="w-4 h-4 text-blue-600" />
//                   <span className="text-sm font-semibold text-gray-700">{fileList?.length} / 5 Documents</span>
//                 </div>
//                 <div className="flex items-center gap-1 bg-gradient-to-r from-amber-100 to-orange-100 px-3 py-1 rounded-full">
//                   <Crown className="w-3 h-3 text-amber-600" />
//                   <span className="text-xs font-bold text-amber-700">Upgrade for ∞</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default SideBar;





"use client"
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout, Shield, Upload, Star, Zap, FileText, Crown } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import UploadPdfDialog from "./UploadPdfDialog";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideBar() {
  const { user } = useUser();
  const path = usePathname();
  const [isClient, setIsClient] = useState(false);

  const GetUserInfo = useQuery(api.user.GetUserInfo, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  const fileList = useQuery(
    api.fileStorage.GetUserFiles,
    user?.primaryEmailAddress?.emailAddress
      ? { userEmail: user.primaryEmailAddress.emailAddress }
      : undefined
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-screen p-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden border-r border-gray-200/50 shadow-2xl">
      {/* Elegant background patterns */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-100/20 via-indigo-50/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-50/20 via-pink-50/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Professional geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Premium Logo Section */}
        <div className="mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-100/80 hover:shadow-xl transition-all duration-500">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div
                  className={`w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg ${
                    isClient ? "animate-pulse" : ""
                  }`}
                >
                  <svg
                    className="w-8 h-8 text-white drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-.979 0-1.907.197-2.75.553v14.6c.828-.403 1.745-.618 2.75-.618s1.922.215 2.75.618V4.804zM11 4.804A7.968 7.968 0 0114.5 4c.979 0 1.907.197 2.75.553v14.6c-.828-.403-1.745-.618-2.75-.618s-1.922.215-2.75.618V4.804z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-bounce"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  FocusFlow
                </h1>
                <p className="text-sm text-gray-600 font-medium">Professional Suite</p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Upload Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-1 shadow-xl">
            <div className="bg-white/95 rounded-3xl p-5">
              <UploadPdfDialog isMaxFile={fileList?.length >= 5 && !GetUserInfo?.upgrade}>
                <Button className="w-full h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-base rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-98 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <Upload className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Upload Document</span>
                </Button>
              </UploadPdfDialog>
            </div>
          </div>
        </div>

        {/* Elegant Navigation */}
        <nav className="flex-1 space-y-3">
          <Link href="/dashboard">
            <div
              className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
                path === "/dashboard"
                  ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg"
                  : "hover:bg-white/70 border-2 border-transparent hover:border-gray-200/50 hover:shadow-md"
              }`}
            >
              <div className="relative">
                <Layout className={`w-6 h-6 transition-all ${path === "/dashboard" ? "text-blue-600" : "text-gray-600 group-hover:text-blue-600"}`} />
                {path === "/dashboard" && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                )}
              </div>
              <span className={`font-semibold text-base transition-all ${path === "/dashboard" ? "text-gray-800" : "text-gray-700 group-hover:text-gray-800"}`}>
                Work
                space
              </span>
              {path === "/dashboard" && (
                <span className="ml-auto flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Active
                </span>
              )}
            </div>
          </Link>

          <Link href="/dashboard/upgrade">
            <div
              className={`group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
                path === "/dashboard/upgrade"
                  ? "bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 shadow-lg"
                  : "hover:bg-white/70 border-2 border-transparent hover:border-gray-200/50 hover:shadow-md"
              }`}
            >
              <div className="relative">
                <Shield className={`w-6 h-6 transition-all ${path === "/dashboard/upgrade" ? "text-amber-600" : "text-gray-600 group-hover:text-amber-600"}`} />
                <Crown className="absolute -top-2 -right-2 w-4 h-4 text-amber-500 animate-bounce" />
              </div>
              <span className={`font-semibold text-base transition-all ${path === "/dashboard/upgrade" ? "text-gray-800" : "text-gray-700 group-hover:text-gray-800"}`}>
                Premium Plans
              </span>
              {path === "/dashboard/upgrade" && (
                <span className="ml-auto flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Active
                </span>
              )}
              <div className="ml-auto">
                <Star className="w-5 h-5 text-amber-500 animate-pulse" fill="currentColor" />
              </div>
            </div>
          </Link>
        </nav>

        {/* Premium Progress Card */}
        {!GetUserInfo?.upgrade && (
          <div className="mt-6">
            <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50/50 rounded-3xl p-6 shadow-xl border border-gray-200/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold">Storage Usage</h3>
                    <p className="text-sm text-gray-600">Track your usage</p>
                  </div>
                </div>
              </div>
              
              <div className="relative mb-4">
                <Progress 
                  value={(fileList?.length / 5) * 100} 
                  className="h-3 bg-gray-200/50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"></div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700">{fileList?.length} / 5 Documents</span>
                </div>
                <div className="flex items-center gap-1 bg-gradient-to-r from-amber-100 to-orange-100 px-3 py-1 rounded-full">
                  <Crown className="w-3 h-3 text-amber-600" />
                  <span className="text-xs font-bold text-amber-700">Upgrade for ∞</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export default SideBar;
