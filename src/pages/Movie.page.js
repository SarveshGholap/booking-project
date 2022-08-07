const launchRazorPay = () => {
  let options = {
    key: "rzp_test_TumwlGqpcYokwT",
    amount: 10000,
    currency: "INR",
    name: "BMS Clone",
    description: "Movie Purchase",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}
  };

  let rzp = new window.Razorpay(options);
  rzp.open();
};

const Movie = () => {
  return (
    <>
     <div className="container">
      <div className="w-80 h-500">
      <img src="https://www.axn-asia.com/sites/axn-asia.com/files/ct_series_f_primary_image/spiderman_homecoming_-_keyart.jpg" />
      </div>
      </div>
      <button onClick={launchRazorPay} class="m-16 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Book Now
</button>
    </>
  );
};

export default Movie;
