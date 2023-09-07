import styled from "styled-components";

export const SotibOlishStyled = styled.div`
.cointener{

    .savat-mahsulotlar{

    }
    /* Content */
    .content{
        display: flex;
        gap: 12px;
        font-family: inherit;
        .malumotlar{
            width: 73%;
            height: auto;
            border: 1px solid rgba(0,0,0,.12);
            border-radius: 5px;
            .yetkazish{
                display: flex;
                justify-content: space-between;
                height: 60px;
                margin-left: 15px;
                margin-right: 15px;
                border-bottom: 1px solid rgba(0,0,0,.12);
            }
           .mahsulotlar{
            margin-left: 15px;
            margin-right: 15px;
            .mahsulot{
                gap: 20px;
                display: flex;
                 border-bottom: 1px solid rgba(0,0,0,.12);
                 height: 155px;
                .img{
                    width: 120px;
                    height: 100%;
                    img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    }

                }
                .m-malumot{
                    width: 100%;
                   
                    .m-button{  
                        display: flex;
                        justify-content: space-between;
                        /* height: 50%; */
                        margin-top: 12px;
                        .m-info{
                            display: flex;
                            align-items: center;
                            button{ 
                                gap: 7px;
                                color: #62656a;
                                background-color: #fff;
                                h5{
                                    margin: 0;
                                    width: 35px;
                                    font-size: 10px;
                                }
                            }
                            button:hover{
                                color: black;
                            }
                            h4{
                                margin: 0;
                            }
                        }
                    }
                    .m-mahsulot{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        /* height: 42%; */
                        .m-sotuvchi{
                            display: flex;
                            gap: 10px;
                            .stv-p{
                                color: #62656a;
                            }
                            p{   
                                font-size: 15px;
                            }
                        }
                        .m-narxi{
                        margin: 0;
                        }
                        
                        .button-mp{
                            display: flex;
                            align-items: center;
                            height: 40px;
                            border: 1px solid rgba(0,0,0,.12);
                            button{
                                color: #62656a;
                            }

                        }
                       
                   
                    }

                }


            }
           }
            
        }
        
        .rasmiylashtirish{
            border-radius: 10px;
            width: 26%;
            height: 400px;
            border: 1px solid rgba(0,0,0,.12);

            .malumot{
                display: flex;
                gap: 4px;
                border-bottom: 1px solid rgba(0,0,0,.12);
                height: 110px;
                margin-left: 15px;
                margin-right: 15px;
                .icons{
                    button{
                        margin-top: 7px;
                    
                        svg{
                           
                            font-size: 45px;
                            color: green;
                        }

                    }
                }
                .malumot-text{
                    color: #62656a;
                    margin-bottom: 0px;
                    p{
                        margin-bottom: 5px;
                    }

                    .span-text{
                        margin-left: 3px;
                        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
                        color: black;
                    }
                    .text-bottom{
                        margin: 0;
                        font-size: 14px;
                    }

                }
            }
            .m-rasmiy{
                margin-left: 15px;
                margin-right: 15px;
                color: #62656a;
                h4{ 
                    color: black;
                    font-size: 17px;
                    margin: 0;
                    margin-top: 10px;
                }
                .mah-soni{
                    font-size: 15px;
                    margin-top: 5px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .m-sana{
                    color: #7000ff;
                    display: flex;
                    justify-content: center;
                    height: 18px;
                    width: 100%;
                    border: 2px solid #7000ff;
                    h5{
                        margin: 0;
                        font-size: 14px;
                    }
                }
                .m-jami{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    h2{
                        color: black;
                        margin-right: 2px;
                    }
                }
                .m-button{
                    margin-top: 17px;
                    button{
                        color: white;
                        background-color: #7000ff;
                        border-radius: 10px;
                        border: none;
                        width: 100%;
                        height: 50px;
                    }
                }
            }
        }
    }




}
`