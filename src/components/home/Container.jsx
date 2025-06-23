function Container({ children }) {
    return (
        <div className="px-4 mt-4 ml-[250px]">
            <div className="px-12 py-12 flex">
                { children }
            </div>
        </div>
    );
}

export default Container;