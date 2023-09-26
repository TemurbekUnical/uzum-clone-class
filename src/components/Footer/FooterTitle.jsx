import React from 'react'
import { FooterStyled } from './Footer.styled'


const FooterTitle = () => {
    return (
        <FooterStyled>
            <div className="cointainer">
                <div className="footer-title">
                    <h4> Biz haqimiizda </h4>
                    <p>Topshirish Punklari </p>
                    <p>Vakansiyalar</p>
                </div>
                <div className="footer-title">
                    <h4> Foydalanuvchilarga </h4>
                    <p>BIZ bilan bog'lanish </p>
                    <p>Savol-Javob</p>
                </div>
                <div className="footer-title">
                    <h4> Tadbirkorlarga </h4>
                    <p>Uzumda soting </p>
                    <p>Sotuvchi kabinetiga kirish </p>
                </div>
                <div className="footer-title">
                    <h4> ilovani Yuklab olish </h4>
                    <div className="img-svg">
                        <div className="svg">
                            <img src="https://www.svgrepo.com/show/352973/app-store.svg" alt="" width={25} />
                            <p>AppStore</p>
                        </div>
                        <div className="svg">
                            <img src="https://www.svgrepo.com/show/452223/google-play.svg" alt="" width={25} />
                            <p>Google Store</p>
                        </div>
                    </div>

                    <h4>Ijtimoiy Tarmoglar</h4>
                    <div className="img_svg">
                        <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="" width={30} />
                        <img src="https://www.svgrepo.com/show/354443/telegram.svg" alt="" width={30} />
                        <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="" width={30} />
                        <img src="https://www.svgrepo.com/show/448261/youtube.svg" alt="" width={30} />
                    </div>

                </div>

            </div>
            <div className="footer-botom">
            <div className="f-botom1">
            <p>
                Maxfiy kelishuv
            </p>
            <p>
                Foydali kelishuv
            </p>
            </div>
            <div className="f-botom">
                <p>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
            </div>
            </div>
        </FooterStyled>
    )
}

export default FooterTitle