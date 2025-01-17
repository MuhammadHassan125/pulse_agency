"use client";
import { useState, useEffect } from 'react';
import WebsiteAuditForm from './WebsiteAuditForm';
import ContentWrapper from '@/components/layout/ContentWrapper';
import './global.css';
import CustomCursor from '@/utils/CustomCursor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyForm from '../components/recaptche';
// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowModal(true);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div style={{ background: '#040117' }}>
   
      <CustomCursor/>
      <ContentWrapper />
      {/* <MyForm/> */}
      {/* {showModal && <WebsiteAuditForm />} */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
}
