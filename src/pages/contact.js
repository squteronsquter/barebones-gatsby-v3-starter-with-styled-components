import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <>
      <Layout>
        <main className="page">
          <section className="contact-page">
            <article classname="contact-info">
              <h3>Want to get in Touch</h3>
              <p>
                Lomo waistcoat coloring book cornhole letterpress, lumbersexual
                kale chips fingerstache.{" "}
              </p>
              <p>
                Before they sold out sustainable messenger bag, fingerstache raw
                denim biodiesel pour-over slow-carb bitters tote bag.{" "}
              </p>
              <p>
                Health goth fam kinfolk, mlkshk church-key meh echo park keytar
                gluten-free tattooed slow-carb affogato palo santo messenger bag
                intelligentsia.{" "}
              </p>
            </article>
            <article>
              <form className="form contact-form">
                <div className="form-row">
                  <label htmlFor="name">your name</label>
                </div>
                <div className="form-row">
                  <label htmlFor="email">your email</label>
                </div>
                <div className="form-row">
                  <label htmlFor="message">your message</label>
                  <textarea name="message" id="message"></textarea>
                  <button type="submit" className="btn block">
                    Submit
                  </button>
                </div>
              </form>
            </article>
          </section>
        </main>
      </Layout>
    </>
  )
}
