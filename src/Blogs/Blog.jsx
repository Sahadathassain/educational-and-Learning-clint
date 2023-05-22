


const Blog = () => {

    return (
        <div>
            <div className="p-10" >
                <div className="p-4 mb-5 rounded-md bg-gradient-to-r from-sky-400 to-purple-400 ">
                    <h1 className="font-semibold text-2xl">
                        1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h1>
                    <p>
                        Ans. A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times.You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.
                    </p>
                </div>
                <div className="p-4 mb-5 rounded-md bg-gradient-to-r from-sky-400 to-purple-400 ">
                    <h1 className="font-semibold text-2xl">
                        2.Compare SQL and NoSQL databases?
                    </h1>
                    <p>
                        Ans. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>
                <div className="p-4 mb-5 rounded-md bg-gradient-to-r from-sky-400 to-purple-400 ">
                    <h1 className="font-semibold text-2xl">
                        3.What is express js? What is Nest JS
                    </h1>
                    <p>
                        Ans. 
                        1.NestJS is a framework for developing modern server-side applications in Node. js. <br />
                        2.Express is a node js web application framework that provides broad features for building web and mobile applications. 
                    </p>
                </div>
                <div className="p-4 rounded-md bg-gradient-to-r from-sky-400 to-purple-400 ">
                    <h1 className="font-semibold text-2xl">
                        4.What is MongoDB aggregate and how does it work
                    </h1>
                    <p>
                        Ans.Aggregation in MongoDB ? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;