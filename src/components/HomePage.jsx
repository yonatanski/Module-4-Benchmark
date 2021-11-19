import Row from "react-bootstrap/Row";
import fetchApi from "../assets/js/api-helpers";
import Card from "./Card";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [artistData, setArtistData] = useState([]);

  const [album, setAlbumtData] = useState([]);

  let fetchFromSearch = async () => {
    let query = "queen";
    let getData = await fetchApi.search(query);
    setArtistData(getData.data);
    // console.log(`fetchFromSearch ------`, getData.data);
  };

  const albumUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/";
  let albumID = "75621062";
  const artistUrl = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
  let artisID = "125";

  let fetchFunctin = async () => {
    let getData = await fetchApi.fetchData(albumUrl, albumID);
    setAlbumtData(getData);
    console.log(`here is the alblum data`, album);
  };

  useEffect(() => {
    // console.log("this is from the album fetch");
    fetchFunctin();

    fetchFromSearch();
  }, []);

  return (
    <div className="content-box px-4">
      <Row>
        <Card artistData={artistData} />
        {/* <Card album={album} /> */}
      </Row>
    </div>
  );
};

export default HomePage;

// {
//   artistData.map((song) => (
//     <div
//       className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2"
//       key={song.id}
//     >
//       <div className="card pt-2 rp-card">
//         <img
//           src={song.album.cover}
//           alt="..."
//           className="img-fluid h-100 w-100"
//         />
//         <div className="card-body card-text-paragraph">
//           <p className="pb-0 mb-1">{song.album.title}</p>
//           {/* <small>{song.album.cover}</small> */}
//         </div>
//       </div>
//     </div>
//   ));
// }
