 import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = () => {
    return (
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     /*  icon={<WorkIcon />}  */ 
  >
    <h3 className="vertical-timeline-element-title">¿Estas queriendo comprar un Iphone o MacBook?</h3>
    <h4 className="vertical-timeline-element-subtitle">Contamos con un amplio stock para entrega inmediata</h4>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   /*  date="1er paso" */
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      /* icon={<WorkIcon />}  */ 
  >
    <h3 className="vertical-timeline-element-title">¿Que ofrecemos?</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    Compromiso, seguridad y confianza.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    /* date="2do paso" */
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      /* icon={<WorkIcon />}  */ 
  >
    <h3 className="vertical-timeline-element-title">¡Contactanos!</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    Contáctate con nuestro staff para indicarnos que producto estabas buscando. Iphone, Macbook y accesorios, todo lo que buscas a tu disposición!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   /*  date="3er paso" */
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      /* icon={<WorkIcon />}  */ 
  >
    <h3 className="vertical-timeline-element-title">Coordinacion</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    Contamos con varios métodos de envió. ¡Elegí el que mas te convenga! Estamos comprometidos con una entrega segura.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    /* date="4to paso" */
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
     /* icon={<SchoolIcon />} */ 
  >
    <h3 className="vertical-timeline-element-title">¡Garantia!</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    . Todos nuestros productos cuentan con una garantía oficial de 12 meses. Brindamos asesoramiento online ante cualquier inconveniente.
    </p>
  </VerticalTimelineElement>
  {/* {<VerticalTimelineElement
    className="vertical-timeline-element--education"
    
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
     
  >
    <h3 className="vertical-timeline-element-title">Experiencia del cliente</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    Como contamos anteriormente, somos 3 amigos, esos amigos que esbozan una sonrisa cuando nos llega un mensaje de nuestros clientes contándonos lo feliz que están con nuestros productos, eso nos da fuerza y a su vez nos pone feliz. Por este motivo, esperamos que nos cuenten su experiencia con nuestro servicio. 
    </p>
  </VerticalTimelineElement>} */}
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date=""
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
     /*  icon={<SchoolIcon />}  */ 
  >
    <h3 className="vertical-timeline-element-title">¡Muchas gracias!</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    . El staff de TGP les agradece por su confianza.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      /* icon={<StarIcon />} */ 
  />
</VerticalTimeline> ) }

export default Timeline  