import React from "react";
import {Link} from "react-router";
import $ from "jquery";

export const Header = (props) => {    
    return(
        <div className="f-menu">
            <ul className="f-menu-ul">
                <li><Link to={"/TestFrontEnd/Home"} activeClassName={"active"}>Home</Link></li>
                <li className="havsubmenu"><Link to={"/TestFrontEnd/Gallery"} activeClassName={"active"}>Gallery</Link>
                    <ul className="submenu">
                    <li><a>sub menu</a></li>
                    <li><a>sub menu</a></li>
                    </ul>
                </li>
                <li><Link to={"/TestFrontEnd/Contact"} activeClassName={"active"}>Contact</Link></li>
                <li><Link to={"/TestFrontEnd/About"} activeClassName={"active"}>About Us</Link></li>
            </ul>
        <Search />
        </div>
    );
};
class Search extends React.Component{    
  constructor(props) {
    super(props)
    this._toggleDiv = this._toggleDiv.bind(this)
  }
  
  _toggleDiv() {
    $(this.refs['toggle-div']).slideToggle()
  }
    
    render(){
        return(
            <div className="divsear">
            <div className="searc" onClick={this._toggleDiv}><img src="image/icon-search.png"/></div>
            <div  ref="toggle-div" style={{display:"none"}}>
            <div className="input-group" >
              <input className="form-control" placeholder="search..." aria-describedby="basic-addon1" />
                 <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">Go!</button>
                  </span>
            </div>
            </div>
          </div>
        )    
}
}