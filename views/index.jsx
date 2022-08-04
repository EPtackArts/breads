const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    console.log(breads)
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <ul>
            {
                breads.map((bread, index) => {
                    return (
                        <li key={index}>
                            <a href={`/breads/${bread.id}`}>
                                {bread.name}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
        <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>

      </Default>
    )
}

module.exports = Index