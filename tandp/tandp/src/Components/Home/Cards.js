import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import p from '../Images/p6.jpg'
import './Cards.css'
export const Cards = () => {
    return (
        <>
            <section className="about" id="about">
                <div className='container'>

                    <h3 className="heading">About Us</h3>

                </div>
                <div className="row">
                    <div className="imageAbout">
                        <img src={p} alt='ABoutImage'></img>
                    </div>
                    <div className="contentAbout">
                        <h3>About DYP, Kolhapur</h3>
                        <p>The DYP stands as a beacon of light to guide the younger generation of the day on the right path to fulfilment in career and life. The USP of the University is its research based curriculum and academically oriented teaching staff. The world class ambience and infrastructure helps the students to easily accommodate themselves in an environment that is conducive to the teaching- learning process.
                        </p>


                    </div>
                </div>
            </section>

        </>
    )
}