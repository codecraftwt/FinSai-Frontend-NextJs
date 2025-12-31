// import { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { ArrowLeft, Expand } from "lucide-react";
// import StyleEditorModal from "../components/editor/StyleEditorModal";
// import { updatePageData, setPageData } from "../store/slices/editorSlice";

// import Homepage from "../comp";

// const DEFAULT_DATA = {
//   pageId: "",
//   title: "Homepage",
//   heroHeading: "Trade Secure With Finsai.",
//   heroSubheading: "Experience Lightning-Fast Execution, Powerful Tools, and Verified Trader Support In A Regulated Ecosystem.",
//   openLiveAccountText: "Open Live Account",
//   tryFreeDemoText: "Try Free Demo",
//   heroImage: "",
//   whyChooseTitle: "Why Choose Finsai Trade",
//   whyChooseDescription: "At Finsai Trade, we bridge traditional finance with cutting-edge trading technology. Whether you're a beginner or seasoned trader, our platform offers the perfect mix of reliability, innovation, and growth opportunity.",
//   learnMoreText: "Learn More",
//   phoneScreenImage: "",
//   screenBlurImage: "",
//   platformsTitle: "Powerful Platforms For Every Trader",
//   platformsDescription: "Trade Seamlessly On The Go Or From Your Desktop With Our Cutting-Edge Platforms.",
//   platformsLearnMoreText: "Learn More",
//   accountsTitle: "Choose The Right Account For You",
//   accountsSubtitle: "Start Your Journey With An Account Tailored To Your Goals",
//   awardsTitle: "Recognized For Excellence",
//   sectionOrder: ["hero", "features", "whyChoose", "platforms", "accounts", "awards", "design"],
//   fontFamily: "Parkinsans, sans-serif",
//   colors: {
//     primary: "#387AFF",
//     secondary: "#a100ff",
//     tertiary: "#9ca3af",
//     bg: "#0D0D0E",
//     text: "#ffffff",
//     heading: "#ffffff"
//   },
//   titleStyles: {
//     color: "#ffffff",
//     fontSize: "48px",
//     fontFamily: "Arial, sans-serif",
//     fontWeight: "bold",
//     fontStyle: "normal",
//     textDecoration: "none",
//     textAlign: "center",
//     lineHeight: "1.2",
//     letterSpacing: "0px"
//   },
//   descriptionStyles: {
//     color: "#1f2937",
//     fontSize: "20px",
//     fontFamily: "Arial, sans-serif",
//     fontWeight: "normal",
//     fontStyle: "normal",
//     textDecoration: "none",
//     textAlign: "center",
//     lineHeight: "1.5",
//     letterSpacing: "0px"
//   },
//   companyStyles: {
//     color: "#1f2937",
//     fontSize: "24px",
//     fontFamily: "Arial, sans-serif",
//     fontWeight: "bold",
//     fontStyle: "normal",
//     textDecoration: "none",
//     textAlign: "center",
//     lineHeight: "1.2",
//     letterSpacing: "0px"
//   },
//   locationStyles: {
//     color: "#6b7280",
//     fontSize: "16px",
//     fontFamily: "Arial, sans-serif",
//     fontWeight: "normal",
//     fontStyle: "normal",
//     textDecoration: "none",
//     textAlign: "center",
//     lineHeight: "1.4",
//     letterSpacing: "0px"
//   },
//   salaryStyles: {
//     color: "#1f2937",
//     fontSize: "18px",
//     fontFamily: "Arial, sans-serif",
//     fontWeight: "bold",
//     fontStyle: "normal",
//     textDecoration: "none",
//     textAlign: "center",
//     lineHeight: "1.2",
//     letterSpacing: "0px"
//   },
//   emailStyles: {
//     color: "#3b82f6",
//     fontSize: "16px",
//     fontFamily: "Arial, sans-serif",
//     fontWeight: "normal",
//     fontStyle: "normal",
//     textDecoration: "underline",
//     textAlign: "center",
//     lineHeight: "1.4",
//     letterSpacing: "0px"
//   },
//   phoneStyles: {
//     color: "#1f2937",
//     fontSize: "16px",
//     fontFamily: "Arial, sans-serif",
//     fontWeight: "normal",
//     fontStyle: "normal",
//     textDecoration: "none",
//     textAlign: "center",
//     lineHeight: "1.4",
//     letterSpacing: "0px"
//   },
//   heroImageStyles: {
//     width: "100%",
//     height: "500px",
//     borderRadius: "0px",
//     objectFit: "cover",
//     borderWidth: "0px",
//     borderColor: "#000000",
//     borderStyle: "solid",
//     boxShadow: "none",
//     opacity: "1"
//   },
//   titleFontSize: "48px",
//   descriptionFontSize: "20px",
//   headingFontSize: "32px",
//   bodyFontSize: "16px",
//   buttonBorderRadius: "8px",
//   cardBorderRadius: "8px",
//   textAlign: "center",
//   bgGradientEnabled: false,
//   bgGradientStart: "#ffffff",
//   bgGradientEnd: "#f8fafc",
//   features: [
//     { icon: "license", title: "Regulated & Licensed", description: "" },
//     { icon: "atm", title: "Ultra-Fast Withdrawal", description: "" },
//     { icon: "phone", title: "24/7 Support", description: "" },
//     { icon: "safebox", title: "Secure Deposits", description: "" }
//   ],
//   platforms: [
//     { icon: "metatrader", title: "MetaTrader 5", description: "Pro-grade tools for advanced traders" },
//     { icon: "webtrader", title: "Finsai WebTrader", description: "Browser-based, no downloads needed" },
//     { icon: "mobileapp", title: "Mobile App (Coming Soon)", description: "Fast, secure, and intuitive" }
//   ],
//   accounts: [
//     { type: "Smart Choice", deposit: "$100", spreads: "From 1.4 pips", leverage: "Up to 1:500", commission: "No", execution: "Instant", bestFor: "Beginners & Casual Traders" },
//     { type: "Smart Pro", deposit: "$1000", spreads: "From 1.0 pips", leverage: "Up to 1:1000", commission: "No", execution: "Market", bestFor: "Intermediate Traders" },
//     { type: "Smart ECN", deposit: "$5000", spreads: "From 0.0 pips", leverage: "Up to 1:1000", commission: "$6/lot", execution: "Market", bestFor: "Professionals & Scalpers" },
//     { type: "Smart Elite", deposit: "On Request Only", spreads: "Customizable", leverage: "Customizable 1:1000", commission: "Custom", execution: "Market", bestFor: "Professionals" }
//   ],
//   awards: [
//     { title: "World Forex Award 2025", subtitle: "Best IB Program" },
//     { title: "World Financial Award 2025", subtitle: "Trusted Financial Services" },
//     { title: "Iconic Finance Expo 2023", subtitle: "Innovative Startup In Finance" }
//   ],
// };

