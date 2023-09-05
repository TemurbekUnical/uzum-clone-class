import React, { Children, useContext } from 'react'
import { SotibOlishStyled } from './SotibOlish.style'
import AppContext from '../../App.context';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

import { Button, IconButton } from '@mui/material';

const SotibOlish = () => {
    const {
        state: {
            mahsulotlar,
            savatchaOchiqmi,
            izlanganMahsulotlar,
            mahsulotlarsoni,
            obshiySumma,
            tanlanganMahsulotlar,
            korilganMahsulotlar,
        },
        action: {
            setMahsulotlar,
            setSavatchaOchiqmi,
            mahsulotlarniIzlash,
            savatchaAlmashtirish,
            setIzlanganMahsulotlar,
            mahsulotTanlash,
            tanlanganmiClick,
            onPlusClick,
            onMinusClick,
            mahsulotniSavatchadanChiqarish,
            setKorilganMahsulotlar,
        },
    } = useContext(AppContext);



    return (
        <SotibOlishStyled>
            <div className="cointener">
                <div className="savat-mahsulotlar">
                    <h3> Savatingiz,{mahsulotlarsoni} Mahsulot</h3>
                    <div className="content">
                        <div className="malumotlar">

                            <div className="yetkazish">
                                <div className="con-div">
                                    <p> Hamasini yechish</p>
                                </div>
                                <div className="sanasi">
                                    <p>Yetkazib beish eng yaqin sana { }</p>

                                </div>
                            </div>
                            <div className="mahsulotlar">

                                {tanlanganMahsulotlar.map((mahsulot) =>
                                    <div className="mahsulot">
                                        <div className="img">
                                            <img src={mahsulot.image[0]} alt="" />

                                        </div>
                                        <div className="m-malumot">
                                            <div className="m-button">
                                                <div className="m-info">
                                                    <h4>{mahsulot.malumot}</h4>
                                                </div>
                                                <div className="m-info">
                                                    <Button onClick={(e) => {
                                                        e.stopPropagation();
                                                        mahsulotniSavatchadanChiqarish(mahsulot)
                                                    }} >
                                                        <DeleteOutlineOutlinedIcon fontSize='medium' />
                                                        <h5>Yoq Qilish</h5>
                                                    </Button>


                                                </div>



                                            </div>
                                            <div className="m-mahsulot">
                                                <div className="m-sotuvchi">
                                                    <p className='stv-p'>Satuvchi: </p> <p>{mahsulot.sotuvchi}</p>
                                                </div>
                                                <div className="button-mp">
                                                    <Button onClick={(e) => { e.stopPropagation(); onMinusClick(mahsulot) }}>
                                                        <RemoveOutlinedIcon />
                                                    </Button>
                                                    {mahsulot.soni}
                                                    <Button onClick={(e) => { e.stopPropagation(); onPlusClick(mahsulot) }}>
                                                        <AddOutlinedIcon />
                                                    </Button>
                                                </div>
                                                <div className="m-narxi">
                                                    <h3> {mahsulot.narxi}$</h3>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                )}

                            </div>






                        </div>
                        <div className="rasmiylashtirish">
                            <div className="malumot">
                                <div className="icons">
                                    <IconButton>
                                        <CheckCircleOutlineIcon fontSize='large' />
                                    </IconButton>
                                </div>
                                <div className="malumot-text">
                                    <p> Siz uchun eshikkacha
                                        <span className='span-text'>
                                            bepul yetkazib berish mavjud
                                        </span>
                                    </p>
                                    <p className='text-bottom'>
                                        Tanlovingizga kora tez yetkazib berish
                                    </p>

                                </div>
                            </div>
                            <div className="m-rasmiy">
                                <h4>Buyurtmangiz</h4>
                                <div className="mah-soni">
                                    <p> Mahsulotlar ({mahsulotlarsoni}):</p>
                                    <p> {obshiySumma} sum</p>

                                </div>
                                <div className="m-sana">
                                    <h5>Yetkazib berish</h5>
                                </div>
                                <div className="m-jami">
                                    <p>Jami:</p>
                                    <h2>{obshiySumma}$</h2>
                                </div>
                                <div className="m-button">
                                    <button>
                                        Rasmiylashtirishga o'tish
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>





            </div>




        </SotibOlishStyled>
    )
}

export default SotibOlish