import '../styles/ProjectCard.css'
import { Link } from 'react-router-dom'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ProjectCard = () => {
    return (

        <main className="project-container">
            <section className="project-container--section">
                <article className="project-container--article" >
                   
                        <div className="project-container--article-top">
                            <div>
                                <p>Agar-agar</p>
                                <p>Bioplastic</p>
                                
                            </div>
                        </div>
                        <div className="project-container--article--squarePicture">
                            <div className='image-container-projectcard'>
                                <img src='https://i0.wp.com/www.zoepowell.com/wp-content/uploads/2017/12/IMG_0112-705x940.jpg'/>
                            </div>
                        </div>
                        <div className="project-container--article-button">
                            <div className='author-container-projectcard'>
                                <h2>Author</h2>
                                <p><Link to='/members'>Barby Malybu</Link></p>
                                <p>License</p>
                            </div>
                            
                        </div>
                   
                    
                </article>
                <aside className="project-container--aside-container">
                    <div className='containerinfo-projectcard'> 
                    <div className='aside-info-projectcard'>
                        <h2>Description</h2>
                        <input 
                         id='description'
                         type='text'
                         required
                        />
                    </div>
                    <div className='aside-info-projectcard'>
                        <h2>Composition</h2>
                        <input 
                         id='composition'
                         type='text'
                         required
                        />
                    </div>
                    <div className='aside-info-projectcard'>
                        <h2>Tools</h2>
                        <input 
                         id='tools'
                         type='text'
                         required
                        />
                        </div> 
                        <div className='aside-info-projectcard'>
                        <h2>Properties</h2>
                        <input 
                         id='properties'
                         type='text'
                         required
                        />
                         </div>
                        <div className='aside-info-projectcard'>
                        <h2>Ambient</h2>
                        <input 
                         id='ambient'
                         type='text'
                         required
                        />
                    </div>
                    <div className='aside-info-projectcard'>
                        <h2>Light Conditions</h2>
                        <input 
                         id='ligth-conditions'
                         type='text'
                         required
                        />
                    </div>
                    </div> 
                   <div className='moreinfo-projectcard'>
                    <Link to='/method'><AddCircleOutlineIcon /></Link>

                   </div>
                
                   
                </aside>
            </section>
        </main>

    )
}

export default ProjectCard