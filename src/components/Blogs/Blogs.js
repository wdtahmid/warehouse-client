import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blogs = () => {
    return (
        <div>
            <PageTitle title='Blogs'></PageTitle>
            <div className='containar-fluid py-5 bg-dark'>
                <h1 className='my-5 text-uppercase text-white'>Blogs</h1>
            </div>

            <div className='text-start my-5'>
                <div className='offset-md-2 col-md-8'>

                    <h2>1. Difference between javascript and nodejs</h2>
                    <ol type='I'>
                        <li>
                            <p>Javascript is programming language that can be run on any browser. <br></br> Node Js is runtime environment for javascript that can run javascript in server side.</p>
                        </li>
                        <li>
                            <p>
                                Javascript can't run outside of the browser <br></br> Node Js help to run javascript outside of the browser.
                            </p>
                        </li>
                        <li>
                            <p>
                                Javascript mostly used in fron-end <br></br> Node Js mostly used in backend.
                            </p>
                        </li>
                        <li>
                            <p>
                                Javascript work with HTML and can manipulate the DOM <br></br> Node Js unable to do these.
                            </p>
                        </li>
                    </ol>
                </div>
                <div className='offset-md-2 col-md-8 mt-4'>
                    <h2>2. When should you use nodejs and when should you use mongodb?</h2>
                    <p>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives us a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.NodeJS's responsibilty is especially to execute our application.</p>
                </div>
                <div className='offset-md-2 col-md-8 mt-4'>
                    <h2>3. Differences between sql and nosql databases?</h2>
                    <h5 className='mt-4'>SQL</h5>
                    <p>Is a relational database</p>
                    <p>This databases use structured query language and have a predefined schema.</p>
                    <p>This databases are vertically scalable</p>

                    <h5 className='mt-4'>NoSQL</h5>
                    <p>Is a no relational database</p>
                    <p>It's databases have dynamic schemas for unstructured data.</p>
                    <p>It's databases are horizontally scalable.</p>
                </div>
            </div>
        </div>


    );
};

export default Blogs;