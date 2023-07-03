import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Directories from "../components/Home/Directories";
import FormHome from "../components/Home/FormHome";
import Map from "../components/Contact/MapContent";
import BaseLayout from "../components/global/BaseLayout";
import CounterUp from "../components/global/CounterUp";
import ServicesHome from "../components/Services/ServicesHome_4";
import HeroSection from "../components/Home/HeroSection";
import Paletacolor from "../components/global/Paletacolor";
import BlockPrincipal from "../components/block/Block_7";
import BlockSecondary from "../components/block/Block_8";
import BlockAbout from "../components/block/Block_9";
import SlideBlock from "../components/block/SlideLogoForm";
import VideoPromocional from "../components/global/VideoPromocional";
import ContentServices from "../components/Services/ContentServices";
import GalleryContent from "../components/Gallery/GalleryContent";
import Modal from "../components/Home/Modal";
// import CustomReviews from "../components/reviews/CustomReviews";
import ValuesOne from "../components/values/Values_4";

// para agregar la frase de los años de experiencia o la licencia agregar sloganPrincipal={true}
// para agregar la lista de about agregar listsAbout={true}
// para agregar la lista de servicios agregar listsServices={true}

function Home() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Home">
      <div className="md:max-w-full w-full">
        <Modal />
        <HeroSection
          title={rpdata?.dbSlogan?.[1]?.slogan}
          texts={rpdata?.dbValues?.[0].description}
          urlVideo={"https://firebasestorage.googleapis.com/v0/b/imagenes-fc412.appspot.com/o/Electric.mp4?alt=media&token=1f5f7df4-e652-4708-b766-b7644ee1702c"}
          bgImg={rpdata?.stock?.[4]}
          bgImg1={rpdata?.stock?.[5]}
          bgImg2={rpdata?.stock?.[2]}
          bgImg3={rpdata?.stock?.[7]}
        />
        <BlockPrincipal
          title={rpdata?.dbSlogan?.[4]?.slogan}
          text={rpdata?.dbHome?.[0].text}
          image={rpdata?.stock?.[0]}
          image1={rpdata?.stock?.[10]}
          image2={rpdata?.stock?.[12]}
          image3={rpdata?.stock?.[3]}
          image4={rpdata?.stock?.[8]}
          sloganPrincipal={true}
          listsServices={true}
        />
        {/* video promocional */}
        {
          rpdata?.videosPromo?.[0]?.activo ?
            <VideoPromocional
              title={rpdata?.dbSlogan?.[2]?.slogan}
              text={rpdata?.dbAbout?.[1]?.text}
              linkVideo={`${rpdata?.videosPromo?.[0].link}`}
              image={`${rpdata?.videosPromo?.[0].img}`}
              vimeoVideo
            />
            : null
        }
        <SlideBlock
          title={'a little about us'}
          text={rpdata?.dbValues?.[2].description}
          image={rpdata?.stock?.[10]}
        />
        <Directories />
        <BlockAbout
        title={rpdata?.dbSlogan?.[1]?.slogan}
          subtitle2={'a little about us'}
          text={rpdata?.dbAbout?.[0]?.text}
          image={rpdata?.stock?.[1]}
          image1={rpdata?.stock?.[14]}
          image2={rpdata?.stock?.[15]}
          image3={rpdata?.stock?.[4]}
          image4={rpdata?.stock?.[11]}
          listsAbout={true}
        />
        <ValuesOne 
        image1={rpdata?.stock?.[2]}
        image={rpdata?.stock?.[3]}
        image2={rpdata?.stock?.[0]}
        />
        <CounterUp image={rpdata?.stock?.[26]} />
        <BlockSecondary
          title={rpdata?.dbSlogan?.[3]?.slogan}
          text={rpdata?.dbHome?.[1]?.text}
          image={rpdata?.stock?.[11]}
          image1={rpdata?.stock?.[12]}
          image2={rpdata?.stock?.[10]}
          image3={rpdata?.stock?.[10]}
          image4={rpdata?.stock?.[8]}
        />
        {/* our reviews */}
        {
          rpdata?.reviews?.isHomeOnly === true ?
            <div className="w-4/5 mx-auto py-[100px]">
              <h1 className="pb-10 text-center">{rpdata?.labels?.general?.titleReviews}</h1>
              <div className={`${rpdata?.reviews?.links?.[0]}`}></div>
            </div>
            : null
        }
        {/* <CustomReviews/> */}
        {/* Gallery cuando es OnePages */}
        {/* Servicios del home */}
        {
          rpdata?.simpleWidgets?.[3]?.activo ?
            <div className="pt-20">
              <ContentServices />
            </div>
            :
            <ServicesHome />
        }
        {/* Paleta de Colores */}
        {
          rpdata?.simpleWidgets?.[3]?.activo ?
            <div className="pt-10 pb-28">
              <h2 className="text-center pb-[50px]">{rpdata?.labels?.general?.titleGallery}</h2>
              <GalleryContent galleryImages={rpdata?.stock?.length > 0 ? rpdata?.stock : rpdata?.stock} />
            </div>
            :
            null
        }
        {
          rpdata?.brandingExtra?.[0]?.activo ?
            <Paletacolor />
            : null
        }
        <div
          className="bgFormHome"
          style={{ backgroundImage: `url("${rpdata?.stock?.[8]}")` }}
        >
          <div className="relative">
            <FormHome />
          </div>
        </div>
        <Map />
      </div>
    </BaseLayout>
  );
}

export default Home;
