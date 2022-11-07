// import React from "react";
// import ReactDOM from "react-dom";
// // import UploadComponent from "./Upload";

// const Pic = () => {

//   const upload: {
//     pictures: [],
//     maxFileSize: 5242880,
//     imgExtension: [".jpg", ".png"],
//     defaultImages: [
//       "https://media.smarteragent.com/unsafe/http://cdn.photos.sparkplatform.com/fl/20190819183614687947000000-o.jpg",
//       "https://media.smarteragent.com/unsafe/http://cdn.photos.sparkplatform.com/fl/20190819183639357715000000-o.jpg",
//       "https://media.smarteragent.com/unsafe/http://cdn.photos.sparkplatform.com/fl/20190819183701098384000000-o.jpg"
//     ]
//   }

//  const handleChange = (files) => {
//   const { pictures } =upload;
//   console.warn({ pictures, files });

//   this.setState(
//     {
//       ...this.state,
//       upload: {
//         ...this.state.upload,
//         pictures: [...pictures, ...files]
//       }
//     },
//     () => {
//       console.warn("It was added!");
//     }
//   );
// };

//  const confirmUpload = () => {
//   const { pictures, defaultImages } =upload;
//   console.warn("Confirm Upload =>", [...pictures]);
// };

//   return (
//     <>
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Testing `react-images-upload`</h2>

//         <hr />

//         <button onClick={confirmUpload}>Confirm upload</button>

//         <UploadComponent
//           {...upload}
//           handleChange={handleChange}
//         />
//       </div>
//     )
//     </>
//   )
// }

// export default Pic
import React from "react";

const Pic = () => {
  return <>hi</>;
};

export default Pic;
