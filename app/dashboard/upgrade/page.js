// "use client"
// import { api } from '@/convex/_generated/api';
// import { action } from '@/convex/_generated/server';
// import { useUser } from '@clerk/nextjs';
// import { PayPalButtons } from '@paypal/react-paypal-js';
// import { useMutation } from 'convex/react';
// import React, { useState } from 'react';
// import { toast } from 'sonner';

// function UpgradePlans() {
//   const userUpgradePlan=useMutation(api.user.userUpgradePlan );
//   const {user}=useUser();
//   const onPaymentSuccess=async()=>{
//        const result=await userUpgradePlan({userEmail:user?.primaryEmailAddress?.emailAddress})
//        console.log(result);
//        toast('Plan upgraded successfully')
//   }

//   const [selectedPlan, setSelectedPlan] = useState(null);

//   return (
//     <div>
//       <h2 className='font-medium text-3xl'>Plans</h2>
//       <p>Update your plan to upload multiple pdf to take notes</p>

//       <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">

//           {/* Free Plan */}
//           <div
//             className={`rounded-2xl p-6 shadow-xs sm:px-8 lg:p-12 transition-all duration-200
//               ${selectedPlan === 'free' ? 'border-2 border-indigo-600' : 'border border-gray-200'}`}
//             onClick={() => setSelectedPlan('free')}
//             style={{ cursor: 'pointer' }}
//           >
//             <div className="text-center">
//               <h2 className="text-lg font-medium text-gray-900">
//                 Free
//                 <span className="sr-only">Plan</span>
//               </h2>
//               <p className="mt-2 sm:mt-4">
//                 <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">0$</strong>
//                 <span className="text-sm font-medium text-gray-700">/month</span>
//               </p>
//             </div>
//             <ul className="mt-6 space-y-2 text-gray-700">
//               <li>5 PDF Upload</li>
//               <li>Unlimited Notes Taking</li>
//               <li>Email support</li>
//               <li>Help center access</li>
//             </ul>
//             <button
//               style={{ cursor: 'pointer' }}
//               className={`mt-8 block w-full rounded-full px-12 py-3 text-center text-sm font-medium focus:outline-none
//                 ${selectedPlan === 'free' ? 'bg-indigo-600 text-white border border-indigo-600' :
//                 'border border-indigo-600 text-indigo-600 bg-white'}
//               `}
//             >
//               Current Plan
//             </button>
//           </div>

//           {/* Unlimited Plan */}
//           <div
//             className={`rounded-2xl p-6 shadow-xs sm:px-8 lg:p-12 transition-all duration-200
//               ${selectedPlan === 'unlimited' ? 'border-2 border-indigo-600' : 'border border-gray-200'}`}
//             onClick={() => setSelectedPlan('unlimited')}
//             style={{ cursor: 'pointer' }}
//           >
//             <div className="text-center">
//               <h2 className="text-lg font-medium text-gray-900">
//                 Unlimited
//                 <span className="sr-only">Plan</span>
//               </h2>
//               <p className="mt-2 sm:mt-4">
//                 <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">9.99$</strong>
//                 <span className="text-sm font-medium text-gray-700">/One Time</span>
//               </p>
//             </div>
//             <ul className="mt-6 space-y-2 text-gray-700">
//               <li>Unlimited PDF Upload</li>
//               <li>Unlimited Notes Taking</li>
//               <li>Email support</li>
//               <li>Help center access</li>
//             </ul>
//             {/* <button
//               style={{ cursor: 'pointer' }}
//               className={`mt-8 block w-full rounded-full px-12 py-3 text-center text-sm font-medium focus:outline-none
//                 ${selectedPlan === 'unlimited' ? 'bg-indigo-600 text-white border border-indigo-600' :
//                 'border border-indigo-600 text-indigo-600 bg-white'}
//               `}
//             >
//               Get Started
//             </button> */}
//             <div className='mt-5'>
//             <PayPalButtons 
//             onApprove={()=>onPaymentSuccess()}
//             onCancel={()=>console.log("Payment Cancel")}
//             createOrder={(data,actions)=>{
//               return actions?.order?.create({
//                 purchase_units:[
//                   {
//                     amount:{
//                       value:9.99,
//                       currency_code:'USD'
//                     }
//                   }
//                 ]
//               })
//             }}
//             />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UpgradePlans;


