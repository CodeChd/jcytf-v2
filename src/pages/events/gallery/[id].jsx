import Link from "next/link";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const gallery = ({ data, detailsId }) => {
  const evtData = data.filter((e) => e.id === detailsId);

  const pictures = evtData[0].pictures.split(",");

  let images = pictures.map((e) => {
    const url = `https://jcytfchurch.online/images/${e}`;
    const parts = url.split("/");
    return {
      original: url,
      thumbnail: url,
      isValid: parts,
    };
  });

  console.log(images[0].isValid);

  return (
    <main className="p-14  flex flex-col lg:items-center justify-center  gap-8 bg-slate-100 min-h-screen">
      <h1 className="md:3xl text-4xl text-center font-gil font-sm italic self-center border-solid border-b-[3px] pb-4 border-amber-600">
        <span className="inline-block">{evtData[0].EventName}</span> Gallery
      </h1>

      {images[0].isValid[4] === "" || images[0].isValid[4] === undefined ? (
        <h1 className="max-w-5xl mx-auto xs:text-2xl md:text-4xl text-5xl italic font-gilLight pt-20">
          No Images yet..
        </h1>
      ) : (
        <div className="overflow-hidden">
        <ImageGallery lazyLoad={true} thumbnailPosition="left" items={images} additionalClass="grid md:place-content-center"/>
        </div>
      )}
      <Link
        href={`/events/${evtData[0].id}`}
        className="bg-gray-700 self-center p-2 px-8 text-white font-gilLight font-bold rounded"
      >
       {"<"}&nbsp;&nbsp;Go Back
      </Link>
    </main>
  );
};
export default gallery;

export async function getServerSideProps({ params: { id } }) {
  //fetch events

  const res = await fetch(`https://jcytfchurch.online/api.php`);

  const detailsId = id;

  const data = await res.json();

  return {
    props: { data, detailsId },
  };
}
