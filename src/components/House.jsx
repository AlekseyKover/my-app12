import image from "../images/Mask Group.svg"
import image1 from "../images/Mask Group (1).svg"
export default function House() {
    return (
        <section className="house">
           <div className="house__apartments">
                <div className="house__text">
                    <h2 className="house__name">Апартаменты</h2>
                    <p className="house__subbtitle">Со второго по шестой этаж гармонично спланированы апартаменты различной площади от 35 до 80 м2, жителям каждого из которых гарантирована максимальная приватность и комфорт.</p>
                     <button className="house__button">Записаться на просмотр</button>
                </div>
                <div className="house__imagesBlocks">
                    <div className="house__image">
                        <img className="house__photo" src={image} alt="" />
                    </div>
                </div>
           </div>
           <div className="house__penthouse">
                <div className="house__imagesBlocks">
                    <div className="house__image">
                        <img className="house__photo" src={image1} alt="" />
                    </div>
                </div>
                <div className="house__text">
                    <h2 className="house__name">Апартаменты</h2>
                    <p className="house__subbtitle">Со второго по шестой этаж гармонично спланированы апартаменты различной площади от 35 до 80 м2, жителям каждого из которых гарантирована максимальная приватность и комфорт.</p>
                     <button className="house__button">Записаться на просмотр</button>
                </div>
           </div>
        </section>









        
      
    );
    
  }
  