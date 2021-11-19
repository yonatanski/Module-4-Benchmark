import "../assets/css/card.css";

const Card = ({ artistData, album }) => {
  return (
    <>
      {artistData.map((song) => (
        <div
          key={song.id}
          class="song-card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2 pt-3"
        >
          <div className="d-flex justify-content-center">
            <img src={song.album.cover} alt="..." className="img-fluid w-100" />
          </div>
          <div class="card-body mt-2">
            <p className="pb-0 mb-1 card-text text-white">{song.album.title}</p>
            <small className="card-text text-white">Bohemian Rhapsody</small>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

// return ({
//   artistData.map((albums) => <h1>{albums.title}</h1>);
// })
// <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2">
//         <div className="card pt-2 rp-card">
//           <img
//             className="recent-ply-card-img px-2"
//             src={img}
//             alt="Card image cap"
//           />
//           <div className="card-body card-text-paragraph">
//             <p className="pb-0 mb-1">Queen</p>
//             <small>Bohemian Rhapsody</small>
//           </div>
//         </div>
//       </div>
