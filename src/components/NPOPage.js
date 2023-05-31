import React from 'react';
import NpoCard from "./npoCard";


const NPOPage = (props) => {

    const {NpoCards} = props;

    return(
        <div>
            <h5>Non-profit organizations</h5>
            <a>
                Our non-profit organizations are carefully selected, based on what our team considers
                most vital, also encompassing several of the UNs 17 goals for Social Development.
                The criterias for our pre-selected non-profit organizations will make sure that the
                relationship between the non-profit and companies are transparent and based on mutual trust.
            </a>
            <a>Meliora Impact focuses on two main categories of non-profit work: <p>Water & knowledge.</p></a>

            <div /*style={Water and knowledge [NOT MADE]}*/>
                <section>
                    <h4>WATER</h4>
                    <image>Icon</image><a>Sanitary conditions</a>
                    <image>Icon</image><a>Sustainable agriculture</a>
                    <image>Icon</image><a>Climate action</a>
                </section>
                <section>
                    <h4>KNOWLEDGE</h4>
                    <image>Icon</image><a>Education</a>
                    <image>Icon</image><a>Open-access science</a>
                    <image>Icon</image><a>Fighting misinformation</a>
                </section>
            </div>
            <section>
                <h3>Criteria on selection of non-profits</h3>
                <a>How do we select our non-profit organizations? Meliora Impact has a set of criterias
                for the application of non-profit organizations. This is to ensure transparency and liability
                towards all of our partners.</a>
                <button>Read more</button>
            </section>
            <div /*style={Water & Knowledge}*/>
                <section>
                    <h3>Water</h3>
                </section>
            </div>
        </div>
    )
}

export default NPOPage;