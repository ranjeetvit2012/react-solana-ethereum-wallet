// import axios from 'axios';

//  const ApiCall = async (method, url, data = "", headData = "") => {

//   try {
//     const apiRes = await axios({
//       method: method,
//       url: url,
//       data: data,
//       headers: headData ? config : null,
//     });

//     if (apiRes) {
//       return apiRes;
//     }

//   } catch (error) {
//     console.log("error?.response?.data?. -------------------------", error?.response?.data);
//     let errorData
//     if (error) {
//       if (error?.response?.data?.status == 401) {
//         toast.error(error?.response?.data?.message);
//         errorData = {
//           message: error?.response?.data?.message,
//           status: error?.response?.data?.status,
//         }
//       }
//       if (error?.response?.data?.status == 400) {
//         toast.error(error?.response?.data?.message);
//         errorData = {
//           message: error?.response?.data?.message,
//           status: error?.response?.data?.status,
//         }
//       }
//       if (error?.response?.data?.status == 403) {
//         toast.error(error?.response?.data?.message);
//         errorData = {
//           message: error?.response?.data?.message,
//           status: error?.response?.data?.status,
//         }
//       }
//       console.log(" error.code ----------", error.code)
//       if (error.code == 'ERR_NETWORK') {
//         toast.error(error?.message);
//         errorData = {
//           message: error?.message,
//           status: 500,
//         }
//       }
//     }

//     return errorData

//   }
// }

// module.exports = {ApiCall}




