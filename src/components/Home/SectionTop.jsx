import { useState } from 'react';

const SectionTop = () => {
    const [isHovered, setIsHovered] = useState(false);
    const imageUrl = 'https://img.freepik.com/fotos-premium/imaginese-biotecnologos-marinos-utilizando-ingenieria-genetica-generativa_1198283-89240.jpg';
    const title = 'Explore with us';
    const description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate laboriosam voluptas quaerat deleniti harum quis, explicabo molestiae fuga quia atque ipsam ea officia beatae recusandae et voluptatum quisquam eligendi aut.';
    const buttonLink = '/projects';


        return (
            <>
               
            <div className='animation-container-sectiontop'>
                <div className='text-left'>FUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLAB</div>
                <div className='text-right'>FUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLAB</div>
                <div className='text-left'>FUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLAB</div>
                <div className='text-right'>FUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLAB</div>
                <div className='text-left'>FUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLAB</div>
                <div className='text-right'>FUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLABFUTURABIOLAB</div>
                   
            </div>       
          
            <div className='sectionTop-div'>
                <img 
                    className={`sectionTop-backgroundImage ${isHovered ? 'blur' : ''}`} 
                    src={imageUrl} 
                    alt="Background"
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)} 
                />
                <div className='sectionTop-container'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                  
                    <a className='sectionTop-button' href={buttonLink}>+</a>
                </div>
            </div>
            </>
    );
};

export default SectionTop;



