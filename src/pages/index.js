import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>diazgdev</h2>
          <h3>FULLSTACK DEVELOPER</h3>
          <p>building clean, efficient, and user-friendly web applications</p>
          <Link className={btn} to="/projects">My Portfolio</Link>
        </div>
      </section>
    </Layout>
    )
}
