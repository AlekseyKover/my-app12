import image from "../images/uyutnyiy-penthaus-s-otlichnyim-vidom-na-london-10 1.svg"

export default function Luxurys() {
    return (
        <section className="luxury">
           <div className="luxury__block">
                <div className="luxury__text">
                    <h2 className="luxury__name">Истинная роскошь должна быть элегантной</h2>
                    <p className="luxury__subbtitle">Открытая эко-терраса в восточной, тихой и защищенной от городского шума части дома, для тех, кто летом предпочитает выпить чашечку кофе на рассвете под первыми лучами солнца, или тех, кто к полудню решит понежиться на солнышке. Ваш вечер пролетит незаметно за уютными разговорами на свежем воздухе, а зимой терраса превратится в собственный каток для жителей и их гостей.</p>
                </div>
                <div className="luxury__imagesBlocks">
                        <img className="luxury__photo" src={image} alt="" />
                  
                </div>
           </div>
        </section>









        
      
    );
    
  }
  