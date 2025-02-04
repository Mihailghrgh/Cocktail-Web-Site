//////////// FOR A FUTURE PROJECT MAYBE //////////////////
//   const GeoLocation = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=e7b9c1764ddb41469daed7303358eb35`,
//         {
//           headers: {},
//         }
//       );
//       return response.data.features[0].geometry.coordinates;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//// KEEP FILES FROM HERE /////////////////////////////////
//   const BearerKey = async () => {
//     try {
//       const response = await axios.post(
//         "https://test.api.amadeus.com/v1/security/oauth2/token",
//         qs.stringify({
//           grant_type: "client_credentials",
//           client_id: "YZ2WgTYG4r0LsHe0Z0Ne11uaa3x1XBLp",
//           client_secret: "SiiUUYHHy3BOY00c",
//         }),
//         { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
//       );
//       return response.data.access_token;
//     } catch (error) {
//       console.log(error.response);
//     }
//   };
//   const searchHotels = async (cityCode, access_token, limit = 1) => {
//     try {
//       const response = await axios.get(
//         "https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city",
//         {
//           params: {
//             cityCode: cityCode,
//           },
//           headers: {
//             Authorization: `Bearer ${access_token}`,
//           },
//         }
//       );
//       console.log(response?.data?.data);
//       return response?.data?.data;
//     } catch (error) {
//       console.log(error?.response?.data);
//     }
//   };
//   const hotelMedia = async (cityCode, access_token, limit = "100") => {
//     try {
//       const response = await axios.get(
//         "https://test.api.amadeus.com/v2/media/files",
//         {
//           params: {
//             cityCode: cityCode,
//           },
//           headers: {
//             Authorization: `Bearer ${access_token}`,
//           },
//         }
//       );
//       console.log(response.data.data);
//       return response.data.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const token = await BearerKey();
//   const hotels = await searchHotels("LON", token);
//   const hotelImg = await hotelMedia("LON", token);
//   return { token, hotelImg, hotels };
//// END POINT FOR NEW PR /////////////////////////////////
/////......WHEN WE KNOW BACKEND SMH.........///////////////
