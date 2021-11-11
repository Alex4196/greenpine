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
    <h3 className="vertical-timeline-element-title">¿Estas queriendo comprar un Iphone?</h3>
    <h4 className="vertical-timeline-element-subtitle">¡Nosotros tenemos la solucion!</h4>
   
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
    Ofrecemos calidad, eficacia, compromiso, seguridad y confianza.
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
    Contacta con nuestro staff para contarnos cual modelo de iPhone o accesorio que estas buscando. ¡tenemos cualquier modelo a tu disposición!
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
    Contacta con nosotros para la entrega del celular o accesorio, tenemos varios métodos de envío, donde estamos comprometidos en una entrega segura.
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
      Como brindamos confianza a nuestros clientes y por eso nos siguen eligiendo, ofrecemos un sistema de garantia donde si tu iPhone no funciona, pasamos a retirarlo y te damos uno nuevo, ¡sabemos la calidad de productos que ofrecemos!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    /* date="5to paso" */
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
     /*  icon={<SchoolIcon />} */  
  >
    <h3 className="vertical-timeline-element-title">Experiencia del cliente</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    Como contamos anteriormente, somos 3 amigos, esos amigos que esbozan una sonrisa cuando nos llega un mensaje de nuestros clientes contándonos lo feliz que están con nuestros productos, eso nos da fuerza y a su vez nos pone feliz. Por este motivo, esperamos que nos cuenten su experiencia con nuestro servicio. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date=""
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
     /*  icon={<SchoolIcon />}  */ 
  >
    <h3 className="vertical-timeline-element-title">¡Muchas gracias!</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      The green pine le agradece por su confianza en nosotros, y queremos contarles que proximamente  se acercan nuevas experiencias para el cliente donde vamos a sorprender, porque estamos para eso, para sorprender y ofrecer los mejores productos y servicios.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      /* icon={<StarIcon />} */ 
  />
</VerticalTimeline> ) }

export default Timeline  