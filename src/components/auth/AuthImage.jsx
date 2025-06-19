function AuthImage({ imageAuth }) {
    return (
        <div className="hidden md:block ml-4 h-1/2 drop-shadow-xl">
            <img className="h-full object-cover rounded-md" 
            src={imageAuth}
            alt="" />
        </div>
    );
}

export default AuthImage;