import image from "../images//009 1.svg"
import image1 from "../images/image 11.svg"
export default function Style() {
    return (
        <section className="style">
           <div className="style__block">
                <h2 className="style__name">Стиль</h2>
                <div className="style__imagesBlocks">
                    <div className="style__image">
                        <img className="style__photo" src={image1} alt="" />
                        <p className="style__subbtitle">
                        Главный фасад здания исполнен в неоклассическом стиле с выступающими деталями и большим количество окон. Это четко очерченная композиция из полированного гранита с элементами рустики, крупноформатного керамогранита и декоративными элементами, выполненными на заказ.
                        </p>
                    </div>
                    <div className="style__image">
                        <img className="style__photo" src={image} alt="" />
                        <p className="style__subbtitle">
                        В основе интерьеров Дома Avenue приоритетными являются эстетика, где видимая роскошь сочетается с комфортом, в неё идеально вписываются любые технические приборы и устройства. Это позволяет создавать действительно актуальные и модные решения в рамках устоявшейся классики.
                        </p>
                    </div>
                </div>
           </div>
        </section>
        
      
    );
    
  }
  