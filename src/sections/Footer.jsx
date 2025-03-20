import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex  gap-2">
            <p>Terms & Conditions</p>
                <p></p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">
                    <a className="flex m-0 p-0" href="https://github.com/Dre12378"><img src="assets/github.svg" alt="Git" className="w-1/2 h-1/2"/></a>
                </div>
                <div className="social-icon">
                    <a href="https://www.instagram.com/_philipped/"><img src="assets/instagram.svg" alt="Git" className="w-1/2 h-1/2"/></a>
                </div>
            </div>
            <p className="text-white-500">2025 Andre, thank you for visiting</p>
        </section>
    )
}
export default Footer
