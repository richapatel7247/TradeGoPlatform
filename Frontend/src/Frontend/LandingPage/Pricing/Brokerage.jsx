export default function Brokerage() {
  return (
    <div className="container pt-5 mt-5 border-top">
      <div className="row">
        <div className="col-6 px-4">
          <h5 className="mb-4 text-center"><a href=""> Brokerage calculator</a></h5>
          <div className="text-muted">
            <ul>
              <li>
                Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                GST per order.
              </li>
              <li>igital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-6 text-center px-4">
          <a href="">
            <h3 className="fs-5 mb-4 text-center">List of charges</h3>
            <ul className="text-muted">
              <li>Account opening: ₹0 (no charge for trading or demat account opening)</li>
              <li>Corporate accounts: ₹1,000/year + GST, ₹250/quarter + GST</li>
              <li>Account Maintenance Charge (AMC) for non-BSDA accounts (individual, HUF, partnership): ₹300/year + 18% GST, charged quarterly at ₹75 + 18% GST every ~91 days</li>
              <li>NRI accounts: ₹500/year + GST, ₹125/quarter + GST </li>
              <li>Transaction charges (NSE): ~0.00297% per side; BSE: ~0.00375% per side (revised effective Oct 1, 2024)</li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
}
