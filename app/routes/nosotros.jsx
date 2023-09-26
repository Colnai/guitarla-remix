import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return[
    {title:'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras,blog de musica'}
  ]
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    },
    {
      rel:'preload',
      href: imagen,
      as:'image'
    }
  ]
}

function Nosotros() {
  return (
      <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
          <img src={imagen} alt='Imagen sobre nosotros'/>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusantium sunt impedit hic. Officia eos alias voluptatum ad! Asperiores, cupiditate?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid voluptate perspiciatis impedit animi optio laboriosam? Adipisci consectetur quia quidem!
            </p>
          </div>
        </div>
      </main>
  )
}

export default Nosotros