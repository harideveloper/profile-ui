import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const clubsAndGroups = [
  {name : 'Modernisation of Fault Monitoring App from VM to GKE Workloads'},
  {name : 'Application Modernisation of Alumini Services from VM to Serverless workloads in GCP'},
  {name : 'Lift & Shift Migration of Colleague App to GCE Compute VMs'},
  {name : 'Data Migration of Investment Metrics Indicator to Dataflow & BigQuery'},
  {name : 'Prototype to clean & extract data (python app) used in ML Models within Azure ML Workspace'},
]

const InfraProjects = [
  {name : 'Cloud Centre of Excellence in developing/architecting re-usable cloud blueprints'},
  {name : 'Re-usable patterns for conatiner workloads using GKE & Cloud SQL/MongoDB'},
  {name : 'VM Image Baking Process to build Custom Packer Images'},
  {name : 'Platform updates using Anthos Config Sync, GKE & GitOps'},
  {name : 'Build GCP Landing Zone Accelerator for small to medium customers'},
  {name : 'Organisation policy guard-rails using InSpec for GCP Cloud SQL (MySQL) Services'},
]

const DevopsProjects = [
  {name : 'Setup Prisma Defender across GKE Clusters to enforce central policies'},
  {name : 'Docker Image Baking/Scanning process using Artifactory and Xray'},
  {name : 'Developed Infrastructure CI/CD pipeline using GITLAB CI for internal application hosted GCP GKE using Workload Identity'},
  {name : 'Built CI/CD pipelines for 3 Tier App (MERN Stack) using Jenkins'},
  {name : 'Designed/Developed serverless architecture case tudies solutions using GCP Serverless Services'},

]

const Recommended_Jobs = [
  { role:'Containers & Orchestration', location : 'Docker, Minikube, Kubernetes, Helm Charts, Kustomise, Flux CD'},
  { role:'Version Control', location : 'Github, Bitbucket'},
  { role:'Service Orchestration', location : 'Nginx , Istio, Anthos Service Mesh'},
  { role:'CI/CD', location : 'Jenkins, Git Workflow & Gitlab CI'},
  { role:'Other tools', location : 'Nexus, SonarQube, X-ray, Aquasec'},
]
const Recommended_Alumni = [
  {name : 'Reusable Cloud Patterns', role:'GKE, Cloud SQL/MongoDB, Cloud Storage, VPC, IAM, Secret Manager'},
  {name : 'Cloud Data Blueprint', role:'Cloud Composer, Dataflow, BigQuery, Cloud Storage'},
  {name : 'VM Image Baking', role:'Compute Engine, VPC & Firewalls, Gitops, packer & terraform'},
  {name : 'Platform & Security Rollouts', role:'Anthos Config Manager, GKE & GitOps Pipelines'},
  {name : 'Landing Zone Accelerator', role:'Storage, Cloud Build, Cloud Source Repo, BigQuery, IAM & Secret Manager'},
]






const Services = () => {
  return (
    <section id='services'>
      <h5>home is where wifi connects automatically !!!</h5>
      <h2>Let's talk about projects</h2>

      {/* Alumni clubs & groups */}
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Application Modernisation</h3>
          </div>
            <ul className='service__list'>
              {clubsAndGroups.map(club => 
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>{club.name}</p>
                </li>
                )}
            </ul>
        </article>

        {/* Alumni Recommendation */}
        <article className="service">
          <div className="service__head">
            <h3>Infrastucture Automation</h3>
          </div>
            <ul className='service__list'>
              {InfraProjects.map(club => 
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>{club.name}</p>
                </li>
                )}
            </ul>
        </article>
        {/* <article className="service">
          <div className="service__head">
            <h3>Infrastructure Automation</h3>
          </div>
          <ul className='service__list'>
          {Recommended_Alumni.map(Alumni =>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{Alumni.name}</p>
              <small className='text-light'>{Alumni.role}</small>
          </li>
            )}
          </ul>
        </article> */}

        {/* Job Recommendations */}
        {/* <article className="service">
          <div className="service__head">
            <h3>Cloud & Devops</h3>
          </div>
          <ul className='service__list'>
            {Recommended_Jobs.map(job => 
              <li>
              <BiCheck className='service__list-icon' />
              <p>{job.role}</p>
              <small className='text-light'>{job.location}</small>
              </li>
            )}
          </ul>
        </article> */}

        <article className="service">
          <div className="service__head">
            <h3>Cloud & Devops</h3>
          </div>
            <ul className='service__list'>
              {DevopsProjects.map(club => 
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>{club.name}</p>
                </li>
                )}
            </ul>
        </article>
      </div>
    </section>
  )
}

export default Services