import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Hi! I'm Guillermo</h2>
          <h3>A FULLSTACK DEVELOPER</h3>
          <p>building clean, efficient, and user-friendly web applications</p>
          <Link className={btn} to="/projects">My Portfolio</Link>
        </div>
      </section>
    </Layout>
    )
}
