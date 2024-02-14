import Circle from "../../../common/circle/Circle"

const Info = () => {
  return (
    <section id="infoSection">
      <div className="info-content">
        <Circle title={'Clientes satisfechos'} value={98} symbol={"%"}/>
        <Circle title={'Tiempo de respuesta'} value={24} symbol={"Hs"}/>
        <Circle title={'Integrantes en nuestro equipo!'} value={4} symbol={" "}/>
        <p className="text">
          En KyberWeb, forjamos tu huella digital con excelencia. Creamos sitios web excepcionales, convirtiendo ideas en experiencias online únicas. Nos centramos en ti, superando expectativas con soluciones web personalizadas.
          <br/>Únete a KyberWeb para impulsar tu presencia online.<br/>¡Inicia tu éxito digital hoy mismo!
        </p>
      </div>
    </section>
  )
}

export default Info