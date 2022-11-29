import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const clubsAndGroups = [
  {name : 'Modernisation of Fault Monitoring App from VM to GKE Workloads'},
  {name : 'Application Modernisation of Alumini Services from VM to Serverless workloads in GCP'},
  {name : 'Lift & Shift Migration of Colleague App to GCE Compute VMs'},
  {name : 'Data Migration of Investment Metrics Indicator to Dataflow & BigQuery'},
]

const Recommended_Alumni = [
  {name : 'Reusable Cloud Patterns', role:'GKE, Cloud SQL/MongoDB, Cloud Storage, VPC, IAM, Secret Manager'},
  {name : 'Cloud Data Blueprint', role:'Cloud Composer, Dataflow, BigQuery, Cloud Storage'},
  {name : 'VM Image Baking', role:'Compute Engine, VPC & Firewalls, Gitops, packer & terraform'},
  {name : 'Platform & Security Rollouts', role:'Anthos Config Manager, GKE & GitOps Pipelines'},
  {name : 'Landing Zone Accelerator', role:'Storage, Cloud Build, Cloud Source Repo, BigQuery, IAM & Secret Manager'},
]



const Recommended_Jobs = [
  { role:'Containers & Orchestration', location : 'Docker, Minikube, Kubernetes, Helm Charts, Kustomise, Flux CD'},
  { role:'Version Control', location : 'Github, Bitbucket'},
  { role:'Servce Orchestration', location : 'Nginx , Istio, Anthos Service Mesh'},
  { role:'CI/CD', location : 'Jenkins, Git Workflow & Gitlab CI'},
  { role:'Other tools', location : 'Nexus, SonarQube, X-ray, Aquasec'},
]


const Services = () => {
  return (
    <section id='services'>
      <h5>home is where wifi connects automatically !!!</h5>
      <h2>Skills & Expertise</h2>

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
        </article>

        {/* Job Recommendations */}
        <article className="service">
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
        </article>
      </div>
    </section>
  )
}

export default Services