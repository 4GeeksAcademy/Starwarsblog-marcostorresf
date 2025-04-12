export const getCharacters = async (dispatch, payload) => {
  let response = await fetch ("https://www.swapi.tech/api/people")
  let data = await response.json();

   dispatch({
      type:"add_character",
      payload:  data.results,
   });
}

// export const getEachCharacter = async (dispatch, payload) => {
//     let response = await fetch ("https://www.swapi.tech/api/people" + payload)
//     let data = await response.json();
  
//      dispatch({
//         type:"add_characte",
//         payload:  data.results,
//      });
//   }