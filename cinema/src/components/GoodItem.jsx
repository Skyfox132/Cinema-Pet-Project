
function GoodItem(props) {
    const {
        id,
        name,
        descripton,
        price,
        full_background,
    } = props
    return (

        <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg" />
          <span className="card-title">Card Title</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <button href="#">This is a link</button>
        </div>
      </div>



    )
}

export {GoodItem}

