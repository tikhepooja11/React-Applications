import { useState } from "react";

//  To convert rupee to dollars
function CurrencyConverter() {
  const [rupeeAmount, setRupeeAmount] = useState(0);
  const [dollarAmount, setDollarAmount] = useState(0);
  const [convertedRupeeAmount, setConvertedRupeeAmount] = useState(0);
  const [convertedDollarAmount, setConvertedDollarAmount] = useState(0);

  const rupeeToDollarExchangeRate = 0.012;
  const dollarToRupeeExchangeRate = 83.26;

  const handleRupeeToDollar = (e) => {
    e.preventDefault();
    setConvertedRupeeAmount(rupeeAmount * rupeeToDollarExchangeRate);
    console.log("convertedRupeeAmount : " + convertedRupeeAmount);
  };

  const handleDollarToRupee = (e) => {
    e.preventDefault();
    setConvertedDollarAmount(dollarAmount * dollarToRupeeExchangeRate);
  };

  return (
    <div>
      <h1 className="bg-green-500 text-center m-5 p-5 w-50 justify-center flex h-full">
        Currency Converter Application
      </h1>
      <div className="flex">
        <form className="bg-pink-200 text-center w-4/12 my-36 mx-auto left-0 right-0 p-5 ">
          Rupee Amount -
          <input
            value={rupeeAmount}
            placeholder="Enter amount in rupee "
            className="m-3 p-3  "
            onChange={(e) => setRupeeAmount(e.target.value)}
          />
          <button
            onClick={handleRupeeToDollar}
            className="bg-green-400 m-2 p-2 rounded-md border hover:border-black"
          >
            Convert to dollars
          </button>
          {convertedRupeeAmount > 0 && (
            <p>
              The {rupeeAmount} rupees is approxiamately {convertedRupeeAmount}{" "}
              $
            </p>
          )}
        </form>

        <form className="bg-blue-200 text-center w-4/12 my-36 mx-auto left-0 right-0 p-5 ">
          Dollar Amount -
          <input
            value={dollarAmount}
            placeholder="Enter amount in Dollars "
            className="m-3 p-3  "
            onChange={(e) => setDollarAmount(e.target.value)}
          />
          <button
            onClick={handleDollarToRupee}
            className="bg-green-400 m-2 p-2 rounded-md border hover:border-black"
          >
            Convert to Rupees
          </button>
          <p>
            The {dollarAmount} $ is approxiamately {convertedDollarAmount}{" "}
            rupees
          </p>
        </form>
      </div>
    </div>
  );
}

export default CurrencyConverter;