"use client"
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useMutation } from 'convex/react';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Crown, Shield, Star, Check, Sparkles } from 'lucide-react';

function UpgradePlans() {
  const userUpgradePlan = useMutation(api.user.userUpgradePlan);
  const { user } = useUser();
  
  const onPaymentSuccess = async () => {
    const result = await userUpgradePlan({
      userEmail: user?.primaryEmailAddress?.emailAddress
    });
    console.log(result);
    toast('Plan upgraded successfully!');
  };

  const [selectedPlan, setSelectedPlan] = useState('unlimited');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-blue-100/20 via-indigo-50/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-100/20 via-pink-50/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-100/10 to-orange-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-xl">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Premium Plans
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Unlock unlimited potential with our premium features. Upload unlimited PDFs and create comprehensive AI-powered notes.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div
            className={`relative overflow-hidden rounded-3xl transition-all duration-300 cursor-pointer group ${
              selectedPlan === 'free' 
                ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-2 border-indigo-200 transform scale-105' 
                : 'bg-white/80 backdrop-blur-xl shadow-lg border-2 border-gray-200/50 hover:shadow-xl hover:border-indigo-200/50'
            }`}
            onClick={() => setSelectedPlan('free')}
          >
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
                  <Shield className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-600">STARTER</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Free Plan</h2>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-gray-800">$0</span>
                  <span className="text-lg font-medium text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  '5 PDF Uploads',
                  'Unlimited Notes Taking',
                  'Email Support',
                  'Help Center Access'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-gray-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-4 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl transition-all duration-300 border-2 border-gray-200"
                disabled
              >
                Current Plan
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div
            className={`relative overflow-hidden rounded-3xl transition-all duration-300 cursor-pointer group ${
              selectedPlan === 'unlimited' 
                ? 'bg-gradient-to-br from-indigo-50 to-purple-50 backdrop-blur-xl shadow-2xl border-2 border-indigo-300 transform scale-105' 
                : 'bg-white/90 backdrop-blur-xl shadow-xl border-2 border-indigo-200/50 hover:shadow-2xl hover:border-indigo-300'
            }`}
            onClick={() => setSelectedPlan('unlimited')}
          >
            {/* Popular Badge */}
            {/* <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" fill="currentColor" />
                  <span className="text-sm font-bold">MOST POPULAR</span>
                </div>
              </div>
            </div> */}

            <div className="p-8 pt-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full mb-4">
                  <Crown className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-semibold text-indigo-600">PREMIUM</span>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Unlimited Plan
                </h2>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    $9.99
                  </span>
                  <span className="text-lg font-medium text-gray-600">/one-time</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited PDF Uploads',
                  'Unlimited Notes Taking',
                  'Priority Email Support',
                  'Advanced Help Center Access',
                  'Premium AI Features'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <button
                  className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-800 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-98"
                  onClick={() => setSelectedPlan('unlimited')}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Upgrade Now</span>
                  </div>
                </button>

                {/* PayPal Integration */}
                {selectedPlan === 'unlimited' && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-indigo-200/50 shadow-lg">
                    <PayPalButtons 
                      onApprove={() => onPaymentSuccess()}
                      onCancel={() => console.log("Payment Cancelled")}
                      createOrder={(data, actions) => {
                        return actions?.order?.create({
                          purchase_units: [
                            {
                              amount: {
                                value: '9.99',
                                currency_code: 'USD'
                              }
                            }
                          ]
                        });
                      }}
                      style={{
                        layout: 'vertical',
                        color: 'blue',
                        shape: 'rect',
                        label: 'paypal'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mt-20 bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200/50">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Why Choose Premium?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Unlimited Storage</h4>
              <p className="text-gray-600">Upload as many PDFs as you need without any restrictions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" fill="currentColor" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Premium Features</h4>
              <p className="text-gray-600">Access advanced AI-powered note-taking capabilities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Priority Support</h4>
              <p className="text-gray-600">Get faster response times and dedicated assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpgradePlans;
