import "./Home.css";
export default function Hero() {
  return (
    <div className="container-fluid p-4 hero">
      <div className="row px-5 pt-3">
        <div className="col px-5 mx-4">
          <h6>Support Portal</h6>
          <div className="pt-5">
            <h6 className="py-2">
              Search for an answer or browse help topics to create a ticket
            </h6>
            <input
              type="text"
              name=""
              id=""
              placeholder="Eg. how do I activate F&O. Why is my order getting rejected..."
            />
            <p className="pt-3">
              {" "}
              <a href="">
                Track account opening Track segment activation Intraday
                marginsKite user manual
              </a>{" "}
            </p>
          </div>
        </div>

        <div className="col text-center mx-4 px-5">
          <a href="">Track Ticket</a>
          <div className="text-start pt-5">
            <h6 className="py-2">Featured</h6>
            <ol>
              <li>
                <a href="">current Takeovers and Deslisting - January 2024</a>
              </li>
              <li>
                <a href="">Latest Intrady leverages - MS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
