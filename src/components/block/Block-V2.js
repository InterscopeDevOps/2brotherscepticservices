import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
import { BsArrowReturnRight } from 'react-icons/bs'


import imgDefault from '../../assets/image/placeholder.png'



function BlockFour({ image1, image3, title, text, listAbout, listServices, sloganPrincipal }) {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <section className="w-4/5 mx-auto md:py-32 py-10 mb-6">
                <div className="md:flex md:flex-row flex flex-col md:p-0 px-2 content-reverse">
                    <div className="md:w-[50%] relative">
                        <div
                            className="md:w-full md:md:h-[600px] w-[300px] h-[300px] bg-cover bg-center border-white border-[15px] shadow-2xl rounded-[10%]"
                            style={{ backgroundImage: `url("${image1 ? image1 : imgDefault}")` }}
                        ></div>
                        <div
                            className="w-[50%] h-[50%]  absolute md:bottom-[-100px] md:block hidden md:right-[150px] border-white border-[15px] z-10 bg-cover bg-center rounded-full"
                            style={{ backgroundImage: `url("${image3 ? image3 : imgDefault}")` }}
                        ></div>
                    </div>

                    <div className="md:w-[50%] py-4 md:px-8 px-3 self-center md:text-start text-center">
                        {
                            sloganPrincipal ?
                                rpdata?.dbPrincipal?.licensed.length > 1 ?
                                    <h2 className="separator-about capitalize">
                                        {rpdata?.dbPrincipal?.licensed}
                                    </h2>
                                    : <h2 className="separator-about pb-3 capitalize">we have {rpdata?.dbPrincipal?.exprYears} years of experience </h2>
                                :
                                <h2 className="separator-about capitalize">
                                    {
                                        title ? title :
                                            <span className='lowercase text-[18px]'>
                                                {`default title={'frase'}`} o
                                                {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                                            </span>
                                    }
                                </h2>
                        }
                        <p className="pb-4">
                            {
                                text ? text :
                                    <span>{`para agregar el texto -> text={'description'}`}
                                        <br />{'para agregar lista de about -> listsAbout={true}'}
                                        <br />{'para agregar lista de servicios -> listsServices={true}'}
                                    </span>
                            }
                        </p>
                        {
                            listAbout ?
                                <ul className='grid grid-cols-1 md:grid-cols-2 pb-5'>
                                    {
                                        rpdata?.dbAbout?.[0].list.length > 1 ?
                                            rpdata?.dbAbout?.[0].list.map((item, index) => {
                                                return (

                                                    <li key={index} className="py-2 flex items-center">
                                                        <BsArrowReturnRight />
                                                        <span className="pl-2">{item}</span>
                                                    </li>
                                                )
                                            })
                                            : null
                                    }
                                </ul>
                                : null
                        }
                        {
                            listServices ?
                                <ul className="grid grid-cols-1 md:grid-cols-2 pb-5">
                                    {rpdata?.dbServices?.slice(0, 6).map((item, index) => {
                                        return (
                                            <li key={index} className="py-1 flex items-center">
                                                <BsArrowReturnRight />
                                                <span>{item.name}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                                : null
                        }

                        <ButtonContent btnStyle='three' />

                        <div className="w-full">
                            <span className="separator-about"></span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default BlockFour;
