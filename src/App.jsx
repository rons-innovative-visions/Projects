import {projects} from './projects'

function App() {
  return (
    <>
      <div className="container">
        <section id='title'>
          <h1>My Projects</h1>
          <a href="#projects"><span></span></a>
        </section>
        <section id='projects'>
        {
          projects.map((props) => {
            return <Project {...props} key={props.id}/>
          })
        }
        </section>
      </div>
    </>
  )
}

const Project = ({title, img, vid, url, id}) => {
  return (
    <article id={title} className='project' key={id}>
      <h2>{title}</h2>
      <a href={url} target='_blank'>
        <img src={img} alt="" onMouseOver={() => document.getElementById(title).querySelector('video').classList.add('show')}/>
        <video autoPlay muted loop onMouseLeave={() => document.getElementById(title).querySelector('video').classList.remove('show')}>
        <source src={vid} type="video/mp4"/>
      </video>
      </a>
    </article>
  )
}

export default App