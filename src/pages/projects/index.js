import React from 'react'
import Layout from '../../components/Layout'
import { portfolio } from '../../styles/projects.module.css'

export default function projects() {
  return (
    <Layout>
      <div className={ portfolio }>
        <h2>This is the projects index page</h2>
        <h3>Projects & Websites I've created</h3>
      </div>
    </Layout>
  )
}
