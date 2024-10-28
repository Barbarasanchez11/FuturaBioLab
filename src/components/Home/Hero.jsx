import '../../styles/Hero.css'
import { useState } from 'react';


const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <main>
        <section>
            <div className='sectionTop'>
                <img className={`backgroundImage ${isHovered ? 'blur' : ''}`} src='https://img.freepik.com/fotos-premium/imaginese-biotecnologos-marinos-utilizando-ingenieria-genetica-generativa_1198283-89240.jpg' alt="Background"
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
                 />
                 <div className='content'>
                    <h2>Explore with us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate laboriosam voluptas quaerat deleniti harum quis, explicabo molestiae fuga quia atque ipsam ea officia beatae recusandae et voluptatum quisquam eligendi aut?</p>
                    <button>
                        <a className='buttonTop' href='/proyects'>+</a>
                    </button>
                </div>
            </div>
        </section>
        <section>
         <div className='growContainer'>
           <h2>Grow your vision</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit unde consectetur nemo accusamus deserunt nam numquam? Laudantium ipsum veritatis modi officia praesentium, sed maxime libero nulla. Repellendus, facilis harum.</p>
           <button>Start Now</button>
         </div>
        </section>
    </main>


    )
}

export default Hero