// const API_BASE_URL = 'http://localhost:5000/api';

// // Desktop viewport dimensions for true desktop preview
// const DESKTOP_WIDTH = 1440;
// const DESKTOP_HEIGHT = 900;

// export default function Editorpage() {
//   const { pageId } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const pageData = useSelector((state) => state.editor.pageData);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [saving, setSaving] = useState(false);
//   const [viewMode, setViewMode] = useState('desktop');
//   const [styleModal, setStyleModal] = useState({ isOpen: false, fieldType: null });
//   const [openSections, setOpenSections] = useState([]);
//   const [focusTarget, setFocusTarget] = useState(null);
  
//   // For dynamic scaling
//   const containerRef = useRef(null);
//   const [previewScale, setPreviewScale] = useState(0.5);

//   const data = pageData || DEFAULT_DATA;

//   useEffect(() => {
//     if (pageId && pageId !== 'new') {
//       fetchPageData();
//     } else {
//       dispatch(setPageData(DEFAULT_DATA));
//       setLoading(false);
//     }
//   }, [pageId]);

//   // Calculate scale for desktop preview
//   useEffect(() => {
//     const updateScale = () => {
//       if (containerRef.current && viewMode === 'desktop') {
//         const containerWidth = containerRef.current.offsetWidth - 40;
//         const scale = Math.min(containerWidth / DESKTOP_WIDTH, 0.65);
//         setPreviewScale(scale);
//       }
//     };
    
//     updateScale();
//     window.addEventListener('resize', updateScale);
//     return () => window.removeEventListener('resize', updateScale);
//   }, [viewMode]);

//   const fetchPageData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${API_BASE_URL}/page/${pageId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch page data');
//       }
//       const result = await response.json();
//       if (result.data) {
//         const sanitizedData = { ...result.data };
//         if (sanitizedData.createdAt) delete sanitizedData.createdAt;
//         if (sanitizedData.updatedAt) delete sanitizedData.updatedAt;

