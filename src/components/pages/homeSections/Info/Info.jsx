import Circle from "../../../common/circle/Circle"

const Info = () => {
  return (
    <section id="infoSection">
      <Circle title={'Satisfied clients'} value={95} symbol={"%"}/>
      <Circle title={'Response time'} value={24} symbol={"Hs"}/>
      <Circle title={'Trusted Users'} value={500} symbol={"+"}/>
      <p className="text">
        En KyberWeb, forjamos tu huella digital con excelencia. Creamos sitios web excepcionales, convirtiendo ideas en experiencias online únicas. Nos centramos en ti, superando expectativas con soluciones web personalizadas. Únete a KyberWeb para impulsar tu presencia online.<br/>¡Inicia tu éxito digital hoy mismo!
      </p>
    </section>
  )
}

export default Info