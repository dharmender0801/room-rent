import { useState } from "react"

const AddProp = () => {
    const [className, setClass] = useState('btn-bdr');

    return (
        <>
            <div className="prop-container d-flex">
                <div className="prop-left w-70">
                    <form className="bx-sdow br-5 p-10">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" />

                        <label htmlFor="apartmentName">Apartment Name: (if available)</label>
                        <input type="text" id="apartmentName" name="apartmentName" />

                        <div className="d-flex sps-btn">
                            <div className="mr-8 f-1 g-20">
                                <label htmlFor="price">Price:</label>
                                <input type="number" id="price" name="price" />
                            </div>
                            <div className="mr-8 f-1 g-20">
                                <label htmlFor="rentType">Rent Type:</label>
                                <select id="rentType" name="rentType">
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                        </div>

                        <label>BHK:</label>
                        <div className="text-center g-20">
                            <button type="button" id="oneBHK" className={className} name="bhk" value="1">1 BHK</button>
                            <button type="button" id="twoBHK" name="bhk" className={className} value="2">2 BHK</button>
                            <button type="button" id="twoBHK" name="bhk" className={className} value="3">3 BHK</button>
                            <button type="button" id="twoBHK" name="bhk" className={className} value="4">4 BHK</button>
                        </div>

                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description"></textarea>

                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" name="location" />

                        <button className="btn bg-blue" type="button">Submit</button>
                    </form>
                </div>
                <div className="prop-right  w-50">
                    <div className="flex-column">
                        <h2>Rent your Property with RoomRent</h2>
                        <ul className="checkmark-list">
                            <li> Advertise for FREE</li>
                            <li>Get unlimited enquiries</li>
                            <li>Get shortisted buyers and tenants</li>
                            <li>Assstance in co-ordinating site visit</li>
                        </ul>
                    </div>
                </div>


            </div>
        </>
    )
}
export default AddProp;