//         const pageData = { ...DEFAULT_DATA, ...sanitizedData };
//         dispatch(setPageData(pageData));
//       } else {
//         dispatch(setPageData(DEFAULT_DATA));
//       }
//       setError(null);
//     } catch (err) {
//       console.error('Error fetching page data:', err);
//       setError('Failed to load page data. Using default data.');
//       dispatch(setPageData(DEFAULT_DATA));
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDataChange = (newData) => {
//     const updatedData = typeof newData === 'function' ? newData(data) : newData;
//     dispatch(setPageData(updatedData));
//   };

//   const handleSave = async () => {
//     try {
//       setSaving(true);
//       let response;

//       if (pageId === 'new' || !pageId) {
//         response = await fetch(`${API_BASE_URL}/page`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         });
//       } else {
//         response = await fetch(`${API_BASE_URL}/page/${pageId}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data),
//         });
//       }

//       if (!response.ok) {
//         throw new Error('Failed to save page data');
//       }

//       const savedData = await response.json();
//       dispatch(setPageData({ ...data, ...savedData.data }));
//       setError(null);

//       navigate('/');
//     } catch (err) {
//       console.error('Error saving page data:', err);
//       setError('Failed to save changes. Please try again.');
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleElementClick = (target) => {
//     setOpenSections(prev => prev.includes(target.section) ? prev : [...prev, target.section]);
//     setFocusTarget(target);
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
//         <p className="text-gray-600">Loading page data...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="relative h-screen bg-gray-100">
//       <StyleEditorModal
//         isOpen={styleModal.isOpen}
//         onClose={() => setStyleModal({ isOpen: false, fieldType: null })}
//         fieldType={styleModal.fieldType}
//         styles={data[`${styleModal.fieldType}Styles`] || {}}
//         onUpdateStyles={(fieldType, newStyles) => dispatch(updatePageData({ [`${fieldType}Styles`]: newStyles }))}
//       />
//       <div className="flex h-full">
//         {/* LEFT: EDITOR */}
//         <div className="w-1/2 p-8 bg-white border-r border-gray-300 overflow-y-auto">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold text-gray-800">Editor</h1>
//             <button
//               onClick={() => navigate('/')}
//               className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center gap-2"
//             >
//               <ArrowLeft size={16} />
//               Back to Dashboard
//             </button>
//           </div>
//           {error && (
//             <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
//               {error}
//             </div>
//           )}
//           <EditorRenderHomepage 
//             data={data} 
//             setData={handleDataChange} 
//             styleModal={styleModal} 
//             setStyleModal={setStyleModal} 
//           />
//         </div>

//         {/* RIGHT: PREVIEW */}
//         <div className="w-1/2 p-8 bg-gray-50 overflow-y-auto flex flex-col">
//           <div className="flex justify-between items-center mb-4">
//             <button
//               onClick={handleSave}
//               disabled={saving}
//               className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {saving ? 'Saving...' : 'Save'}
//             </button>
//             <h1 className="text-2xl font-bold text-gray-800">Live Preview</h1>
//             <button
//               onClick={() => navigate(`/view/${pageId}`)}
//               className="px-3 py-1 text-black rounded text-sm font-medium hover:bg-blue-200"
//               title="View Full Page"
//             >
//               <Expand size={16} />
//             </button>
//           </div>
          
//           <div className="flex justify-center mb-4">
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => setViewMode('desktop')}
//                 className={`px-3 py-1 rounded text-sm font-medium ${
//                   viewMode === 'desktop'
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 Desktop
//               </button>
//               <button
//                 onClick={() => setViewMode('mobile')}
//                 className={`px-3 py-1 rounded text-sm font-medium ${
//                   viewMode === 'mobile'
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 Mobile
//               </button>
//             </div>
//           </div>
          
//           <div ref={containerRef} className="flex justify-center flex-1">
//             <div
//               style={{
//                 width: viewMode === 'mobile' ? 375 : DESKTOP_WIDTH * previewScale,
//                 height: viewMode === 'mobile' ? 667 : DESKTOP_HEIGHT * previewScale,
//                 overflow: 'hidden',
//                 boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
//                 borderRadius: 8,
//                 border: '1px solid #ccc',
//                 position: 'relative',
//                 backgroundColor: 'white',
//               }}
//             >
//               {pageId ? (
//                 <iframe
//                   title="Live Preview"
//                   src={`/view/${pageId}`}
//                   style={{
//                     width: viewMode === 'mobile' ? 375 : DESKTOP_WIDTH,
//                     height: viewMode === 'mobile' ? 667 : DESKTOP_HEIGHT,
//                     border: 'none',
//                     transform: viewMode === 'mobile' ? 'scale(1)' : `scale(${previewScale})`,
//                     transformOrigin: 'top left',
//                   }}
//                 />
//               ) : (
//                 <div className="flex items-center justify-center h-full">
//                   <p className="text-gray-500">No page selected for preview</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }