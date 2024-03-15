function ImageShow({type,src,alt}){
    return(<div>
        <div className="image"><img src={src} alt={alt} width="400" height="300"/></div></div>)
}

export default ImageShow;