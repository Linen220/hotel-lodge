import Styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={Styles.hero}>
        <div className="container">
            <h1 className={Styles.hero__title}>Disfruta una experiencia <br/> de lujo</h1>
            
        </div>
    </section>
  )
}


export default Hero