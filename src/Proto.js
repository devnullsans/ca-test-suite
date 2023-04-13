export default function Proto() {
  return (
    <>
      <header className="top">
        <p className="opt">
          <h4 className="me-4">1.</h4>
          <span>
            In compliance with the Companies Act, 2013, at least one woman director shall be on the Board of the
            prescribed class or classes of companies. Ms. Riya is keen to seek the office of woman director in a
            company. Which of the following companies is mandatorily required to appoint a woman director where Ms. Riya
            can hold such office:
          </span>
        </p>
      </header>
      <section className="mid">
        <label className="opt">
          <input
            name="optn"
            type="radio"
            className="me-4"
          />
          <span>
            PQR Limited, an unlisted company, whose paid-up share capital is 150 crore rupees as per the last date of
            latest audited financial statements is mandatorily required to appoint a woman director.
          </span>
        </label>
        <label className="opt">
          <input
            name="optn"
            type="radio"
            className="me-4"
          />
          <span>
            ABC Limited, a listed company, whose turnover is 150 crore rupees as per the last date of latest audited
            financial statements is mandatorily required to appoint a woman director.
          </span>
        </label>
        <label className="opt ol-g">
          <input
            name="optn"
            type="radio"
            className="me-4"
          />
          <span>
            XYZ Limited, an unlisted company, whose turnover is 350 crore rupees as per the last date of latest audited
            financial statements is mandatorily required to appoint a woman director.
          </span>
        </label>
        <label className="opt ol-r">
          <input
            name="optn"
            type="radio"
            className="me-4"
          />
          <span>All of the above</span>
        </label>
      </section>
      <footer className="low">
        <article className="mb-4 ol-b">
          XYZ Limited, an unlisted company, whose turnover is 350 crore rupees as per the last date of latest audited
          financial statements is mandatorily required to appoint a woman director.
        </article>
        <div className="btn">
          <button>Previous</button>
          <button>Submit</button>
          <button>Next</button>
        </div>
      </footer>
    </>
  );
}
