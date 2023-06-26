import image from '../../public/image-qr-code.png'
import './qr.css'

const QrCodeComponent = () => {
    return (
        <>
            <div className="card">
                <img src= {image} className='image'/>
                <h1>Improve your front-end skill by building proyects</h1>
                <p> Scan the QR code to visit Frontend Mentor <span>and take your coding skills to</span>  <span>the next level</span></p>
            </div>
        </>
    )
}

export default QrCodeComponent;