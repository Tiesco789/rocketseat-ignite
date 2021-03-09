const repositoryList = 'unform2';

export function RepositoryList() {
  return (
    <section className="repository_list">
      <h1>Lista de repositórios</h1>
      
      <ul>
        <li>
          <strong>{repositoryList}</strong>
          <p>Form in React</p>
          
          <a href="">
            Acessar Repositório
          </a>
        </li>
        
        <li>
          <strong>Unform</strong>
          <p>Form in React</p>
          
          <a href="">
            Acessar Repositório
          </a>
        </li>
        
        <li>
          <strong>Unform</strong>
          <p>Form in React</p>
          
          <a href="">
            Acessar Repositório
          </a>
        </li>
      </ul>
    </section>
  )
}