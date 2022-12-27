import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
//
const BookingModal = ({ product }) => {
  const { _id, name, photo, reselPrice, sellerEmail } = product;

  const { user } = useContext(AuthContext);

  const handelBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const reselPrice = form.reselPrice.value;
    const buyerPhoneNumber = form.buyerPhoneNumber.value;
    const buyerLocation = form.buyerLocation.value;

    const booking = {
      productId: _id,
      name,
      photo,
      buyerName,
      buyerEmail,
      reselPrice,
      buyerPhoneNumber,
      buyerLocation,
      sellerEmail,
    };

    console.log(booking);

    fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking confirmed");
          toast.success("Plase refresh your browser");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">
            <span className="text-white">✕</span>
          </label>
          <form onSubmit={handelBooking} className="">
            <div className="form-control w-full mt-1">
              <label htmlFor="label">
                {" "}
                <span>Product Name</span>
              </label>
              <input name="name" type="text" disabled value={name} className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full mt-1">
              <label htmlFor="label">
                {" "}
                <span>Name</span>
              </label>
              <input
                name="buyerName"
                type="text"
                defaultValue={user?.displayName}
                disabled
                placeholder="Your name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full mt-1">
              <label htmlFor="label">
                {" "}
                <span>Email</span>
              </label>
              <input
                name="buyerEmail"
                type="text"
                defaultValue={user?.email}
                disabled
                placeholder="Your email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-1">
              <label htmlFor="label">
                {" "}
                <span>Price</span>
              </label>
              <input
                name="reselPrice"
                type="text"
                defaultValue={reselPrice}
                disabled
                placeholder="Your email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mt-1">
              <label htmlFor="label">
                {" "}
                <span>Phone</span>
              </label>
              <input name="buyerPhoneNumber" type="number" placeholder="Your phone number" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full mt-1">
              <label htmlFor="label">
                {" "}
                <span>Location</span>
              </label>
              <input name="buyerLocation" type="text" placeholder="Your location" className="input input-bordered w-full" />
            </div>

            <button type="submit" className="btn mt-2 btn-primary w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
