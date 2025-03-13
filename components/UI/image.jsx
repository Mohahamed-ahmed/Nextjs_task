import Image from 'next/image';
function CircleImage({src, alt, width, height}){
    return(
        <div className="border-2 rounded-full border-cyan-400 p-4" style={{width, height}}>
            <div className="w-full h-full relative">
                <Image src={src} alt={alt || 'image'} fill className="rounded-full object-cover" />
            </div>
        </div>
    )
}

export default CircleImage;