import axios from "axios";
 


export const fetchShow = () => {
    return axios
            .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
            .then(res => {
                return res.data
            }) 
            
  }
 
//  export const fetchShow = (setShow, setSeasons) => {
     
//     axios
//       .get(
//         "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//       )
//       .then(res => {
//         console.log(res.data._embedded.episodes)
//         setShow(res.data);
//         setSeasons(formatSeasons(res.data._embedded.episodes));
//       });
//   };
 