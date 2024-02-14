import Circle from "../../../common/circle/Circle"

const Info = () => {
  return (
    <section id="infoSection">
      <div className="info-content">
        <Circle title={'Satisfied clients'} value={95} symbol={"%"}/>
        <Circle title={'Tiempo de respuesta'} value={24} symbol={"Hs"}/>
        <Circle title={'Trusted Users'} value={500} symbol={"+"}/>
        <p className="text">
          En KyberWeb, forjamos tu huella digital con excelencia. Creamos sitios web excepcionales, convirtiendo ideas en experiencias online únicas. Nos centramos en ti, superando expectativas con soluciones web personalizadas.
          <br/>Únete a KyberWeb para impulsar tu presencia online.<br/>¡Inicia tu éxito digital hoy mismo!
        </p>
      </div>
    </section>
  )
}

export default Info