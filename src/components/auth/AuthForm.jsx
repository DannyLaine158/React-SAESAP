function AuthForm({ fields }) {
    return (
        <div className="bg-gray p-6 m-6 rounded-md ml-4 shadow-lg shadow-[#ace6ec]">
                <center><h2 className="text-3xl font-semibold mt-5">SocialNetwork</h2></center>
                <h4 className="text-2xl font-semibold text-gray-400 mb-7"></h4>
                
                <form className="mb-2">
                    {
                        /* Se van a reenderizar la cantidad de componentes
                         * que nosotros le enviemos.
                         */
                        
                        fields.map((field, index) => {
                            const Component = field.component;
                            return <Component key={index} {...field.props} />
                        })
                    }
                </form>
        </div>
    );
}

export default AuthForm;