import React from 'react'
import {colleagueReviews} from "../constants/index.js";

const Colleagues = () => {
    return (
        <section className="my-20 c-space">
            <h3 className="head-text">Hear from My Colleagues</h3>
            <div className="colleague-container">
                {colleagueReviews.map((review) =>  (
                    <div key={review.id} className="colleague-review">
                        <div>
                            <p className="text-white font-light">{review.review}</p>

                            <div className="colleague-content">
                                <div className="flex gap-3">
                                    <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">{review.name}</p>
                                        <p className="text-white-500 md:text-base text-sm font-light">{review.position}</p>
                                    </div>
                                </div>
                                <div className="flex self-end items-center gap-2">
                                    {Array.from({length: 5}).map((_, i) => (
                                        <img key={i} src="assets/star.png" alt="star" className="w-5 h-5"/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Colleagues
