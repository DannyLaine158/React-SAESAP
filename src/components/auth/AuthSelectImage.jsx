function AuthSelectImage({ handleImageChange, selectedImage, 
    handleImageClick, defaultImage }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div onClick={handleImageClick} 
                className="w-32 h-32 rounded-full overflow-hidden">
                <img className="object-cover w-full h-full" 
                    src={selectedImage}
                    alt="Perfil" />
            </div>
            <input onChange={handleImageChange} className="hidden" 
                type="file" id="profileImage" accept="image/*" />
            {
                ( selectedImage != defaultImage ) ?
                    (<p className="text-sm font-bold text-blue-800">Foto de perfil</p>) : 
                    (<p className="text-sm font-bold text-red-800">Selecciona una imagen</p>)
            }
        </div>
    );
}

export default AuthSelectImage;